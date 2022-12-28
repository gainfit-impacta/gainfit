import "./styles.css";

import type { Party } from "@/interfaces/party";

import Link from "next/link";

interface CardPartyProps extends Party {}

function CardParty({ id, name }: CardPartyProps) {
  return (
    <Link href={`/grupo/${id}`} className="card-party">
      <h1>{name.slice(0, 3)}</h1>
    </Link>
  );
}

export default CardParty;
