import { Card } from "@/components/ui/card"

export function RoadmapSection() {
  const roadmap = [
    {
      quarter: 'Q1 2025',
      items: [
        'Launch of AIBLOCKX MVP',
        'Beta testing for predictive analytics tools'
      ]
    },
    {
      quarter: 'Q2 2025',
      items: [
        'Integration with multiple blockchain networks',
        'Introduction of AIBLOCKX token staking'
      ]
    },
    {
      quarter: 'Q3 2025',
      items: [
        'Launch of AI-powered trading bots',
        'Strategic partnerships with DeFi platforms'
      ]
    },
    {
      quarter: 'Q4 2025',
      items: [
        'Expansion into global markets',
        'Community governance launch'
      ]
    }
  ]

  return (
    <section className="w-full py-16 bg-purple-900/10">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl font-bold">Roadmap</h2>
        <p className="mt-4 text-lg text-purple-300">
          Our journey to revolutionize AI and blockchain integration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {roadmap.map((phase, index) => (
          <div 
            key={index} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Card className="bg-[#1a1a2e]/80 backdrop-blur-sm border-purple-500/20 p-6 text-white hover:border-purple-500/40 transition-all duration-300 hover-scale">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">{phase.quarter}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                    <span className="text-purple-300">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

