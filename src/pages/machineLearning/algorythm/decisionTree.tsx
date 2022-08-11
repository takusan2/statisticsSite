import { Center } from "@chakra-ui/react";
import Image from "next/image";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import SubSection from "src/components/articleTools/SubSection";
import DefaultLayout from "src/components/DefaultLayout";
import DecisionTreeExample from "src/images/machinLearning/DecisionTree/DecisionTreeExample.png";
import Process from "src/images/machinLearning/DecisionTree/Process.png";
const Pages = () => {
  return (
    <DefaultLayout>
      <Section title="決定木のアルゴリズムを理解しよう" />
      <p>
        機械学習を学んでいく中で全くアルゴリズムを理解しないで、
        分類器を使用するのはあまり良くないと考えています。
        そこで、今回は決定木の一番基本的なアルゴリズム<Marking>ID3</Marking>
        を理解していこうと思います。
      </p>
      <SubSection title="決定木の概要" />
      <p>
        決定木は、クラス分類や回帰で広く用いらているモデルであり、
        <Marking>Yes or No</Marking>
        で答えることができる質問で構成された階層的な<Marking>木構造</Marking>
        を学習する。くさタイプ、ほのおタイプ、みずタイプ、じめんタイプ、こおりタイプを分類しよう
      </p>
      <Center>
        <Image width="400" height="300" src={DecisionTreeExample} />
      </Center>
      <p>
        <Marking>非終端ノード</Marking>には特徴量についての質問があり、
        <Marking>終端ノード</Marking>には最終的な分類結果が書かれている。
        このようにして、学習したモデル（木構造）を用いて、新たなデータに対しの予測をする。
        既に気づいている方もいるかもしれないが、質問の順番・位置を変えても同様に分類することができる。
        つまり、決定木は一意に定まるとは限らないのだ。何通りかある決定木のなかでより良いものを選ぶという
        ことが学習アルゴリズムの目標である。
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
      <SubSection title="識別力" />
      学習アルゴリズムの目標は何通りかある決定木の中でより良いものを選ぶことであるが、
      どのように選べばいいのだろうか。このような場合の判断基準として、
      <Marking>オッカムのかみそり</Marking>と呼ばれる一般原則がある。これは、「
      最もありそうな仮説は、すべての観測に無矛盾（訓練データと一致する）仮説の中で最も簡潔なものである」
      という主張である。決定木の場合簡潔かどうかは、木のサイズ（ノード数）で表すことができる。であれば、
      考えられる決定木すべての中で最も小さいサイズの決定木を求めれば良いことになるが、これは計算量的に困難であることが
      知られている。
      <br />
      そこで、<Marking>識別力</Marking>
      というものを定め、識別力の高い特徴量を1つだけ選択し、
      それを先にテストすることに決めるのである。それ以外の選択肢を考えると計算が膨大となってしまうので、
      その可能性は考えないということである。目先の評価しか考慮しないという意味で、このアルゴリズムは一般に
      、<Marking>グリーディ（欲張り）</Marking>という言葉で形容される。
    </DefaultLayout>
  );
};

export default Pages;
