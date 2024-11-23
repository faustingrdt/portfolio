"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Project({
  img,
  title,
  alt,
  description,
  stacks,
  missions,
  link,
}: {
  img: string;
  title: string;
  alt: string;
  description: string;
  stacks: string[];
  missions: string[];
  link: string;
}) {
  function IconStack({ stack }: { stack: string }) {
    const { theme } = useTheme();
    return (
      <img
        src={`https://skillicons.dev/icons?i=${stack}${
          theme === "dark" ? `&theme=light` : ""
        }`}
        alt={`icone ${stack}`}
        width={48}
        height={48}
      />
    );
  }

  return (
    <div className="content h-full overflow-y-auto invisible-scrollbar ">
      <div className="flex h-2/3 gap-10 ">
        <div className=" bg-white w-1/2 h-full flex-shrink-0 relative rounded-md">
          <Image
            src={img}
            fill
            alt={alt}
            className="rounded-md"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col justify-between gap-6">
          <div className="text-4xl font-bold">{title}</div>
          <div className=" space-y-1">
            <h3 className=" underline text-xl ">Description :</h3>
            <div>{description}</div>
          </div>
          <div className=" space-y-1">
            <h3 className=" underline text-xl ">Stacks :</h3>
            {
              <div className="flex flex-wrap gap-2">
                {stacks.map((stack) => (
                  <IconStack key={stack} stack={stack} />
                ))}
              </div>
            }
          </div>
        </div>
      </div>
      <div className="flex h-1/3 justify-between relative">
        <div className=" space-y-1">
          <h3 className="underline text-xl">Mes Missions :</h3>
          {missions.map((mission, index) => (
            <ul key={index} className="list-disc list-inside ">
              <li>{mission}</li>
            </ul>
          ))}
        </div>
        <Link href={link} className=" absolute right-0 bottom-0">
          <Button className="text-xl p-6">Voir le site</Button>
        </Link>
      </div>
    </div>
  );
}
