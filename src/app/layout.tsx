import "@picocss/pico/css/pico.css";
import "./layout.styles.css";

import type { ReactNode } from "react";

import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Inter } from "@next/font/google";

import Logo from "@/components/Logo";
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

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <title>GainFit</title>
      </head>

      <body>
        <nav className="container-fluid">
          <ul>
            <li>
              <Link href="/" aria-label="Voltar ao início">
                <Logo />
              </Link>
            </li>
            <li>
              <strong>Gain</strong>Fit
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}

export default RootLayout;
