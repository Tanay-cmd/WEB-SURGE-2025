import type React from "react"

export function Card({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`card border rounded-lg p-4 shadow-md ${className || ''}`}>{children}</div>
}

export function CardHeader({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`card-header font-bold text-lg ${className || ''}`}>{children}</div>
}

export function CardTitle({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return <h3 className={`card-title text-xl ${className || ''}`}>{children}</h3>
}

export function CardDescription({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`card-description text-gray-500 ${className || ''}`}>{children}</p>
}

export function CardContent({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`card-content ${className || ''}`}>{children}</div>
}

