import Link from "next/link"
import { Award, Plane, Hotel, CreditCard, Gift, TrendingUp, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function RewardsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">RewardsOptimizer</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
            >
              Dashboard
            </Link>
            <Link
              href="/cards"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
            >
              My Cards
            </Link>
            <Link href="/rewards" className="text-sm font-medium hover:underline underline-offset-4">
              Rewards
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
            >
              Travel
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
            >
              Insights
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Gift className="h-4 w-4" />
              <span className="sr-only">Rewards</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Rewards & Loyalty</h1>
              <p className="text-muted-foreground">Track and optimize your rewards across all programs.</p>
            </div>
            <Button>
              <Gift className="mr-2 h-4 w-4" />
              Redeem Rewards
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Rewards Value</CardTitle>
                <Gift className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹24,567</div>
                <p className="text-xs text-muted-foreground">+₹1,234 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Airline Miles</CardTitle>
                <Plane className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,320</div>
                <p className="text-xs text-muted-foreground">Across 3 airline programs</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hotel Points</CardTitle>
                <Hotel className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78,450</div>
                <p className="text-xs text-muted-foreground">Across 2 hotel programs</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all-rewards" className="space-y-8">
            <TabsList>
              <TabsTrigger value="all-rewards">All Rewards</TabsTrigger>
              <TabsTrigger value="airlines">Airlines</TabsTrigger>
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="credit-cards">Credit Cards</TabsTrigger>
              <TabsTrigger value="redemptions">Redemptions</TabsTrigger>
            </TabsList>

            <TabsContent value="all-rewards" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>All Rewards Programs</CardTitle>
                  <CardDescription>Track all your loyalty programs in one place</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <Plane className="h-5 w-5 text-blue-500" />
                        Airline Programs
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Air India Miles</span>
                              <Badge variant="outline" className="text-xs">
                                Silver
                              </Badge>
                            </div>
                            <span className="font-bold">24,560 miles</span>
                          </div>
                          <Progress value={65} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Current: Silver</span>
                            <span>5,440 miles to Gold</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Vistara Club</span>
                              <Badge variant="outline" className="text-xs">
                                Base
                              </Badge>
                            </div>
                            <span className="font-bold">12,340 points</span>
                          </div>
                          <Progress value={45} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Current: Base</span>
                            <span>7,660 points to Silver</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">IndiGo 6E Rewards</span>
                              <Badge variant="outline" className="text-xs">
                                Base
                              </Badge>
                            </div>
                            <span className="font-bold">8,420 points</span>
                          </div>
                          <Progress value={35} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Current: Base</span>
                            <span>11,580 points to Silver</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <Hotel className="h-5 w-5 text-red-500" />
                        Hotel Programs
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Marriott Bonvoy</span>
                              <Badge variant="outline" className="text-xs">
                                Gold
                              </Badge>
                            </div>
                            <span className="font-bold">45,780 points</span>
                          </div>
                          <Progress value={78} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Current: Gold</span>
                            <span>14,220 points to Platinum</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">IHG Rewards</span>
                              <Badge variant="outline" className="text-xs">
                                Silver
                              </Badge>
                            </div>
                            <span className="font-bold">32,670 points</span>
                          </div>
                          <Progress value={65} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Current: Silver</span>
                            <span>7,330 points to Gold</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-green-500" />
                        Credit Card Programs
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">HDFC SmartBuy</span>
                            <span className="font-bold">32,450 points</span>
                          </div>
                          <Progress value={100} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Reward Value: ₹8,112</span>
                            <span>No expiry</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Axis EDGE Rewards</span>
                            <span className="font-bold">18,750 points</span>
                          </div>
                          <Progress value={100} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Reward Value: ₹4,687</span>
                            <span>Expires: Dec 31, 2023</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">SBI PRIME Rewards</span>
                            <span className="font-bold">12,340 points</span>
                          </div>
                          <Progress value={100} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Reward Value: ₹2,468</span>
                            <span>Expires: Mar 15, 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Expirations</CardTitle>
                    <CardDescription>Points and miles expiring soon</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                            <Calendar className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium">12,000 Vistara points</p>
                            <p className="text-xs text-muted-foreground">Expires on August 15, 2023</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Extend
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100">
                            <Calendar className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <p className="font-medium">8,500 HDFC reward points</p>
                            <p className="text-xs text-muted-foreground">Expires on December 31, 2023</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Extend
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100">
                            <Calendar className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <p className="font-medium">5,200 IndiGo 6E points</p>
                            <p className="text-xs text-muted-foreground">Expires on January 31, 2024</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Extend
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Optimization Opportunities</CardTitle>
                    <CardDescription>Ways to maximize your rewards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Transfer HDFC points to Air India</h4>
                          <p className="text-sm text-muted-foreground">
                            Current promotion: 30% bonus miles when transferring points.
                          </p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Book Marriott stays to reach Platinum</h4>
                          <p className="text-sm text-muted-foreground">
                            You're only 14,220 points away from Platinum status with enhanced benefits.
                          </p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Use expiring Vistara points</h4>
                          <p className="text-sm text-muted-foreground">
                            Redeem your 12,000 expiring points for a domestic flight (value: ₹8,400).
                          </p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="redemptions" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Redemptions</CardTitle>
                  <CardDescription>Best ways to use your points and miles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">Business Class to Europe</h4>
                            <p className="text-sm text-muted-foreground">Air India Miles</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 border-green-200">High Value</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Required Points</span>
                            <span className="font-medium">75,000 miles</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Cash Value</span>
                            <span className="font-medium">₹145,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Value Per Point</span>
                            <span className="font-medium text-green-600">1.93 paise</span>
                          </div>
                        </div>
                        <div className="pt-2">
                          <Button className="w-full">View Details</Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">3 Nights at Marriott Goa</h4>
                            <p className="text-sm text-muted-foreground">Marriott Bonvoy</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">Good Value</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Required Points</span>
                            <span className="font-medium">60,000 points</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Cash Value</span>
                            <span className="font-medium">₹45,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Value Per Point</span>
                            <span className="font-medium text-blue-600">0.75 paise</span>
                          </div>
                        </div>
                        <div className="pt-2">
                          <Button className="w-full">View Details</Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">iPhone 14 Pro</h4>
                            <p className="text-sm text-muted-foreground">HDFC Reward Points</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">Good Value</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Required Points</span>
                            <span className="font-medium">125,000 points</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Cash Value</span>
                            <span className="font-medium">₹120,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Value Per Point</span>
                            <span className="font-medium text-blue-600">0.96 paise</span>
                          </div>
                        </div>
                        <div className="pt-2">
                          <Button className="w-full">View Details</Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">Domestic Economy Flight</h4>
                            <p className="text-sm text-muted-foreground">Vistara Club</p>
                          </div>
                          <Badge className="bg-amber-100 text-amber-800 border-amber-200">Average Value</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Required Points</span>
                            <span className="font-medium">12,000 points</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Cash Value</span>
                            <span className="font-medium">₹8,400</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Value Per Point</span>
                            <span className="font-medium text-amber-600">0.70 paise</span>
                          </div>
                        </div>
                        <div className="pt-2">
                          <Button className="w-full">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Redemption History</CardTitle>
                  <CardDescription>Your past reward redemptions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="font-medium">Business Class to Singapore</p>
                        <p className="text-xs text-muted-foreground">
                          Air India Miles • 60,000 points • April 15, 2023
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹85,000</p>
                        <p className="text-xs text-green-600">1.42 paise per point</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="font-medium">2 Nights at IHG Mumbai</p>
                        <p className="text-xs text-muted-foreground">IHG Rewards • 35,000 points • March 10, 2023</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹24,000</p>
                        <p className="text-xs text-blue-600">0.69 paise per point</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <div>
                        <p className="font-medium">Amazon Gift Card</p>
                        <p className="text-xs text-muted-foreground">
                          HDFC SmartBuy • 10,000 points • February 5, 2023
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹2,500</p>
                        <p className="text-xs text-amber-600">0.25 paise per point</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium">Domestic Flight to Goa</p>
                        <p className="text-xs text-muted-foreground">Vistara Club • 8,000 points • January 20, 2023</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹5,600</p>
                        <p className="text-xs text-blue-600">0.70 paise per point</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

