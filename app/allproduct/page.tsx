import { AnimatedPin } from "@/components/animated_components/CardHover";
import { TextGenerate } from "@/components/animated_components/TextGnerateEffect";
import Loading from "@/components/loading";
import { getAllProducts } from "@/lib/actions";
import React, { Suspense } from "react";

const allproduct = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="trending-section relative z-0">
          <TextGenerate
            words="All Products"
            className="text-5xl sm:text-7xl text-center"
          />

          <div className="flex max-lg:flex-col  items-center justify-center flex-wrap gap-x-8 gap-y-16 ">
            {/* rendering product in reverse order  */}
            {allProducts
              ?.slice()
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

export default allproduct;
