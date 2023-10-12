"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import { useState } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("My details");

  return (
    <Tabs.Root
      defaultValue="My details"
      value={currentTab}
      onValueChange={(value) => setCurrentTab(value)}
    >
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem
              title="My details"
              isActive={currentTab === "My details"}
            />
            <TabItem title="Profile" isActive={currentTab === "Profile"} />
            <TabItem title="Password" isActive={currentTab === "Password"} />
            <TabItem title="Team" isActive={currentTab === "Team"} />
            <TabItem title="Plan" isActive={currentTab === "Plan"} />
            <TabItem title="Billing" isActive={currentTab === "Billing"} />
            <TabItem title="Email" isActive={currentTab === "Email"} />
            <TabItem
              title="Notification"
              isActive={currentTab === "Notification"}
            />
            <TabItem
              title="Integrations"
              isActive={currentTab === "Integrations"}
            />
            <TabItem title="API" isActive={currentTab === "API"} />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  );
}
