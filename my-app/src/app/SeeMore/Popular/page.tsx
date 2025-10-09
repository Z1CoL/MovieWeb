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

  // API-аас өгөгдлийг авах
  const moviesResults: BackEndData = await getPopularMovies(page);

  return (
    <div className="flex flex-col items-center justify-center gap-[32px]">
      {/* Movie List */}
      <div className="flex flex-wrap w-[1450px] gap-[32px] px-[80px]">
        {moviesResults.results.map((movie, i) => {
          return (
            <Link key={movie.id} href={`/details/${movie.id}`}>
              <MovieCard
                poster_path={movie.poster_path}
                title={movie.title}
                vote_average={movie.vote_average}
                key={i}
              />
            </Link>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex w-[1450px] justify-end">
        <Pagination>
          <PaginationContent>
            {/* Previous page */}
            {page > 1 && (
              <PaginationItem>
                <Link href={`/popular?page=${page - 1}`}>
                  <PaginationPrevious />
                </Link>
              </PaginationItem>
            )}

            {/* Page Numbers */}
            {Array.from(
              { length: Math.min(moviesResults.total_pages, 5) },
              (_, i) => {
                const pageNum = i + 1;
                return (
                  <PaginationItem key={pageNum}>
                    <Link href={`/popular?page=${pageNum}`}>
                      <PaginationLink isActive={page === pageNum}>
                        {pageNum}
                      </PaginationLink>
                    </Link>
                  </PaginationItem>
                );
              }
            )}

            {/* Ellipsis if there are more pages */}
            {moviesResults.total_pages > 5 && <PaginationEllipsis />}

            {/* Next page */}
            {page < moviesResults.total_pages && (
              <PaginationItem>
                <Link href={`/popular?page=${page + 1}`}>
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
