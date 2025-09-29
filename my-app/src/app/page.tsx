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

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index}>
              <img src="movie01.png" alt="" key={index + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
