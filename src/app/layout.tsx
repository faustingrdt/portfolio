import "./globals.css";
import Navbar from "./_components/Navbar";
import SideBar from "./_components/SideBar";
import Theme from "./_components/Theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased h-screen  bg-white  dark:bg-bgdark dark:text-textdark ">
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
      </body>
    </html>
  );
}
