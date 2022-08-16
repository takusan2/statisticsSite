import {
  Box,
  Button,
  Container,
  ListItem,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { Data } from "src/components/articleTools/Data";
import { Display } from "src/components/articleTools/Display";
import { Hlink } from "src/components/articleTools/Hlink";
import { Inline } from "src/components/articleTools/Inline";
import { Blue } from "src/components/articleTools/Marker";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import SubSection from "src/components/articleTools/SubSection";
import DefaultLayout from "src/components/DefaultLayout";
import { FileIcon } from "src/components/folderTools/FileIcon";
import Tree2 from "src/images/machinLearning/DecisionTree/DecisionTreeExample2.png";
import Tree3 from "src/images/machinLearning/DecisionTree/DecisionTreeExample3.png";

const Pages = () => {
  const [learnMode, setLearnMode] = useState(false);
  const toggleSetShow = () => {
    setLearnMode(!learnMode);
  };
  return (
    <DefaultLayout>
      <VStack align="left" py="5">
        <Section title="ID3アルゴリズムを理解しよう" />
        <Box px="2">
          <Button colorScheme="purple" onClick={toggleSetShow}>
            暗記モード {learnMode ? "ON" : "OFF"}
          </Button>
        </Box>
      </VStack>
      <Box>
        決定木にはいくつかアルゴリズムが存在しますが、ここではID3アルゴリズムというものを理解していきましょう。
        上位互換である。C4.5アルゴリズムは別の記事でまとめます。
      </Box>
      <SubSection title="ID3の概要" />
      <Box>
        <Marking mode={learnMode}>ID3</Marking>(Iterative Dichotomiser
        3)は1979年に ジョン・ロス・キンラン(Jonh Ross
        Quinlan)により考案されたアルゴリズムです。その学習方法はエントロピーを基準とし、目先の分類のみを評価する
        ことからグリーディ（欲張り）と形容されます。
      </Box>
      <SubSection title="データの確認" />
      今回、説明に使用するデータを確認しておきます。20人が選んだ好きな食べ物を記録したデータを使います。特徴量は性別、
      年代があります。(表作成の参考資料:
      <Hlink href="https://fussy.web.fc2.com/algo/pattern7_dt.htm">
        パターン認識
      </Hlink>
      )
      <TableContainer alignContent="center">
        <Table size="sm" variant="striped" colorScheme="teal">
          <TableCaption placement="top">
            <Text fontSize="15">20人の選んだ好きな果物</Text>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>性別</Th>
              <Th>年代</Th>
              <Th>好きな果物</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Data id="1" sex="男性" age="10代" fruit="りんご" />
            <Data id="2" sex="男性" age="10代" fruit="バナナ" />
            <Data id="3" sex="男性" age="10代" fruit="りんご" />
            <Data id="4" sex="男性" age="20代" fruit="いちご" />
            <Data id="5" sex="男性" age="20代" fruit="りんご" />
            <Data id="6" sex="男性" age="20代" fruit="いちご" />
            <Data id="7" sex="男性" age="20代" fruit="いちご" />
            <Data id="8" sex="男性" age="30代" fruit="バナナ" />
            <Data id="9" sex="男性" age="30代" fruit="バナナ" />
            <Data id="10" sex="男性" age="30代" fruit="いちご" />
            <Data id="11" sex="女性" age="10代" fruit="いちご" />
            <Data id="12" sex="女性" age="10代" fruit="いちご" />
            <Data id="13" sex="女性" age="20代" fruit="いちご" />
            <Data id="14" sex="女性" age="20代" fruit="いちご" />
            <Data id="15" sex="女性" age="20代" fruit="いちご" />
            <Data id="16" sex="女性" age="20代" fruit="いちご" />
            <Data id="17" sex="女性" age="20代" fruit="いちご" />
            <Data id="18" sex="女性" age="30代" fruit="りんご" />
            <Data id="19" sex="女性" age="30代" fruit="いちご" />
            <Data id="20" sex="女性" age="30代" fruit="いちご" />
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>ID</Th>
              <Th>性別</Th>
              <Th>年代</Th>
              <Th>好きな果物</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <SubSection title="決定木の可視化" />
      <Box>
        上のデータを使い決定木を作ると以下のようなパターンが考えられます。
        今回は特徴量が2つしかないのでこの2通りが考えられるはずです。最終的な分類は赤いマーカで
        線が引かれているクラスです。
      </Box>
      <VStack>
        <Image width="800" height="400" src={Tree2} />
        <Image width="800" height="400" src={Tree3} />
      </VStack>
      <SubSection title="ID3の考え方" />
      いよいよID3の考え方に入っていきます。上の決定木でもわかるように決定木は一意に定まりません。
      ですので、アルゴリズムの目標は何通りかある決定木なかでより良いものを選ぶことでした。
      上で示した決定木をどのように評価すればより良い決定木を見つけ出せるでしょうか。ずばり、
      <Marking mode={learnMode}>エントロピー(平均情報量)</Marking>です。
      エントロピーとは、情報の不確実性を確率を用いて表現したもので、次のように定義されます。
      <Container maxW="800" py="5" maxWidth="1000" overflowX="scroll">
        確率変数列<Inline>{"\\( \\{X_1,X_2,\\cdots,X_n\\} \\)"}</Inline>
        とそれに対応した確率を
        <Inline>{"\\( \\{p_1,p_2,\\cdots,p_n\\} \\)"}</Inline>とするとき、
        エントロピー(エントロピー)<Inline>{"\\(H\\)"}</Inline>は
        <Display>{"\\(\\ H = -\\sum^n_{i=1}p_i\\log_2{p_i} \\)"}</Display>
      </Container>
      <Box>
        このエントロピーを利用して、特徴量の分類によってどれだけ情報を獲得できたのかを評価するのです。
        このとき、獲得できた情報量を
        <Marking mode={learnMode}>情報ゲイン</Marking>
        といいます。 情報ゲインを言葉を用いた式で表すと
        <Display>
          {"\\(情報ゲイン=分類前のエントロピー-分類後のエントロピーの期待値\\)"}
        </Display>
        である。言い換えると、どれだけ情報の不確実性を減らせらたかというようにも言えます。
        このような操作を決定木の各ノードで行います。
        ここで注意するべきは、一度そのノードで分類に使用する特徴量を決めたら、戻らないということです。
        このような意味で、IDアルゴリズムは目先の評価しか考慮に入れないため
        <Marking mode={learnMode}>グリーディ(貪欲)</Marking>
        と言われます。言葉だけでは分かりにくいので、
        実際に各特徴量による分類でどれだけ情報量を獲得できたのか計算してみましょう。
      </Box>
      <SubSection title="情報ゲインの算出" />
      <Box>
        まず、決定木のルートノードの時点でのエントロピーはどのくらいなのかを算出しましょう。
      </Box>
      教師信号はいちごが12個、りんごが4個、バナナ4個ですので、それぞれの確率の推定値は
      <UnorderedList>
        <ListItem>
          いちご <Inline>{"\\(\\frac{12}{20} = \\frac{3}{5}\\)"}</Inline>
        </ListItem>
        <ListItem>
          りんご <Inline>{"\\(\\frac{4}{20} = \\frac{1}{5}\\)"}</Inline>
        </ListItem>
        <ListItem>
          バナナ <Inline>{"\\(\\frac{4}{20} = \\frac{1}{5}\\)"}</Inline>
        </ListItem>
      </UnorderedList>
      です。したがって、分類前のエントロピーは
      <Display>
        {
          "\\(H_{root} =  -\\frac{3}{5}\\log\\frac{3}{5} -\\frac{1}{5}\\log\\frac{1}{5} -\\frac{1}{5}\\log\\frac{1}{5} \\approx 1.37 \\)"
        }
      </Display>
      次に、性別によってどれだけの情報量を獲得できたかを計算しましょう。エントロピーの
      計算方法はルートノードのときと同じです。
      <Display>
        {`\\( \\begin{align}
              H_{男性} &= -\\frac{3}{10}\\log\\frac{3}{10} -\\frac{3}{10}\\log\\frac{3}{10} -\\frac{4}{10}\\log\\frac{4}{10} \\approx 1.57\\\\
              H_{女性} &= -\\frac{9}{10}\\log\\frac{9}{10} -\\frac{1}{10}\\log\\frac{1}{10} -\\frac{0}{10}\\log\\frac{0}{10} \\approx 0.47 
              \\end{align}
              \\)`}
      </Display>
      したがって、
      <Blue>分類後のエントロピーの期待値</Blue>は
      <Display>
        {`\\( \\begin{align}
              \\frac{1}{2}H_{男性} + \\frac{1}{2}H_{女性}&= \\frac{1}{2}\\cdot1.57 + \\frac{1}{2}\\cdot0.47\\\\
              &=1.02
              \\end{align}
              \\)`}
      </Display>
      となり、<Blue>情報量ゲイン</Blue>は
      <Display>
        {`\\( \\begin{align}
              H_{root}-1.02=1.37-1.02=0.35
              \\end{align}
              \\)`}
      </Display>
      となります。では、特徴量で年代を選択した場合も計算してみましょう。
      <Display>
        {`\\( \\begin{align}
              H_{10代} &= -\\frac{2}{5}\\log\\frac{2}{5} -\\frac{2}{5}\\log\\frac{2}{5} -\\frac{1}{5}\\log\\frac{1}{5} \\approx 1.52\\\\
              H_{20代} &= -\\frac{8}{9}\\log\\frac{8}{9} -\\frac{1}{9}\\log\\frac{1}{9} -\\frac{0}{9}\\log\\frac{0}{9} \\approx 0.50\\\\
              H_{30代} &= -\\frac{2}{6}\\log\\frac{2}{6} -\\frac{2}{6}\\log\\frac{2}{6} -\\frac{3}{6}\\log\\frac{3}{6} \\approx 1.46\\\\
              \\end{align}
              \\)`}
      </Display>
      したがって、
      <Blue>分類後のエントロピーの期待値</Blue>は
      <Display>
        {`\\( \\begin{align}
              \\frac{5}{20}H_{10代} + \\frac{9}{20}H_{20代}+ \\frac{6}{20}H_{30代}&= \\frac{1}{4}\\cdot1.52 + \\frac{9}{20}\\cdot0.50+\\frac{3}{10}\\cdot1.46\\\\
              &=1.043
              \\end{align}
              \\)`}
      </Display>
      となり、<Blue>情報量ゲイン</Blue>は
      <Display>
        {`\\( \\begin{align}
              H_{root}-1.043= 1.37-1.043 \\approx0.33
              \\end{align}
              \\)`}
      </Display>
      となります。ここで、<Blue>性別で分類した場合</Blue>と
      <Blue>年代で分類した場合</Blue>の情報ゲインを比較すると、
      性別で分類したほうが僅かではありますが、高いです。つまり、最初の分類は性別の方が
      よいという判断をすることになります。今回の例は特徴量が2つしかないので残りの選択肢は性別しかありませんが、
      特徴量がもっと多い場合は、こうした情報ゲインによる評価を次のノードでも繰り返し行います。
      このような情報ゲインを用いた評価を再帰的に行い、決定木を構成していくのがID3アルゴリズムです。
      また終了条件は分類後のノードのデータがすべて同じクラスに属するとき、もしくは、分類に使う
      特徴量がなくなったときです。特徴量がなくなった場合は、分類しきれていない場合があります。そのときは
      そのノードのデータで多数決をとります。上で示した、決定木も多数決で決めていることがわかります。
      ここで、もう一つ問題があります。下の決定木を見てください。
      <Image src={Tree2} />
      <Box>
        女性で10代のノードは教師信号が空になっています。このような時は親ノードの教師信号で多数決を取ります。
        女性で10代のノードの親のノードの教師信号はいちごが9個、りんごが1個、バナナが0個なので多数決を取れば
        いちごが勝ちますね。なので、女性で10代のノードはいちごに分類されます。ID3の解説はここまでにします。
        pythonによる実装はこちらの記事に記載しています。
        <Hlink href="id3_with_python">
          <FileIcon label="ID3アルゴリズムの実装" />
        </Hlink>
      </Box>
    </DefaultLayout>
  );
};

export default Pages;
