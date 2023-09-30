"use client";
import * as Select from "@radix-ui/react-select";

interface SelectItemProps extends Select.SelectItemProps {
  text: string;
}

export function SelectItem({ text, ...rest }: SelectItemProps) {
  return (
    <Select.Item
      className="cursor-pointer px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...rest}
    >
      <Select.ItemText>{text}</Select.ItemText>
    </Select.Item>
  );
}
