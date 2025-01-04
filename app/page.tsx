'use client'

import { useChat } from 'ai/react'
import { Send, Bot } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { StarBackground } from './components/star-background'
import { FeatureCard } from './components/feature-card'
import { WalletConnect } from './components/wallet-connect'
import { useEffect, useRef } from 'react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        content: 'Hello! How can I assist you today with trading, cryptocurrency, or technology questions?'
      }
    ]
  })
  
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === '') return
    await handleSubmit(e)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarBackground />
      
      <div className="relative z-10 flex flex-col items-center p-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="w-full text-center mb-12 pt-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <h1 className="text-4xl font-bold">AIBLOCKX</h1>
            <div className="w-[60px] h-[60px] rounded-full bg-purple-600 flex items-center justify-center">
              <Bot className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Experience Genius AI</h2>
          <p className="text-purple-300 mb-6">
            Try GENIUS today and see how automated intelligence can transform your trading game.
            <br />
            Early users will be rewarded with $GENIUS Airdrop.
          </p>
          <WalletConnect />
        </div>

        {/* Chat Interface */}
        <Card className="w-full max-w-2xl bg-[#1a1a2e]/80 backdrop-blur-sm border-purple-500/20 text-white mb-12">
          <div className="h-[300px] overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.role === 'assistant' ? 'text-purple-300' : 'text-white'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                )}
                <div className={`flex-1 px-4 py-2 rounded-lg ${
                  message.role === 'assistant' ? 'bg-purple-500/10' : 'bg-purple-600/20'
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 animate-pulse" />
                </div>
                <div className="flex-1 px-4 py-2 rounded-lg bg-purple-500/10">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="text-red-500 px-4 py-2 rounded-lg bg-red-500/10">
                Error: {error.message}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="border-t border-purple-500/20 p-4">
            <form onSubmit={handleFormSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 bg-purple-500/10 border-purple-500/20 text-white placeholder:text-purple-300/50"
              />
              <Button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700"
                disabled={isLoading || input.trim() === ''}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
        {/* Features Section */}
        <div className="w-full">
          <h3 className="text-2xl font-bold text-center mb-8">Advanced Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Neural Networks"
              description="Advanced pattern recognition and learning capabilities powered by state-of-the-art neural networks."
              icon="brain"
            />
            <FeatureCard
              title="Processing Power"
              description="Lightning-fast processing capabilities for real-time analysis and response generation."
              icon="cpu"
            />
            <FeatureCard
              title="Deep Learning"
              description="Sophisticated deep learning algorithms that evolve and improve over time."
              icon="network"
            />
              <FeatureCard
              title="AI-Powered Predictive Analytics"
              description="Gain actionable insights through powerful AI models that analyze trends,
               predict market movements, and optimize investment strategies.
               Real-time data processing to deliver accurate forecasts f
               or market behavior and asset performance."
              icon="botmessagesquare"
            />
            <FeatureCard
              title="Decentralized Automated Trading"
              description="Utilize AI-powered trading bots integrated with blockchain smart contracts 
              for automated, transparent, and efficient trading strategies.
              Customizable parameters for both beginners and advanced traders to 
              optimize returns."
              icon="chart"
            />
            <FeatureCard
              title="Data Privacy and Security"
              description="Advanced encryption and blockchain verification 
              protocols ensure the utmost security and immutability of 
              user data and transactions.
 Transparent audit trails that guarantee trust and accountability within 
 the ecosystems."
              icon="packed"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

