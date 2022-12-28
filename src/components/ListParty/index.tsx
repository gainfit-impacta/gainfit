import "./styles.css";

import type { Party } from "@/interfaces/party";

import Link from "next/link";

import CardParty from "@/components/CardParty";

interface ListPartyProps {
  parties: Party[];
}

function ListParty({ parties }: ListPartyProps) {
  return (
    <div className="list-party">
      <div className="list-party__header">
        <h2>Meus grupos</h2>
        <button title="Ver tudo" type="button">
          <i className="ph-arrow-up-right" />
        </button>
      </div>

      <div className="list-party__list">
        <div className="list-party__buttons">
          <Link href="/grupo/novo">
            <button type="button" className="list-party__button">
              Criar <i className="ph-plus" />
            </button>
          </Link>

          <Link href="/grupo/entrar">
            <button type="button" className="list-party__button">
              Entrar <i className="ph-arrow-up-right" />
            </button>
          </Link>
        </div>

        {parties.map((party, index) => (
          <CardParty {...party} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ListParty;
