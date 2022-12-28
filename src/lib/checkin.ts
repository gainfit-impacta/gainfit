import type { CheckIn } from "@/interfaces/checkin";

import { pocketbase } from "@/lib/pocketbase";

async function createCheckin(gymId: string, userId: string) {
  return pocketbase()
    .collection("checkins")
    .create<CheckIn>({ user: [userId], gym: gymId });
}

export { createCheckin };
