"use client";
import React from "react";

export default function MainLoader() {
  return (
    <div className="animate-pulse flex flex-col items-center justify-center w-screen h-screen">

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto space-y-12">
        {/*  CAROUSEL SKELETON */}
        <div className="flex gap-4 overflow-hidden ">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 space-y-3 h-[600px] pt-[100px] w-screen">
              <div className="h-[600px] bg-gray-100 rounded-2xl  flex flex-col pt-[300px]"></div>
            </div>
          ))}
        </div>

        {Array.from({ length: 3 }).map((_, section) => (
          <div key={section} >

            <div className="flex justify-between items-center">
              <div className="h-6 bg-gray-100 rounded w-48 mb-5"></div>
              <div className="h-4 bg-gray-100 rounded w-20 mb-5"></div>
            </div>

            {/* Movie cards grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6" >
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-56 bg-gray-100 rounded-2xl"></div>
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


