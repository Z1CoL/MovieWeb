import { MovieType } from "@/lib/type";
import { MovieCard } from "@/app/_components/ShowCards";

export const Movies = (props: { movies: MovieType[] }) => {
  const { movies } = props;

  return (
    <div className="flex flex-wrap gap-2">
      {movies.map((movie, i) => (
        <MovieCard movie={movie} key={i} />
      ))}
    </div>
  );
};