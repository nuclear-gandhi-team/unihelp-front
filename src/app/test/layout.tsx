import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-screen flex justify-center">{children}</div>;
};

export default Layout;
