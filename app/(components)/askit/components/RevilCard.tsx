import React from "react";
import { EvervaultCard, Icon } from "../../../../components/ui/evervault-card";
import { ProjectInterface } from "./ProjectsCards";



export function RevilCard({
  id,
  description = "No data",
  title = "No title",
}: ProjectInterface) {
  return (
    <div key={id} className="hover:scale-90 transition-transform duration-300 ease-in-out border rounded-3xl border-black/[0.6]  shadow-2xl shadow-gray-950/50 dark:border-white/[0.2] dark:shadow-xl dark:shadow-gray-50/5 flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <EvervaultCard text={title} />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light text-balance">
        {description}
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        {title}
      </p>
    </div>
  );
}
