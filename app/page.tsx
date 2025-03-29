import Link from "next/link"
import { CreditCard, Gift, Plane, Hotel, Bell, TrendingUp, Wallet, Award, User, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RewardsSummary } from "@/components/rewards-summary"
import { CreditCardList } from "@/components/credit-card-list"
import { RecentTransactions } from "@/components/recent-transactions"
import { RecommendedCards } from "@/components/recommended-cards"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col pl-20 pr-20">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">RewardsOptimizer</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
            >
              My Cards
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
            >
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
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" 
            // onClick={() => {
            //   window.location.href = '/login';
            // }}
            >
              <User className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="grid gap-6 md:grid-cols-[1fr_250px]">
            <div className="grid gap-6">
              <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                  <p className="text-muted-foreground">Welcome back, Shreepad! Here's your rewards summary.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Card
                  </Button>
                </div>
              </div>
              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="rewards">Rewards</TabsTrigger>
                  <TabsTrigger value="spending">Spending</TabsTrigger>
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Rewards Value</CardTitle>
                        <Wallet className="h-4 w-4 text-muted-foreground" />
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
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="lg:col-span-4">
                      <CardHeader>
                        <CardTitle>Rewards Summary</CardTitle>
                        <CardDescription>Your points and miles across all programs</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <RewardsSummary />
                      </CardContent>
                    </Card>
                    <Card className="lg:col-span-3">
                      <CardHeader>
                        <CardTitle>Your Credit Cards</CardTitle>
                        <CardDescription>Manage your active cards</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <CreditCardList />
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="lg:col-span-4">
                      <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                        <CardDescription>Your recent spending activity</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <RecentTransactions />
                      </CardContent>
                    </Card>
                    <Card className="lg:col-span-3">
                      <CardHeader>
                        <CardTitle>Recommended Cards</CardTitle>
                        <CardDescription>Based on your spending patterns</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <RecommendedCards />
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="rewards" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Rewards Programs</CardTitle>
                      <CardDescription>Track all your loyalty programs in one place</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Plane className="h-4 w-4 text-blue-500" />
                              <span className="font-medium">Air India Miles</span>
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
                              <Plane className="h-4 w-4 text-purple-500" />
                              <span className="font-medium">Vistara Club</span>
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
                              <Hotel className="h-4 w-4 text-red-500" />
                              <span className="font-medium">Marriott Bonvoy</span>
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
                              <CreditCard className="h-4 w-4 text-green-500" />
                              <span className="font-medium">HDFC SmartBuy</span>
                            </div>
                            <span className="font-bold">32,450 points</span>
                          </div>
                          <Progress value={100} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Reward Value: ₹8,112</span>
                            <span>No expiry</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="spending" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Spending Analysis</CardTitle>
                      <CardDescription>Your spending patterns and optimization opportunities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Monthly Spending by Category</h3>
                          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                            <div className="space-y-2 p-4 border rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Dining</span>
                                <span className="text-sm font-medium">₹12,450</span>
                              </div>
                              <Progress value={75} className="h-1" />
                            </div>
                            <div className="space-y-2 p-4 border rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Travel</span>
                                <span className="text-sm font-medium">₹24,780</span>
                              </div>
                              <Progress value={90} className="h-1" />
                            </div>
                            <div className="space-y-2 p-4 border rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Shopping</span>
                                <span className="text-sm font-medium">₹8,340</span>
                              </div>
                              <Progress value={45} className="h-1" />
                            </div>
                            <div className="space-y-2 p-4 border rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Utilities</span>
                                <span className="text-sm font-medium">₹5,670</span>
                              </div>
                              <Progress value={30} className="h-1" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Optimization Opportunities</h3>
                          <div className="space-y-4">
                            <div className="p-4 border rounded-lg flex items-start gap-4">
                              <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                              <div>
                                <h4 className="font-medium">Switch dining expenses to HDFC Diners Club</h4>
                                <p className="text-sm text-muted-foreground">
                                  You could earn 5x points on dining instead of your current 2x, adding ₹3,735 in annual
                                  value.
                                </p>
                              </div>
                            </div>
                            <div className="p-4 border rounded-lg flex items-start gap-4">
                              <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                              <div>
                                <h4 className="font-medium">Pay rent with Axis EDGE card</h4>
                                <p className="text-sm text-muted-foreground">
                                  Paying your ₹30,000 monthly rent with Axis EDGE could earn you 36,000 additional
                                  points annually.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="recommendations" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personalized Recommendations</CardTitle>
                      <CardDescription>AI-powered suggestions based on your profile</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Credit Card Recommendations</h3>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="border rounded-lg p-4 space-y-4">
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="font-medium">HDFC Diners Club Black</h4>
                                  <p className="text-sm text-muted-foreground">Premium travel & dining card</p>
                                </div>
                                <CreditCard className="h-10 w-10 text-black" />
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Annual Fee</span>
                                  <span className="font-medium">₹10,000 (waived)</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Welcome Bonus</span>
                                  <span className="font-medium">40,000 points</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Reward Rate</span>
                                  <span className="font-medium">5x on travel & dining</span>
                                </div>
                              </div>
                              <div className="pt-2">
                                <Button className="w-full">Apply Now</Button>
                              </div>
                            </div>
                            <div className="border rounded-lg p-4 space-y-4">
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="font-medium">Axis EDGE Credit Card</h4>
                                  <p className="text-sm text-muted-foreground">Best for everyday spending</p>
                                </div>
                                <CreditCard className="h-10 w-10 text-blue-500" />
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Annual Fee</span>
                                  <span className="font-medium">₹5,000 (waived)</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Welcome Bonus</span>
                                  <span className="font-medium">25,000 points</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Reward Rate</span>
                                  <span className="font-medium">2x on all purchases</span>
                                </div>
                              </div>
                              <div className="pt-2">
                                <Button className="w-full">Apply Now</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Redemption Opportunities</h3>
                          <div className="space-y-4">
                            <div className="p-4 border rounded-lg flex items-start gap-4">
                              <Gift className="h-5 w-5 text-primary mt-0.5" />
                              <div>
                                <h4 className="font-medium">Business Class to Europe (75,000 Air India Miles)</h4>
                                <p className="text-sm text-muted-foreground">Value: ₹145,000 (1.93 paise per point)</p>
                                <div className="mt-2">
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 border rounded-lg flex items-start gap-4">
                              <Gift className="h-5 w-5 text-primary mt-0.5" />
                              <div>
                                <h4 className="font-medium">3 Nights at Marriott Goa (60,000 Bonvoy Points)</h4>
                                <p className="text-sm text-muted-foreground">Value: ₹45,000 (0.75 paise per point)</p>
                                <div className="mt-2">
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Expirations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="rounded-full p-1 bg-red-100">
                        <Bell className="h-3 w-3 text-red-600" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">12,000 Vistara points</p>
                        <p className="text-xs text-muted-foreground">Expires in 30 days</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="rounded-full p-1 bg-amber-100">
                        <Bell className="h-3 w-3 text-amber-600" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">8,500 HDFC reward points</p>
                        <p className="text-xs text-muted-foreground">Expires in 60 days</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Travel Deals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Plane className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-medium">Delhi to Bangkok</h3>
                      </div>
                      <p className="text-xs">Business Class for 45,000 miles (50% off)</p>
                      <p className="text-xs text-muted-foreground">Limited time offer ends in 5 days</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Hotel className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-medium">Marriott Bonvoy</h3>
                      </div>
                      <p className="text-xs">30% off point redemptions at select properties</p>
                      <p className="text-xs text-muted-foreground">Book by June 30th</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Credit Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            className="text-muted stroke-current"
                            strokeWidth="10"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                          />
                          <circle
                            className="text-primary stroke-current"
                            strokeWidth="10"
                            strokeLinecap="round"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                            strokeDasharray={2 * Math.PI * 40}
                            strokeDashoffset={2 * Math.PI * 40 * (1 - 0.78)}
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center justify-center">
                          <span className="text-2xl font-bold">780</span>
                          <span className="text-xs text-muted-foreground">Excellent</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Last updated</span>
                        <span>May 15, 2023</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Source</span>
                        <span>CIBIL</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Full Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

