import { Card, CardContent } from "@/components/ui/card"
import { ReactNode } from "react"

interface CoreFeatureProps {
  icon: ReactNode
  title: string
  description: string
}

export function CoreFeature({ icon, title, description }: CoreFeatureProps) {
  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

