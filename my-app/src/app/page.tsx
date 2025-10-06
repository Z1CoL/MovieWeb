"use client";

import * as React from "react";
import CardsShowingUsers from "@/app/_components/UserShowCards";
import CarouselSection from "./_components/carousel";
import axios from "axios";
import { BackEndData } from "@/lib/type";

export default function Home() {
  const [upcomingMovies, setUpcomingMovies] = React.useState<BackEndData>();
  const [popular, setPopular] = React.useState<BackEndData>();
  const [topRated, setTopRated] = React.useState<BackEndData>();

  React.useEffect(() => {
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    };

    const labels = ["upcoming", "popular", "top_rated"];

    labels.map((label) => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${label}?language=en-US&page=1`,
          { headers }
        )
        .then((res) => {
          if (label === "upcoming") setUpcomingMovies(res.data);
          if (label === "popular") setPopular(res.data);
          if (label === "top_rated") setTopRated(res.data);
        });
    });
  }, []);

  if (!upcomingMovies || !popular || !topRated) return null;

  return (
    <div>
      {/* Carousel */}
      <CarouselSection />

      {/* All movie list */}

      <CardsShowingUsers
        title="Upcoming"
        icon="/chevron-right.svg"
        link="/SeeMore/Popular"
        movie={upcomingMovies}
        lable="Upcoming"
      />

      <CardsShowingUsers
        title="Popular"
        icon="/chevron-right.svg"
        link="/SeeMore/Upcoming"
        movie={popular}
        lable="Upcoming"
      />

      <CardsShowingUsers
        title="Top Rated"
        icon="/chevron-right.svg"
        link="/SeeMore/TopRated"
        movie={topRated}
        lable="Upcoming"
      />
    </div>
  );
}
