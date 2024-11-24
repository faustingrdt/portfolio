import { useTranslations } from "next-intl";
import Image from "next/image";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="content overflow-auto invisible-scrollbar  h-full  ">
      <div className="flex  items-center justify-center xl:h-3/4">
        <div className="flex max-md:flex-col-reverse max-md:gap-10 justify-between items-center ">
          <div className="flex flex-col gap-10 md:w-1/2 items-center justify-center">
            <h2 className=" text-3xl xl:text-4xl font-bold md ">
              {t("title")}
            </h2>
            <div className=" text-lg xl:text-xl ">
              {t.rich("about", {
                line: (chunks) => <span className="underline">{chunks}</span>,
              })}
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className=" w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] relative xl ">
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
      <div className="md:h-1/4 space-y-5">
        <h3 className="text-3xl underline font-semibold">{t("contact")} :</h3>
        <div className="flex max-md:flex-col gap-5">
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
