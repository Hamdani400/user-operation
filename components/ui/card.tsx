import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`
        rounded-2xl
        bg-white
        p-6
        shadow-lg
        shadow-black/5
        border
        border-white/40
        backdrop-blur-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
}
