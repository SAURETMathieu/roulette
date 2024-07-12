import { Metadata } from "next";
import Dealers from "@/src/components/pages/Dealers";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "TitlePages" });
  unstable_setRequestLocale(locale);
  return {
    title: t("dealers"),
  };
}

export default function DealersPage() {
  return <Dealers />;
}
