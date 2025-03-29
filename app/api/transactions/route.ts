import { NextResponse } from "next/server"

export async function GET() {
  // Mock data for transactions
  const transactions = [
    {
      id: "tx-001",
      merchant: "Amazon",
      amount: 2450,
      date: "2023-05-20",
      category: "Shopping",
      cardLast4: "4567",
      rewardsEarned: 245,
    },
    {
      id: "tx-002",
      merchant: "Taj Restaurant",
      amount: 3200,
      date: "2023-05-18",
      category: "Dining",
      cardLast4: "8901",
      rewardsEarned: 640,
    },
    {
      id: "tx-003",
      merchant: "Air India",
      amount: 24500,
      date: "2023-05-15",
      category: "Travel",
      cardLast4: "4567",
      rewardsEarned: 2450,
    },
    {
      id: "tx-004",
      merchant: "Rent Payment",
      amount: 30000,
      date: "2023-05-05",
      category: "Housing",
      cardLast4: "2345",
      rewardsEarned: 300,
    },
    {
      id: "tx-005",
      merchant: "HDFC Credit Card Bill",
      amount: 45000,
      date: "2023-05-02",
      category: "Bills",
      cardLast4: "8901",
      rewardsEarned: 0,
    },
    {
      id: "tx-006",
      merchant: "Flipkart",
      amount: 5600,
      date: "2023-04-28",
      category: "Shopping",
      cardLast4: "4567",
      rewardsEarned: 560,
    },
    {
      id: "tx-007",
      merchant: "Indigo Airlines",
      amount: 12300,
      date: "2023-04-25",
      category: "Travel",
      cardLast4: "8901",
      rewardsEarned: 1230,
    },
    {
      id: "tx-008",
      merchant: "Marriott Hotel",
      amount: 18500,
      date: "2023-04-20",
      category: "Travel",
      cardLast4: "4567",
      rewardsEarned: 1850,
    },
  ]

  return NextResponse.json(transactions)
}

