import { Box, Button, Center, HStack } from "@chakra-ui/react";
import { MathJaxContext } from "better-react-mathjax";
import Image from "next/image";
import { useState } from "react";
import { Display } from "src/components/articleTools/Display";
import { Inline } from "src/components/articleTools/Inline";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import SubSection from "src/components/articleTools/SubSection";
import DefaultLayout from "src/components/DefaultLayout";

import NormalDistribution from "../images/standardDistribution.png";

const Pages = () => {
  const [learnMode, setLearnMode] = useState(false);
  const toggleSetShow = () => {
    setLearnMode(!learnMode);
  };
  return (
    <DefaultLayout>
      <HStack>
        <Section title="正規分布" />
        <Box px="2">
          <Button colorScheme="purple" onClick={toggleSetShow}>
            暗記モード {learnMode ? "ON" : "OFF"}
          </Button>
        </Box>
      </HStack>

      <SubSection title="正規分布とは" />
      <MathJaxContext>
        平均 <Inline>{"\\(\\mu\\)"}</Inline> 、分散{" "}
        <Inline>{"\\(\\sigma\\)"}</Inline> としたとき、
        次のような確率密度関数で表される分布を
        <Marking mode={learnMode}>正規分布</Marking>
        という。
        <Center>
          <Display>
            {
              "\\(\\frac{1}{\\sqrt{2\\pi\\sigma}} \\exp\\left[\\frac{(x-\\mu)^2}{2\\sigma^2}\\right]\\)"
            }
          </Display>
        </Center>
        特に、平均<Inline>{"\\(0\\)"}</Inline> 、分散
        <Inline>{"\\(1\\)"}</Inline>のときを
        <Marking mode={learnMode}>標準正規分布</Marking>
        という。例えば、平均
        <Inline>{"\\(0\\)"}</Inline>、分散
        <Inline>{"\\(25\\)"}</Inline>の正規分布を図で表すと以下のようになる。
        グラフにすると以下のようになる。
        <Center>
          <Image src={NormalDistribution} alt="NormalDistribution" />
        </Center>
      </MathJaxContext>
    </DefaultLayout>
  );
};

export default Pages;
