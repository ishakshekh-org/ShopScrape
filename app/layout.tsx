import { Nav } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SparkBG } from "@/components/animated_components/SparkBG";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shop Scrape",
  description:
    "Track product prices Without any Sweat and save your Wallet on your Online Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "  bg-black "}>
        {/* <div className="bg-cyan-500 w-60 h-60 rounded-full fixed -z-10 blur-[300px] top-72 left-96 max-sm:top-96"></div>
        <div className="bg-fuchsia-900 w-60 h-60 rounded-full fixed -z-10 blur-[300px] bottom-44 right-[50rem] max-sm:top-96"></div>
        <div className="bg-secondary w-60 h-60 rounded-full fixed -z-10 blur-[300px] top-12 right-96 max-sm:top-96"></div> */}

        <div className="relative h-full w-full">
          <SparkBG />
        </div>

        <main
          className="max-w-10xl mx-auto relative z-10 pt-10"
          suppressHydrationWarning
        >
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
