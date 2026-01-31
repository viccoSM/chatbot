import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("API KEY:", process.env.OPENAI_API_KEY);

  try {
    const { message } = await req.json();

    const res = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          temperature: 0,
          messages: [
            {
              role: "system",
              content:
                "You are an API. ONLY return valid JSON. No explanation. Fields: action, keywords, budget, recipient, size."
            },
            {
              role: "user",
              content: message
            }
          ]
        })
      }
    );

    const raw = await res.json();

    if (!res.ok) {
      console.error("OpenAI error:", raw);
      return NextResponse.json(raw, { status: res.status });
    }

    return NextResponse.json({
      intent: JSON.parse(raw.choices[0].message.content)
    });
  } catch (err) {
    console.error("Server error:", err.message);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
