import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type ToastProps = {
  /** Color appearance of the toast */
  type?: "success" | "info" | "error";
  /** A short description of the toast */
  descriptionBadge?: "Success" | "Info" | "Error";
  /** Text inside the toast */
  message: string;
};

const toastCn = {
  body: "z-1 absolute top-4 left-[50vw] translate-x-[-50%] rounded-4xl flex w-max lg:max-w-[60vw] max-w-[80vw] items-center font-medium p-2",
  badge: "bg-white rounded-full shadow-sm h-fit mr-2 px-2",
};

const colors = {
  body: {
    error: "bg-red-300/10 text-red-500",
    info: "bg-blue-300/10 text-blue-500",
    success: "bg-green-300/10 text-green-500",
  },
  badge: {
    error: "text-red-800",
    info: "text-blue-800",
    success: "text-green-700",
  },
};

export function Toast({
  type = "success",
  descriptionBadge = "Success",
  message,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & ToastProps) {
  return (
    <h2
      {...props}
      className={twMerge(toastCn.body, colors.body[type], className)}
    >
      <span className={twMerge(toastCn.badge, colors.badge[type])}>
        {descriptionBadge}
      </span>
      {message}
    </h2>
  );
}
