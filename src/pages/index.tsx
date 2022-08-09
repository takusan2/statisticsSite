import { Box, Button, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useState } from "react";
import { Hlink } from "src/components/articleTools/Hlink";
import { Icode } from "src/components/articleTools/Icode";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import SubSection from "src/components/articleTools/SubSection";
import DefaultLayout from "src/components/DefaultLayout";
import { FoldrTree } from "src/components/folderTools/FolderTree";

const Home: NextPage = () => {
  const [learnMode, setLearnMode] = useState(false);
  const toggleSetShow = () => {
    setLearnMode(!learnMode);
  };
  return (
    <DefaultLayout>
      <Section title="弓弦葉の統計学ノートへようこそ！" />
      <SubSection title="このサイトについて" />
      統計学についてはもちろん、<Icode>Python</Icode>
      を用いた理解や機械学習についてもまとめるよ(随時更新予定)
      <SubSection title="統計学とは" />
      統計に関する研究を行う学問である。経験的に得られたバラツキのあるデータから、
      応用数学の手法を用いて数値上の性質や規則性あるいは不規則性を見いだす。
      統計的手法は、実験計画、データの要約や解釈を行う上での根拠を提供するため、
      幅広い分野で応用されている。(
      <Hlink href="https://ja.wikipedia.org/wiki/%E7%B5%B1%E8%A8%88%E5%AD%A6">
        Wikipediaより
      </Hlink>
      )
      <SubSection title="機能" />
      <Box px="2">
        <Button colorScheme="purple" onClick={toggleSetShow}>
          暗記モード {learnMode ? "ON" : "OFF"}
        </Button>
      </Box>
      このボタンのあるページは暗記モードに切り替えることができます。
      <Marking mode={learnMode}>暗記モードON</Marking>
      にすると重要語句が隠されます。また、暗記モードONの状態で
      重要語句をクリックするとその語句の表示・非表示を切り替えることができます。ぜひ実際にボタンを押して試してみてください！
      <br />
      <br />
      <Text color="gray">
        (注)暗記モードONにしても文字が隠れない場合があります。その時は、リロードし直すか、クリックして非表示にしてください。
        ただいま解決策を考えていますのでお待ちください。
      </Text>
      <br />
      <Section title="記事" />
      <FoldrTree />
    </DefaultLayout>
  );
};

export default Home;
