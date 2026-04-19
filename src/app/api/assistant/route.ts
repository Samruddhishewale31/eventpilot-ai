import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import { mockSessions, mockRooms, mockFAQs } from "@/data/mock";

// Validation schema for the request body
const requestSchema = z.object({
  message: z.string().min(1).max(1000),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    parts: z.array(z.object({ text: z.string() }))
  })).optional()
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Security: Validate request body
    const result = requestSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const { message, history } = result.data;

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ 
        error: "API key not configured",
        fallback: true,
        reply: "I'm currently in offline mode. I can help with basic venue info, but complex queries require a connection."
      }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Inject knowledge base into the system prompt
    const systemPrompt = `
      You are "Stellar Nexus", the elite AI concierge for TechSummit 2026. 
      Your tone is professional, high-tech, and helpful.
      
      CONTEXT:
      - Total Sessions: ${mockSessions.length}
      - Total Rooms: ${mockRooms.length}
      - Event Date: 2026
      
      KNOWLEDGE BASE:
      - Sessions: ${JSON.stringify(mockSessions.slice(0, 10))}...
      - Rooms: ${JSON.stringify(mockRooms)}
      - FAQs: ${JSON.stringify(mockFAQs)}
      
      GUIDELINES:
      - If asked about sessions, refer to the mockSessions data.
      - If asked about rooms or directions, refer to mockRooms.
      - If you don't know the answer, stay in character and suggest asking the Help Desk.
      - Keep responses concise and focused on the event.
    `;

    const chat = model.startChat({
      history: history || [],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    // We prepend the system prompt instructions to the message for the one-shot context enhancement
    const prompt = `${systemPrompt}\n\nUser Query: ${message}`;
    const response = await chat.sendMessage(prompt);
    const reply = response.response.text();

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ 
      error: "Service unavailable",
      fallback: true,
      reply: "The Nexus is experiencing high latency. Please try again or check the FAQ section."
    }, { status: 500 });
  }
}
