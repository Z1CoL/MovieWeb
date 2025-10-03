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
      <CardsShowingUsers
        title="Upcoming"
        seeMore="See More"
        icon="/chevron-right.svg"
        link="/Upcoming"
        active={true}
      />
      <CardsShowingUsers
        title="Popular"
        seeMore="See More"
        icon="/chevron-right.svg"
        link=""
        active={true}
      />
      <CardsShowingUsers
        title="Top Rated"
        seeMore="See More"
        icon="/chevron-right.svg"
        link=""
        active={true}
      />
    </div>
  );
}
