import { Metadata } from "next";
import Tables from "@/src/components/pages/Tables";
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
    title: t("tables"),
  };
}

export default async function TablesPage({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: "TitlePages" });

  return <Tables />;
}
