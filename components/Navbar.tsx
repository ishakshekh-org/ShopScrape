// import Image from "next/image";
// import Link from "next/link";

// const navIcons = [
//   {
//     src: "/assets/icons/search.svg",
//     alt: "Search",
//   },
//   {
//     src: "/assets/icons/black-heart.svg",
//     alt: "Black-Heart",
//   },
//   {
//     src: "/assets/icons/user.svg",
//     alt: "user",
//   },
// ];

// const Navbar = () => {
//   return (
//     <header className="w-full">
//       <nav className="nav">
//         <Link href={"/"} className="flex items-center gap-1">
//           <Image
//             src={"/assets/icons/logo.svg"}
//             width={27}
//             height={27}
//             alt="Logo"
//           />
//           <p className="nav-logo">
//             Shop<span>Scrape</span>
//           </p>
//         </Link>

//         <Link href={"/about"}>About</Link>

//         <div className="flex items-center gap-5">
//           {navIcons.map((icon) => (
//             <Image
//               key={icon.alt}
//               src={icon.src}
//               alt={icon.alt}
//               width={28}
//               height={28}
//               className="object-contain"
//             />
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

export function Nav() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Navbar className="top-10 " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-10 z-50 mx-auto max-w-md text-center",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center gap-2 justify-between">
          <Link
            href={"/"}
            className="font-poppins text-lg font-extrabold text-transparent sm:text-3xl flex"
          >
            <Image
              src={"/assets/icons/logo.svg"}
              width={27}
              height={27}
              alt="Logo"
            />
            <p className="nav-logo">SC</p>
          </Link>
        </div>

        <div className="flex items-center">
          <div className="sm:hidden">
            <MenuItem setActive={setActive} active={active} item="Options">
              <div className="flex flex-col items-center space-y-4 text-sm">
                <HoveredLink f="/allproduct">All Products</HoveredLink>
                <HoveredLink href="/about">About Us</HoveredLink>
              </div>
            </MenuItem>
          </div>
          <div className="flex items-center justify-between gap-5 max-sm:hidden">
            <Link href={"/allproduct"}>All Products</Link>
            <Link href={"/about"}>About Us</Link>
          </div>
        </div>
      </Menu>
    </div>
  );
}
