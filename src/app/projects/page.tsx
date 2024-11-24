"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Project from "./_components/Project";

const list = [
  {
    img: "/methodo.png",
    title: "Méthodo",
    alt: "Photo du site Méthodo",
    description:
      "Méthodo est une application de mise en relation entre professeurs et élèves. L'élève peut réserver un cours particulier avec un professeur de son choix.",
    stacks: ["nextjs", "nodejs", "ts", "prisma", "tailwind", "aws"],
    missions: [
      "Réalisation de l'application dans son entierté",
      "Intégration de la maquette figma",
      "Intégration de Stripe pour les paiements",
      "Déploiement sur AWS",
    ],
    link: "https://xn--mthodo-bva.com/",
  },
  {
    img: "/koacher.png",
    title: "KOACHER",
    alt: "Photo du site KOACHER",
    description:
      "KOACHER est une application de mise en relation entre coachs sportifs et élèves. L'élève peut réserver et acheter des cours particuliers avec un coach de son choix.",
    stacks: ["react", "nodejs", "express", "ts", "sass"],
    missions: [
      "Ajout de nouvelles fonctionnalités",
      "Correction de bugs",
      "Modification frontend et backend",
      "Intégration de la maquette figma",
      "Réalisation de la landing page",
    ],
    link: "https://www.koacher.app/",
  },
  {
    img: "/remember.png",
    title: "Remember",
    alt: "Photo du site Remember",
    description:
      " Remember est une application inspirée d'Anki qui aide à mémoriser efficacement des informations grâce à un système de cartes.",
    stacks: [
      "nextjs",
      "nestjs",
      "ts",
      "prisma",
      "tailwind",
      "vercel",
      "heroku",
    ],
    missions: [
      "Projet personnel qui m'a permis d'apprendre Nest.Js",
      "Inscription / Connexion d'un user",
      "CronJob pour les rappels de révision",
    ],
    link: "https://remember-frontend.vercel.app/",
  },
  {
    img: "/libden.png",
    title: "Libden",
    alt: "Photo du site Libden",
    description:
      "Libden est une application de libértinage.  Les utilisateurs peuvent se rencontrer et discuter entre eux. Les utilisateurs peuvent également créer des événements et inviter d'autres utilisateurs.",
    stacks: ["js", "css", "html"],
    missions: ["Réalisation du frontend", "Intégration de la maquette figma"],
    link: "https://libden.com/",
  },
];

export default function Page() {
  return (
    <Carousel className=" h-full px-1 ">
      <CarouselContent className="h-full ">
        {list.map((p, index) => (
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
