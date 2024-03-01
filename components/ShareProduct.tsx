"use client";
import Image from "next/image";
import { RWebShare } from "react-web-share";

interface Props {
  title: string;
}

const ShareProduct = ({ title }: Props) => {
  return (
    <RWebShare
      data={{
        text: title,
        url: window.location.href,
        title: title,
      }}
    >
      <Image src="/assets/icons/share.svg" alt="share" width={20} height={20} />
    </RWebShare>
  );
};

export default ShareProduct;
