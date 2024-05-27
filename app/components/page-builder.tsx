import FormBlock from "~/components/blocks/form";
import HeroBlock from "~/components/blocks/hero";
import ImageGalleryBlock from "~/components/blocks/image-gallery";
import VideoBlock from "~/components/blocks/video";
import type {
  FormType,
  GalleryType,
  HeroType,
  PageType,
  VideoType,
} from "~/types";

export default function PageBuilder({
  blocks,
}: {
  blocks: PageType["pageBuilder"];
}) {
  if (!blocks) return null;

  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, idx) => {
        switch (block._type) {
          case "hero":
            return <HeroBlock key={idx} hero={block as HeroType} />;
          case "form":
            return <FormBlock key={idx} form={block as FormType} />;
          case "gallery":
            return (
              <ImageGalleryBlock key={idx} gallery={block as GalleryType} />
            );
          case "video":
            return <VideoBlock key={idx} video={block as VideoType} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
