import { ReactNode } from "react-markdown/lib/react-markdown";

type BlueProps = {
  children: ReactNode;
};

export const Blue = ({ children }: BlueProps) => {
  return <span style={{ color: "blue" }}>{children}</span>;
};
