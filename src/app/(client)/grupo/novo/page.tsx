"use client";

import type { CreatePartyFormData } from "@/interfaces/party";
import type { SubmitHandler } from "react-hook-form";

import { useRouter } from "next/navigation";

import FormNewParty from "@/components/FormNewParty";
import { createParty } from "@/lib/party";
import { getUser } from "@/lib/user";

function NewPartyPage() {
  const router = useRouter();

  const handleSubmit: SubmitHandler<CreatePartyFormData> = async (data) => {
    const user = getUser();

    try {
      await createParty({
        ...data,
        expired: new Date(data.expired).toISOString().slice(0, 10),
        users: [user.id],
      });

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Criar grupo</h2>

      <article>
        <FormNewParty onSubmit={handleSubmit} />
      </article>
    </div>
  );
}

export default NewPartyPage;
