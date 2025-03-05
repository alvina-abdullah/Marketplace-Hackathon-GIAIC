'use client';

import React, { useState, useEffect } from "react";
import client from "@/sanity/lib/client";
import { Product } from "@/types/products";
import Header from "@/components/homepage/Header";
import Brands from "@/components/homepage/Brands";
import ProductListSec from "@/components/common/ProductListSec";
import SearchAndFilter from "@/components/SearchAndFilter";
import { Review } from "@/types/review.types";
import DressStyle from "@/components/homepage/DressStyle";
import Reviews from "@/components/homepage/Reviews";
import Link from "next/link";
import product from "@/sanity/schemaTypes/product";
import { reviewsData } from "./reviews";

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const query = `*[ _type == "products"] {
          name, title, price, category, discountPercent, description,
          "image": image.asset._ref, "_id": _id, "slug": slug.current,
        }`;
        const data = await client.fetch(query);
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <Brands />
      {/* Product Listing */}
      <ProductListSec
        title="NEW ARRIVALS"
        data={filteredProducts}
        viewAllLink="/shop#new-arrivals"
      />

      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
      </div>

      <div className="mb-[50px] sm:mb-20">
        <ProductListSec
          title="TOP SELLING"
          data={filteredProducts}
          viewAllLink="/sale"
        />
      </div>
      
             <div className="mb-[50px] sm:mb-20">
       <DressStyle />
      </div>
{/*     <Reviews data={reviewsData} /> */}
    </div>
  );
};

export default Page;





