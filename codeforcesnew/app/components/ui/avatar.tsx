import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Avatar: React.FC<AvatarProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const AvatarImage: React.FC<AvatarImageProps> = ({ className, ...props }) => {
  return (
    <img
      className={`object-cover h-full w-full ${className || ''}`}
      {...props}
    />
  );
};

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-full bg-gray-200 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};
