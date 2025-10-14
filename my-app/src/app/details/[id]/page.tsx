"use client";

import React, { Suspense } from "react";
import { MovieCard } from "@/app/_components/ShowCards";
import MovieDetailLoader from "@/app/_components/MovieDetailLoader";
import Link from "next/link";
import Image from "next/image";
import {
  getMovieActors,
  getMovieDetails,
  getSimilarMovies,
} from "@/utility/getData";
import { unitCrewType, crewType, castType, MovieGeneralType } from "@/lib/type";

// --- Detail content хэсгийг тусад нь гаргаж өгч байна ---
async function DetailContent({ id }: { id: string }) {
  const movieDetail = await getMovieDetails(id);
  const movieActors: unitCrewType = await getMovieActors(id);
  const similarMovies = await getSimilarMovies(id);

  const crew: crewType[] = movieActors.crew;
  const cast: castType[] = movieActors.cast;

  return (
    <div className="flex flex-col items-center justify-center mt-[100px] mb-[100px]">
      {/* --- TITLE --- */}
      <div className="flex w-[1080px] h-[72px] justify-between">
        <div className="w-fit">
          <p className="font-bold text-4xl tracking-tight">
            {movieDetail.title}
          </p>
          <p className="text-[18px] font-normal text-gray-700">
            {movieDetail.release_date} · PG
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-[12px] font-medium text-gray-600">Rating</p>

          <div className="flex flex-col items-center gap-1">
            <Image src={"/star.svg"} height={28} width={28} alt="star" />
            <div className="flex items-center gap-1">
              <p className="text-[18px] font-semibold">
                {movieDetail.vote_average?.toFixed(1)}
              </p>
              <p className="text-[#71717A]">/10</p>
            </div>
            <p className="text-[#71717A] text-sm">
              {movieDetail.popularity?.toFixed(0)}k
            </p>
          </div>
        </div>
      </div>

      {/* --- POSTER & BACKDROP --- */}
      <div className="pt-3 flex justify-between w-[1080px] h-[428px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          height={428}
          width={290}
          alt="poster"
          unoptimized
          className="rounded-2xl object-cover"
        />
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
          height={428}
          width={760}
          alt="backdrop"
          unoptimized
          className="rounded-2xl object-cover"
        />
      </div>

      {/* --- DETAILS --- */}
      <div className="w-[1080px] mt-6 flex flex-col gap-5">
        {/* Genres */}
        <div className="flex gap-2">
          {movieDetail.genres?.map((genre: { id: number; name: string }) => (
            <button
              key={genre.id}
              className="border-2 border-gray-300 rounded-full px-4 py-1 text-sm font-medium hover:bg-gray-100 transition"
            >
              {genre.name}
            </button>
          ))}
        </div>

        {/* Overview */}
        <p className="font-normal text-[16px] text-gray-800">
          {movieDetail.overview}
        </p>

        {/* Crew & Cast */}
        <div className="flex flex-col gap-5">
          {/* Director */}
          <div className="border-b-2 pb-4 border-gray-300 flex gap-[53px]">
            <p className="font-bold">Director</p>
            <div className="flex gap-1">
              {crew
                .filter((el) => el.job === "Director")
                .map((el) => (
                  <p key={el.credit_id}>{el.name}</p>
                ))}
            </div>
          </div>

          {/* Writers */}
          <div className="border-b-2 pb-4 border-gray-300 flex gap-[53px]">
            <p className="font-bold">Writers</p>
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

          {/* Stars */}
          <div className="border-b-2 pb-4 border-gray-300 flex gap-[53px]">
            <p className="font-bold">Stars</p>
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

          {/* --- SIMILAR MOVIES --- */}
          <div>
            <div className="w-[1080px] flex justify-between items-center mb-4">
              <p className="text-2xl font-semibold tracking-tight">
                More like this
              </p>

              <Link href="#">
                <button className="flex gap-1 text-gray-700 hover:underline">
                  See more
                  <Image
                    src={"/chevron-right.svg"}
                    width={16}
                    height={16}
                    alt="chevron"
                  />
                </button>
              </Link>
            </div>

            <div className="flex h-[441px] gap-8 items-center justify-center">
              {similarMovies.results
                .slice(4, 9)
                .map((movie: MovieGeneralType) => (
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

export default function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <Suspense fallback={<MovieDetailLoader />}>
      <React.Suspense fallback={<MovieDetailLoader />}>
        <DetailContent id={id} />
      </React.Suspense>
    </Suspense>
  );
}
