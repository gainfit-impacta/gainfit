import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Pocketbase from "pocketbase";

import { env } from "@/lib/env";

const pocketbase = new Promise<Pocketbase>(async (resolve) => {
  const pb = new Pocketbase(env.NEXT_PUBLIC_POCKETBASE_URL);
  const authCookie = cookies().get("pb_auth");

  if (authCookie) pb.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}` || "");

  try {
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (_) {
    pb.authStore.clear();
  }

  if (typeof document !== "undefined") {
    pb.authStore.onChange(() => {
      document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
    });
  }

  return resolve(pb);
});

function logout() {
  pocketbase.then((pb) => pb.authStore.clear()).then(() => redirect("/"));
}

export { logout, pocketbase };
