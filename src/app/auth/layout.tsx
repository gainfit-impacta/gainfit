import type { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}

export default AuthLayout;
