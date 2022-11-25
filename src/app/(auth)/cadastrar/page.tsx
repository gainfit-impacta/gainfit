"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { pocketbase } from "@/lib/pocketbase";

function SignInPage() {
  const router = useRouter();

  useEffect(() => {
    try {
      pocketbase.authStore.clear;
      router.push("/");
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 className="title">Entre com a sua conta</h2>
      <article aria-busy="true" />
    </>
  );
}

export default SignInPage;
