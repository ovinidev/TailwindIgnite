import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TextAreaProps extends ComponentProps<"textarea"> {}

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className={twMerge([
        "p min-h-[120px] w-full resize-none rounded-lg",
        "border border-zinc-300 px-3 py-2 shadow-sm outline-none",
        "focus:border-violet-300 focus:ring-4 focus:ring-violet-100",
      ])}
      {...props}
    />
  );
}
