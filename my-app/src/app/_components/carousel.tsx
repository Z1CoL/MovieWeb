"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BackEndData } from "@/lib/type";
import { getNowPlayingMovies, getTrailer } from "@/utility/getData";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function CarouselSection() {
  const [movies, setMovies] = useState<BackEndData>();
  const [trailer, setTrailer] = useState<any>(null);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    async function fetchMovies() {
      const data: BackEndData = await getNowPlayingMovies();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  async function WatchTrailer(movieId: number) {
    const trailerData = await getTrailer(movieId);

    const traile =
      trailerData?.results?.find(
        (v: any) => v.type === "Trailer" && v.site === "YouTube"
      ) || trailerData.results;

    setTrailer(traile.key );
  }

  return (
    <Carousel>
      <CarouselContent>
        {movies?.results.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500${
                  movie.backdrop_path || movie.poster_path
                }`}
                alt={movie.title}
                width={1200}
                height={600}
                className="w-full h-[600px] object-cover rounded-lg bg-cover"
              />
              <div className="absolute top-40 left-30 w-[404px] h-[264px] flex flex-col gap-[16px] p-4 rounded-lg">
                <div>
                  <p className="text-[#FAFAFA] font-semibold text-[18px]">
                    Now Playing
                  </p>
                  <p className="text-white text-2xl font-bold">{movie.title}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <Image src={"/star.svg"} height={26} width={26} alt="star" />
                  <p className="text-[#FAFAFA] font-semibold text-[18px]">
                    {movie.vote_average.toFixed(1)}
                  </p>
                </div>

                <p className="text-[#FAFAFA] text-[12px] font-normal w-[302px]">
                  {movie.overview}
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      // onClick={() => WatchTrailer(movie.id)}
                      className="bg-white text-black w-fit rounded-sm flex items-center gap-2"
                    >
                      <Image
                        src={"/play.svg"}
                        width={16}
                        height={16}
                        alt="play"
                      />
                      Watch Trailer
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="bg-black border-none p-0 rounded-xl overflow-hidden min-h-[60%] min-w-[70%]">
                    {trailer  && (
                      <div className="flex justify-center items-center">
                        <iframe
                          width="100%"
                          height="561"
                          src={`https://www.youtube.com/embed/${trailer}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-xl"
                        />
                      </div>
                    ) }
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="ml-[10px] left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
      <CarouselNext className="mr-[10px] right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
    </Carousel>
  );
}
