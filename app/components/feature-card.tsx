import { Brain, Cpu, Network, BotMessageSquare, ChartCandlestick, Package2 } from 'lucide-react'
import { Card } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: 'brain' | 'cpu' | 'network' | 'botmessagesquare' | 'chart' | `packed`
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = {
    brain: Brain,
    cpu: Cpu,
    network: Network,
    botmessagesquare : BotMessageSquare,
    chart: ChartCandlestick,
    packed: Package2
  }[icon]

  return (
    <Card className="bg-[#1a1a2e]/80 backdrop-blur-sm border-purple-500/20 p-6 text-white">
      <div className="mb-4">
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-purple-300/80 text-sm">{description}</p>
    </Card>
  )
}

