import { NextResponse } from "next/server"

export async function GET() {
  // Mock data for personalized recommendations
  const recommendations = {
    creditCards: [
      {
        id: "hdfc-diners-black",
        name: "HDFC Diners Club Black",
        description: "Premium travel & dining card",
        annualFee: "₹10,000 (waived)",
        welcomeBonus: "40,000 points",
        rewardRate: "5x on travel & dining",
        benefits: [
          "Complimentary airport lounge access worldwide",
          "Milestone benefits up to ₹10,000",
          "Buy 1 Get 1 on movie tickets",
          "Golf privileges at top courses",
        ],
        matchScore: 95,
      },
      {
        id: "axis-edge",
        name: "Axis EDGE Credit Card",
        description: "Best for everyday spending",
        annualFee: "₹5,000 (waived)",
        welcomeBonus: "25,000 points",
        rewardRate: "2x on all purchases",
        benefits: [
          "4 complimentary domestic lounge visits per year",
          "1% fuel surcharge waiver",
          "24/7 concierge services",
          "EMI conversion at low interest rates",
        ],
        matchScore: 88,
      },
      {
        id: "amex-platinum",
        name: "American Express Platinum",
        description: "Luxury travel & lifestyle card",
        annualFee: "₹60,000",
        welcomeBonus: "100,000 points",
        rewardRate: "3x on travel, 2x on dining",
        benefits: [
          "Unlimited airport lounge access",
          "₹20,000 hotel credit annually",
          "Complimentary hotel elite status",
          "Global dining benefits",
        ],
        matchScore: 82,
      },
    ],
    redemptions: [
      {
        id: "red-001",
        title: "Business Class to Europe",
        description: "75,000 Air India Miles",
        value: "₹145,000",
        valuePerPoint: "1.93 paise",
        expiryDate: "2023-08-31",
      },
      {
        id: "red-002",
        title: "3 Nights at Marriott Goa",
        description: "60,000 Bonvoy Points",
        value: "₹45,000",
        valuePerPoint: "0.75 paise",
        expiryDate: "2023-12-31",
      },
      {
        id: "red-003",
        title: "iPhone 14 Pro",
        description: "125,000 HDFC Points",
        value: "₹120,000",
        valuePerPoint: "0.96 paise",
        expiryDate: null,
      },
    ],
    optimizations: [
      {
        id: "opt-001",
        title: "Switch dining expenses to HDFC Diners Club",
        description: "You could earn 5x points on dining instead of your current 2x, adding ₹3,735 in annual value.",
        potentialValue: 3735,
        difficulty: "Easy",
      },
      {
        id: "opt-002",
        title: "Pay rent with Axis EDGE card",
        description:
          "Paying your ₹30,000 monthly rent with Axis EDGE could earn you 36,000 additional points annually.",
        potentialValue: 9000,
        difficulty: "Medium",
      },
      {
        id: "opt-003",
        title: "Book flights directly with airlines",
        description:
          "Booking directly instead of through OTAs can earn you 3x more miles and elite qualifying credits.",
        potentialValue: 12500,
        difficulty: "Easy",
      },
    ],
  }

  return NextResponse.json(recommendations)
}

