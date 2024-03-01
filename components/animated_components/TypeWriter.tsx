"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
export function Typewriter() {
  const words = [
    {
      text: "Unleashe",
    },
    {
      text: "The",
    },
    {
      text: "power",
    },
    {
      text: "Of",
    },
    {
      text: "ShopScrape.",
      className: "text-primary dark:text-primary",
    },
  ];
  return (
    <div className="">
      <TypewriterEffect words={words} />
    </div>
  );
}
