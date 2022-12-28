import type { User } from "@/interfaces/user";
import type { Record } from "pocketbase";

interface Party extends Partial<Record> {
  name: string;
  users: User["id"][];
  expired: string;
}

interface CreatePartyFormData extends Party {}

interface EnterPartyFormData extends Pick<Party, "id"> {}

export type { CreatePartyFormData, EnterPartyFormData, Party };
