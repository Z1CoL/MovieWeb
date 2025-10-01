import { Card, CardContent } from "@/components/ui/card";
import { MovieType } from "@/lib/type";
import Image from "next/image";

export const MovieCard = (props: { movie: MovieType }) => {
  const { movie } = props;

  return (
    <Card className="p-0 h-fit">
      <div className="h-fit">
        <CardContent>
          <Image src={movie.images} alt={""} width={30} height={50} />
        </CardContent>

        <CardContent className="flex">
          <img src="star.svg" alt="" />
          {movie.rating}
        </CardContent>

        <CardContent className="h-fit size-[18px] font-normal ">
          {movie.name}
        </CardContent>
      </div>
    </Card>
  );
};
