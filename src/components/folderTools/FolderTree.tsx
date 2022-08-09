import { Box, HStack } from "@chakra-ui/react";
import { FolderIcon } from "./FolderIcon";

export const FoldrTree = () => {
  return (
    <Box>
      <HStack>
        <FolderIcon label="統計学" />
        <p>---</p>
      </HStack>
    </Box>
  );
};
