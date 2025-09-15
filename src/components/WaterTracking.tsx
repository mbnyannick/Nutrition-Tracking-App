import { Droplets, Plus, Minus, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { useState } from "react";

const quickAddAmounts = [
  { label: "8 oz", ml: 237, icon: "🥤" },
  { label: "12 oz", ml: 355, icon: "🧊" },
  { label: "16 oz", ml: 473, icon: "🍶" },
  { label: "20 oz", ml: 591, icon: "🚰" }
];

const weeklyData = [
  { day: "Mon", amount: 2.1, goal: 2.5 },
  { day: "Tue", amount: 2.8, goal: 2.5 },
  { day: "Wed", amount: 2.3, goal: 2.5 },
  { day: "Thu", amount: 3.0, goal: 2.5 },
  { day: "Fri", amount: 2.6, goal: 2.5 },
  { day: "Sat", amount: 2.2, goal: 2.5 },
  { day: "Sun", amount: 1.9, goal: 2.5 }
];

export function WaterTracking() {
  const [todayWater, setTodayWater] = useState(1850); // in ml
  const dailyGoal = 2500; // in ml
  const progressPercentage = (todayWater / dailyGoal) * 100;
  const remainingWater = Math.max(0, dailyGoal - todayWater);

  const addWater = (amount: number) => {
    setTodayWater(prev => prev + amount);
  };

  const removeWater = (amount: number) => {
    setTodayWater(prev => Math.max(0, prev - amount));
  };

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Water Bottle Visualization */}
      <Card className="rounded-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-3xl text-primary">{(todayWater / 1000).toFixed(1)}L</div>
              <div className="text-muted-foreground">of {(dailyGoal / 1000).toFixed(1)}L goal</div>
            </div>
            <div className="relative">
              {/* Water Bottle SVG */}
              <div className="w-16 h-24 border-2 border-primary rounded-b-xl rounded-t-lg relative overflow-hidden bg-muted">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-blue-400 transition-all duration-500 ease-out"
                  style={{ height: `${Math.min(100, progressPercentage)}%` }}
                />
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-primary rounded-b"></div>
              </div>
            </div>
          </div>
          
          <Progress value={progressPercentage} className="h-4 rounded-full mb-4" />
          
          <div className="text-center">
            {remainingWater > 0 ? (
              <div className="text-sm text-muted-foreground">
                {remainingWater}ml left to reach your goal
              </div>
            ) : (
              <div className="text-sm text-green-600">🎉 Goal achieved!</div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Add Buttons */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Quick Add</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {quickAddAmounts.map((item) => (
              <Button
                key={item.label}
                variant="outline"
                className="h-16 rounded-xl flex flex-col space-y-1"
                onClick={() => addWater(item.ml)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Custom Amount */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Custom Amount</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => removeWater(100)}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <div className="text-center">
              <div className="text-2xl text-primary">250ml</div>
              <div className="text-sm text-muted-foreground">Custom amount</div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => addWater(250)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <Button 
            className="w-full rounded-xl"
            onClick={() => addWater(250)}
          >
            <Droplets className="w-4 h-4 mr-2" />
            Add 250ml
          </Button>
        </CardContent>
      </Card>

      {/* This Week */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {weeklyData.map((day) => (
              <div key={day.day} className="flex items-center justify-between">
                <span className="text-sm w-12">{day.day}</span>
                <div className="flex-1 mx-3">
                  <div className="flex items-center space-x-2">
                    <Progress 
                      value={(day.amount / day.goal) * 100} 
                      className="h-2 flex-1"
                    />
                    {day.amount >= day.goal && (
                      <span className="text-green-600 text-xs">✓</span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground w-16 text-right">
                  {day.amount}L
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hydration Reminders */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Daily Goal</span>
            <span className="text-primary">{(dailyGoal / 1000).toFixed(1)}L</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Reminders</span>
            <span className="text-muted-foreground">Every 2 hours</span>
          </div>
          <Button variant="outline" className="w-full rounded-xl">
            Update Settings
          </Button>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="rounded-xl">
          <CardContent className="p-4 text-center">
            <div className="text-2xl text-primary">5</div>
            <div className="text-sm text-muted-foreground">Day streak</div>
          </CardContent>
        </Card>
        <Card className="rounded-xl">
          <CardContent className="p-4 text-center">
            <div className="text-2xl text-primary">2.3L</div>
            <div className="text-sm text-muted-foreground">Daily avg</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}