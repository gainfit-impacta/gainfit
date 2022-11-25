import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import Logo from "@/app/Logo";
import { getUserSSR } from "@/lib/user";

function AppLayout({ children }: { children: ReactNode }) {
  const user = getUserSSR();

  if (!user) {
    redirect("/entrar");
  }

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

        {user && (
          <ul>
            <li>
              {user.avatar && <Image src={user.avatar} alt={user.name} width={48} height={48} />}
            </li>
          </ul>
        )}
      </nav>
      {children}
    </>
  );
}

export default AppLayout;
