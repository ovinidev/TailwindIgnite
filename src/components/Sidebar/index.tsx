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

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

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
    </aside>
  );
}
