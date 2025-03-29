import { NextResponse } from "next/server"

export async function GET() {
  // Mock user data
  const user = {
    id: "user-001",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    preferences: {
      preferredAirlines: ["Air India", "Vistara", "IndiGo"],
      preferredHotels: ["Marriott", "IHG", "Taj"],
      travelGoals: ["Europe Trip", "Domestic Getaways", "Business Travel"],
    },
    spendingProfile: {
      monthlyAverage: 85000,
      categories: {
        dining: 12450,
        travel: 24780,
        shopping: 8340,
        utilities: 5670,
        entertainment: 3560,
        others: 30200,
      },
    },
    creditScore: {
      score: 780,
      lastUpdated: "2023-05-15",
      source: "CIBIL",
    },
  }

  return NextResponse.json(user)
}

