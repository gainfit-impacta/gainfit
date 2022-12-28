import type { Gym } from "@/interfaces/gym";

import { pocketbase } from "@/app/lib/pocketbase";

async function getGyms() {
  return (await pocketbase).collection("gyms").getFullList<Gym>(16);
}

export { getGyms };
