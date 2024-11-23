"use client";

import { AlignJustify, Github, Languages, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import useNavStore from "../store/NavStore";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const toggleSidebar = useNavStore((state) => state.toggleSidebar);
  const isSidebarOpen = useNavStore((state) => state.isSidebarOpen);
  const mobile = useMediaQuery("(max-width: 768px)");

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
        <div className="font-semibold text-2xl text-white ">Faustin.dev</div>
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
        <div className="hovered ">
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
