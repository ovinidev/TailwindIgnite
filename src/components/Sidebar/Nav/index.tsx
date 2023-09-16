import { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}

export function Nav({ children }: NavProps) {
  return <nav className="space-y-0.5">{children}</nav>;
}
