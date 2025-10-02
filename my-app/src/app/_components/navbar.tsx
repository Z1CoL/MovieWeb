import Image from "next/image";
import GenresDropdown from "./genre";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="w-full h-[59px] flex items-center justify-center px-[80px] my-[10px]">
      <div className="w-[1280px] h-[36px] flex justify-between ">
        <div className="flex gap-[5px] items-center">
          <Image width={20} height={20} src={"/film.svg"} alt="" />
          <p className="w-[64px] h-[20px] size-[16px] font-bold text-[#4338CA]">
            Movie Z
          </p>
        </div>
        <div className="flex gap-[10px] w-[488px]">
          <GenresDropdown></GenresDropdown>
          <div className="flex items-center ">
            <Image
              src={"/searchIcon.svg"}
              width={17}
              height={17}
              alt=""
              className="absolute ml-2"
            />
            <Input
              placeholder="Search"
              className="w-[379px] relative pl-[30px]"
            ></Input>
          </div>
        </div>
        <Button className="bg-white border-[1px] p-[2px] h-[36px] w-[36px] flex">
          <img src="moon.svg" alt="" />{" "}
        </Button>
      </div>
    </div>
  );
}

