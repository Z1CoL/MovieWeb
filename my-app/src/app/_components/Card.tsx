import { MovieType } from "@/lib/type";
import { MovieCard } from "@/app/_components/ShowCards";

export const Movies = (props: { movies: MovieType[] }) => {
  const { movies } = props;

  return (
    <div className="flex flex-wrap gap-[32px] px-[80px]">
      {movies.map((movie, i) => (
        <MovieCard movie={movie} key={i} />
      ))}
    </div>
  );
};