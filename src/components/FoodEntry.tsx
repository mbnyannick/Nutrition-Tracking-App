import { Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

export function FoodEntry() {
  const [servings, setServings] = useState(1);
  
  const foodItem = {
    name: "Greek Yogurt",
    brand: "Chobani Plain 0% Fat",
    servingSize: "1 container (170g)",
    calories: 100,
    protein: 18,
    carbs: 9,
    fat: 0,
    fiber: 0,
    sugar: 9,
    sodium: 60
  };

  const adjustedNutrition = {
    calories: foodItem.calories * servings,
    protein: foodItem.protein * servings,
    carbs: foodItem.carbs * servings,
    fat: foodItem.fat * servings,
    fiber: foodItem.fiber * servings,
    sugar: foodItem.sugar * servings,
    sodium: foodItem.sodium * servings
  };

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Food Item Header */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg">{foodItem.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{foodItem.brand}</p>
        </CardHeader>
      </Card>

      {/* Portion Control */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-base">Portion Size</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Serving Type</Label>
            <Select defaultValue="container">
              <SelectTrigger className="rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="container">Container (170g)</SelectItem>
                <SelectItem value="cup">Cup (245g)</SelectItem>
                <SelectItem value="gram">Grams</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label>Number of Servings</Label>
            <div className="flex items-center space-x-3 mt-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10"
                onClick={() => setServings(Math.max(0.25, servings - 0.25))}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Input 
                value={servings} 
                onChange={(e) => setServings(parseFloat(e.target.value) || 1)}
                className="text-center rounded-lg w-20"
              />
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-10 h-10"
                onClick={() => setServings(servings + 0.25)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nutrition Information */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-base">Nutrition Facts</CardTitle>
          <p className="text-sm text-muted-foreground">Per {servings} serving(s)</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Calories */}
          <div className="flex justify-between items-center">
            <span className="text-lg">Calories</span>
            <span className="text-lg text-primary">{adjustedNutrition.calories}</span>
          </div>
          
          <Separator />
          
          {/* Macronutrients */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Protein</span>
              <span>{adjustedNutrition.protein}g</span>
            </div>
            <div className="flex justify-between">
              <span>Carbohydrates</span>
              <span>{adjustedNutrition.carbs}g</span>
            </div>
            <div className="flex justify-between pl-4">
              <span className="text-sm text-muted-foreground">Fiber</span>
              <span className="text-sm">{adjustedNutrition.fiber}g</span>
            </div>
            <div className="flex justify-between pl-4">
              <span className="text-sm text-muted-foreground">Sugar</span>
              <span className="text-sm">{adjustedNutrition.sugar}g</span>
            </div>
            <div className="flex justify-between">
              <span>Fat</span>
              <span>{adjustedNutrition.fat}g</span>
            </div>
          </div>
          
          <Separator />
          
          {/* Other nutrients */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Sodium</span>
              <span>{adjustedNutrition.sodium}mg</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meal Selection */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-base">Add to Meal</CardTitle>
        </CardHeader>
        <CardContent>
          <Select defaultValue="breakfast">
            <SelectTrigger className="rounded-lg">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="breakfast">Breakfast</SelectItem>
              <SelectItem value="lunch">Lunch</SelectItem>
              <SelectItem value="dinner">Dinner</SelectItem>
              <SelectItem value="snack">Snack</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Add Button */}
      <Button size="lg" className="w-full rounded-xl h-14">
        Add to Diary
      </Button>
    </div>
  );
}