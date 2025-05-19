import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button appearance */
  variant?: "contained" | "outlined" | "text";
  /** The main color of the button */
  color?: "default" | "confirm" | "error";
  /** Size of the button */
  size?: "medium" | "small";
  /** If true, takes available space horizontally */
  fullWidth?: boolean;
  /** Button contents */
  children?: ReactNode;
}

export function Button({
  variant = "outlined",
  color = "default",
  size = "medium",
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "flex gap-1 align-center cursor-pointer rounded-md min-w-6 font-semibold";

  const sizes = {
    medium: "py-2 sm:px-4 px-2 sm:text-base text-sm",
    small: "py-1 px-2 text-sm",
  };

  const colors = {
    default: {
      contained: "text-white bg-gray-800 hover:bg-gray-950",
      outlined: "border-1 border-gray-200 text-gray-800 hover:bg-gray-100",
      text: "text-gray-500 hover:bg-gray-100",
    },
    confirm: {
      contained: "text-white bg-indigo-700 hover:bg-indigo-800",
      outlined: "border-1 border-indigo-700 text-indigo-700 hover:bg-indigo-50",
      text: "text-indigo-700 hover:bg-indigo-50",
    },
    error: {
      contained: "text-white bg-red-600 hover:bg-red-700",
      outlined: "border-1 border-red-600 text-red-600 hover:bg-red-50",
      text: "text-red-600 hover:bg-red-50",
    },
  };

  return (
    <button
      className={twMerge(
        baseClasses,
        sizes[size],
        colors[color][variant],
        fullWidth && "flex-1 justify-center align-center",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
