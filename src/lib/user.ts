import { ReadonlyRequestCookies } from "next/dist/server/app-render";
import type { User } from "@/interfaces/user";
import { pocketbase } from "@/lib/pocketbase";

function getUser(): User {
  return pocketbase.authStore.model as unknown as User;
}

/**
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns User
 * @author Arif "poltang" Muslax
 * @see {@link https://github.com/vvo/iron-session/issues/560#issuecomment-1324598048 }
 */
function getUserSSR(cookies: ReadonlyRequestCookies): User {
  const authCookie = cookies.get("pb_auth");

  if (!authCookie)
    return {
      name: "",
      email: "",
      password: "",
    };

  pocketbase.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`);
  const user = pocketbase.authStore.model;

  return user as unknown as User;
}

export { getUser, getUserSSR };
