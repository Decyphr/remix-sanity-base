import { SanityImage } from "~/components/sanity-image";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import type { GalleryType } from "~/types";

export default function ImageGalleryBlock({
  gallery,
}: {
  gallery: GalleryType;
}) {
  return (
    <Carousel className="w-full max-w-xl mx-auto">
      <CarouselContent>
        {gallery.images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="overflow-hidden">
              <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden">
                <SanityImage image={image} />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
