import type { User } from "@/interfaces/user";
import { pocketbase } from "@/lib/pocketbase";

function getUser() {
  return pocketbase().authStore.model as unknown as User;
}

export { getUser };
