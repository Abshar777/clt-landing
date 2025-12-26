
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStepInsight = async (stepTitle: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `As a professional Forex Trading Mentor at CLT Academy, provide a short, motivating insight (max 2 sentences) and 3 quick action tips for the step: "${stepTitle}".`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          insight: { type: Type.STRING },
          tips: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["insight", "tips"]
      }
    }
  });

  return JSON.parse(response.text);
};


export interface RoadmapStep {
    id: number;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface GeminiResponse {
    insight: string;
    tips: string[];
  }
  
