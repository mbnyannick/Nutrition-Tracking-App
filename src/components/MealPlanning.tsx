import { Calendar, ChefHat, ShoppingCart, Clock, Users, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const weeklyPlan = [
  {
    day: "Monday",
    date: "Dec 16",
    meals: {
      breakfast: { name: "Overnight Oats", calories: 320, time: "30 min prep" },
      lunch: { name: "Quinoa Buddha Bowl", calories: 450, time: "25 min" },
      dinner: { name: "Grilled Salmon", calories: 520, time: "35 min" },
      snack: { name: "Greek Yogurt", calories: 150, time: "2 min" }
    }
  },
  {
    day: "Tuesday", 
    date: "Dec 17",
    meals: {
      breakfast: { name: "Avocado Toast", calories: 280, time: "10 min" },
      lunch: { name: "Chicken Salad", calories: 420, time: "20 min" },
      dinner: { name: "Vegetarian Pasta", calories: 480, time: "30 min" },
      snack: { name: "Apple & Nuts", calories: 180, time: "1 min" }
    }
  }
];

const recipes = [
  {
    id: 1,
    name: "Mediterranean Quinoa Bowl",
    image: "🥗",
    prepTime: "25 min",
    servings: 4,
    calories: 420,
    difficulty: "Easy",
    tags: ["Vegetarian", "High Protein", "Gluten-Free"]
  },
  {
    id: 2,
    name: "Honey Garlic Salmon",
    image: "🍣",
    prepTime: "30 min", 
    servings: 2,
    calories: 380,
    difficulty: "Medium",
    tags: ["High Protein", "Omega-3", "Low Carb"]
  },
  {
    id: 3,
    name: "Green Smoothie Bowl",
    image: "🍃",
    prepTime: "10 min",
    servings: 1,
    calories: 280,
    difficulty: "Easy",
    tags: ["Vegan", "Raw", "Antioxidants"]
  }
];

const shoppingList = [
  { category: "Proteins", items: ["Salmon fillet (2 lbs)", "Greek yogurt (32 oz)", "Eggs (1 dozen)"] },
  { category: "Vegetables", items: ["Spinach (5 oz)", "Avocados (4)", "Bell peppers (3)", "Cucumber (2)"] },
  { category: "Pantry", items: ["Quinoa (1 lb)", "Olive oil", "Honey", "Almonds (8 oz)"] }
];

export function MealPlanning() {
  return (
    <div className="p-4 space-y-6 pb-20">
      <Tabs defaultValue="planner" className="w-full">
        <TabsList className="grid w-full grid-cols-3 rounded-xl">
          <TabsTrigger value="planner" className="rounded-lg">Planner</TabsTrigger>
          <TabsTrigger value="recipes" className="rounded-lg">Recipes</TabsTrigger>
          <TabsTrigger value="shopping" className="rounded-lg">Shopping</TabsTrigger>
        </TabsList>

        <TabsContent value="planner" className="space-y-4 mt-6">
          {/* This Week Overview */}
          <Card className="rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                This Week
              </CardTitle>
              <Button size="sm" variant="outline" className="rounded-lg">
                <Plus className="w-4 h-4 mr-1" />
                Add Meal
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {weeklyPlan.map((day) => (
                <Card key={day.day} className="rounded-lg">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h4 className="text-base">{day.day}</h4>
                        <p className="text-sm text-muted-foreground">{day.date}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {Object.values(day.meals).reduce((total, meal) => total + meal.calories, 0)} cal
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(day.meals).map(([mealType, meal]) => (
                        <div key={mealType} className="p-2 bg-muted rounded-lg">
                          <div className="text-xs text-muted-foreground capitalize mb-1">{mealType}</div>
                          <div className="text-sm">{meal.name}</div>
                          <div className="text-xs text-muted-foreground">{meal.calories} cal</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-20 rounded-xl flex flex-col space-y-2">
              <ChefHat className="w-6 h-6" />
              <span className="text-sm">Generate Plan</span>
            </Button>
            <Button variant="outline" className="h-20 rounded-xl flex flex-col space-y-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Next Week</span>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="recipes" className="space-y-4 mt-6">
          {/* Recipe Search */}
          <Card className="rounded-xl">
            <CardContent className="p-4">
              <div className="flex space-x-2">
                <input 
                  placeholder="Search recipes..." 
                  className="flex-1 px-3 py-2 border rounded-lg bg-background"
                />
                <Button size="sm" className="rounded-lg">Search</Button>
              </div>
            </CardContent>
          </Card>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {["All", "Vegetarian", "High Protein", "Low Carb", "Quick", "Batch Cook"].map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full cursor-pointer hover:bg-primary hover:text-primary-foreground">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Recipe Cards */}
          <div className="space-y-4">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="rounded-xl">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{recipe.image}</div>
                    <div className="flex-1">
                      <h3 className="text-base mb-2">{recipe.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {recipe.prepTime}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {recipe.servings}
                        </div>
                        <div>{recipe.calories} cal</div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {recipe.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1 rounded-lg">
                      View Recipe
                    </Button>
                    <Button size="sm" className="flex-1 rounded-lg">
                      Add to Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="shopping" className="space-y-4 mt-6">
          {/* Shopping List Header */}
          <Card className="rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shopping List
              </CardTitle>
              <Badge variant="secondary" className="rounded-full">
                12 items
              </Badge>
            </CardHeader>
          </Card>

          {/* Shopping Categories */}
          {shoppingList.map((category) => (
            <Card key={category.category} className="rounded-xl">
              <CardHeader>
                <CardTitle className="text-base">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input 
                        type="checkbox" 
                        className="rounded"
                      />
                      <span className="text-sm">{item}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          {/* Generate List Button */}
          <Button className="w-full rounded-xl h-12">
            <Plus className="w-4 h-4 mr-2" />
            Generate from Meal Plan
          </Button>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-xl">
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-primary">$42</div>
                <div className="text-sm text-muted-foreground">Est. cost</div>
              </CardContent>
            </Card>
            <Card className="rounded-xl">
              <CardContent className="p-4 text-center">
                <div className="text-2xl text-primary">3</div>
                <div className="text-sm text-muted-foreground">Stores needed</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}