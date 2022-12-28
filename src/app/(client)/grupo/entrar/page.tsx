"use client";

import type { UserSignInFormData } from "@/interfaces/user";
import type { SubmitHandler } from "react-hook-form";

import { useRouter } from "next/navigation";

import FormEnterParty from "@/components/FormEnterParty";
import { enterParty } from "@/lib/party";
import { getUser } from "@/lib/user";

function SignInPage() {
  const router = useRouter();
  const user = getUser();

  const handleSubmit: SubmitHandler<UserSignInFormData> = async (data) => {
    try {
      await enterParty(data, user.id as string);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="title">Entrar em um grupo</h2>

      <article>
        <FormEnterParty onSubmit={handleSubmit} />
      </article>
    </>
  );
}

export default SignInPage;
