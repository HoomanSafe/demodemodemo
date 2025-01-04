import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

// Set the runtime to edge for better performance
export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Create a stream using the AI SDK
    const result = streamText({
      model: openai('gpt-3.5-turbo'),
      messages,
      system: "You are Genius AI, an advanced artificial intelligence assistant focused on providing clear and accurate responses about trading, cryptocurrency, and technology. Be professional yet engaging in your responses.",
    })

    // Return the stream response
    return result.toDataStreamResponse()
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || 'An error occurred' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

