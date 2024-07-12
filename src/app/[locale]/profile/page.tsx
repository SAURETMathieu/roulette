import { redirect } from "next/navigation";
import { createServer } from "@/src/lib/supabase/server";

export default async function ProfilePage() {
  const supabase = createServer();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <p>Hello {data.user.email}</p>;
}
