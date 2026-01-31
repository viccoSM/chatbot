import clsx from "clsx";

export default function ProductCard({ product, compact = false }) {
  if (!product) return null;

  return (
    <div
      className={clsx(
        "border rounded-xl bg-white",
        "p-3",
        "flex flex-col gap-1",
        compact ? "text-xs" : "text-sm"
      )}
    >
      {/* Image placeholder */}
      <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
        No Image
      </div>

      <div className="font-medium line-clamp-2">
        {product.name}
      </div>

      <div className="text-gray-500">
        {product.brand}
      </div>

      <div className="font-semibold mt-1">
        ${product.price}
      </div>
    </div>
  );
}
