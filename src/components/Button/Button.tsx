import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button appearance */
  variant?: "contained" | "outlined";
  /** The main color of the button */
  color?: "default" | "confirm" | "error";
  /** Button contents */
  children?: ReactNode;
}

export function Button({
  variant = "outlined",
  color = "default",
  children,
  className,
  ...props
}: ButtonProps) {
  const colors = {
    default: {
      contained: "text-white bg-gray-800 hover:bg-gray-950",
      outlined: "border-1 border-gray-200 text-gray-800 hover:bg-gray-100",
    },
    confirm: {
      contained: "text-white bg-indigo-700 hover:bg-indigo-800",
      outlined: "border-1 border-indigo-700 text-indigo-700 hover:bg-indigo-50",
    },
    error: {
      contained: "text-white bg-red-600 hover:bg-red-700",
      outlined: "border-1 border-red-600 text-red-600 hover:bg-red-50",
    },
  };

  return (
    <button
      className={twMerge(
        "cursor-pointer rounded-md font-semibold py-2 sm:px-4 px-2 sm:text-base text-sm",
        colors[color][variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
