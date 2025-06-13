"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit, Plus, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function ExerciseCategories() {
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "Strength Training",
      description: "Exercises focused on building muscle strength and power",
      count: 24,
    },
    {
      id: "2",
      name: "Cardio",
      description: "Exercises that increase heart rate and improve cardiovascular health",
      count: 18,
    },
    {
      id: "3",
      name: "Flexibility",
      description: "Exercises that improve range of motion and prevent injury",
      count: 15,
    },
    {
      id: "4",
      name: "HIIT",
      description: "High-intensity interval training for maximum calorie burn",
      count: 12,
    },
    {
      id: "5",
      name: "Core",
      description: "Exercises targeting the abdominal and lower back muscles",
      count: 20,
    },
    {
      id: "6",
      name: "Recovery",
      description: "Low-intensity exercises for active recovery days",
      count: 8,
    },
  ])

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  })
  const { toast } = useToast()

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Category name is required.",
        variant: "destructive",
      })
      return
    }

    const newCategory = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      count: 0,
    }

    setCategories([...categories, newCategory])
    setFormData({ name: "", description: "" })
    setIsAddDialogOpen(false)

    toast({
      title: "Category Added",
      description: `${formData.name} has been added to your categories.`,
    })
  }

  const handleEditCategory = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Category name is required.",
        variant: "destructive",
      })
      return
    }

    setCategories(
      categories.map((cat) =>
        cat.id === selectedCategory.id ? { ...cat, name: formData.name, description: formData.description } : cat,
      ),
    )

    setFormData({ name: "", description: "" })
    setIsEditDialogOpen(false)
    setSelectedCategory(null)

    toast({
      title: "Category Updated",
      description: `${formData.name} has been updated.`,
    })
  }

  const handleDeleteCategory = () => {
    setCategories(categories.filter((cat) => cat.id !== selectedCategory.id))
    setIsDeleteDialogOpen(false)

    toast({
      title: "Category Deleted",
      description: `${selectedCategory.name} has been deleted.`,
    })

    setSelectedCategory(null)
  }

  const openEditDialog = (category: any) => {
    setSelectedCategory(category)
    setFormData({
      name: category.name,
      description: category.description,
    })
    setIsEditDialogOpen(true)
  }

  const openDeleteDialog = (category: any) => {
    setSelectedCategory(category)
    setIsDeleteDialogOpen(true)
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <CardTitle className="font-bold">{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{category.count} exercises</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" onClick={() => openEditDialog(category)}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-destructive"
                onClick={() => openDeleteDialog(category)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Card className="flex flex-col items-center justify-center border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-20 w-20 rounded-full">
                  <Plus className="h-6 w-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Category</DialogTitle>
                  <DialogDescription>Create a new exercise category for your library.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddCategory}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="add-name" className="text-right">
                        Name*
                      </Label>
                      <Input
                        id="add-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-start gap-4">
                      <Label htmlFor="add-description" className="text-right pt-2">
                        Description
                      </Label>
                      <Textarea
                        id="add-description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="col-span-3"
                        rows={3}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Add Category</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <p className="mt-4 text-sm font-medium">Add New Category</p>
          </CardContent>
        </Card>
      </div>

      {/* Edit Category Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>Update the category information.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEditCategory}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Name*
                </Label>
                <Input
                  id="edit-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="edit-description" className="text-right pt-2">
                  Description
                </Label>
                <Textarea
                  id="edit-description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="col-span-3"
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Update Category</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the category "{selectedCategory?.name}" and
              remove it from your exercise library.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteCategory}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
