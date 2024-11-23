import Image from "next/image";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="content ">
      <div className="flex items-center justify-center h-3/4">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-10 w-1/2 items-center justify-center">
            <h2 className="text-4xl font-bold ">
              Bonjour, Je suis Faustin développeur Fullstack en freelance !
            </h2>
            <div className="text-xl ">
              Je suis un développeur passionné par le code, à l'aise aussi bien
              en <span className="underline">frontend qu'en backend</span>. Mon
              expertise me permet d'ajouter de nouvelles fonctionnalités à des
              projets existants ou de créer une application complète à partir de
              zéro. J'aime relever des défis techniques et explorer des
              solutions créatives. J'utilise principalement{" "}
              <span className="underline">React</span> et{" "}
              <span className="underline">Next.Js</span> avec{" "}
              <span className="underline">Typescript</span> et{" "}
              <span className="underline">Tailwind CSS</span>. Je suis aussi à
              l'aise avec l'intégration de moyen de paiement comme Stripe.
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="w-[400px] h-[400px] relative ">
              <Image
                className="rounded-md"
                src="/faustin.jpg"
                alt="Photo de Faustin GARDETTE"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/4 space-y-5">
        <h3 className="text-3xl underline font-semibold">Contact :</h3>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="" className="flex items-center gap-2 text-2xl">
              <FaWhatsapp /> WhatsApp :
            </label>
            <span>+33 602296798</span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="flex items-center gap-2 text-2xl">
              <CgMail /> Mail :
            </label>
            <span>gardettefaustin.dev@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
