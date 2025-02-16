"use client";
import React from "react";
import { PinContainer } from "../../../../components/ui/3d-pin";
import { SlideData } from "@/components/ui/acernityCarousel";

export function AnimatedPin({
  title,
  description,
  liveDemo,
  technologies,
}: SlideData) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title={title} href={liveDemo}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-black dark:text-white">{description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <div>
              <h1 className="text-xl font-bold text-white dark:text-black">Technologies</h1>
              <span className="text-white dark:text-black">{technologies}</span>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
