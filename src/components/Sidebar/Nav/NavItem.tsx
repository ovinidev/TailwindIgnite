import { Menu as MenuIcon } from "@/components/Icons";
import { ComponentProps, ElementType, ReactNode } from "react";

interface RootProps extends ComponentProps<"a"> {
  children: ReactNode;
}

function Root({ children, ...rest }: RootProps) {
  return (
    <a
      className="group flex cursor-pointer items-center gap-2 rounded px-3 py-2 duration-100 ease-in hover:bg-violet-50"
      {...rest}
    >
      {children}
    </a>
  );
}

interface PrefixProps {
  title: string;
  icon: ElementType;
}

function Prefix({ title, icon: Icon }: PrefixProps) {
  return (
    <>
      <Icon className="text-2xl text-zinc-500 group-hover:text-violet-500" />
      <span className="text-base font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
    </>
  );
}

interface MenuProps extends ComponentProps<"button"> {}

function Menu(props: MenuProps) {
  return (
    <MenuIcon
      className="ml-auto text-xl text-zinc-400 group-hover:text-violet-500"
      {...props}
    />
  );
}

export { Root, Prefix, Menu };
