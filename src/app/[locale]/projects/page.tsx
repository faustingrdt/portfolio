"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Project from "./_components/Project";
import { useTranslations } from "next-intl";

interface ProjectType {
  img: string;
  title: string;
  alt: string;
  description: string;
  stacks: string[];
  missions: string[];
  link: string;
}

export default function Page() {
  const t = useTranslations("Projects");
  return (
    <Carousel className=" h-full px-1 ">
      <CarouselContent className="h-full ">
        {t.raw("list").map((p: ProjectType, index: number) => (
          <CarouselItem key={index} className="h-full">
            <Project
              img={p.img}
              title={p.title}
              alt={p.alt}
              description={p.description}
              stacks={p.stacks}
              missions={p.missions}
              link={p.link}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5  size-10 rounded-md bg-bglight dark:bg-bgdark  " />
      <CarouselNext className="right-5 size-10 rounded-md bg-bglight dark:bg-bgdark " />
    </Carousel>
  );
}
