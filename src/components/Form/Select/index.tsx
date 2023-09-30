"use client";
import * as Select from "@radix-ui/react-select";
import { Menu } from "@/components/Icons";
import { ReactNode } from "react";

interface RadixSelectProps extends Select.SelectProps {
  children: ReactNode;
  placeholder: string;
}

export const RadixSelect = ({
  children,
  placeholder,
  ...rest
}: RadixSelectProps) => {
  return (
    <Select.Root {...rest}>
      <Select.Trigger
        className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600"
        aria-label="Country"
      >
        <Select.Value className="text-black" placeholder={placeholder} />
        <Select.Icon>
          <Menu className="text-xl text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
