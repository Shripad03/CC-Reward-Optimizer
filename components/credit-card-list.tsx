import { CreditCard } from "lucide-react"

export function CreditCardList() {
  const cards = [
    {
      id: 1,
      name: "HDFC Diners Club",
      lastFour: "4567",
      expiryDate: "05/26",
      type: "Visa",
      color: "bg-gradient-to-r from-black to-gray-800",
    },
    {
      id: 2,
      name: "Axis EDGE",
      lastFour: "8901",
      expiryDate: "11/25",
      type: "Mastercard",
      color: "bg-gradient-to-r from-blue-600 to-blue-400",
    },
    {
      id: 3,
      name: "SBI PRIME",
      lastFour: "2345",
      expiryDate: "08/27",
      type: "Visa",
      color: "bg-gradient-to-r from-purple-600 to-purple-400",
    },
  ]

  return (
    <div className="space-y-4">
      {cards.map((card) => (
        <div key={card.id} className={`${card.color} text-white rounded-xl p-4 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-1">
              <p className="text-xs text-white/70">Card</p>
              <p className="font-medium">{card.name}</p>
            </div>
            <CreditCard className="h-6 w-6" />
          </div>
          <div className="space-y-4">
            <p className="font-mono text-lg tracking-wider">•••• •••• •••• {card.lastFour}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-white/70">Expires</p>
                <p className="font-mono text-sm">{card.expiryDate}</p>
              </div>
              <div className="font-medium text-sm">{card.type}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

