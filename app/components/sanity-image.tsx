import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";

import { dataset, projectId } from "~/studio/project-details";
import { SanityImageField } from "~/types";

type SanityImageProps = {
  image: SanityImageField;
};

export function SanityImage({ image }: SanityImageProps) {
  const { width, height } = getImageDimensions(image.asset._ref);

  return (
    <img
      className="h-auto w-full object-cover"
      src={urlBuilder({ projectId, dataset })
        .image(image)
        .width(width)
        .height(height)
        .fit("max")
        .auto("format")
        .url()}
      alt={image?.alt ?? ``}
      loading="lazy"
    />
  );
}
