import React, { useState, useEffect } from "react";
import { Product } from "@/types/products";

type SearchAndFilterProps = {
  products: Product[];
  setFilteredProducts: (filtered: Product[]) => void;
};

const SearchAndFilter = ({ products, setFilteredProducts }: SearchAndFilterProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Extract unique categories, ensuring no null/undefined values
  const uniqueCategories = Array.from(
    new Set(
      products?.map((product) => product.category?.trim()).filter(Boolean) || []
    )
  );

  useEffect(() => {
    if (!products) return;

    let filtered = [...products];

    if (searchTerm.trim()) {
      filtered = filtered.filter((product) =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (maxPrice) {
      const maxPriceNum = Number(maxPrice);
      if (!isNaN(maxPriceNum)) {
        filtered = filtered.filter((product) => product.price <= maxPriceNum);
      }
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, maxPrice, products]);

  return (
    <div className="max-w-frame mx-auto px-4 xl:px-0 my-6 flex flex-col md:flex-row items-center gap-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="border px-4 py-2 rounded-md w-full md:w-1/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Filter */}
      <select
        className="border px-3 py-2 rounded-md w-full md:w-1/4"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Price Filter */}
      <input
        type="number"
        placeholder="Max Price"
        className="border px-5 py-2 rounded-md w-full md:w-1/4"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  );
};

export default SearchAndFilter;