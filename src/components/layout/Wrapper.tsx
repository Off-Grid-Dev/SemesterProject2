import type { FC, ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="md:max-w-[1140px] md:mx-auto sm:mx-[1rem] p-4">
      {children}
    </div>
  );
};

export default Wrapper;
