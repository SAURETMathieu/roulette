"use client";

import { useState } from "react";
import { Icons } from "@/src/icons/icons";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useRouter, usePathname } from "@/src/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function LanguageSection() {
  const locale = useLocale();
  const [language, setLanguage] = useState(locale);
  const t = useTranslations("ThemeSwitcher");
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguage = (newLanguage: string) => {
    router.replace(
      {pathname},
      {locale: newLanguage}
    );
    setLanguage(newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="size-5" />
          <span className="sr-only">{t("ariaLangage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleLanguage("fr")}
          aria-label={t("ariaFrench")}
          className="flex gap-4 hover:cursor-pointer hover:bg-accent hover:text-accent-foreground"
        >
          <Icons.frenchFlag className="size-6" />
          Français
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguage("en")}
          aria-label={t("ariaEnglish")}
          className="flex gap-4 hover:cursor-pointer hover:bg-accent hover:text-accent-foreground"
        >
          <Icons.britishFlag className="size-6" />
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSection;
