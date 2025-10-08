import { MovieCard } from "@/app/_components/ShowCards";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { MovieGeneralType } from "@/lib/type";
import { getGenreIds } from "@/utility/getData";
import Link from "next/link";

export default async function Home({ params }: { params: { id: string } }) {
  const { id } = params;
  const moviesData = await getGenreIds(id);

  console.log(moviesData, "genre");

  return (
    <div>
      <div>

      </div>




      {/* genre movies */}
      <div className="flex flex-wrap gap-6">
        {moviesData.results.map((el: MovieGeneralType) => (
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
  );
}
