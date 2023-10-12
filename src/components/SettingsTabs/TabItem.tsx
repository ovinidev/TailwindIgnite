"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

interface TabItemProps {
  title: string;
  isActive: boolean;
}

export function TabItem({ title, isActive = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      className="relative whitespace-nowrap px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
      value={title}
    >
      <span>{title}</span>

      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  );
}
