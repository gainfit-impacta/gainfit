"use client";

import type { UserSignUpFormData } from "@/interfaces/user";
import type { SubmitHandler } from "react-hook-form";

import { useRouter } from "next/navigation";

import FormSignUp from "@/components/FormSignUp";
import { pocketbase } from "@/lib/pocketbase";

function SignUpPage() {
  const router = useRouter();

  const handleSubmit: SubmitHandler<UserSignUpFormData> = async (data) => {
    try {
      await pocketbase.collection("users").create(data);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="title">Cadastre-se</h2>

      <article>
        <FormSignUp onSubmit={handleSubmit} />
      </article>
    </>
  );
}

export default SignUpPage;
