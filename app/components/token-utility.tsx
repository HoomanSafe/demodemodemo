import { Card, CardContent } from "@/components/ui/card"

interface TokenUtilityProps {
  title: string
  description: string
}

export function TokenUtility({ title, description }: TokenUtilityProps) {
  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

