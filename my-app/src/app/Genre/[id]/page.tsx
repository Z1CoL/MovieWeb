import { MovieCard } from "@/app/_components/ShowCards";
import { genreInType, MovieGeneralType } from "@/lib/type";
import { getGenre, getGenreIds } from "@/utility/getData";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";

export default async function GenrePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { page?: string };
}) {
  const genreId = params.id;
  const page = Number(searchParams.page) || 1;

  const movieGenre = await getGenre();
  const moviesData = await getGenreIds(genreId, page);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1280px] flex flex-col gap-8">
        <p className="pl-4">Search filter</p>

        <div className="flex w-[1280px]">
          <div className="w-fit pr-8">
            <div className="flex flex-wrap gap-3">
              {movieGenre.genres.map((genre: genreInType) => (
                <Link key={genre.id} href={`/Genre/${genre.id}`}>
                  <button className="border-1 rounded-full bg-white p-2 flex">
                    <span className="text-black text-[12px] font-semibold">
                      {genre.name}
                    </span>
                    <Image
                      src={"/chevron-right.svg"}
                      height={16}
                      width={16}
                      alt="arrow"
                    />
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-l-2 pl-[60px]">
            <p className="font-semibold text-[20px] pb-8">
              {moviesData.total_results} titles in "
              {
                movieGenre.genres.find(
                  (g: genreInType) => g.id === Number(genreId)
                )?.name
              }
              "
            </p>

            <div className="flex flex-wrap gap-6">
              {moviesData.results.slice(0, 9).map((el: MovieGeneralType) => (
                <Link key={el.id} href={`/details/${el.id}`}>
                  <MovieCard
                    poster_path={el.poster_path}
                    title={el.title}
                    vote_average={el.vote_average}
                    key={el.id}
                  />
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  {page > 1 && (
                    <PaginationItem>
                      <PaginationPrevious
                        href={`/Genre/${genreId}?page=${page - 1}`}
                      />
                    </PaginationItem>
                  )}

                  {Array.from(
                    { length: Math.min(5, moviesData.total_pages) },
                    (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            href={`/Genre/${genreId}?page=${pageNum}`}
                            isActive={page === pageNum}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                  )}

                  {page < moviesData.total_pages && (
                    <PaginationItem>
                      <PaginationNext
                        href={`/Genre/${genreId}?page=${page + 1}`}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
