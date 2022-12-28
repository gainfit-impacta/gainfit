import type { Record } from "pocketbase";

interface Gym extends Partial<Record> {
  name: string;
  description?: string;
  brandImage?: string;
  address: string;
}

export type { Gym };
