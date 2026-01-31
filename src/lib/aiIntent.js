export async function extractIntent(message) {

  console.log(process.env.OPENAI_API_KEY)
  const res = await fetch("/api/intent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  if (!res.ok) {
    throw new Error("LLM intent extraction failed");
  }

  const data = await res.json();
  return data.intent;
}
