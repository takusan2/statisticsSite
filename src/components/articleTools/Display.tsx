import { Container } from "@chakra-ui/react";
import { MathJax } from "better-react-mathjax";
import { ReactNode } from "react";

type DisplayProps = {
  children: ReactNode;
};

export const Display = ({ children }: DisplayProps) => {
  return (
    <Container fontSize="20" overflowX="scroll" m="3">
      <MathJax>{children}</MathJax>
    </Container>
  );
};
