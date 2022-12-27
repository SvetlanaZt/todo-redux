import Header from "./Header/Header";
import { FC, ReactNode } from "react";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layout;
