import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: { locale: string; tableId: string };
};

export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "TitlePages" });
  return {
    title: t("dealers"),
  };
}

export default async function DealersPage({
  params: { locale, tableId },
}: PageProps) {
  //const t = await getTranslations({ locale, namespace: "Dealers" });
  return <div>pages</div>;
}
