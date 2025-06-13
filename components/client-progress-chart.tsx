"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { format, parseISO } from "date-fns"

interface ProgressData {
  date: string
  exercise: string
  weight: number
  reps: number
}

interface ClientProgressChartProps {
  data: ProgressData[]
}

export function ClientProgressChart({ data }: ClientProgressChartProps) {
  const formattedData = data.map((item) => ({
    ...item,
    date: format(parseISO(item.date), "MMM d"),
  }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={formattedData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
          labelStyle={{
            color: "hsl(var(--foreground))",
          }}
          formatter={(value, name) => {
            if (name === "weight") return [`${value} kg`, "Weight"]
            return [value, name]
          }}
        />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
