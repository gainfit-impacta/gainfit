import "./styles.css";

import type { Gym } from "@/interfaces/gym";

import CardGym from "@/components/CardGym";

interface ListGymProps {
  gyms: Gym[];
}

function ListGym({ gyms }: ListGymProps) {
  return (
    <div className="list-gym">
      <div className="list-gym__header">
        <h2>Academias</h2>
        <button title="Ver tudo" type="button">
          <i className="ph-arrow-up-right" />
        </button>
      </div>

      <div className="list-gym__list">
        {gyms.map((gym, index) => (
          <CardGym {...gym} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ListGym;
