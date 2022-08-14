import { Box } from "@chakra-ui/react";
import CodeBlock from "src/components/articleTools/Code/CodeBlock";
import Section from "src/components/articleTools/Section";
import DefaultLayout from "src/components/DefaultLayout";

const Code1 = `def entropy(train, label):
    '''
    平均情報量を計算する

    パラメータ
    ---------------------------
    train : 教師信号(DataFrame)
    label : 目的変数(Series)
    ---------------------------

    返り値
    ---------------------------
    entro : エントロピー(float)
    ---------------------------
    '''

    # データ数
    num_of_data = train.shape[0]
    # クラスのリスト
    class_list = label.unique()
    entro = 0

    # 目的変数の属性ごとにを計算する
    for clas in class_list:
        # そのクラスのデータの数
        num_of_class_elem = train[label == clas].shape[0]
        if num_of_class_elem == 0:
            continue
        # 平均情報量を求める式の1つの項
        weighted_info = - (num_of_class_elem / num_of_data) * np.log2(num_of_class_elem / num_of_data)
        # entroに足していく
        entro += weighted_info

    return entro
`;

const Pages = () => {
  return (
    <DefaultLayout>
      <Section title="ID3の実装" />
      <Box>ID3アルゴリズムをpythonで実装してみましょう。</Box>
      <CodeBlock language="python">{Code1}</CodeBlock>
    </DefaultLayout>
  );
};

export default Pages;
