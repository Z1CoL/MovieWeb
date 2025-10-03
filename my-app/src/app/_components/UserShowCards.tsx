import { Button } from "@/components/ui/button";
import { Movies } from "./Card";
import Image from "next/image";
import Link from "next/link";
import { CardsShowingUsersProps } from "@/lib/type";

export default function CardsShowingUsers({
  title,
  icon,
  link,
  movie,
  lable,
}: CardsShowingUsersProps) {
  return (
    <section className=" w-full flex flex-col gap-[32px] pt-[30px] items-center justify-center ">
      <div className="flex flex-col gap-[30px] items-center justify-center">
        <div className="w-full h-[36px] px-[40px] flex items-center justify-between">
          <p className="w-fit h-[20px] size-[24px] font-semibold text-[#09090B] mx-[16px] flex ">
            {title}
          </p>
          <Link href={link}>
            <button className="border-none  bg-white text-black hover:underline flex ">
              See More <Image src={icon} width={16} height={16} alt="a"></Image>
            </button>
          </Link>
        </div>

        <div className="flex flex-col w-[1450px] ">
          <Movies moviesCardData={movie} />
        </div>
      </div>
    </section>
  );
}
