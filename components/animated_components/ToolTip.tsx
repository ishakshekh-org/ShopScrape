"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Aadil Khan",
    designation: "Full Stack Developer",
    image: "/assets/images/ishak.jpg",
  },
  {
    id: 2,
    name: "Ishak Shekh",
    designation: "Full Stack Developer",
    image: "/assets/images/ishak.jpg",
  },
  {
    id: 3,
    name: "Shreyansh Chawre",
    designation: "Full Stack Developer",
    image: "/assets/images/shreyansh.jpg",
  },
];

export function Tooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
