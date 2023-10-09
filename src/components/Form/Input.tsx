import { ComponentProps, ElementType, ReactNode } from "react";

interface RootProps extends ComponentProps<"div"> {
  children: ReactNode;
}

function Root({ children, ...rest }: RootProps) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...rest}
    >
      {children}
    </div>
  );
}

interface PrefixProps extends ComponentProps<"label"> {
  icon: ElementType;
}

function Prefix({ icon: Icon, ...rest }: PrefixProps) {
  return (
    <>
      <label {...rest}>
        <Icon className="text-2xl text-zinc-500" />
      </label>
    </>
  );
}

interface ControlProps extends ComponentProps<"input"> {}

function Control(props: ControlProps) {
  return (
    <input
      className="w-full p-0 text-zinc-900 outline-none placeholder:text-zinc-500"
      {...props}
    />
  );
}

export { Root, Prefix, Control };
