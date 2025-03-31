// Tabs.tsx
import type React from "react"

export function Tabs({ children }: { children: React.ReactNode }) {
  return <div className="tabs">{children}</div>
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="tabs-list flex space-x-2">{children}</div>
}

export function TabsTrigger({ children }: { children: React.ReactNode }) {
  return <button className="tabs-trigger p-2 border rounded">{children}</button>
}

export function TabsContent({ children }: { children: React.ReactNode }) {
  return <div className="tabs-content p-4">{children}</div>
}

