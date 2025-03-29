import { ShoppingBag, Utensils, Plane, Home, CreditCard } from "lucide-react"

export function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      merchant: "Amazon",
      amount: 2450,
      date: "May 20, 2023",
      category: "Shopping",
      icon: ShoppingBag,
      cardLast4: "4567",
    },
    {
      id: 2,
      merchant: "Taj Restaurant",
      amount: 3200,
      date: "May 18, 2023",
      category: "Dining",
      icon: Utensils,
      cardLast4: "8901",
    },
    {
      id: 3,
      merchant: "Air India",
      amount: 24500,
      date: "May 15, 2023",
      category: "Travel",
      icon: Plane,
      cardLast4: "4567",
    },
    {
      id: 4,
      merchant: "Rent Payment",
      amount: 30000,
      date: "May 5, 2023",
      category: "Housing",
      icon: Home,
      cardLast4: "2345",
    },
    {
      id: 5,
      merchant: "HDFC Credit Card Bill",
      amount: 45000,
      date: "May 2, 2023",
      category: "Bills",
      icon: CreditCard,
      cardLast4: "8901",
    },
  ]

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <transaction.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">{transaction.merchant}</p>
              <p className="text-xs text-muted-foreground">
                {transaction.date} • {transaction.category}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">₹{transaction.amount.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Card ending {transaction.cardLast4}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

