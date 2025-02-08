import { Product } from "@/types/products";
import { useEffect, useState } from "react";

const CategoryFilter = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Generating unique categories from products
  const uniqueCategories = Array.from(
    new Set(
      products
        .map((product) => product.category)
        .filter((category) => category) // Remove null or undefined
    )
  );

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Selected Category:", selectedCategory);
    // You can modify this function to filter products or perform any other action
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center">
      {/* Category Dropdown */}
      <select
        className="border px-4 py-2 rounded-md w-full md:w-1/4"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {uniqueCategories.length > 0 ? (
          uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
        ) : (
          <option disabled>No Categories Found</option>
        )}
      </select>

    
    </form>
  );
};

export default CategoryFilter;
