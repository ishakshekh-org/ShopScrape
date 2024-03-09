import Modal from "@/components/Modal";
import PriceInfoCard from "@/components/PriceInfoCard";
import ShareProduct from "@/components/ShareProduct";
import { AnimatedPin } from "@/components/animated_components/CardHover";
import { getProductById, getSimilarProducts } from "@/lib/actions";
import { formatNumber } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

type Props = {
  params: { id: string };
};

const ProductDetails = async ({ params: { id } }: Props) => {
  const product: Product = await getProductById(id);

  if (!product) redirect("/");

  const similarProduct = await getSimilarProducts(id);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="product-container">
          <div className="flex gap-28 xl:flex-row flex-col ">
            <div className="product-image mx-auto ">
              <div className="object-contain rounded-xl m-auto overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={580}
                  height={580}
                  className="hover:scale-105 transition"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
                <div className="flex flex-col gap-3">
                  <p className="text-[28px] text-primary-orange font-semibold">
                    {product.title}
                  </p>
                  <Link
                    href={product.url}
                    target="_blank"
                    className="text-secondary brightness-200 saturate-200 underline w-fit"
                  >
                    Visit Product
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="product-hearts capitalize">
                    <Image
                      src="/assets/icons/red-heart.svg"
                      alt="heart"
                      width={20}
                      height={20}
                    />
                    <p className="text-base font-semibold  ">
                      {product.reviewsCount}
                    </p>
                  </div>

                  <div className="p-3 bg-white/10 saturate-200 brightness-[1000%] rounded-full">
                    <Image
                      src="/assets/icons/bookmark.svg"
                      alt="bookmark"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="p-3 flex justify-center gap-2 items-center cursor-pointer bg-white/10 hover:bg-white/40 transition saturate-200 brightness-[1000%] rounded-full">
                    <ShareProduct title={product.title} />
                  </div>
                </div>
              </div>

              <div className="product-info">
                <div className="flex flex-col gap-2">
                  <p className="text-[34px] text-secondary font-bold brightness-200">
                    {product.currency} {formatNumber(product.currentPrice)}
                  </p>
                  <p className="text-[21px] font-bold opacity-50 line-through">
                    {product.currency} {formatNumber(product.originalPrice)}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <div className="product-stars">
                      <Image
                        src="/assets/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm text-primary-orange font-semibold">
                        {product.stars || "unavailable"}
                      </p>
                    </div>

                    <div className="product-reviews">
                      <Image
                        src="/assets/icons/comment.svg"
                        alt="comment"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm text-secondary font-semibold">
                        {product.reviewsCount}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-3xl text-center pb-5 uppercase font-bold">
                    <span className="text-secondary">about</span> item
                  </p>
                  <p className="text-lg font-semibold capitalize">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="my-7 flex flex-col gap-5">
                <div className="flex gap-5 flex-wrap">
                  <PriceInfoCard
                    title="Current Price"
                    iconSrc="/assets/icons/price-tag.svg"
                    value={`${product.currency}${formatNumber(
                      product.currentPrice
                    )}`}
                    borderColor="#b6dbff"
                  />
                  <PriceInfoCard
                    title="averagePrice"
                    iconSrc="/assets/icons/chart.svg"
                    value={`${product.currency}${formatNumber(
                      product.averagePrice
                    )}`}
                    borderColor="#b6dbff"
                  />
                  <PriceInfoCard
                    title="Highest Price"
                    iconSrc="/assets/icons/arrow-up.svg"
                    value={`${product.currency}${formatNumber(
                      product.highestPrice
                    )}`}
                    borderColor="#b6dbff"
                  />
                  <PriceInfoCard
                    title="Lowest Price"
                    iconSrc="/assets/icons/arrow-down.svg"
                    value={`${product.currency}${formatNumber(
                      product.lowestPrice
                    )}`}
                    borderColor="#b6dbff"
                  />
                </div>
              </div>

              <Modal productId={id} />
            </div>
          </div>

          {/* product description */}

          <div className="flex flex-col gap-16 ">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl text-secondary font-semibold text-center">
                Product Description
              </h3>

              <div className="flex flex-col gap-4">
                {product?.aboutItem?.split("\n")}
              </div>
            </div>

            <button className="btn mx-auto flex items-center justify-center gap-3 min-w-[200px]">
              <Image
                src="/assets/icons/bag.svg"
                alt="check-out"
                width={22}
                height={22}
              />
              <Link
                href={product.url}
                target="_blank"
                className="text-base text-white"
              >
                Buy Now
              </Link>
            </button>
          </div>

          {similarProduct && similarProduct?.length > 0 && (
            <div className="py-14 flex flex-col gap-2 w-full">
              <p className="section-text">Similar Products</p>

              <div className="flex flex-wrap gap-10 mt-7 w-full items-center justify-center">
                {similarProduct.map((product) => (
                  <AnimatedPin product={product} key={product._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Suspense>
    </>
  );
};

export default ProductDetails;
