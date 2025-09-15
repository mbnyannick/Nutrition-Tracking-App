import { User, Settings, Bell, HelpCircle, Share, Download, Heart, Users, Trophy, Target, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const achievements = [
  { id: 1, title: "First Week", description: "Complete 7 days of logging", icon: "🏁", earned: true },
  { id: 2, title: "Protein Power", description: "Hit protein goal 10 times", icon: "💪", earned: true },
  { id: 3, title: "Hydration Hero", description: "Drink 8 glasses daily for a week", icon: "💧", earned: false },
  { id: 4, title: "Consistency King", description: "30-day logging streak", icon: "👑", earned: false }
];

const friends = [
  { name: "Sarah M.", status: "Lost 2 lbs this week!", avatar: "SM", streak: 12 },
  { name: "Mike J.", status: "Hit protein goal!", avatar: "MJ", streak: 8 },
  { name: "Emma K.", status: "New PR in workouts", avatar: "EK", streak: 15 }
];

const monthlyGoals = [
  { goal: "Lose 4 lbs", progress: 65, current: "2.6 lbs lost" },
  { goal: "Log 25 days", progress: 80, current: "20/25 days" },
  { goal: "Hit water goal", progress: 72, current: "18/25 days" }
];

export function Profile() {
  return (
    <div className="p-4 space-y-6 pb-20">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3 rounded-xl">
          <TabsTrigger value="profile" className="rounded-lg">Profile</TabsTrigger>
          <TabsTrigger value="social" className="rounded-lg">Social</TabsTrigger>
          <TabsTrigger value="settings" className="rounded-lg">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4 mt-6">
          {/* Profile Header */}
          <Card className="rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-xl">John Doe</h2>
                  <p className="text-muted-foreground">Member since Jan 2024</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant="secondary" className="rounded-full">
                      🔥 7 day streak
                    </Badge>
                    <Badge variant="outline" className="rounded-full">
                      ⭐ Level 3
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-lg">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Current Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="rounded-xl">
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-primary">175.2</div>
                <div className="text-sm text-muted-foreground">Current (lbs)</div>
              </CardContent>
            </Card>
            <Card className="rounded-xl">
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-primary">-4.8</div>
                <div className="text-sm text-muted-foreground">Lost (lbs)</div>
              </CardContent>
            </Card>
            <Card className="rounded-xl">
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-primary">42</div>
                <div className="text-sm text-muted-foreground">Days active</div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Goals */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Monthly Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {monthlyGoals.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{item.goal}</span>
                    <span className="text-sm text-muted-foreground">{item.current}</span>
                  </div>
                  <Progress value={item.progress} className="h-2 rounded-full" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.slice(0, 3).map((achievement) => (
                <div 
                  key={achievement.id} 
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    achievement.earned ? "bg-green-50 border border-green-200" : "bg-muted"
                  }`}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <div className={`text-sm ${achievement.earned ? "text-green-800" : ""}`}>
                      {achievement.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                  {achievement.earned && (
                    <Badge className="bg-green-600 rounded-full text-xs">Earned</Badge>
                  )}
                </div>
              ))}
              <Button variant="outline" className="w-full rounded-lg">
                View All Achievements
              </Button>
            </CardContent>
          </Card>

          {/* Smart Recommendations */}
          <Card className="rounded-xl border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                ✨ Smart Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-purple-800">
                Based on your nutrition patterns:
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-purple-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                  Add salmon twice this week for omega-3
                </div>
                <div className="flex items-center text-sm text-purple-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                  Increase fiber with overnight oats
                </div>
                <div className="flex items-center text-sm text-purple-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                  Try meal prep on Sundays
                </div>
              </div>
              <Button size="sm" className="rounded-lg bg-purple-600 hover:bg-purple-700">
                Generate Meal Plan
              </Button>
            </CardContent>
          </Card>

          {/* Quick Analytics Access */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Your Analytics</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-16 rounded-xl flex flex-col space-y-1">
                <span className="text-2xl">📊</span>
                <span className="text-sm">View Reports</span>
              </Button>
              <Button variant="outline" className="h-16 rounded-xl flex flex-col space-y-1">
                <span className="text-2xl">📈</span>
                <span className="text-sm">Export Data</span>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4 mt-6">
          {/* Community Challenges */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                🏆 Community Challenges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-yellow-800">December Hydration Challenge</div>
                    <div className="text-xs text-yellow-600">Drink 2.5L daily for 30 days</div>
                  </div>
                  <Badge className="bg-yellow-600">Active</Badge>
                </div>
                <Progress value={65} className="mt-2 h-2" />
                <div className="text-xs text-yellow-600 mt-1">847 participants • 19 days left</div>
              </div>
              
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-green-800">Protein Power Month</div>
                    <div className="text-xs text-green-600">Hit protein goals daily</div>
                  </div>
                  <Badge variant="outline" className="border-green-600 text-green-600">Join</Badge>
                </div>
                <div className="text-xs text-green-600 mt-2">1,203 participants • Starting Dec 20</div>
              </div>
            </CardContent>
          </Card>

          {/* Friends Activity */}
          <Card className="rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Friends Activity
              </CardTitle>
              <Button size="sm" variant="outline" className="rounded-lg">
                Add Friends
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {friends.map((friend, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="text-sm">{friend.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="text-sm">{friend.name}</div>
                    <div className="text-xs text-muted-foreground">{friend.status}</div>
                  </div>
                  <Badge variant="secondary" className="rounded-full text-xs">
                    {friend.streak} days
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Challenge */}
          <Card className="rounded-xl border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Weekly Challenge</CardTitle>
              <p className="text-sm text-blue-600">Log meals for 7 consecutive days</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-800">Progress: 5/7 days</div>
                <Badge className="bg-blue-600 rounded-full">Join Challenge</Badge>
              </div>
              <Progress value={71} className="mt-2 h-2" />
            </CardContent>
          </Card>

          {/* Share Progress */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Share Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full rounded-lg justify-start">
                <Share className="w-4 h-4 mr-2" />
                Share Weekly Summary
              </Button>
              <Button variant="outline" className="w-full rounded-lg justify-start">
                <Trophy className="w-4 h-4 mr-2" />
                Share Achievement
              </Button>
              <Button variant="outline" className="w-full rounded-lg justify-start">
                <Target className="w-4 h-4 mr-2" />
                Share Goal Progress
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4 mt-6">
          {/* App Preferences */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>App Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { icon: Bell, label: "Notifications", sublabel: "Meal reminders, goals" },
                { icon: Target, label: "Goals & Targets", sublabel: "Calories, macros, water" },
                { icon: Calendar, label: "Reminders", sublabel: "Meal times, water breaks" },
                { icon: User, label: "Profile Settings", sublabel: "Personal information" }
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-between h-auto p-4 rounded-lg"
                >
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="text-sm">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.sublabel}</div>
                    </div>
                  </div>
                  <div className="text-muted-foreground">›</div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Data & Privacy */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Data & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { icon: Download, label: "Export Data", sublabel: "Download your nutrition data" },
                { icon: Settings, label: "Privacy Settings", sublabel: "Control data sharing" },
                { icon: HelpCircle, label: "Help & Support", sublabel: "FAQs, contact support" }
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-between h-auto p-4 rounded-lg"
                >
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="text-sm">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.sublabel}</div>
                    </div>
                  </div>
                  <div className="text-muted-foreground">›</div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* About */}
          <Card className="rounded-xl">
            <CardContent className="p-4 text-center space-y-2">
              <div className="text-sm">NutriTrack Pro v2.1.0</div>
              <div className="text-xs text-muted-foreground">
                Made with <Heart className="w-3 h-3 inline text-red-500" /> for healthy living
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <Button variant="link" size="sm" className="text-xs">
                  Terms of Service
                </Button>
                <Button variant="link" size="sm" className="text-xs">
                  Privacy Policy
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}