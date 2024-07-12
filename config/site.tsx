import { Home, UsersRound, Settings, Info, Dices, LifeBuoy, AlarmClockPlus } from "lucide-react";

export type SiteConfig = typeof siteConfig;

import { NavItem } from "@/types/nav";

export const siteConfig = {
  name: "",
  description:
    "A Next.js template with Radix UI and Tailwind CSS. Includes a custom theme switcher and a Tailwind CSS indicator for development",
  mainNav: [
    {
      title: "home",
      href: "/",
      icon: <Home className="size-5" />,
    },
    {
      title: "tables",
      href: "/tables",
      icon: <LifeBuoy className="size-5" />,
    },
    {
      title: "dealers",
      href: "/dealers",
      icon: <UsersRound className="size-5" />,
    },
    {
      title: "sessions",
      href: "/sessions",
      icon: <AlarmClockPlus className="size-5" />,
    },
    {
      title: "draws",
      href: "/draws",
      icon: <Dices className="size-5" />,
    },
  ] as NavItem[],
  secondaryNav: [
    {
      title: "help",
      href: "/help",
      icon: <Info className="size-5" />,
    },
    {
      title: "settings",
      href: "/settings",
      icon: <Settings className="size-5" />,
    },
  ] as NavItem[],
};
