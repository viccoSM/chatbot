export function formatPrice(value) {
  if (!value && value !== 0) return "";
  return `$${Number(value).toFixed(2)}`;
}

export function normalizeText(text) {
  return text.toLowerCase().trim();
}

export function normalizeText(text) {
  return text.toLowerCase().trim();
}

export function extractBudget(text) {
  const match = text.match(/\$(\d+)/);
  return match ? Number(match[1]) : null;
}

export function extractKeywords(text) {
  return text
    .replace(/[^a-z0-9\s]/g, "")
    .split(" ")
    .filter(Boolean);
}