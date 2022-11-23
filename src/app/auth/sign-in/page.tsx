"use client";

import type { User } from "interfaces";
import type { SubmitHandler } from "react-hook-form";

import { FormSignIn } from "components";

function SignInPage() {
  const handleSubmit: SubmitHandler<User> = (data) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 2000);
    });

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
