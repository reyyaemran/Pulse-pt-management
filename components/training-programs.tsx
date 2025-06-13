"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit, Plus, Trash2, Users, Calendar, Dumbbell } from "lucide-react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
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
import { ScrollArea } from "@/components/ui/scroll-area"

interface Exercise {
  id: string
  name: string
  category: string
  targetMuscles: string
}

interface ProgramExercise {
  exerciseId: string
  exerciseName: string
  sets: number
  reps: string
  weight: string
  tempo: string
  restTime: string
  notes: string
}

interface TrainingProgram {
  id: string
  name: string
  description: string
  duration: string
  difficulty: string
  exercises: ProgramExercise[]
  assignedClients: string[]
  createdDate: string
}

export function TrainingPrograms() {
  const [programs, setPrograms] = useState<TrainingProgram[]>([
    {
      id: "1",
      name: "Beginner Full Body",
      description: "A comprehensive full-body workout for beginners",
      duration: "4 weeks",
      difficulty: "beginner",
      exercises: [
        {
          exerciseId: "1",
          exerciseName: "Barbell Squat",
          sets: 3,
          reps: "8-12",
          weight: "Bodyweight",
          tempo: "2-1-2-1",
          restTime: "60s",
          notes: "Focus on form",
        },
        {
          exerciseId: "2",
          exerciseName: "Push-up",
          sets: 3,
          reps: "10-15",
          weight: "Bodyweight",
          tempo: "2-1-2-1",
          restTime: "45s",
          notes: "Modify on knees if needed",
        },
      ],
      assignedClients: ["1", "3"],
      createdDate: "2023-05-15",
    },
    {
      id: "2",
      name: "Advanced Strength",
      description: "High-intensity strength training for experienced athletes",
      duration: "6 weeks",
      difficulty: "advanced",
      exercises: [
        {
          exerciseId: "3",
          exerciseName: "Deadlift",
          sets: 4,
          reps: "5-8",
          weight: "80-90kg",
          tempo: "3-1-1-1",
          restTime: "3min",
          notes: "Focus on explosive concentric",
        },
      ],
      assignedClients: ["2"],
      createdDate: "2023-05-10",
    },
  ])

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null)
  const [currentStep, setCurrentStep] = useState(1)

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
    difficulty: "beginner",
    exercises: [] as ProgramExercise[],
  })

  const [currentExercise, setCurrentExercise] = useState<ProgramExercise>({
    exerciseId: "",
    exerciseName: "",
    sets: 3,
    reps: "",
    weight: "",
    tempo: "",
    restTime: "",
    notes: "",
  })

  const { toast } = useToast()

  // Mock exercise library
  const exerciseLibrary: Exercise[] = [
    { id: "1", name: "Barbell Squat", category: "Strength Training", targetMuscles: "Quadriceps, Glutes" },
    { id: "2", name: "Push-up", category: "Strength Training", targetMuscles: "Chest, Shoulders, Triceps" },
    { id: "3", name: "Deadlift", category: "Strength Training", targetMuscles: "Lower Back, Glutes, Hamstrings" },
    { id: "4", name: "Plank", category: "Core", targetMuscles: "Abdominals, Lower Back" },
    { id: "5", name: "Dumbbell Bench Press", category: "Strength Training", targetMuscles: "Chest, Shoulders" },
    { id: "6", name: "Jumping Jacks", category: "HIIT", targetMuscles: "Full Body" },
  ]

  // Mock clients
  const clients = [
    { id: "1", name: "Sarah Johnson", status: "active" },
    { id: "2", name: "Mike Peterson", status: "active" },
    { id: "3", name: "Emma Wilson", status: "active" },
    { id: "4", name: "David Lee", status: "inactive" },
  ]

  const handleAddProgram = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Program name is required.",
        variant: "destructive",
      })
      return
    }

    if (formData.exercises.length === 0) {
      toast({
        title: "Validation Error",
        description: "At least one exercise is required.",
        variant: "destructive",
      })
      return
    }

    const newProgram: TrainingProgram = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      duration: formData.duration,
      difficulty: formData.difficulty,
      exercises: formData.exercises,
      assignedClients: [],
      createdDate: new Date().toISOString().split("T")[0],
    }

    setPrograms([...programs, newProgram])
    resetForm()
    setIsAddDialogOpen(false)

    toast({
      title: "Program Created",
      description: `${formData.name} has been added to your programs.`,
    })
  }

  const handleAddExercise = () => {
    if (!currentExercise.exerciseId || !currentExercise.reps) {
      toast({
        title: "Validation Error",
        description: "Exercise and reps are required.",
        variant: "destructive",
      })
      return
    }

    const exercise = exerciseLibrary.find((ex) => ex.id === currentExercise.exerciseId)
    if (exercise) {
      setFormData({
        ...formData,
        exercises: [...formData.exercises, { ...currentExercise, exerciseName: exercise.name }],
      })

      setCurrentExercise({
        exerciseId: "",
        exerciseName: "",
        sets: 3,
        reps: "",
        weight: "",
        tempo: "",
        restTime: "",
        notes: "",
      })
    }
  }

  const handleRemoveExercise = (index: number) => {
    setFormData({
      ...formData,
      exercises: formData.exercises.filter((_, i) => i !== index),
    })
  }

  const handleAssignProgram = (clientIds: string[]) => {
    if (selectedProgram) {
      setPrograms(
        programs.map((program) =>
          program.id === selectedProgram.id
            ? { ...program, assignedClients: [...new Set([...program.assignedClients, ...clientIds])] }
            : program,
        ),
      )

      toast({
        title: "Program Assigned",
        description: `${selectedProgram.name} has been assigned to ${clientIds.length} client(s).`,
      })

      setIsAssignDialogOpen(false)
      setSelectedProgram(null)
    }
  }

  const handleDeleteProgram = () => {
    if (selectedProgram) {
      setPrograms(programs.filter((program) => program.id !== selectedProgram.id))
      setIsDeleteDialogOpen(false)

      toast({
        title: "Program Deleted",
        description: `${selectedProgram.name} has been deleted.`,
      })

      setSelectedProgram(null)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      duration: "",
      difficulty: "beginner",
      exercises: [],
    })
    setCurrentExercise({
      exerciseId: "",
      exerciseName: "",
      sets: 3,
      reps: "",
      weight: "",
      tempo: "",
      restTime: "",
      notes: "",
    })
    setCurrentStep(1)
  }

  const openAssignDialog = (program: TrainingProgram) => {
    setSelectedProgram(program)
    setIsAssignDialogOpen(true)
  }

  const openDeleteDialog = (program: TrainingProgram) => {
    setSelectedProgram(program)
    setIsDeleteDialogOpen(true)
  }

  return (
    <>
      <div className="mb-4 flex items-center gap-2">
        <span className="text-sm font-medium">Difficulty:</span>
        <div className="flex items-center gap-1">
          <Badge variant="success">beginner</Badge>
          <span className="text-xs text-muted-foreground">-</span>
          <Badge variant="default">intermediate</Badge>
          <span className="text-xs text-muted-foreground">-</span>
          <Badge variant="destructive">advanced</Badge>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <Card key={program.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-bold">{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </div>
                {(() => {
                  if (program.difficulty === "beginner") {
                    return <Badge variant="success">{program.difficulty}</Badge>
                  }
                  if (program.difficulty === "intermediate") {
                    return <Badge variant="default">{program.difficulty}</Badge>
                  }
                  if (program.difficulty === "advanced") {
                    return <Badge variant="destructive">{program.difficulty}</Badge>
                  }
                  return <Badge variant="outline">{String(program.difficulty).charAt(0).toUpperCase() + String(program.difficulty).slice(1)}</Badge>
                })()}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {program.duration}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Dumbbell className="mr-2 h-4 w-4" />
                  {program.exercises.length} exercises
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  {program.assignedClients.length} clients assigned
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" onClick={() => openAssignDialog(program)}>
                  <Users className="mr-2 h-4 w-4" />
                  Assign
                </Button>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-destructive"
                onClick={() => openDeleteDialog(program)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Card className="flex flex-col items-center justify-center border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Dialog
              open={isAddDialogOpen}
              onOpenChange={(open) => {
                setIsAddDialogOpen(open)
                if (!open) resetForm()
              }}
            >
              <DialogTrigger asChild>
                <Button variant="outline" className="h-20 w-20 rounded-full">
                  <Plus className="h-6 w-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle>Create Training Program</DialogTitle>
                  <DialogDescription>
                    Step {currentStep} of 2: {currentStep === 1 ? "Program Details" : "Add Exercises"}
                  </DialogDescription>
                </DialogHeader>

                <ScrollArea className="max-h-[60vh]">
                  {currentStep === 1 && (
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="program-name" className="text-right">
                          Name*
                        </Label>
                        <Input
                          id="program-name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="program-description" className="text-right pt-2">
                          Description
                        </Label>
                        <Textarea
                          id="program-description"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="col-span-3"
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="program-duration" className="text-right">
                          Duration
                        </Label>
                        <Input
                          id="program-duration"
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                          className="col-span-3"
                          placeholder="e.g., 4 weeks, 8 weeks"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="program-difficulty" className="text-right">
                          Difficulty
                        </Label>
                        <Select
                          value={formData.difficulty}
                          onValueChange={(value) => setFormData({ ...formData, difficulty: value })}
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-4">Add Exercise</h4>
                        <div className="grid gap-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="exercise-select">Exercise*</Label>
                              <Select
                                value={currentExercise.exerciseId}
                                onValueChange={(value) => setCurrentExercise({ ...currentExercise, exerciseId: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select exercise" />
                                </SelectTrigger>
                                <SelectContent>
                                  {exerciseLibrary.map((exercise) => (
                                    <SelectItem key={exercise.id} value={exercise.id}>
                                      {exercise.name} - {exercise.category}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="sets">Sets</Label>
                              <Input
                                id="sets"
                                type="number"
                                value={currentExercise.sets}
                                onChange={(e) =>
                                  setCurrentExercise({ ...currentExercise, sets: Number.parseInt(e.target.value) || 0 })
                                }
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="reps">Reps*</Label>
                              <Input
                                id="reps"
                                value={currentExercise.reps}
                                onChange={(e) => setCurrentExercise({ ...currentExercise, reps: e.target.value })}
                                placeholder="e.g., 8-12, 15, AMRAP"
                              />
                            </div>
                            <div>
                              <Label htmlFor="weight">Weight</Label>
                              <Input
                                id="weight"
                                value={currentExercise.weight}
                                onChange={(e) => setCurrentExercise({ ...currentExercise, weight: e.target.value })}
                                placeholder="e.g., 60kg, 80% 1RM"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="tempo">Tempo</Label>
                              <Input
                                id="tempo"
                                value={currentExercise.tempo}
                                onChange={(e) => setCurrentExercise({ ...currentExercise, tempo: e.target.value })}
                                placeholder="e.g., 2-1-2-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="rest">Rest Time</Label>
                              <Input
                                id="rest"
                                value={currentExercise.restTime}
                                onChange={(e) => setCurrentExercise({ ...currentExercise, restTime: e.target.value })}
                                placeholder="e.g., 60s, 2min"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="exercise-notes">Notes</Label>
                            <Textarea
                              id="exercise-notes"
                              value={currentExercise.notes}
                              onChange={(e) => setCurrentExercise({ ...currentExercise, notes: e.target.value })}
                              placeholder="Special instructions or modifications"
                              rows={2}
                            />
                          </div>
                          <Button type="button" onClick={handleAddExercise} className="w-full">
                            Add Exercise to Program
                          </Button>
                        </div>
                      </div>

                      {formData.exercises.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-4">Program Exercises ({formData.exercises.length})</h4>
                          <div className="space-y-2">
                            {formData.exercises.map((exercise, index) => (
                              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex-1">
                                  <div className="font-medium">{exercise.exerciseName}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {exercise.sets} sets × {exercise.reps} reps
                                    {exercise.weight && ` @ ${exercise.weight}`}
                                    {exercise.restTime && ` • Rest: ${exercise.restTime}`}
                                  </div>
                                  {exercise.notes && (
                                    <div className="text-xs text-muted-foreground mt-1">{exercise.notes}</div>
                                  )}
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleRemoveExercise(index)}
                                  className="text-destructive"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </ScrollArea>

                <DialogFooter>
                  {currentStep === 1 ? (
                    <Button onClick={() => setCurrentStep(2)} disabled={!formData.name.trim()}>
                      Next: Add Exercises
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        Back
                      </Button>
                      <Button onClick={handleAddProgram} disabled={formData.exercises.length === 0}>
                        Create Program
                      </Button>
                    </div>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <p className="mt-4 text-sm font-medium">Add Program</p>
          </CardContent>
        </Card>
      </div>

      {/* Assign Program Dialog */}
      <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Assign Program</DialogTitle>
            <DialogDescription>Select clients to assign "{selectedProgram?.name}" to.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center space-x-2 border-b pb-2">
              <Checkbox
                id="select-all-clients"
                onCheckedChange={(checked) => {
                  // Get all checkboxes for individual clients
                  const clientCheckboxes = document.querySelectorAll('[data-client-checkbox="true"]')
                  // Set all client checkboxes to the same state as the "All Active Clients" checkbox
                  clientCheckboxes.forEach((checkbox) => {
                    if (checkbox instanceof HTMLInputElement) {
                      checkbox.checked = checked === true
                    }
                  })
                }}
              />
              <Label htmlFor="select-all-clients" className="font-medium">
                All Active Clients
              </Label>
            </div>
            {clients.map((client) => (
              <div key={client.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`client-${client.id}`}
                  data-client-checkbox="true"
                  defaultChecked={selectedProgram?.assignedClients.includes(client.id)}
                />
                <Label htmlFor={`client-${client.id}`} className="font-normal">
                  {client.name}
                  {client.status === "active" && (
                    <Badge variant="outline" className="ml-2 text-xs">
                      Active
                    </Badge>
                  )}
                </Label>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                const selectedClients = clients
                  .filter((client) => (document.getElementById(`client-${client.id}`) as HTMLInputElement)?.checked)
                  .map((client) => client.id)
                handleAssignProgram(selectedClients)
              }}
            >
              Assign Program
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the program "{selectedProgram?.name}".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteProgram}
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
