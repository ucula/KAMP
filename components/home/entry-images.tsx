import { getCategoryPhotos } from "@/lib/kamp-activity-images";
import { EntryImageGate } from "./entry-image-gate";

const folders = [
  "kamp6/activities/mentoring-sessions",
  "kamp6/activities/mentor-spotlight",
  "kamp6/activities/wisdom-on-the-road",
  "kamp6/activities/kls",
  "kamp6/activities/workshops",
  "kamp6/activities/outing",
];

export function EntryImages({ children }: { children: React.ReactNode }) {
  const introImages = getCategoryPhotos("kamp6/intro");
  const images = [...introImages, ...folders.map((folder) => getCategoryPhotos(folder)[0])];
  return <EntryImageGate images={images} introCount={introImages.length}>{children}</EntryImageGate>;
}
