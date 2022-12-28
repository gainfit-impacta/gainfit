import type { CreatePartyFormData } from "@/interfaces/party";
import type { SubmitHandler } from "react-hook-form";

import { useForm } from "react-hook-form";

import { getDate } from "@/lib/date";

interface FormNewPartyProps {
  onSubmit: SubmitHandler<CreatePartyFormData>;
}

function FormNewParty({ onSubmit }: FormNewPartyProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CreatePartyFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        Qual será o nome?
        <input
          type="text"
          id="name"
          {...register("name")}
          {...(errors.name && { "aria-invalid": true })}
        />
        {errors["name"] && (
          <span role="alert" className="input--error">
            {errors.name.message}
          </span>
        )}
      </label>

      <label htmlFor="expired">
        E quando vai acabar?
        <input
          type="date"
          id="expired"
          min={getDate()}
          {...register("expired")}
          {...(errors.expired && { "aria-invalid": true })}
        />
        {errors.expired && (
          <span role="alert" className="input--error">
            {errors.expired.message}
          </span>
        )}
      </label>

      <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
        Criar
      </button>
    </form>
  );
}
export default FormNewParty;
