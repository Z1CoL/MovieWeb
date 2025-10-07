import { Card, CardContent } from "@/components/ui/card";
import { BackEndDataRecovery } from "@/lib/type";
import Image from "next/image";

export const MovieCard = ({
  poster_path,
  title,
  vote_average,
}: BackEndDataRecovery) => {
  return (
    <Card className=" p-0 h-fit overflow-hidden">
      <div className="h-fit flex flex-col">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={""}
          width={229}
          height={340}
          unoptimized
        />

        <div className="mt-2 ">
          <div className="flex ml-5">
            <img src="star.svg" alt="" />
            {vote_average.toFixed(1)} <p>/10</p>
          </div>

          <CardContent className="flex flex-wrap w-[213px] h-[56px]">
            {title}
          </CardContent>
        </div>
      </div>
    </Card>
  );
};
