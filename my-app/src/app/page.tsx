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

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

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

          <div className=" justify-between flex w-full h-[36px] px-[40px] ">
            <p className="w-[24px] h-[20px] size-[24px] font-semibold text-[#09090B]">
              Upcoming
            </p>
            <Button className="border-none hover:bg-gray-400 bg-white text-black ">
              See More <img src="vector.svg" alt="" />
            </Button>
          </div>

          <div className=" flex flex-wrap gap-[32px]">
            {/* movie list */}

              <Card>
                
              </Card>

          </div>
        </div>

        {/* Movie list 2 */}

        <div className=""></div>

        {/* Movie list 3 */}

        <div className=""></div>
      </section>
    </div>
  );
}
