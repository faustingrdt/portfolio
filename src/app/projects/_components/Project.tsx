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
      {/* <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
        alias aliquam expedita corrupti perferendis cumque asperiores recusandae
        quasi, repudiandae dolore quae unde repellat saepe ab molestias, facilis
        eum cupiditate? Pariatur ullam a reiciendis. Provident quisquam ipsum
        velit adipisci maiores sapiente nemo, dignissimos rem exercitationem
        quos ullam, error nobis vero voluptate. Ducimus at rerum sed ipsam.
        Blanditiis pariatur obcaecati adipisci. Rem vitae minima placeat
        quibusdam id porro iste recusandae. Temporibus magni ratione dolore,
        illum voluptas fuga ipsam quos possimus harum soluta necessitatibus
        dicta culpa illo provident impedit vitae ad optio. Temporibus
        perferendis delectus quod. Minus, veniam quas labore harum ducimus
        facere recusandae accusantium veritatis quos, consequuntur
        necessitatibus nihil assumenda accusamus optio non repellat blanditiis
        fugit cupiditate beatae eligendi dignissimos porro! Earum facere autem
        deserunt natus iure sit est minus, hic odio repellendus nostrum neque
        eaque ipsum, vel soluta architecto consectetur sequi officiis. Eum
        adipisci temporibus amet quam aliquid facere. Dolores! Ipsam eius ipsa
        numquam laboriosam fugit rem minima voluptatum perferendis, rerum
        deserunt odio, vero nesciunt reiciendis perspiciatis repellendus aliquid
        aspernatur, accusantium necessitatibus sit cumque ea molestias. Ipsum
        quam laborum quo. Repellat porro at velit. Aspernatur iure sunt quaerat
        quasi ipsa nisi fuga praesentium cum ex dolores accusantium quas at
        optio eos, consequuntur distinctio. Molestiae repellendus molestias, hic
        quis obcaecati eos! Fuga libero officiis reprehenderit consequuntur
        dicta accusantium at ipsa id, sunt ratione, numquam natus. Est, fugit
        nesciunt, ducimus ex in consectetur obcaecati laboriosam sequi minima
        provident reiciendis, molestias porro cumque. Omnis voluptatem voluptate
        exercitationem adipisci officia saepe. Adipisci exercitationem,
        similique, dolore laborum voluptas quibusdam fugiat accusamus velit
        suscipit voluptatum explicabo facere blanditiis nesciunt, in optio
        mollitia atque recusandae veritatis. Nulla! Minus nisi consequatur
        culpa? Odio voluptate saepe obcaecati possimus commodi explicabo, optio
        ea officia facilis odit asperiores architecto suscipit assumenda
        dignissimos laboriosam perspiciatis autem dolorem? Quas ad assumenda
        alias commodi! Nulla error vero harum, laboriosam eius aut distinctio
        itaque blanditiis delectus quaerat voluptate natus iure cum deserunt
        dolorem, corrupti saepe quidem repellat dolores animi! A perferendis
        placeat dolore necessitatibus optio. Corrupti explicabo eius vel
        corporis quod suscipit magni necessitatibus quasi autem possimus quo
        tempore, quae nisi deserunt. Natus maiores vitae saepe temporibus
        distinctio optio consequatur, quo minima possimus deleniti? Sed?
        Veritatis modi, sequi magni officia autem tempora? Laborum provident
        aspernatur eaque blanditiis beatae sunt, architecto quisquam, corrupti
        rerum fugit odio quo eius rem! Hic eligendi aperiam cum sed. Blanditiis,
        error! Amet officiis a laborum fugit ratione saepe quaerat pariatur
        excepturi quo, praesentium distinctio assumenda molestiae? Veniam, quia.
        Incidunt quos reprehenderit pariatur nisi odit provident doloribus
        doloremque ducimus magni, illo ut? Reiciendis cupiditate id distinctio
        eaque corporis totam veritatis, unde officia architecto, maiores commodi
        quos aliquid esse! Labore repellat vero officiis esse natus aliquam?
        Sapiente culpa commodi nobis sequi ratione. Perspiciatis? Perspiciatis
        consequatur sunt culpa accusamus quibusdam ipsam nemo accusantium
        exercitationem quisquam quae, saepe voluptates corrupti tempore dicta
        minima fugit maiores iste ex quidem sint esse ab expedita? Deleniti,
        debitis porro? Nisi magni, sunt molestias a aspernatur temporibus magnam
        libero saepe pariatur ea, enim quas, ad assumenda non velit consectetur
        et ullam aperiam molestiae. Ipsam sint porro dolorum eligendi quam unde.
        Repudiandae aut cumque, consequuntur suscipit modi quos earum fugit
        molestiae alias quisquam amet id necessitatibus minus nisi, asperiores
        culpa enim quibusdam blanditiis sit harum dolore temporibus, doloribus
        officia magnam. Et! Natus suscipit, doloremque voluptate accusantium
        totam eos tempore ducimus inventore dignissimos ratione commodi aut
        voluptatum eveniet eaque ad ipsa fugiat consequuntur in quasi architecto
        sequi! Nulla labore expedita facere dolorem. Neque dolores id enim non
        nobis tempore aliquam tempora sapiente sunt, blanditiis similique
        quaerat nulla provident atque? Rem, rerum? Temporibus, omnis rem est
        distinctio similique sit nisi expedita ex adipisci!
      </div> */}
      <div className="flex max-md:flex-col-reverse md:h-1/3 justify-between relative">
        <div className=" space-y-1">
          <h3 className="underline text-xl">Mes Missions :</h3>
          {missions.map((mission, index) => (
            <ul key={index} className="list-disc list-inside ">
              <li>{mission}</li>
            </ul>
          ))}
        </div>
        <Link
          href={link}
          className=" max-md:mb-6 md:absolute md:right-0 md:bottom-0"
        >
          <Button className="text-xl p-6 max-md:w-full ">Voir le site</Button>
        </Link>
      </div>
    </div>
  );
}
