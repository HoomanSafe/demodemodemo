import { Card, CardContent } from "@/components/ui/card"

const roadmapData = [
  {
    quarter: "Q1 2025",
    items: [
      "Launch of AIBlockX MVP",
      "Beta testing for predictive analytics tools"
    ]
  },
  {
    quarter: "Q2 2025",
    items: [
      "Integration with multiple blockchain networks",
      "Introduction of AIBX token staking"
    ]
  },
  {
    quarter: "Q3 2025",
    items: [
      "Launch of AI-powered trading bots",
      "Strategic partnerships with DeFi platforms"
    ]
  },
  {
    quarter: "Q4 2025",
    items: [
      "Expansion into global markets",
      "Community governance launch"
    ]
  }
]

export function RoadmapSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {roadmapData.map((phase, index) => (
        <Card key={phase.quarter} className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">{phase.quarter}</h3>
            <ul className="space-y-2">
              {phase.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-300 flex items-start gap-2">
                  <span className="block w-2 h-2 mt-2 rounded-full bg-purple-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

