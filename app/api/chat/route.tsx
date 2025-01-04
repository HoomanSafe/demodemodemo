import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    // Validate that we have an API key
    if (!process.env.OPENAI_API_KEY) {
      return new Response('OpenAI API key not configured', { status: 500 })
    }

    const { messages } = await req.json()
    
    // Validate messages
    if (!messages || !Array.isArray(messages)) {
      return new Response('Invalid messages format', { status: 400 })
    }

    const result = await streamText({
      model: openai('gpt-4'),
      messages,
      system: "You are Genius AI, an advanced AI assistant focused on helping users with trading and cryptocurrency. Be concise and professional in your responses.",
    })

    return result.toDataStreamResponse()
  } catch (error: any) {
    console.error('Chat API error:', error)
    return new Response(error.message || 'An error occurred', { status: 500 })
  }
}

