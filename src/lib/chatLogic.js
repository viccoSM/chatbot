import products from "../data/products.json";
import inventory from "../data/inventory.json";
import { normalizeText } from "./formatters";

export function handleUserMessage(message) {
  const text = normalizeText(message);

  // 1️⃣ Vague product search
  if (text.includes("gift") && text.includes("girlfriend")) {
    const suggestions = products.filter(
      (p) => p.department === "Women"
    );

    if (suggestions.length === 0) {
      return {
        text: "Sorry, I couldn't find any gift ideas right now 😔"
      };
    }

    return {
      text: "Looking for a gift can be tricky 💕 Here are some popular options:",
      products: suggestions.slice(0, 6),
      quickReplies: ["Under $50", "Under $100"]
    };
  }

  // 2️⃣ Budget filter — Under $50
  if (text.includes("under $50")) {
    const filtered = products.filter((p) => p.price <= 50);

    if (filtered.length === 0) {
      return {
        text: "I couldn't find any products under $50. Would you like to try a higher budget?"
      };
    }

    return {
      text: "Here are some great options under $50:",
      products: filtered
    };
  }

  // 3️⃣ Budget filter — Under $100
  if (text.includes("under $100")) {
    const filtered = products.filter((p) => p.price <= 100);

    if (filtered.length === 0) {
      return {
        text: "I couldn't find any products under $100. Want to explore other options?"
      };
    }

    return {
      text: "Here are some great options under $100:",
      products: filtered
    };
  }

  // 4️⃣ Inventory / size awareness
  if (text.includes("size")) {
    const availableInventory = inventory.filter(
      (i) => i.stock > 0
    );

    if (availableInventory.length === 0) {
      return {
        text: "Unfortunately, all sizes are currently out of stock 😕"
      };
    }

    const availableProductIds = availableInventory.map(
      (i) => i.product_id
    );

    const availableProducts = products.filter((p) =>
      availableProductIds.includes(p.id)
    );

    if (availableProducts.length === 0) {
      return {
        text: "That product is currently unavailable in the requested size."
      };
    }

    return {
      text: "Good news! These products have available sizes:",
      products: availableProducts
    };
  }

  // 5️⃣ Fallback / unknown intent
  return {
    text: "I'm not sure I understood that 🤔 You can try asking for a gift, budget, or available sizes."
  };
}
