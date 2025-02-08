import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import client from "@/sanity/lib/client";
import { Link1Icon } from "@radix-ui/react-icons";
import { MouseEvent } from "react";
import product from "@/sanity/schemaTypes/product";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2"
type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  console.log(data.slug); 


  return (
    <>
      <div className="rounded-lg border-gray-300 border-1 h-full w-full">
        <Link
        href={`/shop/product/${data.slug}`}
        className="flex flex-col items-start aspect-auto"
      >
      
        <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full aspect-square mb-2.5 xl:mb-4 overflow-hidden ">
          {data.image ? (
            
            <Image
              src={urlFor(data.image).url()} // Using image asset reference
              width={295}
              height={298}
              className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
              alt={data.title || "Product Image"} // Use title for alt text as fallback
            />
          ) : (
            <p className="text-gray-500">No image available</p>
          )}
        </div>
        <strong><p className=" text-black xl:text-xl">{data.name}</p></strong>
        {/* <strong className="text-black xl:text-xl">{data.title}</strong> Changed to title */}
        <div className="flex items-end mb-1 xl:mb-2 text-black">
         {data.new}
        </div>
        <p className="text-sm text-red-600 ">{data.discountPercent}% OFF</p>
        <p className="font-semibold text-black ">${data.price}</p>

        </Link>
     
      <div>
        <button className="w-full bg-black h-10 rounded-sm mt-4 text-white"
          onClick={(e) => handleAddToCart(e, product)}>
          Add to cart
        </button>
      </div>
      
      </div>
    </>
 );
};

// Fetch products data and pass them as props (for page rendering)
export const fetchProducts = async () => {
  const query = `*[ _type == "products"] {
    name,
    title,
    price,
    new,
    description,
    "image": image.asset->_ref,
    "slug": slug.current, // Added slug field in the query
    rating,
    discountPercent
  }`;
  
  const products: Product[] = await client.fetch(query);
  return products;
};
const handleAddToCart =(e: React.MouseEvent, product: Product) => {
  e.preventDefault()
  Swal.fire({
    position: "top-right",
    icon: "success",
    title: `${product.name} added to cart`,
    showConfirmButton: false,
    timer: 1000,

  })
  addToCart(product)

}

export default ProductCard;

