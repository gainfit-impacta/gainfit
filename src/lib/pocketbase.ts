import type { UserSignInFormData, UserSignUpFormData } from "@/interfaces/user";

import Pocketbase, { Record } from "pocketbase";

import { env } from "@/lib/env";

const pocketbase = () => {
  const pb = new Pocketbase(env.NEXT_PUBLIC_POCKETBASE_URL);
  pb.authStore.loadFromCookie(document.cookie);

  try {
    pb.authStore.isValid && pb.collection("users").authRefresh();
  } catch (_) {
    pb.authStore.clear();
  }

  pb.authStore.onChange(() => {
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
  });

  return pb;
};

async function signup({ ...data }: UserSignUpFormData) {
  return pocketbase()
    .collection("users")
    .create({ ...data, emailVisibility: true });
}

async function signin({ email, password }: UserSignInFormData) {
  return pocketbase().collection("users").authWithPassword(email, password);
}

function logout() {
  return pocketbase().authStore.clear();
}

function mountFileUrl(
  collection: Record["collectionName"],
  id: Record["collectionId"],
  fileName: string
) {
  return `${env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${collection}/${id}/${fileName}`;
}

export { logout, mountFileUrl, pocketbase, signin, signup };
