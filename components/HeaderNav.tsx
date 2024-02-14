"use client";

import { Share1Icon } from "@radix-ui/react-icons";
import { ThemeToggle } from "./ThemeToggle";

const HeaderNav = () => {
  return (
    <header className="sticky md:hidden top-0 w-full border-b shadow-sm bg-background z-50">
      <div className="flex px-4 md:px-8 h-14 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Share1Icon className="size-6" />
          <h1 className="font-semibold text-md tracking-tight">Task Sync</h1>
        </div>
        <div className="z-50">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
