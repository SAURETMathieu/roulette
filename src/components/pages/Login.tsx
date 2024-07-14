import CreateLoginForm from "@/src/components/forms/loginForm";
import NavigationLink from "@/src/components/link/NavigationLink";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export default function Login({ t }: { t: any }) {
  return (
    <Card className="items-between mx-auto mt-2 flex w-[95%] max-w-md flex-col">
      <CardHeader className="">
        <CardTitle className="relative flex justify-between gap-2 text-2xl font-medium">
          {t("title")}
        </CardTitle>
        <CardDescription className="max-w-lg text-balance text-sm leading-relaxed">
          {t("description")}{" "}
          <NavigationLink
            href="/signup"
            className="text-foreground underline"
            aria-label={t("ariaSignup")}
          >
            {t("signupLink")}
          </NavigationLink>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CreateLoginForm />
      </CardContent>
      <CardFooter className="text-xs">{t("footer")}</CardFooter>
    </Card>
  );
}
