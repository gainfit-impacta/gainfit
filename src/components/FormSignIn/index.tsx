import type { UserSignInFormData } from "@/interfaces/user";
import type { SubmitHandler } from "react-hook-form";

import Link from "next/link";
import { useForm } from "react-hook-form";

interface FormSignInProps {
  onSubmit: SubmitHandler<UserSignInFormData>;
}

function FormSignIn({ onSubmit }: FormSignInProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UserSignInFormData>();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Digite o seu e-mail
          <input
            type="email"
            id="email"
            placeholder="joão.silva@exemplo.com.br"
            autoComplete="email"
            {...register("email")}
            {...(errors.email && { "aria-invalid": true })}
          />
          {errors.email && (
            <span role="alert" className="input--error">
              {errors.email.message as string}
            </span>
          )}
        </label>

        <label htmlFor="password">
          Digite a sua senha
          <input
            type="password"
            id="password"
            placeholder="********"
            autoComplete="current-password"
            {...register("password", {
              minLength: 8,
              maxLength: 96,
              pattern: /^[\w\W]+$/i,
            })}
            {...(errors.password && { "aria-invalid": true })}
          />
          {errors.password?.type === "pattern" && (
            <span role="alert" className="input--error">
              Precisa conter entre 8 e 96 caracteres, um número, uma letra maiúscula, uma letra
              minúscula e um caractere especial
            </span>
          )}
        </label>

        <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
          Entrar
        </button>
      </form>

      <small>
        Não tem uma conta? <Link href="/cadastrar">Cadastre-se</Link>
      </small>
    </>
  );
}

export default FormSignIn;
