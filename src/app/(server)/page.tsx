import "./page.styles.css";

import { getGyms } from "@/app/lib/gym";
import { getParties } from "@/app/lib/party";
import { getUser } from "@/app/lib/user";
import ListGym from "@/components/ListGym";
import ListParty from "@/components/ListParty";

async function HomePage() {
  const user = await getUser();
  const gyms = await getGyms();
  const parties = await getParties(user.id as string);

  const firstName = user?.name.split(" ")[0];

  return (
    <div className="container">
      <h1 className="title">Oi! {firstName} 😊</h1>

      <div className="list">
        <ListGym gyms={gyms} />
        <ListParty parties={parties} />
      </div>
    </div>
  );
}

export default HomePage;
