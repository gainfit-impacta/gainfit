import "phosphor-icons/src/css/icons.css";
import "./layout.styles.css";

import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getUser } from "@/app/lib/user";
import Logo from "@/app/Logo";
import { mountFileUrl } from "@/lib/pocketbase";

async function AppLayout({ children }: { children: ReactNode }) {
  const user = await getUser();

  if (!user) {
    redirect("/entrar");
  }

  const avatarUrl = user.avatar
    ? mountFileUrl("users", user.id as string, user.avatar)
    : "https://via.placeholder.com/64.png?text=👤";

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

        <ul>
          <li>
            <Image
              src={avatarUrl}
              alt={user.name}
              className="profile-picture"
              width={256}
              height={256}
            />
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default AppLayout;
