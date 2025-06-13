"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark", "system"], {
    required_error: "Please select a theme.",
  }),
  fontSize: z.enum(["sm", "md", "lg"], {
    required_error: "Please select a font size.",
  }),
})

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>

export default function AppearancePage() {
  const { toast } = useToast()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">("md")

  // Create form with default values
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      theme: "system",
      fontSize: "md",
    },
  })

  // Update form when theme changes
  useEffect(() => {
    if (theme) {
      form.setValue("theme", theme as "light" | "dark" | "system")
    }
  }, [theme, form])

  // Apply font size to document root
  useEffect(() => {
    const currentFontSize = localStorage.getItem("fontSize") as "sm" | "md" | "lg" | null
    if (currentFontSize) {
      setFontSize(currentFontSize)
      form.setValue("fontSize", currentFontSize)
      document.documentElement.dataset.fontSize = currentFontSize
    }
  }, [form])

  function onSubmit(data: AppearanceFormValues) {
    setTheme(data.theme)
    setFontSize(data.fontSize)
    localStorage.setItem("fontSize", data.fontSize)
    document.documentElement.dataset.fontSize = data.fontSize

    toast({
      title: "Appearance updated",
      description: `Theme set to ${data.theme}. Font size set to ${data.fontSize}.`,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          field.onChange(value)
                          setTheme(value)
                        }}
                        value={field.value}
                        className="grid grid-cols-3 gap-4"
                        fontSize={fontSize}
                      >
                        <FormItem>
                          <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                            <FormControl>
                              <RadioGroupItem value="light" className="sr-only" />
                            </FormControl>
                            <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                              <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                                <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                                  <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                                </div>
                                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                                  <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                                </div>
                                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                                  <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                                </div>
                              </div>
                            </div>
                            <span className="block w-full p-2 text-center font-normal">Light</span>
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                            <FormControl>
                              <RadioGroupItem value="dark" className="sr-only" />
                            </FormControl>
                            <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                              <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                                <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                                  <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                                  <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                                </div>
                                <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                                  <div className="h-4 w-4 rounded-full bg-slate-400" />
                                  <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                                </div>
                                <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                                  <div className="h-4 w-4 rounded-full bg-slate-400" />
                                  <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                                </div>
                              </div>
                            </div>
                            <span className="block w-full p-2 text-center font-normal">Dark</span>
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                            <FormControl>
                              <RadioGroupItem value="system" className="sr-only" />
                            </FormControl>
                            <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                              <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                                <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                                  <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                                </div>
                                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                                  <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                                </div>
                                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                                  <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                                </div>
                              </div>
                            </div>
                            <span className="block w-full p-2 text-center font-normal">System</span>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-sm text-muted-foreground">
                Current theme: <span className="font-medium">{resolvedTheme === "dark" ? "Dark" : "Light"}</span>
                {theme === "system" && " (based on system preferences)"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Font Size</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="fontSize"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          field.onChange(value)
                          setFontSize(value as "sm" | "md" | "lg")
                          document.documentElement.dataset.fontSize = value
                          localStorage.setItem("fontSize", value)
                        }}
                        value={field.value}
                        className="grid grid-cols-3 gap-4"
                        fontSize={fontSize}
                      >
                        <FormItem>
                          <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                            <FormControl>
                              <RadioGroupItem value="sm" className="sr-only" />
                            </FormControl>
                            <div className="items-center rounded-md border-2 border-muted p-4 hover:border-accent">
                              <span className="text-sm">Small</span>
                            </div>
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                            <FormControl>
                              <RadioGroupItem value="md" className="sr-only" />
                            </FormControl>
                            <div className="items-center rounded-md border-2 border-muted p-4 hover:border-accent">
                              <span className="text-base">Medium</span>
                            </div>
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                            <FormControl>
                              <RadioGroupItem value="lg" className="sr-only" />
                            </FormControl>
                            <div className="items-center rounded-md border-2 border-muted p-4 hover:border-accent">
                              <span className="text-lg">Large</span>
                            </div>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-sm text-muted-foreground">
                Current font size: <span className="font-medium capitalize">{fontSize}</span>
              </div>
            </CardContent>
          </Card>

          <Button type="submit">Update preferences</Button>
        </form>
      </Form>
    </div>
  )
}
