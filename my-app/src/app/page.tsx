"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { MovieType } from "@/lib/type";
import { Movies } from "@/app/_components/Card";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const UpcomingMovies: MovieType[] = [
    {
      name: "Dear Santa",
      rating: 7.8,
      images: "/Slide 4_3 - 1.png",
    },
    {
      name: "How To Train Your Dragon Live Action",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (1).png",
    },
    {
      name: "Alien Romulus",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (2).png",
    },
    {
      name: "From the ashes",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (3).png",
    },
    {
      name: "Space Dog",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (4).png",
    },
    {
      name: "The Order",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (5).png",
    },
    {
      name: "Y2K",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (6).png",
    },
    {
      name: "Solo Leveling: ReAwakening",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (7).png",
    },
    {
      name: "Get Away",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (8).png",
    },
    {
      name: "Sonic the Headgehog 3",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (9).png",
    },
  ];

  const movieImages = [
    "/movie01.png",
    "/movie02.png",
    "/movie03.png",
    "/movie04.png",
    "/movie05.png",
  ];

  return (
    <div>
      {/* Navigation Bar */}

      <div className="w-full h-[59px] flex items-center justify-center p-[80px]">
        <div className="w-[1280px] h-[36px] flex justify-between ">
          <div className="flex items-center">
            <img src="film.svg" className="w-[20px] h-[20px]" alt="" />
            <p className="w-[64px] h-[20px] size-[16px] font-bold text-[#4338CA]">
              Movie Z
            </p>
          </div>
          <div className="flex gap-[10px] w-[488px]">
            <NavigationMenu className="border-[1px] rounded-[8px] border-gray-200">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Input placeholder="Search" />
          </div>
          <Button className="bg-white border-[1px] p-[2px] h-[36px] w-[36px] flex">
            <img src="moon.svg" alt="" />{" "}
          </Button>
        </div>
      </div>

      {/* Carousel */}

      <Carousel className="mt-[30px]">
        <CarouselContent>
          {movieImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img
                  src={image}
                  alt={`movie ${index + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="ml-[10px] left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
        <CarouselNext className="mr-[10px] right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
      </Carousel>

      {/* All movie list */}

      <section className=" w-full flex flex-col gap-[32px] pt-[30px]">
        {/* Movie list 1 */}

        <div className="flex flex-col gap-[30px] items-center justify-center">
          {/* Movie List Header */}

          <div className="w-full h-[36px] px-[40px] flex items-center justify-between">
            <p className="w-fit h-[20px] size-[24px] font-semibold text-[#09090B] flex ">
              Upcoming
            </p>
            <Button className="border-none hover:bg-gray-400 bg-white text-black ">
              See More <img src="vector.svg" alt="" />
            </Button>
          </div>

          <div className=" flex flex-wrap gap-[32px]">
            {/* movie list */}

            <div>
              <Movies movies={UpcomingMovies} />
            </div>
          </div>
        </div>

        {/* Movie list 2 */}

        <div className="flex flex-col gap-[30px] items-center justify-center">
          {/* Movie List Header */}

          <div className="w-full h-[36px] px-[40px] flex items-center justify-between">
            <p className="w-fit h-[20px] size-[24px] font-semibold text-[#09090B] flex ">
              Popular
            </p>
            <Button className="border-none hover:bg-gray-400 bg-white text-black ">
              See More <img src="vector.svg" alt="" />
            </Button>
          </div>

          <div className=" flex flex-wrap gap-[32px]">
            {/* movie list */}

            <Card>asd</Card>
          </div>
        </div>

        {/* Movie list 3 */}

        <div className="flex flex-col gap-[30px] items-center justify-center">
          {/* Movie List Header */}

          <div className="w-full h-[36px] px-[40px] flex items-center justify-between">
            <p className="w-fit h-[20px] size-[24px] font-semibold text-[#09090B] flex ">
              Top Rated
            </p>
            <Button className="border-none hover:bg-gray-400 bg-white text-black ">
              See More <img src="vector.svg" alt="" />
            </Button>
          </div>

          <div className=" flex flex-wrap gap-[32px]">
            {/* movie list */}

            <Card>asd</Card>
          </div>
        </div>
      </section>
    </div>
  );
}
