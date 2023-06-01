import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="max-w-[1680px] mx-auto">{children}</div>;
};

export default Container;
