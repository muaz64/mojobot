import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
    try {
        const { message, history } = await req.json();
        const model = genAI.getGenerativeModel({ 
            model: "gemini-3-flash-preview",
            systemInstruction: "Your name is MojoBot. You are a stylish and helpful personal assistant. Respond in Bengali or English based on user input."
        });

        const chat = model.startChat({ history });
        const result = await chat.sendMessage(message);
        const response = await result.response;
        
        return NextResponse.json({ text: response.text() });
    } catch (error) {
        return NextResponse.json({ error: "Connection error" }, { status: 500 });
    }
}