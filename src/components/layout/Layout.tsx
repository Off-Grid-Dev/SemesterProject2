import type { FC, ReactNode } from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </>
  );
};

export default Layout;
