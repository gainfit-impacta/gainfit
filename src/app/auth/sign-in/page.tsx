"use client";

import type { UserSignInFormData } from "@/interfaces/user";
import type { SubmitHandler } from "react-hook-form";

import { useRouter } from "next/navigation";

import FormSignIn from "@/components/FormSignIn";
import { pocketbase } from "@/lib/pocketbase";

function SignInPage() {
  const router = useRouter();

  const handleSubmit: SubmitHandler<UserSignInFormData> = async (data) => {
    try {
      await pocketbase.collection("users").authWithPassword(data.email, data.password);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="title">Entre com a sua conta</h2>

      <article>
        <FormSignIn onSubmit={handleSubmit} />
      </article>
    </>
  );
}

export default SignInPage;
