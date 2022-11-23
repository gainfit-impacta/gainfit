import "./styles.css";

import type { Gym } from "@/interfaces";

import Image from "next/image";

interface CardGymProps extends Pick<Gym, "name" | "photo"> {}

function CardGym({ name, photo }: CardGymProps) {
  const placeholderUrl = `https://via.placeholder.com/64.png?text=${name[0]}`;

  return (
    <article>
      <button className="container" type="button" title={name}>
        <Image
          src={typeof photo !== "string" ? placeholderUrl : photo}
          alt={name}
          width={64}
          height={64}
          className="image"
        />

        <h1 className="name">{name}</h1>
      </button>
    </article>
  );
}

export default CardGym;
