import "./page.styles.css";

import { cookies } from "next/headers";

import CardGym from "@/components/CardGym";
import { getUserSSR } from "@/lib/user";

async function HomePage() {
  const { name } = getUserSSR(cookies());

  return (
    <div className="container">
      <h2 className="title">Oi! {name} 😊</h2>

      <div className="last-visited">
        <div className="last-visited__header">
          <h2>Últimas academias</h2>
          <button title="Últimas academias" type="button">
            ➡️
          </button>
        </div>

        <div className="last-visited__list">
          <CardGym
            name="Studio Mormaii"
            photo="https://via.placeholder.com/64.png?text=Studio+Mormaii"
          />

          <CardGym
            name="Target Treinamento Funcional"
            photo="https://via.placeholder.com/64.png?text=Target+Treinamento+Funcional"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
