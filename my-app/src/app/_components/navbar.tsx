"use client";
import Image from "next/image";
// import GenresDropdown from "./genre";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { setTheme, theme } = useTheme();

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
          {/* <GenresDropdown /> */}
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
