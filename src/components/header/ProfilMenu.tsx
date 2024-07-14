"use client";

import Image from "next/image";
import profilePlaceholder from "@/public/placeholder-user.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { createClient } from "@/src/lib/supabase/client";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import LogOutButton from "@/components/buttons/logoutButton";
import NavigationLink from "@/components/link/NavigationLink";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

const supabase = createClient();

export default function ProfilMenu() {
  const [session, setSession] = useState<null|Session>(null);

  const getSession = async () => {
    const {
      data: {
        session
      }
     } = await supabase.auth.getSession();

     return setSession(session);
  }
  const t = useTranslations("Navbar");

  useEffect(() => {
    getSession();
  }, []);

  return session?.user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full dark:border-none"
        >
          <Image
            src={profilePlaceholder}
            width={36}
            height={36}
            alt={t("avatarAlt")}
            className="overflow-hidden rounded-full"
            priority
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {session.user.email ?? "email@gmail.com"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <NavigationLink href="/profile" aria-label={t("ariaProfile")}>
          <DropdownMenuItem>{t("profileLinkLabel")}</DropdownMenuItem>
        </NavigationLink>
        <NavigationLink href="/support" aria-label={t("ariaSupport")}>
          <DropdownMenuItem>{t("supportLinkLabel")}</DropdownMenuItem>
        </NavigationLink>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full dark:border-none"
        >
          <Image
            src={profilePlaceholder}
            width={36}
            height={36}
            alt={t("avatarAlt")}
            className="overflow-hidden rounded-full"
            priority
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("menuLabel")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <NavigationLink href="/support" aria-label={t("ariaSupport")}>
          <DropdownMenuItem>{t("supportLinkLabel")}</DropdownMenuItem>
        </NavigationLink>
        <DropdownMenuSeparator />
        <NavigationLink href="/login" aria-label={t("ariaSignin")}>
          <DropdownMenuItem>{t("signin")}</DropdownMenuItem>
        </NavigationLink>
        <NavigationLink href="/signup" aria-label={t("ariaSignup")}>
          <DropdownMenuItem>{t("signup")}</DropdownMenuItem>
        </NavigationLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
