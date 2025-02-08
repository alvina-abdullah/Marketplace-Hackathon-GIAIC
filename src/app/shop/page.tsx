'use client';

import { useEffect, useState } from "react";
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FiSliders } from "react-icons/fi";
import ProductCard from "@/components/common/ProductCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Product } from "@/types/products";
import client from "@/sanity/lib/client";
import SearchAndFilter from "@/components/SearchAndFilter";

const fetchProducts = async () => {
  const query = `*[ _type == "products"] {
    name,
    title,
    price,
    new,
    "slug": slug.current,
    description,
    category,
    search,
    discountPercent,
    "image": image.asset._ref,
    "_id": id,
 
  }`;

  return await client.fetch<Product[]>(query);
};

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

 

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedProducts = (filteredProducts.length > 0 ? filteredProducts : products).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil((filteredProducts.length > 0 ? filteredProducts.length : products.length) / itemsPerPage);

  return (
    <main className="pb-20">
       
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex flex-col w-full space-y-5">
          <SearchAndFilter products={products} setFilteredProducts={setFilteredProducts} />

          {loading ? (
            <p>Loading products...</p>
          ) : displayedProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className=" border-gray-300 border-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 text-start px-12 gap-9 justify-around lg:gap-6">
             
              {displayedProducts.map((product) => (
                <ProductCard key={product._id} data={product} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <Pagination className="justify-between">
              <PaginationPrevious onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />
              <PaginationContent>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink onClick={() => handlePageChange(page)} className={currentPage === page ? "text-black font-bold" : "text-black/50 font-medium text-sm"}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
              <PaginationNext onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} />
            </Pagination>
          )}
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
