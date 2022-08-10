import { Accordion, Box } from "@chakra-ui/react";
import { Hlink } from "../articleTools/Hlink";
import { Branch } from "./Branch";
import { FileIcon } from "./FileIcon";

export const FoldrTree = () => {
  return (
    <Box>
      <Accordion defaultIndex={[0, 1]} allowMultiple>
        <Branch label="統計学">
          <Hlink href="/tutorial">
            <FileIcon label="正規分布"></FileIcon>
          </Hlink>
        </Branch>
        <Branch label="Python">
          <Hlink href="/python/pandas/category">
            <FileIcon label="Pandasのcategory型"></FileIcon>
          </Hlink>
        </Branch>
      </Accordion>
    </Box>
  );
};
