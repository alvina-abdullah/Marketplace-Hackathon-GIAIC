"use client";

import { Product } from "@/types/products";
import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import product from "@/sanity/schemaTypes/product";

const PhotoSection = ({ data }: { data: Product }) => {
  console.log("Product Data:", data);

  return (
    <Link href={`/shop/product/${data.slug}`}>
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-3.5">


        {/* Main Product Image Section */}
        <div className="flex items-center justify-center bg-[#F0EEED] rounded-[13px] sm:rounded-[20px] w-full sm:w-96 md:w-full mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden mb-3 lg:mb-0">

                      {data.image ? (
                        <img
                          src={urlFor(data.image).url()}
              width={400}
              height={530}
              className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
              alt={data.name}
              priority
              unoptimized
            />
          ) : (
            <p className="text-gray-500">No Image Available</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PhotoSection;
