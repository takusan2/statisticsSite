import { Code } from "@chakra-ui/react";
import { ReactNode } from "react";

type IcodeProps = {
  children: ReactNode;
};

export const Icode = ({ children }: IcodeProps) => {
  return (
    <Code
      display="inline-block"
      borderRadius="5"
      border="2px dimgray duble"
      colorScheme="black"
    >
      {children}
    </Code>
  );
};
