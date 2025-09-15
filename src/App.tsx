import { useState } from "react";
import { BarChart3, Camera, PlusCircle, Droplets, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Dashboard } from "./components/Dashboard";
import { Scanner } from "./components/Scanner";
import { FoodEntry } from "./components/FoodEntry";
import { WaterTracking } from "./components/WaterTracking";
import { Profile } from "./components/Profile";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <TabsContent value="dashboard" className="m-0 h-full">
            <Dashboard />
          </TabsContent>
          
          <TabsContent value="scan" className="m-0 h-full">
            <Scanner />
          </TabsContent>
          
          <TabsContent value="add" className="m-0 h-full">
            <FoodEntry />
          </TabsContent>
          
          <TabsContent value="water" className="m-0 h-full">
            <WaterTracking />
          </TabsContent>
          
          <TabsContent value="profile" className="m-0 h-full">
            <Profile />
          </TabsContent>
        </div>

        {/* Bottom Navigation */}
        <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <TabsList className="grid w-full grid-cols-5 h-16 bg-transparent">
            <TabsTrigger 
              value="dashboard" 
              className="flex flex-col items-center space-y-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="text-xs">Home</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="scan" 
              className="flex flex-col items-center space-y-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              <Camera className="w-4 h-4" />
              <span className="text-xs">Scan</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="add" 
              className="flex flex-col items-center space-y-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="text-xs">Add</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="water" 
              className="flex flex-col items-center space-y-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              <Droplets className="w-4 h-4" />
              <span className="text-xs">Water</span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="profile" 
              className="flex flex-col items-center space-y-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              <User className="w-4 h-4" />
              <span className="text-xs">Profile</span>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
}