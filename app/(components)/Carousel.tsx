'use client'
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
    </Carousel>
  )
}

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface Skill {
  skills : string[]
}

const CustomCarousel : React.FC<Skill> = ({skills}) => {
    const length = ["one","two","three"]
    return (
        <div className="p-2">
            <Carousel
            plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
                opts={{
                    align: "start",
                    loop: true,
                }}>
                <CarouselContent className="p-2">
                    {skills.map((item) =>
                        <CarouselItem key={item}>
                            <Card>
                                <CardContent className=" h-[100%] flex justify-center items-center">
                                    {item}
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default CustomCarousel