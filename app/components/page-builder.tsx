import FormBlock from "~/components/blocks/form";
import HeroBlock from "~/components/blocks/hero";
import ImageGalleryBlock from "~/components/blocks/image-gallery";
import VideoBlock from "~/components/blocks/video";
import type { PageType } from "~/types";

export default function PageBuilder({
  blocks,
}: {
  blocks: PageType["pageBuilder"];
}) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, idx) => {
        switch (block._type) {
          case "hero":
            return <HeroBlock key={idx} hero={block} />;
          case "form":
            return <FormBlock key={idx} form={block} />;
          case "gallery":
            return <ImageGalleryBlock key={idx} gallery={block} />;
          case "video":
            return <VideoBlock key={idx} video={block} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
