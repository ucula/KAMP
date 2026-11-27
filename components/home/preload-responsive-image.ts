import { getImageProps } from "next/image";

export function preloadResponsiveImage(
  src: string,
  sizes: string,
): Promise<boolean> {
  const { props } = getImageProps({ src, alt: "", fill: true, sizes });

  return new Promise((resolve) => {
    const image = new window.Image();
    let settled = false;
    const finish = (loaded: boolean) => {
      if (settled) return;
      settled = true;
      image.onload = null;
      image.onerror = null;
      resolve(loaded);
    };
    const decode = () =>
      image.decode().then(
        () => finish(image.naturalWidth > 0),
        () => finish(image.naturalWidth > 0),
      );

    image.onload = decode;
    image.onerror = () => finish(false);
    image.sizes = props.sizes || "100vw";
    image.srcset = props.srcSet || "";
    image.src = props.src;

    if (image.complete) {
      if (image.naturalWidth > 0) void decode();
      else finish(false);
    }
  });
}
