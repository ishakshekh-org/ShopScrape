"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  {
    imageUrl: "/assets/images/pc-1.png",
    alt: "pc-1",
  },
  {
    imageUrl: "/assets/images/gpu-1.webp",
    alt: "gpu",
  },
  {
    imageUrl: "/assets/images/hero-1.svg",
    alt: "smartWatch",
  },
  {
    imageUrl: "/assets/images/pc-2.png",
    alt: "pc-2",
  },
  {
    imageUrl: "/assets/images/hero-2.svg",
    alt: "bag",
  },
  {
    imageUrl: "/assets/images/hero-3.svg",
    alt: "lamp",
  },
  {
    imageUrl: "/assets/images/hero-5.svg",
    alt: "chair",
  },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel backdrop-blur-2xl">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={true}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imageUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain "
            key={image.alt}
          />
        ))}
      </Carousel>

      <Image
        src={"assets/icons/hand-drawn-arrow.svg"}
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 -z-10  "
      />
    </div>
  );
};

export default HeroCarousel;
