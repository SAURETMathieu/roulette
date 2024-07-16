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
import { useAuth } from "@/src/context/userProvider";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import LogOutButton from "@/components/buttons/logoutButton";
import NavigationLink from "@/components/link/NavigationLink";

export default function ProfilMenu() {
  const { user } = useAuth();
  const t = useTranslations("Navbar");

  return user ? (
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
          {user?.email ?? "email@gmail.com"}
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
