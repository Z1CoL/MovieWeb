import { Button } from "@/components/ui/button";
import { Movies } from "./Card";
import { MovieType } from "@/lib/type";

type CardsShowingUsersProps = {
  title: string;
};

export default function CardsShowingUsers({ title }: CardsShowingUsersProps) {
  const UpcomingMovies: MovieType[] = [
    {
      name: "Dear Santa",
      rating: 7.8,
      images: "/Slide 4_3 - 1.png",
    },
    {
      name: "How To Train Your Dragon Live Action",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (1).png",
    },
    {
      name: "Alien Romulus",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (2).png",
    },
    {
      name: "From the ashes",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (3).png",
    },
    {
      name: "Space Dog",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (4).png",
    },
    {
      name: "The Order",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (5).png",
    },
    {
      name: "Y2K",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (6).png",
    },
    {
      name: "Solo Leveling: ReAwakening",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (7).png",
    },
    {
      name: "Get Away",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (8).png",
    },
    {
      name: "Sonic the Headgehog 3",
      rating: 7.8,
      images: "/Slide 4_3 - 1 (9).png",
    },
  ];
  return (
    <section className=" w-full flex flex-col gap-[32px] pt-[30px] items-center justify-center ">
      {/* Movie list 1 */}

      <div className="flex flex-col gap-[30px] items-center justify-center">
        {/* Movie List Header */}

        <div className="w-full h-[36px] px-[40px] flex items-center justify-between">
          <p className="w-fit h-[20px] size-[24px] font-semibold text-[#09090B] mx-[16px] flex ">
            {title}
          </p>
          <Button className="border-none hover:bg-gray-400 bg-white text-black ">
            See More <img src="vector.svg" alt="" />
          </Button>
        </div>

        {/* movie list */}

        <div className="flex flex-col w-[1450px] ">
          <Movies movies={UpcomingMovies} />
        </div>
      </div>
    </section>
  );
}
