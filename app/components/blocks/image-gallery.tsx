import type { GalleryType } from "~/types";

export default function ImageGalleryBlock({
  gallery,
}: {
  gallery: GalleryType;
}) {
  return <pre>{JSON.stringify(gallery, null, 2)}</pre>;
}
