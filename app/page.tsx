'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wallet, Send, CheckCircle2, ArrowRight, Cpu, Shield, Users, BarChart3, Network } from 'lucide-react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import StarryBackground from './components/star-background'
import Link from 'next/link'
import { useChat } from 'ai/react'
import { useToast } from "@/components/ui/use-toast"
import { RoadmapSection } from "./components/roadmap"
import { FeatureCard } from "./components/feature-card"
import { CoreFeature } from "./components/core-featured"
import { TokenUtility } from "./components/token-utility"


export default function Home() {
  const { toast } = useToast()
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || 'An error occurred while sending your message'
      });
    }
  })

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center min-h-screen">
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-4xl font-bold tracking-wider">GENIUS AI</h1>
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="AI Head"
            width={80}
            height={80}
            className="filter hue-rotate-240"
          />
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-12">
          <Link href="#" className="hover:text-purple-400 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.26-2.05-.48-.83-.27-1.49-.42-1.43-.89.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.62 4.75-1.9 5.27-1.91.12 0 .37.03.54.17.14.12.18.28.2.45-.02.14-.02.3-.03.42z" />
            </svg>
          </Link>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl font-bold mb-6">Experience Genius AI</h2>
          <p className="text-gray-300 mb-8">
            Try GENIUS today and see how automated intelligence can transform your trading game.
            Early users will be rewarded with $GENIUS Airdrop.
          </p>
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg"
          >
            <Wallet className="mr-2" />
            Connect Wallet
          </Button>
        </div>

        {/* Chat Interface */}
        <div className="w-full max-w-2xl bg-[#1a1a2e] rounded-lg p-6 mt-auto">
          <div className="min-h-[200px] max-h-[400px] mb-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-[#2a2a3e] text-gray-100'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#2a2a3e] text-gray-100 rounded-lg px-4 py-2">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="bg-[#2a2a3e] border-none text-white"
            />
            <Button 
              type="submit"
              className="bg-purple-600 hover:bg-purple-700"
              disabled={isLoading}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is AIBlockX?</h2>
            <p className="text-gray-300 text-lg">
              AIBlockX is a multi-chain AI-powered platform built to deliver state-of-the-art solutions in predictive analytics, 
              decentralized finance (DeFi), automated trading systems, and intelligent digital asset management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoreFeature
              icon={<Cpu className="h-8 w-8 text-purple-400" />}
              title="AI-Powered Analytics"
              description="Gain actionable insights through powerful AI models that analyze trends and predict market movements."
            />
            <CoreFeature
              icon={<BarChart3 className="h-8 w-8 text-purple-400" />}
              title="Automated Trading"
              description="Utilize AI-powered trading bots integrated with blockchain smart contracts for efficient trading."
            />
            <CoreFeature
              icon={<Network className="h-8 w-8 text-purple-400" />}
              title="Cross-Chain Compatibility"
              description="Seamless integration across multiple blockchain networks, ensuring flexibility and scalability."
            />
            <CoreFeature
              icon={<Wallet className="h-8 w-8 text-purple-400" />}
              title="AIBX Token"
              description="Access exclusive platform features and premium AI tools using AIBX tokens."
            />
            <CoreFeature
              icon={<Shield className="h-8 w-8 text-purple-400" />}
              title="Security First"
              description="Advanced encryption and blockchain verification protocols ensure utmost security."
            />
            <CoreFeature
              icon={<Users className="h-8 w-8 text-purple-400" />}
              title="Community Governed"
              description="Token holders have the ability to propose and vote on platform upgrades."
            />
          </div>
        </div>
      </section>

      {/* Token Utility Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Token Utility</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TokenUtility
              title="Premium Access"
              description="Access premium AI analytics tools and advanced trading features"
            />
            <TokenUtility
              title="Staking Rewards"
              description="Stake AIBX tokens for passive income and exclusive rewards"
            />
            <TokenUtility
              title="Governance"
              description="Participate in key platform decisions and shape the future of AIBlockX"
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Roadmap</h2>
          <RoadmapSection />
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the AIBlockX Revolution!</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Be part of a smarter, more transparent, and decentralized future powered by AI and blockchain technology.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}

