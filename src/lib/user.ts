import type { User } from "@/interfaces/user";

import { cookies } from "next/headers";

import { pocketbase } from "@/lib/pocketbase";

function getUser(): User {
  return pocketbase.authStore.model as unknown as User;
}

/**
 * Can be called in page/layout server component.
 * @returns User or null
 * @author Arif "poltang" Muslax
 * @see {@link https://github.com/vvo/iron-session/issues/560#issuecomment-1324598048 }
 */
function getUserSSR(): User | null {
  const authCookie = cookies().get("pb_auth");

  if (!authCookie) return null;

  pocketbase.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`);
  const user = pocketbase.authStore.model;

  return user as unknown as User;
}

export { getUser, getUserSSR };
