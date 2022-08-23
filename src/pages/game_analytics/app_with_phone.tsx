import { Box } from "@chakra-ui/react";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import DefaultLayout from "src/components/DefaultLayout";

const Pages = () => {
  return (
    <DefaultLayout>
      <Section title="ゲーム業界におけるのKPI(売上)" />
      <Box>
        「<Marking>DAU</Marking>」「<Marking>ARPU</Marking>」「
        <Marking>DPU</Marking>」 「<Marking>ARPPU</Marking>」
        について紹介します。
      </Box>
    </DefaultLayout>
  );
};
export default Pages;
