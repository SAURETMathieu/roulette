import CreateSignUpForm from "@/src/components/forms/signUpForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export default function SignUpPage() {

  return (
    <Card className="items-between mx-auto mt-2 flex w-[95%] max-w-md flex-col">
      <CardHeader className="">
        <CardTitle className="relative flex justify-between gap-2 text-2xl font-medium">
          Register
        </CardTitle>
        <CardDescription className="max-w-lg text-balance text-sm leading-relaxed"></CardDescription>
      </CardHeader>
      <CardContent>
        <CreateSignUpForm />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
