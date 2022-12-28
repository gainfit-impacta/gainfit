import type { Gym } from "@/interfaces/gym";
import type { User } from "@/interfaces/user";
import type { Record } from "pocketbase";

interface CheckIn extends Partial<Record> {
  user: User;
  gym: Gym;
}

export type { CheckIn };
