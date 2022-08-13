import { Box } from "@chakra-ui/react";
import { MathJax } from "better-react-mathjax";
import { ReactNode } from "react";

type DisplayProps = {
  children: ReactNode;
};

export const Display = ({ children }: DisplayProps) => {
  return (
    <Box fontSize="20" overflowX="scroll" overflowY="hidden" m="3">
      <MathJax>{children}</MathJax>
    </Box>
  );
};
