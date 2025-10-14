"use client";
import React from "react";
import CardsShowingUsers from "../_components/UserShowCards";
import axios from "axios";
import { BackEndData } from "@/lib/type";

export default function UpcomingPage() {
  const [upcomingMovies, setUpcomingMovies] = React.useState<BackEndData>();
  const [popular, setPopular] = React.useState<BackEndData>();
  const [topRated, setTopRated] = React.useState<BackEndData>();
  const [isLaoding, setIsLaoding] = React.useState(true);

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
    setIsLaoding(false);
  }, []);

  if (!upcomingMovies || !popular || !topRated) return null;
  return (
    <div>
      <main>
        <CardsShowingUsers
          title="Upcoming"
          icon="/chevron-right.svg"
          link="/SeeMore/Popular"
          movie={upcomingMovies}
          lable="Upcoming"
        />
      </main>
    </div>
  );
}
