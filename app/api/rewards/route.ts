import { NextResponse } from "next/server"

// This would normally connect to a database or third-party API
// For this example, we'll return mock data

export async function GET() {
  // Mock data for rewards
  const rewards = {
    creditCards: [
      {
        id: "hdfc-diners",
        name: "HDFC Diners Club",
        points: 32450,
        value: 8112.5,
        expiryDate: null,
      },
      {
        id: "axis-edge",
        name: "Axis EDGE",
        points: 18750,
        value: 4687.5,
        expiryDate: "2023-12-31",
      },
      {
        id: "sbi-prime",
        name: "SBI PRIME",
        points: 12340,
        value: 2468,
        expiryDate: "2024-03-15",
      },
    ],
    airlines: [
      {
        id: "air-india",
        name: "Air India Miles",
        points: 24560,
        tier: "Silver",
        nextTier: "Gold",
        pointsToNextTier: 5440,
        expiryDate: "2024-06-30",
      },
      {
        id: "vistara",
        name: "Vistara Club",
        points: 12340,
        tier: "Base",
        nextTier: "Silver",
        pointsToNextTier: 7660,
        expiryDate: "2023-08-15",
      },
      {
        id: "indigo",
        name: "IndiGo 6E Rewards",
        points: 8420,
        tier: "Base",
        nextTier: "Silver",
        pointsToNextTier: 11580,
        expiryDate: "2024-01-31",
      },
    ],
    hotels: [
      {
        id: "marriott",
        name: "Marriott Bonvoy",
        points: 45780,
        tier: "Gold",
        nextTier: "Platinum",
        pointsToNextTier: 14220,
        expiryDate: null,
      },
      {
        id: "ihg",
        name: "IHG Rewards",
        points: 32670,
        tier: "Silver",
        nextTier: "Gold",
        pointsToNextTier: 7330,
        expiryDate: "2024-12-31",
      },
    ],
  }

  return NextResponse.json(rewards)
}

