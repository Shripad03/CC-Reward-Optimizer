import { CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecommendedCards() {
  const cards = [
    {
      id: 1,
      name: "HDFC Diners Club Black",
      benefits: "10X rewards on travel & dining",
      annualFee: "₹10,000 (waived)",
      color: "bg-gradient-to-r from-black to-gray-800",
    },
    {
      id: 2,
      name: "Axis EDGE Credit Card",
      benefits: "2X rewards on all spends",
      annualFee: "₹5,000 (waived)",
      color: "bg-gradient-to-r from-blue-600 to-blue-400",
    },
    {
      id: 3,
      name: "SBI ELITE Card",
      benefits: "5X rewards on international spends",
      annualFee: "₹4,999",
      color: "bg-gradient-to-r from-purple-600 to-purple-400",
    },
  ]

  return (
    <div className="space-y-4">
      {cards.map((card) => (
        <div key={card.id} className="border rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${card.color}`}>
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-medium text-sm">{card.name}</h3>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-xs text-muted-foreground">{card.benefits}</p>
            <p className="text-xs">Annual Fee: {card.annualFee}</p>
          </div>
          <Button variant="outline" size="sm" className="w-full text-xs">
            View Details
          </Button>
        </div>
      ))}
    </div>
  )
}

