import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { MovieInfoType } from "@/lib/type";

const movieImages = ["/wicked.jpg", "/realgladiator.jpg", "/moana_2.jpg"];

const movieCarousel: MovieInfoType[] = [
  {
    movieName: "Wicked",
    rating: "6.9/10",
    info: `Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.`,
  },
  {
    movieName: "Gladiator",
    rating: "8.5/10",
    info: `After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.`,
  },
  {
    movieName: "Moana",
    rating: "7.8/10",
    info: `After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.`,
  },
];

export default function CarouselSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel>
      <CarouselContent>
        {movieImages.map((image, index) => {
          const movie = movieCarousel[index];
          return (
            <CarouselItem key={index}>
              <div className="p-1 flex relative">
                <img
                  src={image}
                  alt={`movie ${index + 1}`}
                  className="w-full h-[600px] object-cover rounded-lg bg-cover"
                />
                <div className="absolute top-40 left-30 w-[404px] h-[264px] flex flex-col gap-[16px] p-4 rounded-lg">
                  <div>
                    <p className="text-[#FAFAFA] font-semibold text-[18px]">
                      Now Playing
                    </p>
                    <p className="text-white text-2xl font-bold">
                      {movie.movieName}
                    </p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <Image src={"/star.svg"} height={26} width={26} alt="" />
                    <p className="text-[#FAFAFA] font-semibold text-[18px]">
                      {movie.rating}
                    </p>
                  </div>

                  <p className="text-[#FAFAFA] text-[12px] font-normal w-[302px]">
                    {movie.info}
                  </p>

                  <Button className="bg-white text-black w-fit rounded-sm flex items-center gap-2">
                    <Image src={"/play.svg"} width={16} height={16} alt="" />
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious className="ml-[10px] left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
      <CarouselNext className="mr-[10px] right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
    </Carousel>
  );
}
