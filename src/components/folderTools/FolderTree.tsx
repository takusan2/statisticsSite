import { Box, HStack, VStack } from "@chakra-ui/react";
import { Hlink } from "../articleTools/Hlink";
import { FileIcon } from "./FileIcon";
import { FolderIcon } from "./FolderIcon";

export const FoldrTree = () => {
  return (
    <Box>
      <HStack>
        <FolderIcon label="統計学" />
        <p>---</p>
        <VStack align="left" position="relative" top="25px">
          <Hlink href="/tutorial">
            <FileIcon label="正規分布" />
          </Hlink>
          <FileIcon label="（仮）" />
        </VStack>
      </HStack>
    </Box>
  );
};
