"use client";
import { Search, Settings, Support } from "../Icons";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import {
  Dashboard,
  Home,
  Projects,
  Reporting,
  Task,
  Users,
} from "@/components/Icons";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Form/Input";
import * as NavItem from "./Nav/NavItem";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../Button";
import { AiOutlineMenu } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
  const [parent] = useAutoAnimate();

  return (
    <Collapsible.Root
      className={twMerge(
        "fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-r border-zinc-200",
        "bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:bg-zinc-800",
        "lg:right-auto lg:w-80 lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0",
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <AiOutlineMenu className="text-xl" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        ref={parent}
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix icon={Search} />
          <Input.Control placeholder="Search" type="search" id="search" />
        </Input.Root>

        <Nav>
          <NavItem.Root>
            <NavItem.Prefix title="Home" icon={Home} />
            <NavItem.Menu />
          </NavItem.Root>

          <NavItem.Root>
            <NavItem.Prefix title="Dashboard" icon={Dashboard} />
            <NavItem.Menu />
          </NavItem.Root>

          <NavItem.Root>
            <NavItem.Prefix title="Projects" icon={Projects} />
            <NavItem.Menu onClick={() => console.log("oi")} />
          </NavItem.Root>

          <NavItem.Root>
            <NavItem.Prefix title="Tasks" icon={Task} />
            <NavItem.Menu />
          </NavItem.Root>

          <NavItem.Root>
            <NavItem.Prefix title="Reporting" icon={Reporting} />
            <NavItem.Menu />
          </NavItem.Root>

          <NavItem.Root>
            <NavItem.Prefix title="Users" icon={Users} />
            <NavItem.Menu />
          </NavItem.Root>
        </Nav>

        <div className="mt-auto flex flex-col gap-6">
          <Nav>
            <NavItem.Root>
              <NavItem.Prefix title="Support" icon={Support} />
            </NavItem.Root>

            <NavItem.Root>
              <NavItem.Prefix title="Settings" icon={Settings} />
            </NavItem.Root>
          </Nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
