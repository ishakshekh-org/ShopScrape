"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

interface Props {
  words: string;
  className?: string;
}

export function TextGenerate({ words, className }: Props) {
  return <TextGenerateEffect words={words} className={className} />;
}
