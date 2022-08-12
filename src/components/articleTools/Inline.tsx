import { MathJax } from "better-react-mathjax";
import { ReactNode } from "react";

type InlineProps = {
  children: ReactNode;
};

export const Inline = ({ children }: InlineProps) => {
  return <MathJax inline>{children}</MathJax>;
};
