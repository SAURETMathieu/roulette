import CreateLoginForm from "@/src/components/forms/loginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export default function LoginPage() {

  return (
    <Card className="items-between mx-auto mt-2 flex w-[95%] max-w-md flex-col">
      <CardHeader className="">
        <CardTitle className="relative flex justify-between gap-2 text-2xl font-medium">
          Login
        </CardTitle>
        <CardDescription className="max-w-lg text-balance text-sm leading-relaxed"></CardDescription>
      </CardHeader>
      <CardContent>
        <CreateLoginForm />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
