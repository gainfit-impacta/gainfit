import type { CreatePartyFormData, EnterPartyFormData, Party } from "@/interfaces/party";

import { pocketbase } from "@/lib/pocketbase";

async function createParty(data: CreatePartyFormData) {
  return pocketbase().collection("parties").create<Party>(data);
}

async function enterParty(data: EnterPartyFormData, userId: string) {
  return pocketbase()
    .collection("parties")
    .update<Party>(data.id as string, { users: userId });
}

async function getParty(id: string) {
  return pocketbase().collection("parties").getOne<Party>(id, { expand: "users" });
}

export { createParty, enterParty, getParty };
