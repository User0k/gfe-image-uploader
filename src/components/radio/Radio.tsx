import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type RadioProps = {
  /** Size of the radio button */
  radioSize?: "large" | "small";
  /** Size of the dot inside the button */
  radioShape?: "filled" | "holed";
};

export function Radio({
  radioSize = "large",
  radioShape = "filled",
  className,
  ...props
}: RadioProps & InputHTMLAttributes<HTMLInputElement>) {
  const twStyles = {
    common: "rounded-full border-2 relative appearance-none cursor-pointer",
    size: radioSize === "large" ? "w-5 h-5" : "w-4 h-4",
    color:
      "border-gray-300 hover:border-indigo-300 checked:border-indigo-600 checked:after:bg-indigo-600 checked:hover:border-indigo-700 checked:hover:after:bg-indigo-700",
    dot: "checked:after:content-[''] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-y-1/2 checked:after:-translate-x-1/2 checked:after:rounded-full",
    shape:
      radioShape === "filled"
        ? "checked:after:w-3/4 checked:after:h-3/4"
        : "checked:after:w-1/2 checked:after:h-1/2",
  };

  return (
    <input
      type="radio"
      {...props}
      className={twMerge(
        twStyles.common,
        twStyles.size,
        twStyles.color,
        twStyles.dot,
        twStyles.shape,
        className
      )}
    />
  );
}
