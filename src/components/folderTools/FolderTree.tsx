import { Accordion, Box, VStack } from "@chakra-ui/react";
import { Hlink } from "../articleTools/Hlink";
import { Branch } from "./Branch";
import { FileIcon } from "./FileIcon";

export const FoldrTree = () => {
  return (
    <Box>
      <Accordion defaultIndex={[0, 1, 2, 3, 4, 5]} allowMultiple>
        <Branch label="統計学">
          <Hlink href="/tutorial">
            <FileIcon label="正規分布"></FileIcon>
          </Hlink>
        </Branch>
        <Branch label="Python">
          <Branch label="Pandas">
            <Hlink href="/python/pandas/category">
              <FileIcon label="Pandas の category 型を利用したラベルエンコーディング"></FileIcon>
            </Hlink>
          </Branch>
          <Branch label="Matplotlib">仮</Branch>
        </Branch>
        <Branch label="機械学習">
          <Branch label="決定木">
            <VStack align="left">
              <Hlink href="/machine_learning/decision_tree/tutorial">
                <FileIcon label="決定木を理解しよう" />
              </Hlink>
              <Hlink href="/machine_learning/decision_tree/id3_algorythm">
                <FileIcon label="ID3アルゴリズムを理解しよう" />
              </Hlink>
            </VStack>
          </Branch>
        </Branch>
      </Accordion>
    </Box>
  );
};
