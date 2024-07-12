import AsideTooltip from "@/src/components/header/AsideTooltip";
import NavigationLink from "@/src/components/link/NavigationLink";
import { Icons } from "@/src/icons/icons";
import { useTranslations } from "next-intl";

import { MainNavProps } from "@/types/nav";
import { siteConfig } from "@/config/site";

interface AsideMenuProps {
  itemsTop: MainNavProps["items"];
  itemsBottom: MainNavProps["items"];
}

export default function AsideMenu({ itemsTop, itemsBottom }: AsideMenuProps) {
  const t = useTranslations("Navbar");

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-card sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavigationLink
          href="/"
          className="is-logo flex h-12 items-center justify-center pb-4"
          aria-label={t("ariaLogoLink")}
        >
          <Icons.logo className="size-8" aria-label={t("appLogoAlt")} />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </NavigationLink>
        <AsideTooltip items={itemsTop} />
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <AsideTooltip items={itemsBottom} />
      </nav>
    </aside>
  );
}
