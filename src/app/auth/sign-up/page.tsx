"use client";

import type { User } from "@/interfaces";
import type { SubmitHandler } from "react-hook-form";

import { FormSignUp } from "@/components";

function SignUpPage() {
  const handleSubmit: SubmitHandler<User> = (data) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 2000);
    });

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
