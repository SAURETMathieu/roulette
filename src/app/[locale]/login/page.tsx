import { Metadata } from "next";
import Login from "@/src/components/pages/Login";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "TitlePages" });
  return {
    title: t("login"),
  };
}

export default async function LoginPage({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: "Login" });
  return <Login t={t} />;
}
