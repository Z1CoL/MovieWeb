"use client";
import * as React from "react";
import useSWR from "swr";
import axios from "axios";
import CardsShowingUsers from "@/app/_components/UserShowCards";
import CarouselSection from "./_components/carousel";
import SkeletonCard from "@/app/_components/SkeletonCard";
import { BackEndData } from "@/lib/type";

const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    })
    .then((res) => res.data);

    
export default function Home() {
  const { data: upcoming, isLoading: isUpcomingLoading } = useSWR<BackEndData>(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    fetcher
  );

  const { data: popular, isLoading: isPopularLoading } = useSWR<BackEndData>(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    fetcher
  );

  const { data: topRated, isLoading: isTopRatedLoading } = useSWR<BackEndData>(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    fetcher
  );

  const isLoading = isUpcomingLoading || isPopularLoading || isTopRatedLoading;

  if (isLoading) {
    return (
      <div className="p-6 space-y-8 flex flex-col items-center justify-center">
        <CarouselSection />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <SkeletonCard />
        </div>
      </div>
    );
  }

  if (!upcoming || !popular || !topRated) {
    return null;
  }

  return (
    <div>
      {/* Carousel */}
      <CarouselSection />

      {/* All movie list */}
      <CardsShowingUsers
        title="Upcoming"
        icon="/chevron-right.svg"
        link="/SeeMore/Upcoming"
        movie={upcoming}
        lable="Upcoming"
      />

      <CardsShowingUsers
        title="Popular"
        icon="/chevron-right.svg"
        link="/SeeMore/Popular"
        movie={popular}
        lable="Popular"
      />

      <CardsShowingUsers
        title="Top Rated"
        icon="/chevron-right.svg"
        link="/SeeMore/TopRated"
        movie={topRated}
        lable="Top Rated"
      />
    </div>
  );
}
