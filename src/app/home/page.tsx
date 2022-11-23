import "./page.styles.css";

import { CardGym } from "components";

function HomePage() {
  return (
    <>
      <h2 className="title">Oi! John 😊</h2>

      <div className="last-visited">
        <div className="last-visited__header">
          <h2>Últimas academias</h2>
          <button title="Últimas academias" type="button">
            ➡️
          </button>
        </div>

        <div className="last-visited__list">
          <CardGym name="Studio Mormaii" />

          <CardGym
            name="Target Treinamento Funcional"
            photo="https://via.placeholder.com/64.png?text=Target+Treinamento+Funcional"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
