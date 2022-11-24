import "@picocss/pico/css/pico.css";
import "./layout.styles.css";

import type { ReactNode } from "react";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Inter } from "@next/font/google";

import { getUserSSR } from "@/lib/user";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});

function RootLayout({ children }: { children: ReactNode }) {
  const user = getUserSSR(cookies());

  if (!user) {
    redirect("/auth/sign-in");
  }

  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <title>GainFit</title>
      </head>

      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
