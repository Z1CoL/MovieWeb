import { BackEndData, BackEndDataRecovery } from "@/lib/type";
import { MovieCard } from "@/app/_components/ShowCards";

export const Movies = (props: { moviesCardData: BackEndData }) => {
  const { moviesCardData } = props;
  console.log(moviesCardData, "dsklhjsdkfsh");

  return (
    <div className="flex flex-wrap gap-[32px] px-[80px]">

      {moviesCardData.results.slice(0,10).map((movie, i) => (
        <MovieCard
          poster_path={movie.poster_path}
          title={movie.title}
          vote_average={movie.vote_average}
          key={i}
        />
      ))}
    </div>
  );
};
