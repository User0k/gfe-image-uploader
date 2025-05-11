import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        `cursor-pointer rounded-md font-semibold py-2 sm:px-4 px-2 sm:text-base text-sm
        border-1 border-gray-200 text-gray-800 hover:bg-gray-100`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
