"use client";

//import { signOut } from "next-auth/react";
//import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function LogoutButton() {
  //const locale = useLocale();
  const t = useTranslations("Navbar");

  const handleSignout = async () => {
    //await signOut({ callbackUrl: `/${locale}/login` });
    console.log("Sign out");
  };

  return (
    <Button
      variant="ghost"
      className="h-fit w-full justify-start p-0"
      aria-label={t("signout")}
      onClick={handleSignout}
    >
      {t("signout")}
    </Button>
  );
}
