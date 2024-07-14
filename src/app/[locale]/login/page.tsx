import CreateLoginForm from "@/src/components/forms/loginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Login from "@/src/components/pages/Login";

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
  return (
    <Login t={t}/>
  );
}
