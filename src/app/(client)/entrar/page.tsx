"use client";

import type { UserSignInFormData } from "@/interfaces/user";
import type { SubmitHandler } from "react-hook-form";

import { useRouter } from "next/navigation";

import FormSignIn from "@/components/FormSignIn";
import { signin } from "@/lib/pocketbase";

function SignInPage() {
  const router = useRouter();

  const handleSubmit: SubmitHandler<UserSignInFormData> = async (data) => {
    try {
      await signin(data);
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
