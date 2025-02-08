"use client";
import * as motion from "framer-motion/client";
import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ReviewCard from "@/components/common/ReviewCard";
import { Review } from "@/types/review.types";
import { integralCF } from "@/styles/fonts"; // Import the font style

type ReviewsProps = { data: Review[] };

const Reviews = ({ data }: ReviewsProps) => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handlePrevious = () => {
    if (carouselRef.current) {
      const newIndex = current === 0 ? data.length - 1 : current - 1;
      setCurrent(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * carouselRef.current.offsetWidth,
        behavior: "smooth", // Smooth scroll behavior
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const newIndex = current === data.length - 1 ? 0 : current + 1;
      setCurrent(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * carouselRef.current.offsetWidth,
        behavior: "smooth", // Smooth scroll behavior
      });
    }
  };

  return (
    <section className="overflow-hidden">
      <div className="relative w-full mb-6 md:mb-9">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4 xl:px-0">
          <h2
            className={`${integralCF.className} text-[32px] leading-[36px] md:text-5xl capitalize font-bold`}
          >
             <motion.h2
              initial={{ y: "100px", opacity: 0 }}
               whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
            OUR HAPPY CUSTOMERS
            </motion.h2>
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              className="text-2xl p-2 rounded-full border border-gray-300 hover:bg-gray-200"
              aria-label="Previous"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="text-2xl p-2 rounded-full border border-gray-300 hover:bg-gray-200"
              aria-label="Next"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="relative flex overflow-x-scroll mt-6 scroll-smooth snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {data.map((review, index) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-full max-w-[400px] mx-auto px-4 snap-start"
            >
              <ReviewCard className="h-full" data={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
