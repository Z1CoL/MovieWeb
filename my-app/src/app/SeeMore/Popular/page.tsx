import axios from "axios";
import { MovieCard } from "../../_components/ShowCards";
import React from "react";
import { BackEndData } from "@/lib/type";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

export default async function PopularPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;

  const getPopularMovies = async (page: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        },
      }
    );
    return response.data;
  };

  const moviesResults: BackEndData = await getPopularMovies(page);
  const totalPages = moviesResults.total_pages;

  console.log(moviesResults, "movies result");

  return (
    <div className="flex flex-col items-center justify-center gap-[32px]">
      {/* Header */}
      <div className="w-[1350px]">
        <p className="font-semibold text-3xl">Popular Movies</p>
      </div>

      {/* Movie List */}
      <div className="flex flex-wrap w-[1450px] gap-[32px] px-[80px]">
        {moviesResults.results.map((movie) => (
          <Link key={movie.id} href={`/details/${movie.id}`}>
            <MovieCard
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
            />
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8">
        <Pagination>
          <PaginationContent>
            {/* Previous */}
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={`/SeeMore/Popular?page=${page - 1}`}
                />
              </PaginationItem>
            )}

            {/* Current Page */}
            <PaginationItem>
              <PaginationLink href={`/SeeMore/Popular?page=${page}`} isActive>
                {page}
              </PaginationLink>
            </PaginationItem>

            {/* Next */}
            {page < moviesResults.total_pages && (
              <PaginationItem>
                <PaginationNext href={`/SeeMore/Popular?page=${page + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
