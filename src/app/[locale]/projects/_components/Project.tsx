"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("Projects");
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
    <div className="content overflow-auto invisible-scrollbar ">
      <div className="flex flex-col md:flex-row w-full md:h-2/3 gap-6">
        <div className=" w-full md:w-1/2 max-md:h-64 md:flex-shrink-0 relative rounded-md">
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

      <div className="flex max-md:flex-col-reverse md:h-1/3 justify-between relative">
        <div className=" space-y-1">
          <h3 className="underline text-xl">{t("mission")} :</h3>
          {missions.map((mission, index) => (
            <ul key={index} className="list-disc list-inside ">
              <li>{mission}</li>
            </ul>
          ))}
        </div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className=" max-md:mb-6 md:absolute md:right-0 md:bottom-0"
        >
          <Button className="text-xl p-6 max-md:w-full ">{t("web")}</Button>
        </Link>
      </div>
    </div>
  );
}
