import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { businessDesc } = await request.json();

    if (!businessDesc || typeof businessDesc !== "string") {
      return NextResponse.json(
        { error: "Business description is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key is missing" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this business and suggest 3 high-impact AI agents for automation. Business: ${businessDesc}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            auditTitle: { type: Type.STRING },
            potentialSavings: { type: Type.STRING },
            suggestedAgents: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  benefit: { type: Type.STRING },
                  estimatedRoi: { type: Type.STRING }
                },
                required: ["name", "benefit", "estimatedRoi"]
              }
            },
            optimizationTip: { type: Type.STRING }
          },
          required: ["auditTitle", "potentialSavings", "suggestedAgents", "optimizationTip"]
        }
      }
    });

    const result = JSON.parse(response.text as string);
    
    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error("Audit API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate audit" },
      { status: 500 }
    );
  }
}