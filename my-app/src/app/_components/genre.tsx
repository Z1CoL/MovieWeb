"use client";

import React, { useMemo, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { SearchIcon } from "lucide-react";

export default function GenresDropdown() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const genres = useMemo(
    () => [
      "Action",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film-Noir",
      "Game-Show",
      "History",
      "Horror",
      "Music",
      "Musical",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return genres;
    return genres.filter((g) => g.toLowerCase().includes(q));
  }, [query, genres]);

  return (
    <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
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

        <PopoverContent className="w-[720px] p-6">
          <div className="flex items-start gap-6">
            <div className="w-1/3">
              <h3 className="text-2xl font-semibold">Genres</h3>
              <p className="text-sm text-muted-foreground mt-1">
                See lists of movies by genre
              </p>
            </div>

            <div className="w-2/3">
              <div className="mb-4">
                <label className="sr-only">Search genres</label>
                <div className="relative">
                  <Image
                    src={"searchIcon.svg"}
                    alt=""
                    width={20}
                    height={20}
                    className=" absolute ml-2 mt-2"
                  />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search.."
                    className="relative pl-[30px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {filtered.map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                      console.log("selected", g);
                      setOpen(false);
                    }}
                    className="inline-flex items-center justify-between gap-3 rounded-full border px-3 py-1 text-sm font-medium shadow-sm hover:bg-muted"
                  >
                    <span>{g}</span>
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}

                {filtered.length === 0 && (
                  <div className="col-span-full text-sm text-muted-foreground">
                    No genres found.
                  </div>
                )}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
