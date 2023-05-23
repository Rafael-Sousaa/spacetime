import { Profile } from "@/components/Profile";
import "./globals.css";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as Baijamjuree,
} from "next/font/google";
import SignIn from "@/components/SignIn";
import Hero from "@/components/Hero";
import Copyright from "@/components/Copyright";
import EmptyMemories from "@/components/EmptyMemories";
import { cookies } from "next/headers";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamjuree = Baijamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
});

export const metadata = {
  title: "Spacetime",
  description:
    "Uma cápsula do tempo construida com React, Next.js, TailwindCSS e TypeScript,",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = cookies().has("token");

  return (
    <html lang="en">
      <body
        className={`${roboto.variable}${baiJamjuree.variable}font-sans bg-gray-900 text-gray-100`}
      >
        <main className=" flex min-h-screen grid-cols-2 flex-col  md:grid">
          {/*left*/}
          <div className="  lg:relative lg:flex lg:flex-col lg:items-start lg:justify-between lg:overflow-hidden lg:border-r lg:border-white/10 lg:bg-[url(../assets/bg-stars.svg)] lg:bg-cover lg:px-28 lg:py-16">
            {/*blur*/}
            <div className=" absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
            {/*Strips*/}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
            {/*sign in*/}
            {isAuthenticated ? <Profile /> : <SignIn />}
            {/*hero*/}
            <Hero />
            {/*Copyrigth*/}
            <Copyright />
          </div>

          {/*Right*/}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover   ">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
