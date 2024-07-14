import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import SignUp from "@/src/components/pages/SignUp";

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "TitlePages" });
  return {
    title: t("signup"),
  };
}

export default async function SignUpPage({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: "SignUp" });

  return (
    <SignUp t={t}/>
  );
}
