import HeroBlock from "~/components/blocks/hero";
import ImageGalleryBlock from "~/components/blocks/image-gallery";
import VideoBlock from "~/components/blocks/video";
import type { PageType } from "~/types";

export default function PageBuilder({
  blocks,
}: {
  blocks: PageType["pageBuilder"];
}) {
  console.log(blocks);

  return (
    <div>
      {blocks.map((block, idx) => {
        switch (block._type) {
          case "hero":
            return <HeroBlock key={idx} hero={block} />;
          case "gallery":
            return <ImageGalleryBlock key={idx} gallery={block} />;
          case "video":
            return <VideoBlock key={idx} video={block} />;

          default:
            return <div key={idx}>Block not implemented: {block._type}</div>;
        }
      })}
    </div>
  );
}
