import Link from "next/link"
import { CreditCard, Plus, ChevronRight, Star, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function CardsPage() {
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
            <Link href="/cards" className="text-sm font-medium hover:underline underline-offset-4">
              My Cards
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
            >
              Rewardszzzzzzz
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
              <CreditCard className="h-4 w-4" />
              <span className="sr-only">Cards</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Credit Cards</h1>
              <p className="text-muted-foreground">Manage your cards and maximize your rewards.</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Card
            </Button>
          </div>

          <Tabs defaultValue="my-cards" className="space-y-8">
            <TabsList>
              <TabsTrigger value="my-cards">My Cards</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="compare">Compare Cards</TabsTrigger>
            </TabsList>

            <TabsContent value="my-cards" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="relative pb-0">
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Primary
                      </Badge>
                    </div>
                    <div className="w-full h-40 bg-gradient-to-r from-black to-gray-800 rounded-lg p-4 text-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs text-white/70">HDFC Bank</p>
                          <p className="font-medium">Diners Club Black</p>
                        </div>
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <div className="mt-8 space-y-4">
                        <p className="font-mono text-lg tracking-wider">•••• •••• •••• 4567</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-white/70">Expires</p>
                            <p className="font-mono text-sm">05/26</p>
                          </div>
                          <div className="font-medium text-sm">Visa</div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Reward Points</p>
                          <p className="text-xl font-bold">32,450</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Value</p>
                          <p className="text-xl font-bold">₹8,112</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Annual Fee</span>
                          <span>₹10,000 (waived)</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Next Statement</span>
                          <span>June 5, 2023</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Credit Limit</span>
                          <span>₹5,00,000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Manage Card
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="relative pb-0">
                    <div className="w-full h-40 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-4 text-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs text-white/70">Axis Bank</p>
                          <p className="font-medium">EDGE Credit Card</p>
                        </div>
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <div className="mt-8 space-y-4">
                        <p className="font-mono text-lg tracking-wider">•••• •••• •••• 8901</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-white/70">Expires</p>
                            <p className="font-mono text-sm">11/25</p>
                          </div>
                          <div className="font-medium text-sm">Mastercard</div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Reward Points</p>
                          <p className="text-xl font-bold">18,750</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Value</p>
                          <p className="text-xl font-bold">₹4,687</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Annual Fee</span>
                          <span>₹5,000 (waived)</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Next Statement</span>
                          <span>June 12, 2023</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Credit Limit</span>
                          <span>₹3,50,000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Manage Card
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="relative pb-0">
                    <div className="w-full h-40 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg p-4 text-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs text-white/70">SBI Card</p>
                          <p className="font-medium">PRIME Card</p>
                        </div>
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <div className="mt-8 space-y-4">
                        <p className="font-mono text-lg tracking-wider">•••• •••• •••• 2345</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-white/70">Expires</p>
                            <p className="font-mono text-sm">08/27</p>
                          </div>
                          <div className="font-medium text-sm">Visa</div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Reward Points</p>
                          <p className="text-xl font-bold">12,340</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Value</p>
                          <p className="text-xl font-bold">₹2,468</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Annual Fee</span>
                          <span>₹2,999</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Next Statement</span>
                          <span>June 20, 2023</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Credit Limit</span>
                          <span>₹2,50,000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Manage Card
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Card Benefits</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>HDFC Diners Club Black</CardTitle>
                      <CardDescription>Premium benefits and rewards</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">10X rewards on travel & dining</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Unlimited airport lounge access worldwide</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Buy 1 Get 1 on movie tickets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Golf privileges at top courses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Milestone benefits up to ₹10,000</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Benefits
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Axis EDGE Credit Card</CardTitle>
                      <CardDescription>Everyday rewards and benefits</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">2X rewards on all purchases</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">4 complimentary domestic lounge visits per year</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">1% fuel surcharge waiver</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">24/7 concierge services</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">EMI conversion at low interest rates</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Benefits
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>SBI PRIME Card</CardTitle>
                      <CardDescription>Value rewards and benefits</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">5X rewards on online shopping</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">2 complimentary domestic lounge visits per quarter</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">1% fuel surcharge waiver up to ₹500 per month</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Movie ticket discounts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Annual fee waiver on spending ₹2 lakh</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Benefits
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>American Express Platinum</CardTitle>
                        <CardDescription>Luxury travel & lifestyle card</CardDescription>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20">95% Match</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="w-full h-32 bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg p-4 text-white flex items-center justify-center">
                        <CreditCard className="h-12 w-12" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Annual Fee</span>
                          <span>₹60,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Welcome Bonus</span>
                          <span>100,000 points</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Reward Rate</span>
                          <span>3x on travel, 2x on dining</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Key Benefits</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs">Unlimited airport lounge access</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs">₹20,000 hotel credit annually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs">Complimentary hotel elite status</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" className="w-full">
                      Details
                    </Button>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>ICICI Amazon Pay Card</CardTitle>
                        <CardDescription>Best for online shopping</CardDescription>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20">88% Match</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="w-full h-32 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-4 text-white flex items-center justify-center">
                        <CreditCard className="h-12 w-12" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Annual Fee</span>
                          <span>₹500 (waived)</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Welcome Bonus</span>
                          <span>₹500 Amazon Pay balance</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Reward Rate</span>
                          <span>5% on Amazon, 1% elsewhere</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Key Benefits</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs">No-cost EMI on Amazon</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs">Fuel surcharge waiver</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs">2 domestic lounge access per year</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" className="w-full">
                      Details
                    </Button>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Citi Prestige</CardTitle>
                        <CardDescription>Premium travel benefits</CardDescription>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20">82% Match</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="w-full h-32 bg-gradient-to-r from-purple-800 to-purple-600 rounded-lg p-4 text-white flex items-center justify-center">
                        <CreditCard className="h-12 w-12" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Annual Fee</span>
                          <span>₹20,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Welcome Bonus</span>
                          <span>25,000 points</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Reward Rate</span>
                          <span>4x on travel, 2x on dining</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Key Benefits</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs">Complimentary 4th night hotel stay</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs">Airport lounge access worldwide</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs">Golf privileges at premium courses</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" className="w-full">
                      Details
                    </Button>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Why We Recommend These Cards</CardTitle>
                  <CardDescription>Based on your spending patterns and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg space-y-2">
                      <h3 className="font-medium">Your Travel Spending</h3>
                      <p className="text-sm text-muted-foreground">
                        You spend approximately ₹25,000 monthly on travel. The American Express Platinum and Citi
                        Prestige offer premium travel benefits that would maximize your rewards in this category.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg space-y-2">
                      <h3 className="font-medium">Online Shopping Habits</h3>
                      <p className="text-sm text-muted-foreground">
                        With ₹15,000 monthly online shopping, the ICICI Amazon Pay Card would give you 5% back on Amazon
                        purchases, significantly increasing your rewards.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg space-y-2">
                      <h3 className="font-medium">Premium Benefits</h3>
                      <p className="text-sm text-muted-foreground">
                        Based on your travel preferences and lifestyle, premium benefits like lounge access and hotel
                        credits would provide significant value to you.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compare" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Compare Credit Cards</CardTitle>
                  <CardDescription>Side-by-side comparison of selected cards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 text-sm font-medium">Features</th>
                          <th className="text-left p-2 text-sm font-medium">HDFC Diners Club Black</th>
                          <th className="text-left p-2 text-sm font-medium">Axis EDGE</th>
                          <th className="text-left p-2 text-sm font-medium">American Express Platinum</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 text-sm font-medium">Annual Fee</td>
                          <td className="p-2 text-sm">₹10,000 (waived)</td>
                          <td className="p-2 text-sm">₹5,000 (waived)</td>
                          <td className="p-2 text-sm">₹60,000</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 text-sm font-medium">Welcome Bonus</td>
                          <td className="p-2 text-sm">40,000 points</td>
                          <td className="p-2 text-sm">25,000 points</td>
                          <td className="p-2 text-sm">100,000 points</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 text-sm font-medium">Reward Rate</td>
                          <td className="p-2 text-sm">10X on travel & dining</td>
                          <td className="p-2 text-sm">2X on all purchases</td>
                          <td className="p-2 text-sm">3X on travel, 2X on dining</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 text-sm font-medium">Lounge Access</td>
                          <td className="p-2 text-sm">Unlimited worldwide</td>
                          <td className="p-2 text-sm">4 domestic visits/year</td>
                          <td className="p-2 text-sm">Unlimited worldwide</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 text-sm font-medium">Fuel Surcharge</td>
                          <td className="p-2 text-sm">Waived up to ₹1,000/month</td>
                          <td className="p-2 text-sm">1% waiver</td>
                          <td className="p-2 text-sm">Waived up to ₹1,000/month</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 text-sm font-medium">Foreign Transaction Fee</td>
                          <td className="p-2 text-sm">2.5%</td>
                          <td className="p-2 text-sm">3.5%</td>
                          <td className="p-2 text-sm">2%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 text-sm font-medium">Travel Insurance</td>
                          <td className="p-2 text-sm">Up to ₹50 lakh</td>
                          <td className="p-2 text-sm">Up to ₹25 lakh</td>
                          <td className="p-2 text-sm">Up to ₹1 crore</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 text-sm font-medium">Dining Benefits</td>
                          <td className="p-2 text-sm">Buy 1 Get 1, premium dining</td>
                          <td className="p-2 text-sm">15% off at partner restaurants</td>
                          <td className="p-2 text-sm">Global dining collection</td>
                        </tr>
                        <tr>
                          <td className="p-2 text-sm font-medium">Annual Value</td>
                          <td className="p-2 text-sm font-medium text-green-600">₹45,000</td>
                          <td className="p-2 text-sm font-medium text-green-600">₹25,000</td>
                          <td className="p-2 text-sm font-medium text-green-600">₹75,000</td>
                        </tr>
                      </tbody>
                    </table>
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

