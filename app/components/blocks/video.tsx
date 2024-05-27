import { VideoType } from "~/types";

export default function VideoBlock({ video }: { video: VideoType }) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">{video.heading}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full"
          src={video.url}
          title={video.heading}
        />
      </div>
    </div>
  );
}
