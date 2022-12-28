import type { CreatePartyFormData } from "@/interfaces/party";
import type { SubmitHandler } from "react-hook-form";

import { useForm } from "react-hook-form";

interface FormEnterPartyProps {
  onSubmit: SubmitHandler<CreatePartyFormData>;
}

function FormEnterParty({ onSubmit }: FormEnterPartyProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CreatePartyFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        ID do grupo
        <input
          type="text"
          id="id"
          {...register("id")}
          {...(errors.name && { "aria-invalid": true })}
        />
        {errors["id"] && (
          <span role="alert" className="input--error">
            {errors.id.message}
          </span>
        )}
      </label>

      <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
        Criar
      </button>
    </form>
  );
}

export default FormEnterParty;
