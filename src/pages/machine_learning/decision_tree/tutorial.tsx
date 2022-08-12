import { Center, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Hlink } from "src/components/articleTools/Hlink";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import SubSection from "src/components/articleTools/SubSection";
import DefaultLayout from "src/components/DefaultLayout";
import DecisionTreeExample from "src/images/machinLearning/DecisionTree/DecisionTreeExample.png";
import Process from "src/images/machinLearning/DecisionTree/Process.png";
const Pages = () => {
  return (
    <DefaultLayout>
      <Section title="決定木分析を理解しよう" />
      <p>
        機械学習を学んでいく中で必ず出てくる<Marking>決定木</Marking>
        について理解しよう。
        ここでは機械学習における決定木の役割を簡潔にまとめます。アルゴリズムについては別の記事に書きます。
      </p>
      <SubSection title="決定木の概要" />
      <p>
        決定木は、クラス分類や回帰で広く用いらているモデルであり、階層的な
        <Marking>木構造</Marking>
        を学習します。例えば、身長・握力・50m走のタイムから男女を分類しようと考えた時、次のようになったとします。
      </p>
      <VStack align="center" py="3">
        <Image width="400" height="300" src={DecisionTreeExample} />
        <p>
          参考：
          <Hlink href="https://www.nttcoms.com/service/research/dataanalysis/decision-tree/">
            決定木分析の事例を使ってメリットや活用場面を紹介
          </Hlink>
        </p>
      </VStack>
      <p>
        <Marking>非終端ノード</Marking>には特徴量についての質問があり、
        <Marking>終端ノード</Marking>
        には最終的な確率（分類結果）が書かれている。確率の高いクラスを選択
        すると、左から、女子、女子、男子、男子というように分類される。
        このようにして、学習したモデル（木構造）を用いて、新たなデータに対しの予測をする。
        既に気づいている方もいるかもしれないが、質問の順番・位置を変えても同様に分類することができる。
        つまり、決定木は一意に定まるとは限らないのだ。何通りかある決定木のなかでより良いものを選ぶという
        ことが学習アルゴリズムの目標でもある。
      </p>
      <SubSection title="決定木の学習" />
      <p>
        決定木は、具体的な判断事例から生成することができる。つまり、特徴量と答えがセットになったデータから生成できるという
        ことである。この特徴量と答えがセットになったデータを
        <Marking>訓練データ</Marking>という。訓練データをなるべく
        良く再現できるように決定木を生成するのである。図にすると下のようになる。訓練データを学習し、決定木（モデル）を生成し、
        新しいデータの特徴量に対して、学習済みモデルを用いて予測する
      </p>
      <Center>
        <Image width="550" height="500" src={Process} />
      </Center>
    </DefaultLayout>
  );
};

export default Pages;
