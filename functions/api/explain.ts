interface Env {
  ANTHROPIC_API_KEY: string;
}

interface ExplainRequest {
  selectedText: string;
  questionType: "explain" | "why";
  lessonTitle?: string;
  unitTitle?: string;
}

interface AnthropicResponse {
  content: Array<{ type: string; text: string }>;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const apiKey = context.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return json({ error: "ANTHROPIC_API_KEY not configured on this deployment." }, 500);
  }

  let body: ExplainRequest;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const { selectedText, questionType, lessonTitle, unitTitle } = body;

  if (!selectedText || selectedText.trim().length < 5) {
    return json({ error: "selectedText too short." }, 400);
  }

  const systemPrompt = `You are Nobi, a concise AI PM learning tutor. The user is preparing for a Senior PM role at Tightly — an AI-native inventory planning platform built for Shopify brands. Tightly replaces spreadsheet-driven replenishment with a composite scoring engine (velocity, trend, seasonality, supplier reliability), automated PO workflows, backorder management (InStock), multi-location planning, and dynamic pricing. Key metrics: Days of Stock (DoS), MAPE forecast accuracy, PO Acceptance Rate, Stockout Rate.

The user has highlighted text from a lesson and wants help. Be concise: 2–3 short paragraphs max.

Always respond with valid JSON only — no markdown fences, no extra text:
{
  "explanation": "Your explanation here",
  "resources": [
    { "title": "Resource title", "url": "https://...", "description": "One sentence." }
  ]
}

Rules:
- "explain" questions: clarify the concept in plain language, using concrete analogies if helpful
- "why" questions: explain the underlying motivation, tradeoff, or design principle
- Resources: 2–3 real, specific URLs (papers, docs, blog posts, courses) — only include URLs you are confident are real
- Keep explanations under 200 words
- Where relevant, connect to Tightly's context: Shopify DTC brands, inventory planning, supply chain ops, AI forecasting, B2B SaaS PM craft`;

  const userPrompt =
    questionType === "explain"
      ? `I'm studying "${lessonTitle}"${unitTitle ? ` (${unitTitle})` : ""} and want a deeper explanation of this passage:\n\n"${selectedText}"`
      : `I'm studying "${lessonTitle}"${unitTitle ? ` (${unitTitle})` : ""} and want to understand the reasoning behind this:\n\n"${selectedText}"\n\nWhy does this matter? What's the underlying principle?`;

  let anthropicRes: Response;
  try {
    anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });
  } catch (err) {
    return json({ error: `Failed to reach Anthropic API: ${String(err)}` }, 502);
  }

  if (!anthropicRes.ok) {
    const errText = await anthropicRes.text();
    return json({ error: `Anthropic error ${anthropicRes.status}: ${errText}` }, 502);
  }

  const data = (await anthropicRes.json()) as AnthropicResponse;
  const rawText = data.content?.[0]?.text ?? "{}";

  let parsed: { explanation?: string; resources?: unknown[] };
  try {
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : { explanation: rawText, resources: [] };
  } catch {
    parsed = { explanation: rawText, resources: [] };
  }

  return json(parsed, 200);
};

// Handle preflight CORS for local dev scenarios
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
