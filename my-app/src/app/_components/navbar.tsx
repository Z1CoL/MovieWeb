import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GenresDropdown from "./genre";
import { ThemeChanger } from "./Them";

export default function Navbar() {
  return (
    <div className="w-full h-[59px] flex items-center justify-center px-[80px] my-[10px]">
      <div className="w-[1280px] h-[36px] flex justify-between ">
        <div className="flex gap-[5px] items-center">
          <Image width={20} height={20} src={"/film.svg"} alt="logo" />
          <Link href={"/"}>
            <button className="w-[64px] h-[20px] text-[16px] font-bold text-[#4338CA]">
              Movie Z
            </button>
          </Link>
        </div>

        <div className="flex gap-[10px] w-[488px]">
          <GenresDropdown />
          <div className="flex items-center relative">
            <Image
              src={"/searchIcon.svg"}
              width={17}
              height={17}
              alt="search"
              className="absolute left-2"
            />
            <Input placeholder="Search" className="w-[379px] pl-[30px]" />
          </div>
        </div>

        <ThemeChanger />
      </div>
    </div>
  );
}
