import products from "../data/products.json";
import {
  normalizeText,
  extractBudget,
  extractKeywords
} from "./formatters";

export function handleUserMessage(message, context = {}) {
  const text = normalizeText(message);
  const budget = extractBudget(text);
  const keywords = extractKeywords(text);

  let results = [];

  if (text.includes("gift")) {
    results = products.filter((p) =>
      p.department?.toLowerCase().includes("women")
    );

    if (budget) {
      results = results.filter((p) => p.price <= budget);
    }

    return {
      text:
        "That’s sweet 💕 Here are some gift ideas that are popular:",
      products: results.slice(0, 6),
      quickReplies: ["Under $50", "Under $100"]
    };
  }


  if (
    text.includes("difference") ||
    text.includes("compare")
  ) {
    const last = context.lastProducts || [];

    if (last.length < 2) {
      return {
        text:
          "Please show me at least two products first so I can compare them."
      };
    }

    const [a, b] = last;

    return {
      text: `Here’s a quick comparison 👇`,
      comparison: {
        left: {
          name: a.name,
          price: `$${a.price}`,
          category: a.category
        },
        right: {
          name: b.name,
          price: `$${b.price}`,
          category: b.category
        }
      }
    };
  }

  if (
    text.includes("size") ||
    text.includes("medium") ||
    text.includes("available")
  ) {
    const last = context.lastProducts || [];

    if (last.length === 0) {
      return {
        text:
          "Which product are you referring to? Please select a product first."
      };
    }

    const product = last[0];
    const size = text.includes("medium") ? "M" : null;

    const stock = products.find(
      (i) =>
        i.product_id === product.id &&
        (!size || i.size === size)
    );

    if (!stock || stock.stock === 0) {
      return {
        text: `Sorry 😕 ${product.name} is currently out of stock in that size.`
      };
    }

    return {
      text: `Yes! ${product.name} is available in ${stock.size}. 🎉`
    };
  }

  if (
    text.includes("discount") ||
    text.includes("promo") ||
    text.includes("checkout")
  ) {
    return {
      text:
        "To apply a discount code:\n\n1️⃣ Add items to your cart\n2️⃣ Go to checkout\n3️⃣ Enter your code in the promo field\n4️⃣ Apply and review the updated total\n\nLet me know if you need help finding a code!"
    };
  }

   const isDiscovery =
    keywords.length > 0 || budget !== null;

  if (isDiscovery) {
    results = products.filter((p) => {
      const matchesBudget = budget
        ? p.price <= budget
        : true;

      const matchesKeyword = keywords.some((k) =>
        p.name.toLowerCase().includes(k) ||
        p.category?.toLowerCase().includes(k)
      );

      return matchesBudget && matchesKeyword;
    });

    if (results.length === 0) {
      return {
        text:
          "I couldn’t find anything matching that. Want to try a different budget or keyword?"
      };
    }

    return {
      text: "Here’s what I found for you:",
      products: results.slice(0, 6)
    };
  }

  return {
    text:
      "I can help you find products, compare items, check availability, or guide you through checkout. 😊"
  };
}
