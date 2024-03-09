import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import { AnimatedPin } from "@/components/animated_components/CardHover";
import { TextGenerate } from "@/components/animated_components/TextGnerateEffect";
import { Typewriter } from "@/components/animated_components/TypeWriter";
import Loading from "@/components/loading";
import { getAllProducts } from "@/lib/actions";
import Image from "next/image";
import { Suspense } from "react";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="px-6 md:px-20 py-20" suppressHydrationWarning>
          <div className="flex max-xl:flex-col gap-16">
            <div className="flex flex-col justify-center">
              <p className="small-text mb-5  ">
                Smart Shopping stats Here
                <Image
                  src={"/assets/icons/arrow-right.svg"}
                  alt="arrow-right"
                  height={16}
                  width={16}
                />
              </p>
              <div className="">
                <Typewriter />
              </div>

              <div className="pt-6 ">
                <TextGenerate
                  words="Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more."
                />
              </div>
              <SearchBar />
            </div>
            <HeroCarousel />
          </div>
        </section>

        <section className="trending-section">
          <TextGenerate
            words="Trending Products"
            className="text-5xl text-secondary"
          />

          <div className="flex max-lg:flex-col flex-wrap gap-x-8 gap-y-16 items-center justify-center ">
            {/* rendering product in reverse order  */}
            {allProducts
              ?.slice(8)
              .reverse()
              .map((product) => (
                <AnimatedPin key={product._id} product={product} />
              ))}
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Home;
