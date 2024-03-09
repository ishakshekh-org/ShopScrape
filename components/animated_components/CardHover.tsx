import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { formatNumber } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export function AnimatedPin({ product }: Props) {
  return (
    <div className="">
      <Link href={`/products/${product._id}`} className="product-card lg:mx-7">
        <PinContainer
          className="truncate"
          title={product.title}
          href={`/products/${product._id}`}
        >
          <div className="flex flex-col p-2 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 truncate">
              {product.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                <div className="flex justify-between">
                  <p className=" opacity-50 text-lg capitalize rounded-full bg-white/10 px-2">
                    {product.stars}
                  </p>

                  <p className="text-lg font-semibold">
                    <span className="">{product?.currency}</span>
                    <span className="">
                      {formatNumber(product.currentPrice)}
                    </span>
                  </p>
                </div>
              </span>
            </div>
            <div className="product-card_img-container ">
              <Image
                src={product.image}
                alt={product.title}
                height={700}
                width={700}
                className="product-card_img "
              />
            </div>
          </div>
        </PinContainer>
      </Link>
    </div>
  );
}
