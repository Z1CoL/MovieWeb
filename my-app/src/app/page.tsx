"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import CardsShowingUsers from "@/app/_components/UserShowCards";
import FooterSection from "@/app/_components/Footer";
import Image from "next/image";
import GenresDropdown from "@/app/_components/genre";
import Footer from "@/app/_components/Footer";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const movieImages = [
    "/movie01.png",
    "/movie01.png",
    "/movie01.png",
    "/movie01.png",
    "/movie01.png",
  ];

  return (
    <div>
      {/* Navigation Bar */}
      <div className="w-full h-[59px] flex items-center justify-center px-[80px] my-[10px]">
        <div className="w-[1280px] h-[36px] flex justify-between ">
          <div className="flex gap-[5px] items-center">
            <Image width={20} height={20} src={"/film.svg"} alt="" />
            <p className="w-[64px] h-[20px] size-[16px] font-bold text-[#4338CA]">
              Movie Z
            </p>
          </div>
          <div className="flex gap-[10px] w-[488px]">
            <GenresDropdown></GenresDropdown>
            <div className="flex items-center ">
              <Image
                src={"/searchIcon.svg"}
                width={17}
                height={17}
                alt=""
                className="absolute ml-2"
              />
              <Input
                placeholder="Search"
                className="w-[379px] relative pl-[30px]"
              ></Input>
            </div>
          </div>
          <Button className="bg-white border-[1px] p-[2px] h-[36px] w-[36px] flex">
            <img src="moon.svg" alt="" />{" "}
          </Button>
        </div>
      </div>

      {/* Carousel */}

      <Carousel>
        <CarouselContent>
          {movieImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img
                  src={image}
                  alt={`movie ${index + 1}`}
                  className="w-full h-[600px] object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-[10px] left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
        <CarouselNext className="mr-[10px] right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
      </Carousel>

      {/* All movie list */}
      <CardsShowingUsers title="Upcoming" />
      <CardsShowingUsers title="Popular" />
      <CardsShowingUsers title="Top Rated" />

      {/* Footer section */}

      <Footer />
    </div>
  );
}
