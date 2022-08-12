import { Flex } from "@chakra-ui/react";
import { MathJax } from "better-react-mathjax";
import { ReactNode } from "react";

type DisplayProps = {
  children: ReactNode;
};

export const Display = ({ children }: DisplayProps) => {
  return (
    <Flex fontSize="15" overflowX="scroll" p="3" minW="0">
      <MathJax>{children}</MathJax>
    </Flex>
  );
};
