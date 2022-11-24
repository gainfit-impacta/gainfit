import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  POCKETBASE_URL: str({ default: "http://127.0.0.1:8090" }),
});

export { env };
