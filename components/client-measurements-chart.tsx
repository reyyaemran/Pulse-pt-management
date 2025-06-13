"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { format, parseISO } from "date-fns"

interface MeasurementData {
  date: string
  weight: number
  bodyFat: number
  chest: number
  waist: number
  hips: number
}

interface ClientMeasurementsChartProps {
  data: MeasurementData[]
}

export function ClientMeasurementsChart({ data }: ClientMeasurementsChartProps) {
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
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="weight"
          name="Weight (kg)"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="bodyFat"
          name="Body Fat %"
          stroke="#adfa1d"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="waist"
          name="Waist (in)"
          stroke="#ff9800"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
