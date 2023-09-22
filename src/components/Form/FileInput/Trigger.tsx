"use client";
import { Cloud } from "@/components/Icons";
import { ComponentProps } from "react";
import { useFileInput } from "./Root";

interface TriggerProps extends ComponentProps<"label"> {}

export function Trigger(props: TriggerProps) {
  const { id } = useFileInput();

  return (
    <label
      className="ease group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm duration-300 hover:border-violet-200 hover:bg-violet-50"
      htmlFor={id}
      {...props}
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <Cloud className="text-3xl text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className="flex flex-col items-center gap-1 text-sm">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">Click to upload</span>{" "}
          or drag and drop
        </span>

        <span className="text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}
