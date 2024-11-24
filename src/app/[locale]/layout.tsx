import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Theme from "./_components/Theme";
import Navbar from "./_components/Navbar";
import SideBar from "./_components/SideBar";
import "./globals.css";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("metatitle"),
    description: t("metadesc"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased h-screen  bg-white  dark:bg-bgdark dark:text-textdark ">
        <NextIntlClientProvider messages={messages}>
          <Theme>
            <Navbar />
            <div
              className="flex h-full overflow-hidden "
              style={{
                height: "calc(100vh - 64px)",
              }}
            >
              <SideBar />
              <main className=" overflow-y-auto overflow-x-hidden w-full flex-shrink p-4 bg-bglight dark:bg-bgdark h-full  ">
                {children}
              </main>
            </div>
          </Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
