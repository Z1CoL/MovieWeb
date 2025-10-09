import { MovieCard } from "@/app/_components/ShowCards";
import { genreInType, MovieGeneralType } from "@/lib/type";
import { getGenre, getGenreIds } from "@/utility/getData";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params }: { params: { id: string } }) {
  const { id } = params;
  const moviesData = await getGenreIds(id);
  const movieGenre = await getGenre();

  console.log(moviesData, "genre");

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1280px] flex flex-col gap-8">
        <p className="pl-4">Search filter</p>
        <div className="flex w-[1280px]">
          <div className="w-fit pr-8">
            <div className="flex flex-wrap gap-3">
              {movieGenre.genres.map((genre: genreInType) => (
                <Link key={genre.id} href={`/Genre/${genre.id}`}>
                  <button
                    key={genre.id}
                    className="border-1 rounded-full bg-white p-2 flex"
                  >
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

          {/* genre movies */}
          <div className="border-l-2 pl-[60px]">
            <div>
              {/* arr length genre name */}
              <p className="font-semibold space-x-[-2] text-[20px] pb-8">
                {" "}
                {moviesData.total_results} titles in " "
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              {moviesData.results.slice(0, 9).map((el: MovieGeneralType) => (
                <Link id="movie.id" href={`/details/${el.id}`}>
                  <MovieCard
                    poster_path={el.poster_path}
                    title={el.title}
                    vote_average={el.vote_average}
                    key={el.id}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
