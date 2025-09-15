import { TrendingDown, TrendingUp, Target, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";

const weightData = [
  { date: "Jan 1", weight: 180 },
  { date: "Jan 8", weight: 179.2 },
  { date: "Jan 15", weight: 178.5 },
  { date: "Jan 22", weight: 177.8 },
  { date: "Jan 29", weight: 177.1 },
  { date: "Feb 5", weight: 176.5 },
  { date: "Feb 12", weight: 175.8 },
  { date: "Feb 19", weight: 175.2 }
];

export function WeightTracking() {
  const currentWeight = 175.2;
  const startWeight = 180;
  const goalWeight = 170;
  const weightLoss = startWeight - currentWeight;
  const totalGoal = startWeight - goalWeight;
  const progressPercentage = (weightLoss / totalGoal) * 100;
  const weightToGo = currentWeight - goalWeight;

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Current Weight */}
      <Card className="rounded-xl">
        <CardContent className="p-6 text-center">
          <div className="text-4xl text-primary mb-2">{currentWeight}</div>
          <div className="text-muted-foreground mb-4">lbs</div>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center text-green-600">
              <TrendingDown className="w-4 h-4 mr-1" />
              {weightLoss.toFixed(1)} lbs lost
            </div>
            <div className="text-muted-foreground">
              {weightToGo.toFixed(1)} lbs to go
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Goal Progress */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Goal Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Start: {startWeight} lbs</span>
            <span>Goal: {goalWeight} lbs</span>
          </div>
          <Progress value={progressPercentage} className="h-3 rounded-full" />
          <div className="text-center text-sm text-muted-foreground">
            {progressPercentage.toFixed(1)}% complete
          </div>
        </CardContent>
      </Card>

      {/* Weight Chart */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Weight Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData}>
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  className="text-xs fill-muted-foreground"
                />
                <YAxis 
                  domain={['dataMin - 2', 'dataMax + 2']}
                  axisLine={false}
                  tickLine={false}
                  className="text-xs fill-muted-foreground"
                />
                <ReferenceLine 
                  y={goalWeight} 
                  stroke="#10b981" 
                  strokeDasharray="5 5"
                  label={{ value: "Goal", position: "topRight" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Add New Weight */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Log Weight</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Today's Weight</Label>
            <div className="flex space-x-2 mt-2">
              <Input 
                placeholder="175.2" 
                type="number" 
                step="0.1"
                className="rounded-lg"
              />
              <span className="flex items-center text-muted-foreground">lbs</span>
            </div>
          </div>
          <Button className="w-full rounded-xl">
            <Plus className="w-4 h-4 mr-2" />
            Log Weight
          </Button>
        </CardContent>
      </Card>

      {/* Weekly Summary */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="rounded-xl">
          <CardContent className="p-4 text-center">
            <div className="text-xl text-green-600">-0.6</div>
            <div className="text-sm text-muted-foreground">lbs this week</div>
          </CardContent>
        </Card>
        <Card className="rounded-xl">
          <CardContent className="p-4 text-center">
            <div className="text-xl text-primary">-0.6</div>
            <div className="text-sm text-muted-foreground">lbs/week avg</div>
          </CardContent>
        </Card>
      </div>

      {/* Goal Settings */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Goal Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Target Weight</span>
            <span className="text-primary">{goalWeight} lbs</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Target Date</span>
            <span className="text-muted-foreground">Mar 15, 2024</span>
          </div>
          <Button variant="outline" className="w-full rounded-xl">
            Update Goal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}