"use client";

import "./styles.css";

import type { Gym } from "@/interfaces/gym";

import Image from "next/image";

import { createCheckin } from "@/lib/checkin";
import { mountFileUrl } from "@/lib/pocketbase";
import { getUser } from "@/lib/user";

interface CardGymProps extends Pick<Gym, "id" | "name" | "brandImage"> {}

function CardGym({ id, name, brandImage }: CardGymProps) {
  const user = getUser();

  const brandImageUrl = brandImage
    ? mountFileUrl("gyms", id as string, brandImage)
    : `https://via.placeholder.com/64.png?text=${name[0]}`;

  const handleClick = async () => {
    await createCheckin(id as string, user.id as string);
  };

  return (
    <article className="card-gym" onClick={handleClick}>
      <Image src={brandImageUrl} alt={name} width={64} height={64} className="card-gym__image" />

      <div className="card-gym__content">
        <h1 className="card-gym__name" title={name}>
          {name}
        </h1>
      </div>
    </article>
  );
}

export default CardGym;
