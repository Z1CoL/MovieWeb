import axios from "axios";
import { MovieCard } from "@/app/_components/ShowCards";
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

export default async function UpcomingPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;

  const getUpcomingMovies = async (page: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        },
      }
    );
    return response.data;
  };

  const moviesResults: BackEndData = await getUpcomingMovies(page);

  return (
    <div className="flex flex-col items-center justify-center gap-[32px]">
      <div className="w-[1350px]">
        <p className="font-semibold text-3xl space-x-[-0.75px]">Upcoming</p>
      </div>

      {/* Movie List */}
      <div className="flex flex-wrap w-[1450px] gap-[32px] px-[80px]">
        {moviesResults.results.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex w-[1450px] justify-end">
        <Pagination>
          <PaginationContent>
            {/* Previous */}
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious href={`/upcoming?page=${page - 1}`} />
              </PaginationItem>
            )}

            {/* Page numbers */}
            {Array.from(
              { length: Math.min(5, moviesResults.total_pages) },
              (_, i) => {
                const pageNum = i + 1;
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href={`/upcoming?page=${pageNum}`}
                      isActive={page === pageNum}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
            )}

            {moviesResults.total_pages > 5 && <PaginationEllipsis />}

            {/* Next */}
            {page < moviesResults.total_pages && (
              <PaginationItem>
                <PaginationNext href={`/upcoming?page=${page + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
