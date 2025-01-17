import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export const runtime = 'edge'

interface ChatError extends Error {
  status?: number
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = streamText({
      model: openai('gpt-3.5-turbo'),
      messages,
      system: "You are VIRTU AI, an advanced artificial intelligence assistant focused on providing clear and accurate responses about trading, cryptocurrency, and technology. Be professional yet engaging in your responses.",
    })

    return result.toDataStreamResponse()
  } catch (error) {
    const chatError = error as ChatError
    return new Response(
      JSON.stringify({ 
        error: chatError.message || 'An error occurred',
        status: chatError.status || 500
      }),
      { 
        status: chatError.status || 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    )
  }
}

