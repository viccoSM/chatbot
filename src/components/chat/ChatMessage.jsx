import clsx from "clsx";
import ProductCarousel from "../product/ProductCaraousel";

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={clsx(
        "flex w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={clsx(
          "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
          isUser
            ? "bg-black text-white"
            : "bg-white text-gray-900 border"
        )}
      >
        {/* Message text */}
        <p className="whitespace-pre-line">
          {message.text}
        </p>

        {/* Product list */}
        {message.products && message.products.length > 0 && (
          <div className="mt-3">
            <ProductCarousel products={message.products} />
          </div>
        )}
      </div>
    </div>
  );
}
