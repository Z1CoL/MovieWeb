import axios from "axios";
import { MovieCard } from "../../_components/ShowCards";
import React from "react";
import { BackEndData } from "@/lib/type";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default async function UpcomingPage() {
  const getPopularMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,

      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        },
      }
    );
    return response.data;
  };

  const moviesResults: BackEndData = await getPopularMovies();

  return (
    <div className="flex flex-col items-center justify-center gap-[32px]">
      <p></p>

      <div className="flex flex-wrap w-[1450px] gap-[32px] px-[80px]">
        {moviesResults.results.map((movie, i) => {
          return (
            <MovieCard
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
              key={i}
            />
          );
        })}
      </div>

      <div className="flex w-[1450px] flex-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

///
