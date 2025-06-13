import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Edit, Dumbbell } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { exercises, Exercise } from "@/components/exercise-data"

export default async function ExerciseDetailPage({ params }: { params: { id: string } }) {
  const exercise = exercises.find((ex: Exercise) => ex.id === params.id)

  if (!exercise) {
    notFound()
  }

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/exercises">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{exercise.name}</h1>
            <p className="text-muted-foreground">{exercise.category}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Dumbbell className="mr-2 h-4 w-4" />
            Assign to Client
          </Button>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Exercise
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <p className="text-sm font-medium">Difficulty</p>
              <Badge variant={
                exercise.difficulty === "beginner" ? "secondary" :
                exercise.difficulty === "intermediate" ? "default" :
                "destructive"
              }>
                {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
              </Badge>
            </div>
            <div>
              <p className="text-sm font-medium">Equipment</p>
              <p className="text-sm text-muted-foreground">{exercise.equipment}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Target Muscles</p>
              <p className="text-sm text-muted-foreground">{exercise.targetMuscles}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{exercise.description}</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              {exercise.instructions.map((instruction: string, index: number) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {instruction}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {exercise.tips.map((tip: string, index: number) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Variations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {exercise.variations.map((variation: string, index: number) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {variation}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
