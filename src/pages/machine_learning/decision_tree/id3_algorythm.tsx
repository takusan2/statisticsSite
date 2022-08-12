import {
  Box,
  Center,
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
} from "@chakra-ui/react";
import { Data } from "src/components/articleTools/Data";
import { Display } from "src/components/articleTools/Display";
import { Hlink } from "src/components/articleTools/Hlink";
import { Inline } from "src/components/articleTools/Inline";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import SubSection from "src/components/articleTools/SubSection";
import DefaultLayout from "src/components/DefaultLayout";

const Pages = () => {
  return (
    <DefaultLayout>
      <Section title="ID3アルゴリズムを理解しよう" />
      <p>
        決定木にはいくつかアルゴリズムが存在しますが、ここではID3アルゴリズムというものを理解していきましょう。
        上位互換である。C4.5アルゴリズムは別の記事でまとめます。
      </p>
      <SubSection title="ID3の概要" />
      <p>
        <Marking>ID3</Marking>(Iterative Dichotomiser 3)は1979年に
        ジョン・ロス・キンラン(Jonh Ross
        Quinlan)により考案されたアルゴリズムです。その学習方法は平均情報量を基準とし、目先の分類のみを評価する
        ことからグリーディ（欲張り）と形容されます。
      </p>
      <SubSection title="データの確認" />
      今回、説明に使用するデータを確認しておきます。20人が選んだ好きな食べ物を記録したデータを使います。特徴量は性別、
      年代があります。(表作成の参考資料:
      <Hlink href="https://fussy.web.fc2.com/algo/pattern7_dt.htm">
        パターン認識
      </Hlink>
      )
      <TableContainer maxWidth="500">
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
      <p>
        上のデータを使い決定木を作ると以下のようなパターンが考えられます。
        今回は特徴量が2つしかないのでこの2通りが考えられるはずです。
      </p>
      {/* <VStack>
        <Image width="600" height="300" src={Tree2} />
        <Image width="600" height="300" src={Tree3} />
      </VStack> */}
      <SubSection title="ID3の考え方" />
      いよいよID3の考え方に入っていきます。上の決定木でもわかるように決定木は一意に定まりません。
      ですので、アルゴリズムの目標は何通りかある決定木なかでより良いものを選ぶことでした。
      上で示した決定木をどのように評価すればよいでしょうか。ずばり、
      <Marking>平均情報量(エントロピー)</Marking>です。
      平均情報量とは、情報の不確実性を確率を用いて表現したもので、次のように定義されます。
      <Center>
        <Box maxW="800" py="5">
          確率変数列<Inline>{"\\( \\{X_1,X_2,\\cdots,X_n\\} \\)"}</Inline>
          とそれに対応した確率を
          <Inline>{"\\( \\{p_1,p_2,\\cdots,p_n\\} \\)"}</Inline>とするとき、
          平均情報量(エントロピー)<Inline>{"\\(H\\)"}</Inline>は
          <Display>{"\\(\\ H = -\\sum^n_{i=1}p_i\\log_2{p_i} \\)"}</Display>
        </Box>
      </Center>
      <Box>
        この平均情報量を利用して、特徴量の場合分けによってどれだけ情報獲得できたのかを評価するのである。
        このとき、獲得できた情報量を<Marking>情報ゲイン</Marking>といいます。
        情報ゲインを言葉を用いた式で表すと
        {/* <Display>
          {"\\(場合分け前の平均値情報量　- 場合分け後の平均情報量の期待値\\)"}
        </Display> */}
        という操作を決定木の各階層で行います。
        ここで注意するべきは、一度その階層で使用する特徴量を決めたら、戻らないということです。
        このような意味で、IDアルゴリズムは目先の評価しか考慮に入れないため
        <Marking>グリーディ(貪欲)</Marking>
        と言われます。また、特徴量の場合分けによって、 得られた情報量を
        。言葉だけでは分かりにくいので、
        実際に決定木の特徴量の場合分けによってどれだけ情報量を獲得できたのか少しだけ計算してみましょう。
      </Box>
      <SubSection title="情報ゲインの算出" />
      <Box>
        まず、決定木のルートノードの時点での平均情報量はどのくらいなのかを算出しましょう。
      </Box>
      いちごが12個、りんごが4個、バナナ4個ですので、それぞれの確率の推定値は
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
      です。したがって、平均情報量は
      <Display>
        {
          "\\(H_{root} =  -\\frac{3}{5}\\log\\frac{3}{5} -\\frac{1}{5}\\log\\frac{1}{5} -\\frac{1}{5}\\log\\frac{1}{5} \\approx 1.37 \\)"
        }
      </Display>
      それでは、まず性別によってどれだけの情報量を獲得できたかを計算しましょう。平均情報量の
      計算方法はルートノードのときと同じです。
      <Display>
        {`\\( \\begin{align}
              H_{男性} &= -\\frac{3}{10}\\log\\frac{3}{10} -\\frac{3}{10}\\log\\frac{3}{10} -\\frac{4}{10}\\log\\frac{4}{10} \\approx 1.57\\\\
              H_{女性} &= -\\frac{9}{10}\\log\\frac{9}{10} -\\frac{1}{10}\\log\\frac{1}{10} -\\frac{0}{10}\\log\\frac{0}{10} \\approx 0.47 
              \\end{align}
              \\)`}
      </Display>
    </DefaultLayout>
  );
};

export default Pages;
