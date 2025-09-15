import { Scale, BarChart3, Settings, User, Bell, HelpCircle, Share } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { WeightTracking } from "./WeightTracking";
import { Analytics } from "./Analytics";

export function More() {
  return (
    <div className="p-4 space-y-6 pb-20">
      <Tabs defaultValue="weight" className="w-full">
        <TabsList className="grid w-full grid-cols-2 rounded-xl">
          <TabsTrigger value="weight" className="rounded-lg">Weight</TabsTrigger>
          <TabsTrigger value="analytics" className="rounded-lg">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="weight" className="mt-6">
          <WeightTracking />
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Analytics />
        </TabsContent>
      </Tabs>

      {/* Settings & Profile Section */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Settings & Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { icon: User, label: "Profile Settings", badge: null },
            { icon: Bell, label: "Notifications", badge: "3" },
            { icon: Settings, label: "App Preferences", badge: null },
            { icon: HelpCircle, label: "Help & Support", badge: null },
            { icon: Share, label: "Share App", badge: null }
          ].map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-between h-12 rounded-lg"
            >
              <div className="flex items-center">
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <Badge variant="secondary" className="rounded-full">
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* App Info */}
      <Card className="rounded-xl">
        <CardContent className="p-4 text-center">
          <div className="text-sm text-muted-foreground">
            NutriTrack v2.1.0
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Made with ❤️ for healthy living
          </div>
        </CardContent>
      </Card>
    </div>
  );
}