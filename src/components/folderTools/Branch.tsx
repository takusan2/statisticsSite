import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { ReactNode } from "react-markdown/lib/react-markdown";
import { FolderIcon } from "./FolderIcon";

type BranchProps = {
  children: ReactNode;
  label: string;
};

export const Branch = ({ children, label }: BranchProps) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <FolderIcon label={label} />
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} pl="10">
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
};
