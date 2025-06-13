"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useTheme } from "next-themes"

const monthlyData = [
  {
    name: "Jan",
    clients: 12,
    sessions: 24,
    revenue: 2400,
  },
  {
    name: "Feb",
    clients: 14,
    sessions: 28,
    revenue: 2800,
  },
  {
    name: "Mar",
    clients: 16,
    sessions: 32,
    revenue: 3200,
  },
  {
    name: "Apr",
    clients: 18,
    sessions: 36,
    revenue: 3600,
  },
  {
    name: "May",
    clients: 20,
    sessions: 40,
    revenue: 4000,
  },
  {
    name: "Jun",
    clients: 22,
    sessions: 44,
    revenue: 4400,
  },
  {
    name: "Jul",
    clients: 24,
    sessions: 48,
    revenue: 4800,
  },
  {
    name: "Aug",
    clients: 22,
    sessions: 44,
    revenue: 4400,
  },
  {
    name: "Sep",
    clients: 20,
    sessions: 40,
    revenue: 4000,
  },
  {
    name: "Oct",
    clients: 22,
    sessions: 44,
    revenue: 4400,
  },
  {
    name: "Nov",
    clients: 24,
    sessions: 48,
    revenue: 4800,
  },
  {
    name: "Dec",
    clients: 26,
    sessions: 52,
    revenue: 5200,
  },
]

const quarterlyData = [
  {
    name: "Q1",
    clients: 42,
    sessions: 84,
    revenue: 8400,
  },
  {
    name: "Q2",
    clients: 60,
    sessions: 120,
    revenue: 12000,
  },
  {
    name: "Q3",
    clients: 66,
    sessions: 132,
    revenue: 13200,
  },
  {
    name: "Q4",
    clients: 72,
    sessions: 144,
    revenue: 14400,
  },
]

const yearlyData = [
  {
    name: "2020",
    clients: 180,
    sessions: 360,
    revenue: 36000,
  },
  {
    name: "2021",
    clients: 210,
    sessions: 420,
    revenue: 42000,
  },
  {
    name: "2022",
    clients: 240,
    sessions: 480,
    revenue: 48000,
  },
  {
    name: "2023",
    clients: 270,
    sessions: 540,
    revenue: 54000,
  },
]

export function DashboardChart({ period = "monthly" }) {
  const { theme } = useTheme()

  const getChartData = () => {
    switch (period) {
      case "quarterly":
        return quarterlyData
      case "yearly":
        return yearlyData
      case "monthly":
      default:
        return monthlyData
    }
  }

  // Define colors based on theme - ensure proper theme detection
  const clientsColor = "#adfa1d" // Bright green in both light and dark mode
  const sessionsColor = theme === "dark" ? "#ffffff" : "#000000" // White in dark mode, black in light mode
  const gridColor = theme === "dark" ? "#374151" : "#e5e7eb" // Darker grid in dark mode, lighter in light mode
  const tooltipBg = theme === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.9)"
  const tooltipBorder = theme === "dark" ? "#333" : "#ddd"
  const tooltipTextColor = theme === "dark" ? "#ffffff" : "#000000"

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={getChartData()}
        margin={{
          top: 5,
          right: 10,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          stroke={gridColor}
          fontSize={10}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 9, fill: sessionsColor }}
          dy={5}
        />
        <YAxis
          stroke={gridColor}
          fontSize={10}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
          tick={{ fontSize: 9, fill: sessionsColor }}
          width={30}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: tooltipBg,
            border: `1px solid ${tooltipBorder}`,
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            fontSize: "12px",
          }}
          itemStyle={{
            color: tooltipTextColor,
            padding: "2px 0",
          }}
          labelStyle={{
            color: tooltipTextColor,
            fontWeight: "bold",
            marginBottom: "4px",
          }}
        />
        <Line
          type="monotone"
          dataKey="clients"
          stroke={clientsColor}
          strokeWidth={2}
          activeDot={{ r: 6, fill: clientsColor, stroke: "transparent" }}
          dot={{ r: 3, fill: clientsColor, stroke: "transparent" }}
          name="Clients"
        />
        <Line
          type="monotone"
          dataKey="sessions"
          stroke={sessionsColor}
          strokeWidth={2}
          activeDot={{ r: 6, fill: sessionsColor, stroke: "transparent" }}
          dot={{ r: 3, fill: sessionsColor, stroke: "transparent" }}
          name="Sessions"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
