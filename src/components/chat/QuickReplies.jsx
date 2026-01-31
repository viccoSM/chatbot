import clsx from "clsx";

export default function QuickReplies({ options, onSelect }) {
  return (
    <div className="flex gap-2 mt-2 flex-wrap">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={clsx(
            "text-xs px-3 py-1 rounded-full border",
            "bg-white hover:bg-gray-100 transition"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
