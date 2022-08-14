import { Box, ListItem, OrderedList, VStack } from "@chakra-ui/react";
import Image from "next/image";
import CodeBlock from "src/components/articleTools/Code/CodeBlock";
import { Display } from "src/components/articleTools/Display";
import { Hlink } from "src/components/articleTools/Hlink";
import { Inline } from "src/components/articleTools/Inline";
import { Blue } from "src/components/articleTools/Marker";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import SubSection from "src/components/articleTools/SubSection";
import DefaultLayout from "src/components/DefaultLayout";
import DataFrame from "src/images/machinLearning/DecisionTree/DataFramePlayTennis.png";

const Code1 = `def entropy(train, labels):
    '''
    エントロピーを計算する

    パラメータ
    ---------------------------
    train : 特徴量、教師信号(DataFrame)
    labels : 目的変数(Series)
    ---------------------------

    返り値
    ---------------------------
    entro : エントロピー(float)
    ---------------------------
    '''

    # データ数
    num_of_data = train.shape[0]
    # クラスのリスト
    class_list = labels.unique()
    entro = 0

    # 目的変数の属性ごとにを計算する
    for clas in class_list:
        # そのクラスのデータの数
        num_of_class_elem = train[labels == clas].shape[0]
        if num_of_class_elem == 0:
            continue
        # エントロピーを求める式の1つの項
        weighted_info = - (num_of_class_elem / num_of_data) * np.log2(num_of_class_elem / num_of_data)
        # entroに足していく
        entro += weighted_info

    return entro`;

const Code2 = `def expected_entropy(train, labels, feature):
'''
分岐後のエントロピーの期待値を返す

パラメータ
--------------------------
train : 教師信号(DataFrame)
labels : 目的変数(Series)
feature : 分岐に用いる特徴量(String)
--------------------------

返り値
--------------------------
expected_entro : エントロピーの期待値(float) 
---------------------------
'''
feature_value_list = train[feature].unique().tolist()
num_of_data = train.shape[0]
expected_entro = 0


for feature_value in feature_value_list: # 特徴量の属性ごとに計算(分岐先ごとに計算)
    # その属性のみのデータ
    feature_value_data = train[train[feature] == feature_value]
    if feature_value_data.shape[0] == 0:
        continue
    # その属性に対応する目的変数
    feature_value_target = labels[train[feature] == feature_value]
    # その属性の確率（その属性のデータ数/教師データ数）
    feature_value_prob = feature_value_data.shape[0] / train.shape[0]
    # エントロピーの計算
    entro = entropy(feature_value_data, feature_value_target)
    # 重み付けしたエントロピーを対していく
    expected_entro +=  feature_value_prob * entro

return (expected_entro)`;

const Code3 = `def find_most_informative_feature(train, labels, feature_list):
'''
最も情報ゲインが大きい特徴量を返す

パラメータ
--------------------------
train : 教師信号(DataFrame)
labels : 目的変数(Series)
--------------------------

返り値
--------------------------
max_info_feature : 最も情報ゲインが大きい特徴量(string)
---------------------------
'''

# 初期値を-1にして後で更新していく
max_info_gain = -1
# max_info_gainが更新されたときに一緒に更新する
max_info_feature = None

# 親ノードの平均情報量
entro = entropy(train, labels)

for feature in feature_list:
    # 情報ゲイン(親ノード平均情報量と子ノードの平均情報量の期待値の差)
    feature_info_gain = entro - expected_entropy(train, labels, feature)
    if feature_info_gain > max_info_gain: # feature_info_gainを超えたら
        max_info_gain = feature_info_gain # 情報ゲインを更新
        max_info_feature = feature # 特徴量の名前も登録
return max_info_feature`;

const Pages = () => {
  return (
    <DefaultLayout>
      <Section title="ID3の実装" />
      <Box>ID3アルゴリズムをpythonで実装してみましょう。</Box>
      <SubSection title="ID3アルゴリズムの流れ" />
      <OrderedList>
        <ListItem>情報ゲインが最も大きい特徴量の選択</ListItem>
        <ListItem>その特徴量を用いて分岐をする</ListItem>
        <ListItem>
          分岐先のノードで選択できる特徴量がない場合は
          <OrderedList>
            <ListItem>
              そのノードで多数決をとり結果を決め終端ノードとする
            </ListItem>
          </OrderedList>
          そうでないならば
          <OrderedList>
            <ListItem>
              分岐後のノードに同じクラスのデータしかない場合
              <OrderedList>
                <ListItem>
                  そのクラスのラベルをノードにつけて終端ノードとする
                </ListItem>
              </OrderedList>
              そうでないならば
              <OrderedList>
                <ListItem>最初に戻る</ListItem>
              </OrderedList>
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
      <SubSection title="データの確認" />
      先にデータを見ておいた方が考えやすいと思いますので,今回扱うデータを提示しておきます。
      <br />
      今回使用するデータは、特徴量が
      <Blue>Outlook, Temperature, Humidity, Wind, Play Tennis</Blue>
      で、目的変数は<Blue>Play Tennis</Blue>
      です。このデータはkaggleで公開されているPlay Tennisデータセット
      から引用しています(
      <Hlink href="https://www.kaggle.com/datasets/fredericobreno/play-tennis/metadata">
        kaggle: Play Tennis
      </Hlink>
      )。それでは実際にコーディングしてきましょう。
      <VStack align="center" my="3">
        <Image width="600" height="500" src={DataFrame} />
      </VStack>
      <SubSection title="エントロピーを返す関数" />
      まずは、エントロピーを返す関数を定義します。エントロピーは次の式で計算できます。
      <Display>{"\\( H = \\sum^{n}_{i=1} p_i\\log{p_i}\\)"}</Display>
      引数のtrainには特徴量が
      <Marking>DataFrame型</Marking>
      で、labelsには目的変数、つまり特徴量に対応した答えのラベルが
      <Marking>Series型</Marking>として渡されます。
      <CodeBlock language="python">{Code1}</CodeBlock>
      <SubSection title="エントロピーの期待値を返す関数" />
      次に、ある特徴量で分岐を考えたときの、分岐先のエントロピーの期待値を返す関数を定義します。
      引数には、先ほどと同じ、train,labelsに加えて<Marking>feature</Marking>
      を受け取ります。 featureには分岐に用いる特徴量が渡されます。
      各ノードでのエントロピーは先に定義した<Marking>entropy</Marking>
      関数を使います。
      <CodeBlock language="python">{Code2}</CodeBlock>
      <SubSection title="情報ゲインが最も大きい特徴量を返す関数" />
      上で定義した、<Marking>entropy</Marking>関数、
      <Marking>expected_entropy</Marking>
      関数を用いて、情報ゲインを求めます。情報ゲインは 平均情報量を
      <Inline>{"\\(H\\)"}</Inline>、平均情報量の期待値を
      <Inline>{"\\( I \\)"}</Inline>とすると。次の式で求めることができます。
      <Display>{"\\( 情報ゲイン=H-I \\)"}</Display>
      引数には、train,labelsの他に
      <Marking>feature_list</Marking>を受け取ります。これは
      分岐に用いることができる特徴量が渡されるという想定です。
      <CodeBlock language="python">{Code3}</CodeBlock>
      <SubSection />
    </DefaultLayout>
  );
};

export default Pages;
