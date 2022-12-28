import type { Party } from "@/interfaces/party";

import { pocketbase } from "@/app/lib/pocketbase";

async function getParties(userId: string) {
  return (await pocketbase).collection("parties").getFullList<Party>(16, {
    filter: `users.id = "${userId}" && expired > "${new Date().toISOString().slice(0, 10)}"`,
  });
}

export { getParties };
