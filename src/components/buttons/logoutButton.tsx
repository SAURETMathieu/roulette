import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { signOut } from "@/src/lib/auth/actions";

export default function LogoutButton() {
  const t = useTranslations("Navbar");

  return (
    <form action={signOut}>
      <Button
      variant="ghost"
      className="h-fit w-full justify-start p-0"
      aria-label={t("signout")}
    >
      {t("signout")}
    </Button>
    </form>

  );
}
