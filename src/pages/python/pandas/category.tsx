import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

import CodeBlock from "src/components/articleTools/Code/CodeBlock";
import { Hlink } from "src/components/articleTools/Hlink";
import { Blue } from "src/components/articleTools/Marker";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import SubSection from "src/components/articleTools/SubSection";
import DefaultLayout from "src/components/DefaultLayout";
import CategoryImage from "src/images/pnadasImages/category.png";
import DataFrame1Image from "src/images/pnadasImages/DataFrame1.png";
import LabeledImage from "src/images/pnadasImages/label.png";
import ObjectImage from "src/images/pnadasImages/object.png";

const Code1 = `df = pd.DataFrame({
  "name":["Olivia", "Lily", "Oliver", "Noah", "Harry"],
  "hobby":["piano","tennis", "piano", "soccer", "soccer"]})
df`;
const Code2 = `df["hobby"]`;

const Code3 = `df["hobby"].astype("category")`;

const Code4 = `df["hobby"].astype("category").cat.codes`;

const Pages = () => {
  return (
    <DefaultLayout>
      <Section title="Pandas の category 型を利用したラベルエンコーディング" />
      pandasのcategory型を利用したラベルエンコーディングについて気になったので少しまとめてみます。
      <SubSection title="ラベルエンコーディングとは" />
      <Box>
        カテゴリカルデータに対して、各カテゴリ(ラベル)に一意の数値を割り振るというものである。
        <br />
        実際には順序尺度・名義尺度を考慮してエンコーディングするべきだが、今回は考えないことにする。
      </Box>
      <SubSection title="実装" />
      <Box>まず、次のようなデータフレームを考える。</Box>
      <CodeBlock language="python">{Code1}</CodeBlock>
      <Flex>
        <Image
          width="200px"
          height="200px"
          src={DataFrame1Image}
          alt="DataFrame1"
        />
      </Flex>
      <CodeBlock language="python">{Code2}</CodeBlock>
      <Image width="260px" height="200px" src={ObjectImage} />
      <Box>
        このとき、hobbyをラベルエンコーディングしたいとする。その方法はたくさんあるが今回は
        category型を利用した方法を考える。現在、 hobbyの型は
        <Marking>object型</Marking>である。そこで、
        <Marking>astype("category")</Marking>
        を用いて型を<Marking>category型</Marking>に変更する
      </Box>
      <CodeBlock language="python">{Code3}</CodeBlock>
      <Image width="490px" height="250px" src={CategoryImage} />
      <Box>
        dtype=categoryに変わっているだけでなく、object型のときにはなかった情報が
        増えている。
        <Blue>Category(3, object):["piano", "socceer", "tennis"]</Blue>
        である。seriesでは二つあった要素piano、soccerが1つにまとめられていることがわかる。
        このようにして、dtypeをcategoryにしてから次のコードを書けばラベルエンコーディングできる。
      </Box>
      <CodeBlock language="python">{Code4}</CodeBlock>
      <Image width="150" height="200" src={LabeledImage} />
      <Box>
        category型のseriesに<Marking>cat.codes</Marking>
        を書くことで、カテゴリごとに数字が振られる。今回の場合は、pianoが0、soccerが1、tennisが2
        とラベルエンコーディングされたことになる。より詳しいことを知りたい方は
        <Hlink href="https://pandas.pydata.org/pandas-docs/stable/user_guide/categorical.html#categorical-sort">
          pandasの公式ドキュメント(categorical data)
        </Hlink>
        をぜひ読んでください。カテゴリカルデータに対する便利な処理が他にもあるみたいなので、
        筆者もすこしずつまとめていこうと思います。
      </Box>
    </DefaultLayout>
  );
};
export default Pages;
