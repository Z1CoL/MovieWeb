"use client";

import * as React from "react";
import CardsShowingUsers from "@/app/_components/UserShowCards";
import CarouselSection from "./_components/carousel";

export default function Home() {
  return (
    <div>
      {/* Carousel */}
      <CarouselSection />

      {/* All movie list */}
      <CardsShowingUsers title="Upcoming" />
      <CardsShowingUsers title="Popular" />
      <CardsShowingUsers title="Top Rated" />
    </div>
  );
}
