import type { UserSignUpFormData } from "@/interfaces/user";
import type { SubmitHandler } from "react-hook-form";

import Link from "next/link";
import { useRef } from "react";
import { useForm } from "react-hook-form";

interface FormSignUpProps {
  onSubmit: SubmitHandler<UserSignUpFormData>;
}

function FormSignUp({ onSubmit }: FormSignUpProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
  } = useForm<UserSignUpFormData>();

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Nome completo
          <input
            type="text"
            id="name"
            placeholder="João da Silva"
            autoComplete="name"
            {...register("name", {})}
            {...(errors.name && { "aria-invalid": true })}
          />
          {errors.name && (
            <span role="alert" className="input--error">
              {errors.name.message}
            </span>
          )}
        </label>

        <label htmlFor="email">
          E-mail
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
              {errors.email.message}
            </span>
          )}
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            placeholder="********"
            autoComplete="new-password"
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

        <label htmlFor="password">
          Confirme a senha
          <input
            type="password"
            id="password-confirm"
            placeholder="********"
            autoComplete="new-password"
            {...register("passwordConfirm", {
              validate: (value) => value === password.current,
            })}
            {...(errors.password && { "aria-invalid": true })}
          />
          {errors.password?.type === "validate" && (
            <span role="alert" className="input--error">
              As senhas devem ser iguais
            </span>
          )}
        </label>

        <button type="submit" aria-busy={isSubmitting}>
          Entrar
        </button>
      </form>

      <small>
        Já tem uma conta? <Link href="/auth/sign-in">Entre</Link>
      </small>
    </>
  );
}

export default FormSignUp;
