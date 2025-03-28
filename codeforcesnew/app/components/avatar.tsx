// Avatar.tsx
export function Avatar({ src }: { src: string }) {
    return <img className="avatar w-10 h-10 rounded-full" src={src} alt="Avatar" />;
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
    return <div className="avatar-fallback w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">{children}</div>;
}

export function AvatarImage({ src }: { src: string }) {
    return <img className="avatar-image w-full h-full rounded-full" src={src} alt="Avatar" />;
}
