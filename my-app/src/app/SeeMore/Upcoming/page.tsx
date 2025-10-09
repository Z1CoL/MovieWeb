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
import Link from "next/link";

export default async function UpcomingPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;

  const getUpcomingMovies = async (page: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
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
      <p></p>

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

      <div className="flex w-[1450px] justify-end">
        <Pagination>
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <Link href={`/upcoming?page=${page - 1}`}>
                  <PaginationPrevious />
                </Link>
              </PaginationItem>
            )}

            {Array.from(
              { length: Math.min(moviesResults.total_pages, 5) },
              (_, i) => {
                const pageNum = i + 1;
                return (
                  <PaginationItem key={pageNum}>
                    <Link href={`/upcoming?page=${pageNum}`}>
                      <PaginationLink isActive={page === pageNum}>
                        {pageNum}
                      </PaginationLink>
                    </Link>
                  </PaginationItem>
                );
              }
            )}

            {moviesResults.total_pages > 5 && <PaginationEllipsis />}

            {page < moviesResults.total_pages && (
              <PaginationItem>
                <Link href={`/upcoming?page=${page + 1}`}>
                  <PaginationNext />
                </Link>
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
