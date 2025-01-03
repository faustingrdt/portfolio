"use client";

import { AlignJustify, Github, Languages, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useMediaQuery } from "usehooks-ts";
import { Link } from "@/i18n/routing";
import useNavStore from "../store/NavStore";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const toggleSidebar = useNavStore((state) => state.toggleSidebar);
  const isSidebarOpen = useNavStore((state) => state.isSidebarOpen);
  const pathname = usePathname();
  const router = useRouter();
  const pathnameLocale = pathname.split("/")[1];

  const mobile = useMediaQuery("(max-width: 768px)");

  const changeLocale = () => {
    const newLocale = pathnameLocale === "fr" ? "en" : "fr";
    const newPath = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${newPath}`);
  };

  return (
    <div className=" h-16 flex items-center justify-between p-4 border-b dark:bg-bgdark2 dark:border-borderdark ">
      <div className="flex items-center gap-2">
        <div className="hovered " onClick={toggleSidebar}>
          {isSidebarOpen && mobile ? (
            <X strokeWidth={2.25} />
          ) : (
            <AlignJustify strokeWidth={2.25} />
          )}
        </div>
        <div className="font-semibold text-2xl ">Faustin.dev</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="hovered ">
          <Link
            href="https://github.com/faustingrdt/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github strokeWidth={2.25} />
          </Link>
        </div>
        <div className="hovered" onClick={changeLocale}>
          <Languages strokeWidth={2.25} />
        </div>
        <div className="hovered">
          {theme === "dark" ? (
            <Moon strokeWidth={2.25} onClick={() => setTheme("light")} />
          ) : (
            <Sun strokeWidth={2.25} onClick={() => setTheme("dark")} />
          )}
        </div>
      </div>
    </div>
  );
}
