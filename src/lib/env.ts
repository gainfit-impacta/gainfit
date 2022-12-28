import { bool, cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  NEXT_PUBLIC_POCKETBASE_URL: str({ default: "http://127.0.0.1:8090" }),
  isBrowser: bool({ default: typeof window !== "undefined" }),
});

export { env };
