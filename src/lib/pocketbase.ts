import PocketBase from "pocketbase";

import { env } from "@/lib/env";

const pocketbase = new PocketBase(env.POCKETBASE_URL);

/** @see {@link https://github.com/pocketbase/js-sdk/issues/69} */
if (typeof document !== "undefined") {
  pocketbase.authStore.loadFromCookie(document.cookie);

  pocketbase.authStore.onChange(() => {
    document.cookie = pocketbase.authStore.exportToCookie({ httpOnly: false });
  });
}

export { pocketbase };
