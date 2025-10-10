import {
  getMovieActors,
  getMovieDetails,
  getSimilarMovies,
} from "@/utility/getData";
import Image from "next/image";
import { unitCrewType, crewType, castType, MovieGeneralType } from "@/lib/type";
import { MovieCard } from "@/app/_components/ShowCards";
import Link from "next/link";

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const movieDetail = await getMovieDetails(id);
  const movieActors: unitCrewType = await getMovieActors(id);
  const similarMovies = await getSimilarMovies(id);

  const crew: crewType[] = movieActors.crew;
  const cast: castType[] = movieActors.cast;

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* TITLE */}
      <div className="flex w-[1080px] h-[72px] justify-between">
        <div className="w-fit">
          <p className="font-bold text-4xl space-[-0.9px]">
            {movieDetail.title}
          </p>
          <p className="text-[18px] font-normal">
            {movieDetail.release_date} · PG · {}
          </p>
        </div>

        <div className="flex flex-col flex-start">
          <p className="text-[12px] font-medium">Rating</p>

          <div className="flex h-[48px] gap-1 items-center flex-col">
            <Image src={"/star.svg"} height={28} width={28} alt=""></Image>
            <div className="flex h-[48px] gap-1 items-center">
              <p className="text-[18px] font-semibold ">
                {movieDetail.vote_average?.toFixed(1)}
              </p>{" "}
              <p className="text-[#71717A]">/10</p>
            </div>
            <p className="text-[#71717A] ml-6">
              {movieDetail.popularity?.toFixed(0)}k
            </p>
          </div>
        </div>
      </div>

      {/* POSTER PATH & TRAILER */}
      <div className="pt-1.5 flex justify-between  w-[1080px] h-[428px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          height={428}
          width={290}
          alt=""
          unoptimized
        />
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
          height={428}
          width={760}
          alt=""
          unoptimized
        ></Image>
      </div>

      <div className="w-[1080px] gap-5">
        {/* GENRES */}
        <div className="flex gap-2 mt-4">
          {movieDetail.genres?.map((genre: { id: number; name: string }) => (
            <button
              key={genre.id}
              className="border-2 border-gray-300 rounded-full px-4 py-1 text-sm font-medium hover:bg-gray-100 transition"
            >
              {genre.name}
            </button>
          ))}
        </div>

        <p className="font-normal pb-4 text-[16px]">{movieDetail.overview}</p>

        <div className="w-[1080px] flex flex-col gap-5">
          {/* DIRECTOR */}
          <div className="border-b-2 pb-4 border-gray-300 gap-[53px] flex">
            <p className="font-bold">Director</p>
            <div className="flex gap-1">
              {crew
                .filter((el) => el.job === "Director")
                .map((el) => (
                  <p key={el.job}>{el.name}</p>
                ))}
            </div>
          </div>

          {/* WRITERS */}
          <div className="border-b-2 pb-4 border-gray-300 gap-[53px] flex">
            <p>Writers</p>
            <div className="flex gap-2">
              {cast.slice(1, 4).map(
                (el, i, arr) =>
                  el.order && (
                    <p key={i}>
                      {el.name}
                      {i !== arr.length - 1 && " · "}
                    </p>
                  )
              )}
            </div>
          </div>

          {/* STAR ACTORS */}
          <div className="border-b-2 pb-4 border-gray-300 gap-[53px] flex">
            <p>Stars</p>
            <div className="flex gap-2">
              {cast.slice(5, 8).map(
                (el, i, arr) =>
                  el.order && (
                    <p key={i}>
                      {el.name}
                      {i !== arr.length - 1 && " · "}
                    </p>
                  )
              )}
            </div>
          </div>

          {/* MORE LIKE THIS */}
          <div>
            <div className="w-[1080px] justify-between flex">
              <p className="text-2xl font-semibold space-x-[-0.6]">
                More like this
              </p>

              <Link href={""}>
                <button className="flex gap-1 hover:underline">
                  See more
                  <Image
                    src={"/chevron-right.svg"}
                    width={16}
                    height={16}
                    alt="next/js"
                  ></Image>
                </button>
              </Link>
            </div>

            <div className="flex h-[441px] gap-8 items-center justify-center">
              {similarMovies.results
                .slice(4, 9)
                .map((movie: MovieGeneralType, i: number) => (
                  <Link key={movie.id} href={`/details/${movie.id}`}>
                    <MovieCard
                      poster_path={movie.poster_path}
                      title={movie.title}
                      vote_average={movie.vote_average}
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
