import { Card, CardContent } from "@/components/ui/card";
import { MovieType } from "@/lib/type";
import Image from "next/image";

export const MovieCard = (props: { movie: MovieType }) => {
  const { movie } = props;

  return (
    <Card className="bg-[#F4F4F5] p-0 h-fit w[] overflow-hidden">
      <div className="h-fit flex flex-col">
        <Image src={movie.images} alt={""} width={229} height={340} />

        <div className="mt-2 ">
          <div className="flex ml-5">
            <img src="star.svg" alt="" />
            {movie.rating}
          </div>

          <CardContent className="flex flex-wrap w-[213px] h-[56px]">
            {movie.name}
          </CardContent>
        </div>
      </div>
    </Card>
  );
};
