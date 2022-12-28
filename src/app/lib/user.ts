import type { User } from "@/interfaces/user";

import { pocketbase } from "@/app/lib/pocketbase";

/**
 * Can be called in page/layout server component.
 * @returns User or null
 * @author Arif "poltang" Muslax
 * @see {@link https://github.com/vvo/iron-session/issues/560#issuecomment-1324598048 }
 */
async function getUser(): Promise<User> {
  return (await pocketbase).authStore.model as unknown as User;
}

export { getUser };
