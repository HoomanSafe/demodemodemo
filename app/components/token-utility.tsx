import { Coins, Lock, Users } from 'lucide-react'
import { Card } from "@/components/ui/card"

export function TokenUtility() {
  const utilities = [
    {
      icon: Lock,
      title: 'Access Premium Features',
      description: 'Use OPERATOR tokens to access premium AI analytics tools and advanced trading features'
    },
    {
      icon: Coins,
      title: 'Stake for Rewards',
      description: 'Earn passive income by staking your OPERATOR tokens in the platform'
    },
    {
      icon: Users,
      title: 'Governance Rights',
      description: 'Participate in platform governance and shape the future of OPERATOR'
    }
  ]

  return (
    <section className="w-full py-16">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl font-bold">Token Utility</h2>
        <p className="mt-4 text-lg text-purple-300">
          The OPERATOR token powers our ecosystem and provides valuable benefits to holders
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {utilities.map((utility, index) => (
          <div 
            key={index} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Card className="bg-[#1a1a2e]/80 backdrop-blur-sm border-purple-500/20 p-6 text-white hover:border-purple-500/40 transition-all duration-300 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
                <utility.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{utility.title}</h3>
              <p className="text-purple-300/80 text-sm">{utility.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

