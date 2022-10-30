import "./globals.css";
import "./layout.styles.css";

import { Inter } from "@next/font/google";

const inter = Inter({
  display: "swap",
  fallback: [
    "Roboto",
    "-apple-system",
    "BlinkMacSystemFont",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
  subsets: ["latin"],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <title>GainFit</title>
      </head>

      <body className="body">
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
