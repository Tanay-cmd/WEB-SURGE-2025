import type React from "react"
// Avatar.tsx
export function Avatar({ 
  src,
  children,
  className 
}: { 
  src?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`avatar relative inline-flex items-center justify-center overflow-hidden rounded-full ${className || ''}`}>
      {src && <img className="w-10 h-10 rounded-full" src={src} alt="Avatar" />}
      {children}
    </div>
  )
}

export function AvatarFallback({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`avatar-fallback w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center ${className || ''}`}>
      {children}
    </div>
  )
}

export function AvatarImage({ 
  src, 
  alt,
  className 
}: { 
  src: string;
  alt?: string;
  className?: string;
}) {
  return <img className={`avatar-image w-full h-full rounded-full ${className || ''}`} src={src} alt={alt || "Avatar"} />
}

