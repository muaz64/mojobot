import { getMojoChat } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message, history } = await req.json();

    const chat = getMojoChat(history || []);

    
    const result = await chat.sendMessage({
      message: message,
    });

    return NextResponse.json({ text: result.text });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "MojoBot is having a nap! Try again." },
      { status: 500 }
    );
  }
}