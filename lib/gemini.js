import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const getMojoChat = (history = []) => {
  return ai.chats.create({
    model: "gemini-2.5-flash-preview", 
    systemInstruction: "Your name is MojoBot. You are a stylish and smart personal assistant. Use Bengali and English.",
    history: history,
  });
};