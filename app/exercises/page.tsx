"use client"

import type React from "react"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExerciseCategories } from "@/components/exercise-categories"
import { ExerciseLibrary } from "@/components/exercise-library"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { TrainingPrograms } from "@/components/training-programs"

export default function ExercisesPage() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    difficulty: "beginner",
    equipment: "",
    muscleGroups: [] as string[],
  })
  const { toast } = useToast()

  const categories = [
    "Strength Training",
    "Cardio",
    "Flexibility",
    "Core",
    "HIIT",
    "Plyometrics",
    "Balance",
    "Recovery",
  ]

  const muscleGroups = [
    { id: "chest", label: "Chest" },
    { id: "back", label: "Back" },
    { id: "shoulders", label: "Shoulders" },
    { id: "biceps", label: "Biceps" },
    { id: "triceps", label: "Triceps" },
    { id: "forearms", label: "Forearms" },
    { id: "quadriceps", label: "Quadriceps" },
    { id: "hamstrings", label: "Hamstrings" },
    { id: "calves", label: "Calves" },
    { id: "glutes", label: "Glutes" },
    { id: "abs", label: "Abs" },
    { id: "obliques", label: "Obliques" },
    { id: "lower_back", label: "Lower Back" },
  ]

  const difficultyLevels = ["beginner", "intermediate", "advanced", "expert"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.category || formData.muscleGroups.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields and select at least one muscle group.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically save the exercise to your database
    console.log("Exercise data:", formData)

    toast({
      title: "Exercise Added",
      description: `${formData.name} has been added to your exercise library.`,
    })

    // Reset form and close dialog
    setFormData({
      name: "",
      category: "",
      description: "",
      difficulty: "beginner",
      equipment: "",
      muscleGroups: [],
    })
    setOpen(false)
  }

  const handleMuscleGroupChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      muscleGroups: checked ? [...prev.muscleGroups, id] : prev.muscleGroups.filter((group) => group !== id),
    }))
  }

  return (
    <DashboardShell>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Exercise Library</h2>
        <div className="flex items-center">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Exercise
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Add New Exercise</DialogTitle>
                <DialogDescription>Create a new exercise with categories and target muscle groups.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name*
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category*
                    </Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger id="category" className="col-span-3">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="description" className="text-right pt-2">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="col-span-3"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="difficulty" className="text-right">
                      Difficulty
                    </Label>
                    <Select
                      value={formData.difficulty}
                      onValueChange={(value) => setFormData({ ...formData, difficulty: value })}
                    >
                      <SelectTrigger id="difficulty" className="col-span-3">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        {difficultyLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="equipment" className="text-right">
                      Equipment
                    </Label>
                    <Input
                      id="equipment"
                      value={formData.equipment}
                      onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                      className="col-span-3"
                      placeholder="e.g., Dumbbells, Barbell, None"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label className="text-right pt-2">Muscle Groups*</Label>
                    <div className="col-span-3 grid grid-cols-2 gap-2">
                      {muscleGroups.map((group) => (
                        <div key={group.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={group.id}
                            checked={formData.muscleGroups.includes(group.id)}
                            onCheckedChange={(checked) => handleMuscleGroupChange(group.id, checked as boolean)}
                          />
                          <Label htmlFor={group.id} className="font-normal">
                            {group.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add Exercise</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="library" className="space-y-4">
        <div className="overflow-x-auto pb-2">
          <TabsList>
            <TabsTrigger value="library" className="font-medium">
              Exercise Library
            </TabsTrigger>
            <TabsTrigger value="categories" className="font-medium">
              Categories
            </TabsTrigger>
            <TabsTrigger value="programs" className="font-medium">
              Programs
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="library" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="font-bold">Exercise Library</CardTitle>
              <CardDescription>Browse and manage your exercise collection</CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search exercises..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <ExerciseLibrary />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="font-bold">Exercise Categories</CardTitle>
              <CardDescription>Manage your exercise categories</CardDescription>
            </CardHeader>
            <CardContent>
              <ExerciseCategories />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="programs" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="font-bold">Training Programs</CardTitle>
              <CardDescription>Create and manage training programs for your clients</CardDescription>
            </CardHeader>
            <CardContent>
              <TrainingPrograms />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
