"use client";

import { useRouter } from "next/navigation";

import { logout } from "@/lib/pocketbase";

function SignOutPage() {
  const router = useRouter();

  try {
    logout();
    router.push("/");
  } catch (error) {
    console.error(error);
  }

  return <article aria-busy="true" />;
}

export default SignOutPage;
