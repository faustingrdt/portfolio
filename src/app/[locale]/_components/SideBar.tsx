"use client";

import { FolderOpenDot, SquareUserRound } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import useNavStore from "../store/NavStore";
import { useMediaQuery } from "usehooks-ts";
import { useTranslations } from "next-intl";

function SidebarLink({
  href,
  icon: Icon,
  label,
  isSidebarOpen,
  isHovered,
  onClick,
}: any) {
  return (
    <Link
      href={href}
      className="hovered flex gap-2 items-center"
      onClick={onClick}
    >
      <div>
        <Icon strokeWidth={2.25} />
      </div>
      {(isSidebarOpen || isHovered) && (
        <div className="line-clamp-1">{label}</div>
      )}
    </Link>
  );
}

export default function SideBar() {
  const [isHovered, setIsHovered] = useState(false);
  const isSidebarOpen = useNavStore((state) => state.isSidebarOpen);
  const toggleSidebar = useNavStore((state) => state.toggleSidebar);
  const mobile = useMediaQuery("(max-width: 768px)");
  const t = useTranslations("Sidebar");

  const links = [
    { href: "/", icon: SquareUserRound, label: t("about") },
    { href: "/projects", icon: FolderOpenDot, label: t("projects") },
  ];

  return (
    <>
      {mobile ? (
        <div className="relative">
          <div
            className={` absolute top-0 left-0 z-50 border-r h-full w-48 p-4 dark:border-gray-500  bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out ${
              isSidebarOpen && mobile ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className=" flex flex-col gap-4 flex-shrink-0 ">
              {links.map((link) => (
                <SidebarLink
                  key={link.href}
                  {...link}
                  isSidebarOpen={true}
                  isHovered={false}
                  onClick={toggleSidebar}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`border-r flex-shrink-0 h-full p-4 bg-white dark:bg-gray-800 dark:border-gray-500 transition-all duration-300 ease-in-out ${
            isSidebarOpen || isHovered ? "w-48" : "w-[4.6rem]"
          }  `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <SidebarLink
                key={link.href}
                {...link}
                isSidebarOpen={isSidebarOpen}
                isHovered={isHovered}
                onClick={undefined}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
