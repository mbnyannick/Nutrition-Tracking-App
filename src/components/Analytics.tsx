import { TrendingUp, TrendingDown, Award, Calendar, Target, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

const nutritionTrends = [
  { date: "Dec 1", calories: 1850, protein: 120, carbs: 180, fat: 65 },
  { date: "Dec 2", calories: 2100, protein: 140, carbs: 220, fat: 78 },
  { date: "Dec 3", calories: 1950, protein: 125, carbs: 195, fat: 72 },
  { date: "Dec 4", calories: 2200, protein: 150, carbs: 240, fat: 85 },
  { date: "Dec 5", calories: 1900, protein: 130, carbs: 185, fat: 68 },
  { date: "Dec 6", calories: 2300, protein: 155, carbs: 260, fat: 90 },
  { date: "Dec 7", calories: 1750, protein: 115, carbs: 165, fat: 60 }
];

const micronutrients = [
  { name: "Vitamin C", current: 85, target: 90, unit: "mg", status: "good" },
  { name: "Iron", current: 12, target: 18, unit: "mg", status: "low" },
  { name: "Calcium", current: 950, target: 1000, unit: "mg", status: "good" },
  { name: "Vitamin D", current: 15, target: 20, unit: "μg", status: "low" },
  { name: "Fiber", current: 28, target: 25, unit: "g", status: "excellent" },
  { name: "Omega-3", current: 1.2, target: 1.6, unit: "g", status: "low" }
];

const weeklyGoals = [
  { name: "Calorie Goal", progress: 85, current: "6/7 days", color: "#3b82f6" },
  { name: "Protein Target", progress: 92, current: "138g avg", color: "#10b981" },
  { name: "Water Goal", progress: 78, current: "2.1L avg", color: "#06b6d4" },
  { name: "Exercise", progress: 60, current: "3/5 days", color: "#f59e0b" }
];

const achievements = [
  { id: 1, title: "7-Day Streak", description: "Logged meals for 7 days", icon: "🔥", earned: true },
  { id: 2, title: "Protein Pro", description: "Hit protein goal 5 days", icon: "💪", earned: true },
  { id: 3, title: "Hydration Hero", description: "Drink 8 glasses daily", icon: "💧", earned: false },
  { id: 4, title: "Macro Master", description: "Perfect macro balance", icon: "⚖️", earned: false }
];

const monthlyComparison = [
  { month: "Oct", calories: 1950, weight: 178.5 },
  { month: "Nov", calories: 1920, weight: 177.2 },
  { month: "Dec", calories: 1890, weight: 175.8 }
];

export function Analytics() {
  return (
    <div className="p-4 space-y-6 pb-20">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 rounded-xl">
          <TabsTrigger value="overview" className="rounded-lg">Overview</TabsTrigger>
          <TabsTrigger value="nutrients" className="rounded-lg">Nutrients</TabsTrigger>
          <TabsTrigger value="progress" className="rounded-lg">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-6">
          {/* Weekly Summary */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                This Week's Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={nutritionTrends}>
                    <XAxis 
                      dataKey="date" 
                      axisLine={false}
                      tickLine={false}
                      className="text-xs fill-muted-foreground"
                    />
                    <YAxis hide />
                    <Line 
                      type="monotone" 
                      dataKey="calories" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-lg text-primary">1,979</div>
                  <div className="text-xs text-muted-foreground">Avg Calories</div>
                </div>
                <div className="text-center">
                  <div className="text-lg text-green-600">132g</div>
                  <div className="text-xs text-muted-foreground">Avg Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-lg text-blue-600">2.1L</div>
                  <div className="text-xs text-muted-foreground">Avg Water</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Goal Progress */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Weekly Goals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {weeklyGoals.map((goal) => (
                <div key={goal.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{goal.name}</span>
                    <span className="text-sm text-muted-foreground">{goal.current}</span>
                  </div>
                  <Progress value={goal.progress} className="h-2 rounded-full" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Insights */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-xl">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-1" />
                  <span className="text-lg text-green-600">+12%</span>
                </div>
                <div className="text-sm text-muted-foreground">Protein vs last week</div>
              </CardContent>
            </Card>
            <Card className="rounded-xl">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingDown className="w-5 h-5 text-blue-600 mr-1" />
                  <span className="text-lg text-blue-600">-8%</span>
                </div>
                <div className="text-sm text-muted-foreground">Sugar intake</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="nutrients" className="space-y-4 mt-6">
          {/* Micronutrient Status */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Micronutrient Status</CardTitle>
              <p className="text-sm text-muted-foreground">Daily averages this week</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {micronutrients.map((nutrient) => {
                const percentage = (nutrient.current / nutrient.target) * 100;
                const statusColor = 
                  nutrient.status === "excellent" ? "text-green-600" :
                  nutrient.status === "good" ? "text-blue-600" :
                  "text-orange-600";
                
                return (
                  <div key={nutrient.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{nutrient.name}</span>
                      <div className="text-right">
                        <div className="text-sm">{nutrient.current}{nutrient.unit}</div>
                        <div className="text-xs text-muted-foreground">of {nutrient.target}{nutrient.unit}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={Math.min(100, percentage)} className="flex-1 h-2 rounded-full" />
                      <Badge 
                        variant="outline" 
                        className={`text-xs rounded-full ${statusColor}`}
                      >
                        {nutrient.status}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Deficiency Alerts */}
          <Card className="rounded-xl border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800">Nutrient Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-orange-800">
                  <Target className="w-4 h-4 mr-2" />
                  Iron levels are 33% below target
                </div>
                <div className="flex items-center text-sm text-orange-800">
                  <Target className="w-4 h-4 mr-2" />
                  Consider adding more leafy greens
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Food Sources */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Top Nutrient Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { nutrient: "Protein", source: "Greek Yogurt", amount: "28%" },
                { nutrient: "Vitamin C", source: "Orange", amount: "45%" },
                { nutrient: "Calcium", source: "Milk", amount: "35%" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <div>
                    <div className="text-sm">{item.nutrient}</div>
                    <div className="text-xs text-muted-foreground">{item.source}</div>
                  </div>
                  <div className="text-sm text-primary">{item.amount}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4 mt-6">
          {/* AI Insights */}
          <Card className="rounded-xl border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">AI Nutrition Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <div className="text-sm text-blue-800">Based on your patterns, try adding more iron-rich foods like spinach or lean beef to reach your daily targets.</div>
                  <Button size="sm" variant="outline" className="mt-2 rounded-lg">
                    Show Suggestions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Comparison */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Monthly Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyComparison}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      className="text-xs fill-muted-foreground"
                    />
                    <YAxis hide />
                    <Bar 
                      dataKey="calories" 
                      fill="#3b82f6" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id} 
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    achievement.earned ? "bg-green-50 border border-green-200" : "bg-muted"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <div className={`text-sm ${achievement.earned ? "text-green-800" : ""}`}>
                        {achievement.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                  {achievement.earned && (
                    <Badge className="bg-green-600 rounded-full">Earned</Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Habit Tracking */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Habit Streaks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { habit: "Daily Logging", streak: 12, best: 15 },
                { habit: "Water Goal", streak: 5, best: 8 },
                { habit: "Protein Target", streak: 8, best: 12 },
                { habit: "Exercise Log", streak: 3, best: 7 }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{item.habit}</span>
                  <div className="text-right">
                    <div className="text-sm text-primary">{item.streak} days</div>
                    <div className="text-xs text-muted-foreground">Best: {item.best}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}