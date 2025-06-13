"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Dumbbell } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface ProgramExercise {
  exerciseId: string
  exerciseName: string
  sets: number
  reps: string
  weight: string
  tempo: string
  restTime: string
  notes: string
  completed?: boolean
  actualWeight?: string
  actualReps?: string
  exerciseNotes?: string
}

interface AssignedProgram {
  id: string
  name: string
  description: string
  difficulty: string
  exercises: ProgramExercise[]
  assignedDate: string
  progress: number
  status: "active" | "completed" | "paused"
}

interface ClientProgramsProps {
  clientId: string
  clientName: string
}

export function ClientPrograms({ clientId, clientName }: ClientProgramsProps) {
  const [programs] = useState<AssignedProgram[]>([
    {
      id: "1",
      name: "Beginner Full Body",
      description: "A comprehensive full-body workout for beginners",
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
          completed: true,
          actualWeight: "Bodyweight",
          actualReps: "10, 10, 8",
          exerciseNotes: "Form was good, felt challenging on last set",
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
          completed: false,
        },
        {
          exerciseId: "4",
          exerciseName: "Plank",
          sets: 3,
          reps: "30-60s",
          weight: "Bodyweight",
          tempo: "Hold",
          restTime: "30s",
          notes: "Hold as long as possible",
          completed: false,
        },
      ],
      assignedDate: "2023-05-15",
      progress: 33,
      status: "active",
    },
  ])

  const [selectedProgram, setSelectedProgram] = useState<AssignedProgram | null>(null)
  const [workoutNotes, setWorkoutNotes] = useState("")
  const { toast } = useToast()

  const handleExerciseComplete = (programId: string, exerciseIndex: number, completed: boolean) => {
    // In a real app, this would update the database
    toast({
      title: completed ? "Exercise Completed" : "Exercise Marked Incomplete",
      description: `${programs[0].exercises[exerciseIndex].exerciseName} has been ${completed ? "completed" : "marked as incomplete"}.`,
    })
  }

  const handleWorkoutComplete = () => {
    toast({
      title: "Workout Completed",
      description: "Great job! Your workout has been logged.",
    })
  }

  const openProgramDetails = (program: AssignedProgram) => {
    setSelectedProgram(program)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Assigned Programs</h3>
      </div>

      {programs.length > 0 ? (
        <div className="grid gap-4">
          {programs.map((program) => (
            <Card key={program.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-bold">{program.name}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant={
                        program.difficulty === "beginner"
                          ? "success"
                          : program.difficulty === "intermediate"
                            ? "default"
                            : "destructive"
                      }
                      className={
                        program.difficulty === "beginner"
                          ? "bg-green-500 hover:bg-green-600"
                          : program.difficulty === "intermediate"
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-orange-500 hover:bg-orange-600"
                      }
                    >
                      {program.difficulty}
                    </Badge>
                    <Badge
                      variant={
                        program.status === "active"
                          ? "default"
                          : program.status === "completed"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {program.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      Assigned: {new Date(program.assignedDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Dumbbell className="mr-2 h-4 w-4" />
                      {program.exercises.length} exercises
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress:</span>
                      <span className="font-medium">{program.progress}% complete</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${program.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => openProgramDetails(program)}>
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[700px] max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle>{program.name}</DialogTitle>
                          <DialogDescription>{program.description}</DialogDescription>
                        </DialogHeader>

                        <ScrollArea className="max-h-[60vh]">
                          <div className="space-y-4">
                            {program.exercises.map((exercise, index) => (
                              <Card key={index} className={exercise.completed ? "bg-muted/30" : ""}>
                                <CardContent className="p-4">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-2">
                                        <Checkbox
                                          checked={exercise.completed}
                                          onCheckedChange={(checked) =>
                                            handleExerciseComplete(program.id, index, checked as boolean)
                                          }
                                        />
                                        <h4
                                          className={`font-medium ${exercise.completed ? "line-through text-muted-foreground" : ""}`}
                                        >
                                          {exercise.exerciseName}
                                        </h4>
                                      </div>

                                      <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                          <span className="text-muted-foreground">Sets × Reps:</span>
                                          <div className="font-medium">
                                            {exercise.sets} × {exercise.reps}
                                          </div>
                                        </div>
                                        {exercise.weight && (
                                          <div>
                                            <span className="text-muted-foreground">Weight:</span>
                                            <div className="font-medium">{exercise.weight}</div>
                                          </div>
                                        )}
                                        {exercise.tempo && (
                                          <div>
                                            <span className="text-muted-foreground">Tempo:</span>
                                            <div className="font-medium">{exercise.tempo}</div>
                                          </div>
                                        )}
                                        {exercise.restTime && (
                                          <div>
                                            <span className="text-muted-foreground">Rest:</span>
                                            <div className="font-medium">{exercise.restTime}</div>
                                          </div>
                                        )}
                                      </div>

                                      {exercise.notes && (
                                        <div className="mt-2 text-sm">
                                          <span className="text-muted-foreground">Notes:</span>
                                          <div className="text-muted-foreground italic">{exercise.notes}</div>
                                        </div>
                                      )}

                                      {exercise.completed && exercise.actualReps && (
                                        <div className="mt-2 p-2 bg-green-50 dark:bg-green-950/20 rounded border">
                                          <div className="text-sm">
                                            <span className="text-muted-foreground">Completed:</span>
                                            <div className="font-medium">
                                              {exercise.actualReps} reps @ {exercise.actualWeight}
                                            </div>
                                            {exercise.exerciseNotes && (
                                              <div className="text-muted-foreground italic mt-1">
                                                {exercise.exerciseNotes}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}

                            <div className="space-y-2">
                              <Label htmlFor="workout-notes">Workout Notes</Label>
                              <Textarea
                                id="workout-notes"
                                value={workoutNotes}
                                onChange={(e) => setWorkoutNotes(e.target.value)}
                                placeholder="How did the workout feel? Any observations or modifications?"
                                rows={3}
                              />
                            </div>

                            <Button onClick={handleWorkoutComplete} className="w-full">
                              Complete Workout
                            </Button>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>

                    {program.status === "active" && <Button size="sm">Start Workout</Button>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Dumbbell className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-2">No programs assigned yet</p>
            <p className="text-sm text-muted-foreground text-center">
              Your trainer will assign workout programs that will appear here
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
