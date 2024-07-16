"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { supabaseClient } from "@/src/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const t = useTranslations("Navbar");
  const router = useRouter();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push('/login');
  };

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      className="h-fit w-full justify-start p-0"
      aria-label={t("signout")}
    >
      {t("signout")}
    </Button>
  );
}