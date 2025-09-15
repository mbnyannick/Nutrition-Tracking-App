import { Camera, ImageIcon, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export function Scanner() {
  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Camera Interface */}
      <Card className="rounded-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-square bg-muted flex items-center justify-center">
            <div className="absolute inset-4 border-2 border-white/60 rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-white/80 rounded-xl flex items-center justify-center">
                <Camera className="w-8 h-8 text-white/80" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-2 text-center">
                <p className="text-white text-sm">
                  Point camera at food packaging or barcode
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button size="lg" className="w-full rounded-xl h-14">
          <Camera className="w-5 h-5 mr-2" />
          Scan Food
        </Button>
        
        <Button variant="outline" size="lg" className="w-full rounded-xl h-14">
          <ImageIcon className="w-5 h-5 mr-2" />
          Choose from Gallery
        </Button>
      </div>

      {/* Manual Search */}
      <Card className="rounded-xl">
        <CardContent className="p-4 space-y-4">
          <h3>Or search manually</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search for food..." 
              className="pl-10 rounded-xl"
            />
          </div>
        </CardContent>
      </Card>

      {/* AI Features */}
      <Card className="rounded-xl border-indigo-200 bg-indigo-50">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🤖</div>
            <div>
              <h3 className="text-indigo-800">AI-Powered Recognition</h3>
              <p className="text-sm text-indigo-600">Scan any food - even home-cooked meals!</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Button variant="outline" className="rounded-lg border-indigo-300 text-indigo-700">
              📷 Photo Analysis
            </Button>
            <Button variant="outline" className="rounded-lg border-indigo-300 text-indigo-700">
              🔍 Smart Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Scans */}
      <Card className="rounded-xl">
        <CardContent className="p-4">
          <h3 className="mb-4">Recent Scans</h3>
          <div className="space-y-3">
            {[
              { name: "Greek Yogurt", brand: "Chobani", calories: "100 cal", confidence: "98%" },
              { name: "Banana", brand: "Fresh", calories: "89 cal", confidence: "95%" },
              { name: "Homemade Pasta", brand: "AI Detected", calories: "320 cal", confidence: "87%" },
              { name: "Oatmeal", brand: "Quaker", calories: "150 cal", confidence: "99%" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex-1">
                  <div className="text-sm">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.brand}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{item.calories}</div>
                  <div className="text-xs text-green-600">{item.confidence}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Barcode Database Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="rounded-xl">
          <CardContent className="p-4 text-center">
            <div className="text-2xl text-primary">2.1M+</div>
            <div className="text-sm text-muted-foreground">Foods in database</div>
          </CardContent>
        </Card>
        <Card className="rounded-xl">
          <CardContent className="p-4 text-center">
            <div className="text-2xl text-primary">99.2%</div>
            <div className="text-sm text-muted-foreground">Recognition accuracy</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}