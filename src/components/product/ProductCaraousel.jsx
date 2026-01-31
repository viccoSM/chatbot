"use client";

import clsx from "clsx";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-2">
      <div
        className={clsx(
          "flex gap-3 overflow-x-auto",
          "pb-2",
          "snap-x snap-mandatory"
        )}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-45 snap-start"
          >
            <ProductCard product={product} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
