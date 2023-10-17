"use client";
import { setCookie } from "nookies";
import { Button } from "../Button";

export function Switch() {
  const toggleTheme = () => {
    const element = document.getElementsByTagName("html");
    const isDark = document
      .getElementsByTagName("html")[0]
      .className.includes("dark");

    if (isDark) {
      element[0].classList.remove("dark");
      setCookie(undefined, "theme", "light");
    } else {
      element[0].classList.add("dark");
      setCookie(undefined, "theme", "dark");
    }
  };
  return <Button onClick={toggleTheme}>Switcher</Button>;
}
