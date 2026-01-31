import clsx from "clsx";

export default function TypingIndicator() {
  return (
    <div
      className={clsx(
        "flex items-center gap-2",
        "text-gray-400 text-sm"
      )}
    >
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
      </div>
      Typing...
    </div>
  );
}
