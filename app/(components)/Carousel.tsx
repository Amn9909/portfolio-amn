"use client";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    ></Carousel>
  );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ThemeSwitcher from "../(toggleDarkMode)/ThemeSwitcher";

interface Project {
  name: string;
  description: string;
  technologies: string[];
}
interface Skill {
  projects: Project[];
}

const CustomCarousel: React.FC<Skill> = ({ projects }) => {
  return (
    <div className="p-2 h-full w-full xl:w-2/3 3xs:w-2/3 ">
      <Carousel
        className="flex justify-center items-center"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
          <ThemeSwitcher />
        {/* <CarouselContent className="w-full h-full">
          {projects.map((proj) =>
            <CarouselItem key={proj.name}>
              <Card>
                <CardContent className="flex justify-center items-center p-4">
                  {proj.name}
                </CardContent>
              </Card>
            </CarouselItem>
          )}
        </CarouselContent> */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
