import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getGenre } from "@/utility/getData";
import Link from "next/link";
import { genreInType } from "@/lib/type";

export default async function GenresDropdown() {
  const movieGenre = await getGenre();

  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="gap-2">
            <span>Genre</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[620px] p-6">
          <div className="flex flex-col gap-6">
            <div className="w-1/3">
              <h3 className="text-2xl font-semibold">Genres</h3>
              <p className="text-sm text-muted-foreground mt-1">
                See lists of movies by genre
              </p>
            </div>

            <div className="w-fit border-t-1 pt-6">
              <div className="flex flex-wrap gap-3">
                {movieGenre.genres.map((genre: genreInType) => (
                  <Link key={genre.id} href={`/Genre/${genre.id}`}>
                    <Button key={genre.id} className="border-1 rounded-full bg-white">
                      <span className="text-black text-[12px] font-semibold">
                        {genre.name}
                      </span>
                      <Image
                        src={"/chevron-right.svg"}
                        height={16}
                        width={16}
                        alt="arrow"
                      />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
