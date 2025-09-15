import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { TrendingUp, TrendingDown, Droplets, Target, Award, Scale } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";

const macroData = [
  { name: "Carbs", value: 45, color: "#3b82f6" },
  { name: "Protein", value: 30, color: "#10b981" },
  { name: "Fat", value: 25, color: "#f59e0b" }
];

const weeklyCalories = [
  { day: "Mon", calories: 1850 },
  { day: "Tue", calories: 2100 },
  { day: "Wed", calories: 1950 },
  { day: "Thu", calories: 2200 },
  { day: "Fri", calories: 1900 },
  { day: "Sat", calories: 2300 },
  { day: "Sun", calories: 1750 }
];

export function Dashboard() {
  const dailyCalorieGoal = 2000;
  const currentCalories = 1650;
  const caloriesLeft = dailyCalorieGoal - currentCalories;
  const progressPercentage = (currentCalories / dailyCalorieGoal) * 100;

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">Good morning! 👋</h1>
          <p className="text-muted-foreground">Let's track your nutrition today</p>
        </div>
        <Badge variant="secondary" className="rounded-full">
          Day 7 streak 🔥
        </Badge>
      </div>

      {/* Daily Summary */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Today's Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-2">
            <div className="text-3xl text-primary">{currentCalories}</div>
            <div className="text-muted-foreground">calories consumed</div>
            <div className="text-sm text-muted-foreground">
              {caloriesLeft} calories left
            </div>
          </div>
          <Progress value={progressPercentage} className="h-3 rounded-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>0</span>
            <span>{dailyCalorieGoal}</span>
          </div>
        </CardContent>
      </Card>

      {/* Macronutrients */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Macronutrients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={macroData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {macroData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-3 ml-6">
              {macroData.map((macro) => (
                <div key={macro.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: macro.color }}
                    />
                    <span className="text-sm">{macro.name}</span>
                  </div>
                  <span className="text-sm">{macro.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Overview */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyCalories}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  className="text-xs fill-muted-foreground"
                />
                <YAxis hide />
                <Bar 
                  dataKey="calories" 
                  fill="#3b82f6" 
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Today's Goals */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Today's Goals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <Droplets className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm">Water Goal</div>
                <div className="text-xs text-muted-foreground">1.8L of 2.5L</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Progress value={72} className="w-16 h-2" />
              <span className="text-sm text-muted-foreground">72%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Target className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="text-sm">Protein Target</div>
                <div className="text-xs text-muted-foreground">85g of 120g</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Progress value={71} className="w-16 h-2" />
              <span className="text-sm text-muted-foreground">71%</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-full">
                <Scale className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <div className="text-sm">Weight Goal</div>
                <div className="text-xs text-muted-foreground">175.2 lbs (-4.8 lbs)</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Progress value={48} className="w-16 h-2" />
              <span className="text-sm text-muted-foreground">48%</span>
            </div>
          </div>
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
              <span className="text-lg text-blue-600">-0.8 lbs</span>
            </div>
            <div className="text-sm text-muted-foreground">This week</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievement */}
      <Card className="rounded-xl border-green-200 bg-green-50">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🏆</div>
            <div className="flex-1">
              <div className="text-sm text-green-800">New Achievement!</div>
              <div className="text-xs text-green-600">7-day logging streak completed</div>
            </div>
            <Button size="sm" variant="outline" className="rounded-lg">
              View All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Today's Meals */}
      <Card className="rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Today's Meals</CardTitle>
          <Button size="sm" variant="outline" className="rounded-lg">
            Plan Week
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { meal: "Breakfast", food: "Overnight Oats", calories: 320, logged: true },
            { meal: "Lunch", food: "Quinoa Buddha Bowl", calories: 450, logged: true },
            { meal: "Dinner", food: "Grilled Salmon", calories: 520, logged: false },
            { meal: "Snack", food: "Greek Yogurt", calories: 150, logged: false }
          ].map((item, index) => (
            <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${item.logged ? "bg-green-50 border border-green-200" : "bg-muted"}`}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${item.logged ? "bg-green-600 text-white" : "bg-muted-foreground text-white"}`}>
                  {item.logged ? "✓" : "?"}
                </div>
                <div>
                  <div className="text-sm">{item.meal}</div>
                  <div className="text-xs text-muted-foreground">{item.food}</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{item.calories} cal</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-16 rounded-xl flex flex-col space-y-1">
          <span className="text-2xl">📝</span>
          <span className="text-sm">Log Meal</span>
        </Button>
        <Button variant="outline" className="h-16 rounded-xl flex flex-col space-y-1">
          <span className="text-2xl">📊</span>
          <span className="text-sm">View Analytics</span>
        </Button>
      </div>
    </div>
  );
}