import { Button } from "@/components/ui/button";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { getGenre } from "@/utility/getData";
import Image from "next/image";
import Link from "next/link";

export default async function () {
  const genre = await getGenre;
  console.log(genre, "genre");

  return (
    <div>
      <div>
        {/* <Popover>
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
                  {genre.map((el) => (
                    <Link href={"/Genre"}>
                      <Button
                        key={genre.id}
                        className="bg-white border-1 rounded-full border-[#E4E4E7]"
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
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover> */}
      </div>
      <div></div>
    </div>
  );
}
