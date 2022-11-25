import "@picocss/pico/css/pico.css";
import "./layout.styles.css";

import type { ReactNode } from "react";

import { Inter } from "@next/font/google";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <title>GainFit</title>
      </head>

      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
