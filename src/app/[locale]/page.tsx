import { Metadata } from "next";
import Home from "@/src/components/pages/Home";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "TitlePages" });
  return {
    title: t("home"),
  };
}

export default async function HomePage() {
  return <Home />;
}
