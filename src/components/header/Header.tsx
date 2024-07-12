import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
import AsideMenu from "@/components/header/Aside";
import BreadcrumbSection from "@/components/header/BreadcrumbSection";
import RightNav from "@/components/header/RightNav";
import ToggleMenu from "@/components/header/ToggleMenu";

export function SiteHeader() {
  const t = useTranslations("Config");
  const mainNavTranslate = siteConfig?.mainNav?.map((item) => {
    return {
      ...item,
      title: t(item.title) ?? item.title,
    };
  });

  const secondaryNavTranslate = siteConfig?.secondaryNav?.map((item) => {
    return {
      ...item,
      title: t(item.title) ?? item.title,
    };
  });

  const siteConfigTranslated = {
    ...siteConfig,
    mainNav: mainNavTranslate,
    secondaryNav: secondaryNavTranslate,
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card">
      <div className="flex gap-6 md:gap-10">
        {siteConfig.mainNav?.length ? (
          <>
            <AsideMenu
              itemsTop={siteConfigTranslated.mainNav}
              itemsBottom={siteConfigTranslated.secondaryNav}
            />
            <div className="flex w-full flex-col sm:gap-4 sm:py-4 sm:pl-14">
              <section className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-card px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <ToggleMenu items={siteConfigTranslated.mainNav} />
                <BreadcrumbSection />
                <RightNav />
              </section>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
