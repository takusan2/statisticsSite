import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import CodeBlock from "src/components/articleTools/Code/CodeBlock";
import { Hlink } from "src/components/articleTools/Hlink";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import DefaultLayout from "src/components/DefaultLayout";
import CategoryImage from "src/pages/python/pandas/images/category.png";
import LabeledImage from "src/pages/python/pandas/images/label.png";
import ObjectImage from "src/pages/python/pandas/images/object.png";
import DataFrame1Image from "./images/DataFrame1.png";

const Code1 = `df = pd.DataFrame({
  "name":["Olivia", "Lily", "Oliver", "Noah", "Harry"],
  "hobby":["piano","tennis", "piano", "soccer", "soccer"]})
df
`;
const Code2 = `df["hobby"]
`;

const Code3 = `df["hobby"].astype("category")
`;

const Code4 = `df["hobby"].astype("category").cat.codes`;

const Pages = () => {
  return (
    <DefaultLayout>
      <Section title="Pandas の category 型" />
      pandasのcategory型について気になったので、少しまとめてみます。
      <p>まず、次のようなデータフレームを考える。</p>
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
      <p>
        このとき、hobbyをラベルエンコーディングしたいとする。その方法はたくさんあるが今回は
        category型を利用した方法を考える。現在、 hobbyの型は
        <Marking>object型</Marking>である。そこで、
        <Marking>astype("category")</Marking>
        を用いて型を<Marking>category型</Marking>に変更する
      </p>
      <CodeBlock language="python">{Code3}</CodeBlock>
      <Image width="500px" height="240px" src={CategoryImage} />
      <div>
        dtype=categoryに変わっているだけでなく、object型のときにはなかった情報が
        増えている。
        <Text>
          <Marking>Category(3, object):["piano", "socceer", "tennis"]</Marking>
        </Text>
        である。seriesでは二つあった要素piano、soccerが1つにまとめられていることがわかる。
        <Text>
          このようにして、dtypeをcategoryにしてから次のコードを書けばラベルエンコーディングできる。
        </Text>
      </div>
      <CodeBlock language="python">{Code4}</CodeBlock>
      <Image width="150" height="200" src={LabeledImage} />
      <div>
        category型のseriesに<Marking>cat.codes</Marking>
        を書くことで、カテゴリごとに数字が振られる。今回の場合は、pianoが0、soccerが1、tennisが2
        とラベルエンコーディングされたことになる。より詳しいことを知りたい方は
        <Hlink href="https://pandas.pydata.org/pandas-docs/stable/user_guide/categorical.html#categorical-sort">
          pandasの公式ドキュメント(categorical data)
        </Hlink>
        をぜひ読んでください。カテゴリカルデータに対する便利な処理が他にもあるみたいなので、
        筆者もすこしずつまとめていこうと思います。
      </div>
    </DefaultLayout>
  );
};
export default Pages;
