import { Icons } from "@/src/icons/icons";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex w-full flex-col items-center justify-center gap-2 border-t bg-card p-10 text-current">
      <p>© 2024 Mathieu SAURET </p>
      <p className="mb-4">{t("text1")}</p>
      <p>{t("text2")}</p>
      <div className="flex justify-center">
        <span className="m-1 mt-2 inline-flex items-center gap-2 rounded border bg-foreground/20 p-1 text-xs font-bold">
          React
          <Icons.react className="inline size-4" />
        </span>
        <span className="m-1 mt-2 inline-flex items-center gap-2 rounded border bg-foreground/20 p-1 text-xs font-bold">
          Tailwind
          <Icons.tailwind className="inline size-4" />
        </span>
        <span className="m-1 mt-2 inline-flex items-center gap-2 rounded border bg-foreground/20 p-1 text-xs font-bold">
          Next.js
          <Icons.next className="inline size-4" />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
