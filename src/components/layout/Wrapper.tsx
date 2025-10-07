import type { FC, ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="w-full md:max-w-[1140px] md:mx-auto sm:mx-[1rem] p-4 flex justify-center">
      {children}
    </div>
  );
};

export default Wrapper;
