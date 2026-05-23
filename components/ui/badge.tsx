import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: Props) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-2.5
        py-1
        text-xs
        font-medium
        bg-gray-100
        text-gray-700
        ${className}
      `}
    >
      {children}
    </span>
  );
}
