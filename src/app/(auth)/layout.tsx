import type { ReactNode } from "react";

import Link from "next/link";

import Logo from "@/app/Logo";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
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
      <div className="container">{children}</div>
    </>
  );
}

export default AuthLayout;
