import { readdirSync } from "node:fs";
import path from "node:path";

export type CategoryPhoto = {
  name: string;
  wide: string;
  fourThree: string;
};

export function getCategoryPhotos(publicFolder: string): CategoryPhoto[] {
  const directory = path.join(process.cwd(), "public", publicFolder);
  const variants = new Map<string, Partial<CategoryPhoto>>();
  const entries = readdirSync(directory, { withFileTypes: true });
  const ratioFolders = entries.filter(
    (entry) => entry.isDirectory() && ["16x9", "4x3"].includes(entry.name),
  );

  if (ratioFolders.length) {
    for (const folder of ratioFolders) {
      const ratio = folder.name === "16x9" ? "wide" : "fourThree";
      for (const entry of readdirSync(path.join(directory, folder.name), {
        withFileTypes: true,
      })) {
        if (!entry.isFile()) continue;
        const match = entry.name.match(/^(.*)\.(avif|gif|jpe?g|png|webp)$/i);
        if (!match) continue;
        const name = match[1];
        const photo = variants.get(name) ?? { name };
        photo[ratio] = `/${publicFolder}/${folder.name}/${entry.name}`;
        variants.set(name, photo);
      }
    }
  } else {
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      const match = entry.name.match(/^(.*)-(16x9|4x3)\.(avif|gif|jpe?g|png|webp)$/i);
      if (!match) continue;

      const [, name, ratio] = match;
      const photo = variants.get(name) ?? { name };
      photo[ratio === "16x9" ? "wide" : "fourThree"] =
        `/${publicFolder}/${entry.name}`;
      variants.set(name, photo);
    }
  }

  return Array.from(variants.values())
    .filter((photo): photo is CategoryPhoto => Boolean(photo.wide && photo.fourThree))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
}
