"use client";

import { useEffect, useState } from "react";
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import client from "@/sanity/lib/client";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image"; // Ensure correct image rendering

interface ProductPageProps {
  params: { slug: string };
}

// ✅ Function to fetch product data dynamically
async function getProduct(slug: string): Promise<Product | null> {
  try {
    if (!slug) return null;

    const query = groq`
      *[_type == "products" && slug.current == $slug][0]{
        _id,
        name,
        title,
        price,
        description,
        new,
        "slug": slug.current,
        image,
        category,
        discountPercent,
        rating,
        reviews
      }
    `;

    const product = await client.fetch(query, { slug });

    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!params.slug) return;

    setLoading(true);
    getProduct(params.slug).then((fetchedProduct) => {
      setProduct(fetchedProduct);
      setLoading(false);
    });
  }, [params.slug]);

  // ✅ Show a loading state while fetching
  if (loading) {
    return <p className="text-center text-gray-500">Loading product...</p>;
  }

  // ✅ Show a 404 page if product is not found
  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-7xl px-4">
      {/* ✅ Product Image Section */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        <div className="aspect-square">
          {product.image ? (
            <img
              src={urlFor(product.image).url()} // ✅ Corrected image handling
              alt={product.title ?? "Product Image"}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <p className="text-gray-500">No image available</p>
          )}
        </div>
      </div>

      {/* ✅ Product Details */}
      <BreadcrumbProduct title={product.name ?? "Product"} />
      <Header data={product} />
      <Tabs />

      {/* ✅ Related Products Section */}
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={[product]} />
      </div>
    </div>
  );
}
