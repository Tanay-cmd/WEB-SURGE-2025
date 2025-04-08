// Tabs.tsx
import type React from "react"

export function Tabs({ 
  children, 
  className,
  defaultValue 
}: { 
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
}) {
  return <div className={`tabs ${className || ''}`}>{children}</div>
}

export function TabsList({ 
  children,
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`tabs-list ${className || ''}`}>{children}</div>
}

export function TabsTrigger({ 
  children,
  className,
  value 
}: { 
  children: React.ReactNode;
  className?: string;
  value: string;
}) {
  return <button className={`tabs-trigger ${className || ''}`} value={value}>{children}</button>
}

export function TabsContent({ 
  children,
  className,
  value 
}: { 
  children: React.ReactNode;
  className?: string;
  value: string;
}) {
  return <div className={`tabs-content ${className || ''}`} data-value={value}>{children}</div>
}

