import { Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import CodeBlock from "src/components/articleTools/Code/CodeBlock";
import { Display } from "src/components/articleTools/Display";
import { Hlink } from "src/components/articleTools/Hlink";
import { Inline } from "src/components/articleTools/Inline";
import { Blue } from "src/components/articleTools/Marker";
import { Marking } from "src/components/articleTools/Marking";
import Section from "src/components/articleTools/Section";
import SubSection from "src/components/articleTools/SubSection";
import SubSubSection from "src/components/articleTools/SubSubSection";
import DefaultLayout from "src/components/DefaultLayout";
import DataFrame from "src/images/machinLearning/DecisionTree/DataFramePlayTennis.png";
import id3Process from "src/images/machinLearning/DecisionTree/Id3Process.png";

const Code1 = `def entropy(train, labels):
    '''
    エントロピーを計算する

    パラメータ
    ---------------------------
    train : 特徴量、教師信号(DataFrame)
    labels : クラスラベル(Series)
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

    # クラスラベルの属性ごとにを計算する
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
    分岐後のエントロピーの期待値を計算する

    パラメータ
    --------------------------
    train : 教師信号(DataFrame)
    labels : クラスラベル(Series)
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
        mask = train[feature] == feature_value
        feature_value_data = train[mask]
        if feature_value_data.shape[0] == 0:
            continue
        # その属性に対応するクラスラベル
        feature_value_labels = labels[mask]
        # その属性の確率（その属性のデータ数/教師データ数）
        feature_value_prob = feature_value_data.shape[0] / train.shape[0]
        # エントロピーの計算
        entro = entropy(feature_value_data, feature_value_labels)
        # 重み付けしたエントロピーを対していく
        expected_entro +=  feature_value_prob * entro

    return (expected_entro)`;

const Code3 = `def find_most_informative_feature(train, labels, feature_list):
    '''
    最も情報ゲインが大きい特徴量を返す

    パラメータ
    --------------------------
    train : 教師信号(DataFrame)
    labels : クラスラベル(Series)
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

    # 親ノードのエントロピー
    entro = entropy(train, labels)

    for feature in feature_list:
        # 情報ゲイン(親ノードエントロピーと子ノードのエントロピーの期待値の差)
        feature_info_gain = entro - expected_entropy(train, labels, feature)
        if feature_info_gain > max_info_gain: # feature_info_gainを超えたら
            max_info_gain = feature_info_gain # 情報ゲインを更新
            max_info_feature = feature # 特徴量の名前も登録
    return max_info_feature`;

const Code4 = `def generate_subtree(train, labels, feature):
    '''
    部分木または終端ノードを生成する

    パラメータ
    --------------------------
    train : 教師信号(DataFrame)
    labels : クラスラベル(Series)
    --------------------------

    返り値
    --------------------------
    tree : 部分木(Dict)
    ---------------------------
    '''

    feature_value_count_dict = train[feature].value_counts()
    tree = {} # 部分木もしくはノードが格納される
    class_list = labels.unique()

    for feature_value, count in feature_value_count_dict.items(): # 特徴量の属性とそれぞれの数をセットでまわす
        # その属性だけのデータ
        mask = train[feature] == feature_value
        feature_value_data = train[mask]

        assigned_to_terminal_node = False # 終端ノードとしたかのフラグ
        for clas in class_list:
            num_of_class_elem = feature_value_data[labels == clas].shape[0]

            if num_of_class_elem == count: # データがすべて同じクラスに属するならば
                tree[feature_value] = clas # クラスラベルを登録し終端ノードとする
                assigned_to_terminal_node = True

        if not assigned_to_terminal_node:
            tree[feature_value] = "?" # 後に続くので一旦 "?" としておく。

    return tree`;

const Code5 = `def make_tree(train, labels, prev_labels, feature_list):
    '''
    決定木をid3アルゴリズムに基づいて辞書型で生成して返す関数

    パラメータ
    --------------------------
    train : 教師信号(DataFrame)
    labels : クラスラベル(Series)
    prev_labels : １つ前のクラスラベル(Series)
    feature_list : 特徴量のリスト(List)
    --------------------------

    返り値
    --------------------------
    root : 決定木(dict)
    ---------------------------
    '''

    if len(train) == 0: # 与えられたデータが空の場合
        return prev_labels.value_count().idxmax()

    if len(feature_list) == 0:
        # 与えられたラベルで多数決をとりその結果を返す
        return labels.value_counts().idxmax()

    root = {}
    max_info_feature = find_most_informative_feature(train, labels, feature_list)

    # 特徴量をKeyに、空の辞書をvalueに登録
    root[max_info_feature] = {}

    subtree = generate_subtree(train, labels, max_info_feature)

    # 一度分岐に用いた特徴量は特徴量のリストから削除する
    feature_list.remove(max_info_feature)

    for feature_value, clas in subtree.items():
        if clas == "?":
            mask = train[max_info_feature] == feature_value
            mask_train = train[mask]
            mask_labels = labels[mask]
            # 分岐後のデータを用いてmake_treeを再帰的に呼び出す
            root[max_info_feature][feature_value] = make_tree(mask_train, mask_labels, feature_list)
        else: # クラスが ? でないとき、すなわち、答えが決まっているとき
            # クラスを登録する。
            root[max_info_feature][feature_value] = clas
    return root`;

const Code6 = `def ID3(train, labels):

    # 特徴量をtrainから取ってくる
    feature_list = train.columns.values.tolist()

    # 決定木を作る関数
    tree = make_tree(train_copy, labels, feature_list)

    return tree # 生成された決定木を返す`;

const Code7 = `{'Outlook': {'Sunny': {'Humidity': {'High': 'No', 'Normal': 'Yes'}},
'Overcast': 'Yes',
'Rain': {'Wind': {'Weak': 'Yes', 'Strong': 'No'}}}}`;

const Code8 = `{
    'Outlook':
    {   'Sunny':
        {   'Humidity':
            {   
                'High': 'No', 
                'Normal': 'Yes'
            }
        },
        'Rain':
        {   'Wind':
            {   
                'Weak': 'Yes',
                'Strong': 'No'
            }
        },
        'Overcast': 'Yes'
    }
}`;

const output1 = `generate_subtree(df.iloc[:,:-1], df["Play Tennis"], "Outlook")
# output
# {'Sunny': '?', 'Rain': '?', 'Overcast': 'Yes'}`;

const Pages = () => {
  return (
    <DefaultLayout>
      <Section title="ID3の実装" />
      <Box>ID3アルゴリズムをpythonで実装してみましょう。</Box>
      <SubSection title="ID3アルゴリズムの流れ" />
      <VStack align="center">
        <Image width="500" height="600" src={id3Process} />
      </VStack>
      <SubSection title="データの確認" />
      先にデータを見ておいた方が考えやすいと思いますので、今回扱うデータを提示しておきます。
      <br />
      今回使用するデータは、特徴量が
      <Blue>Outlook, Temperature, Humidity, Wind, Play Tennis</Blue>
      で、クラスラベル(目的変数)は<Blue>Play Tennis</Blue>
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
      で、labelsにはクラスラベル、つまり特徴量に対応した答えのラベルが
      <Marking>Series型</Marking>として渡されます。
      <SubSubSection title="コードの解説" />
      上記で示したとおり「エントロピー」を求めるためにはラベルごとの確率を求める必要があります。
      そのために、まず<Blue>18行目</Blue>の<Marking>num_of_data</Marking>
      にデータ数を代入します。そして、<Blue>26行目</Blue>
      <Marking>num_of_class_elem</Marking>
      を定義することにより、確率を求めることができます。また、
      <Blue>20行目</Blue>
      で定義したクラスラベルのリストをfor分で回し、毎回のループで
      <Marking>entro</Marking>
      に足していくことで、シグマ記号と同様の働きをします。for文を抜けたらエントロピーが求まっているので
      return で <Marking>entro</Marking>を返します。
      <CodeBlock language="python">{Code1}</CodeBlock>
      <SubSection title="エントロピーの期待値を返す関数" />
      次に、ある特徴量で分岐を考えたときの、分岐先のエントロピーの期待値を返す関数を定義します。
      引数には、先ほどと同じ、train,labelsに加えて<Marking>feature</Marking>
      を受け取ります。 featureには分岐に用いる特徴量が渡されます。
      各ノードでのエントロピーの算出に：は先に定義した<Marking>entropy</Marking>
      関数を使います。
      <SubSubSection title="コードの解説" />
      まず<Blue>17行目</Blue>で、渡された特徴量に含まれる属性をuniqueを用いて
      <Marking>feature_value_list</Marking>に代入します。そして、先ほどと同様に
      データ数をnum_of_dataに代入し、最終的な返り値である
      <Marking>エントロピーの期待値</Marking>を
      <Marking>expected_entro=0</Marking>
      として定義しておきます。次に、属性ごとに
      エントロピーとその属性の確率(推定値)を求めていくために、for文でfeature_value_listを
      回していきます。<Blue>24行目</Blue>でその属性のみのデータを抽出するために
      <Marking>mask</Marking>を定義します。それを利用して
      <Marking>feature_value_data</Marking>
      を定義します。feature_value_dataが0の場合は計算する必要がないので、
      <Blue>25,26行目</Blue>で、if文を用いてcontinueで飛ばします。
      <Blue>28行目</Blue>
      ではfeautre_value_dataと同様にmaskを利用してlabelsから
      <Marking>feature_value_labelsを</Marking>
      定義します。次に
      <Blue>30行目</Blue>で期待値を求めるための確率を
      <Marking>feautre_value_prob</Marking>に代入し、
      <Blue>32行目</Blue>でエントロピーを<Marking>entro</Marking>に代入します。
      最後に<Blue>34行目</Blue>でエントロピーを確率で重み付けし、
      <Marking>expected_entro</Marking>
      に足していくことでエントロピーの期待値を求め、for文を抜けたら、
      <Marking>expected_entro</Marking>をreturnします。
      <CodeBlock language="python">{Code2}</CodeBlock>
      <SubSection title="情報ゲインが最も大きい特徴量を返す関数" />
      上で定義した、<Marking>entropy</Marking>関数、
      <Marking>expected_entropy</Marking>
      関数を用いて、情報ゲインを求めます。情報ゲインは親ノードのエントロピーを
      <Inline>{"\\(H\\)"}</Inline>、子ノードのエントロピーの期待値を
      <Inline>{"\\( I \\)"}</Inline>とすると。次の式で求めることができます。
      <Display>{"\\( 情報ゲイン=H-I \\)"}</Display>
      引数には、train,labelsの他に
      <Marking>feature_list</Marking>を受け取ります。これは
      分岐に用いることができる特徴量が渡されるという想定です。
      <SubSubSection title="コードの説明" />
      各特徴量で情報ゲインを比較し、大きければ<Marking>max_info_gain</Marking>
      にその情報ゲイン、
      <Marking>max_info_feature</Marking>
      にその特徴量を代入するという方針ですが、そのためには初期値を設定する必要があります。
      max_info_gainには初期値として、絶対に取り得ない負の値<Marking>-1</Marking>
      を代入します。
      max_info_featureはこの時点で定義しなくても問題ありませんが、明示的に
      <Marking>None</Marking>
      を代入しておきます。max_info_gainをNoneにしない理由は
      数値の比較ができないからです。次に、<Blue>23行目</Blue>
      で親ノードのエントロピーを<Marking>entro</Marking>
      に代入します。そして、for文で<Marking>feature_list</Marking>
      を回すことで、特徴量ごとに情報ゲインを算出できるので、
      <Blue>27行目</Blue>でその値を<Marking>feature_info_gain</Marking>
      に代入します。
      そして、そのfeature_info_gainがmax_info_gainを超えていたら、max_info_gainを更新し
      同時に、その特徴量の名前をmax_info_featureに代入し更新します。for文を抜ければ最も情報ゲインが大きい
      特徴量がmax_info_featureに入っているのでmax_info_gainをreturnします。
      <CodeBlock language="python">{Code3}</CodeBlock>
      <SubSection title="部分木を生成する返す関数" />
      分岐後のノードを作り出す関数です。指定された特徴量で分岐したときどのように分岐されるかを辞書で返してくれる関数です。
      引数にはtrain,labels,<Marking>feature</Marking>
      を受け取ります。featureは分岐に用いる特徴量が渡されます。
      <SubSubSection title="コードの説明" />
      <Blue>17行目</Blue>
      で後々必要となります、引数として渡された特徴量の各属性の数をSeries型で格納します。Seriesは辞書でいうところの
      indexがkey、columnがvalueというように考えられ、
      <Marking>items()</Marking>でindexとcolumnの値を 受け取ることができるので、
      変数名にdictという名前をつけました。
      <Blue>18行目</Blue>では今回returnする<Marking>tree</Marking>を
      空の辞書を代入して定義します。class_listにはlabels.unique()を用いてクラス名を代入しています。
      <br />
      そして、feature_value_count_dictをitems()を用いてfor文で回します。
      <Marking>feature_value</Marking>には属性が、<Marking>count</Marking>
      にはその属性のデータ数が渡されます。
      <Blue>30行目</Blue>
      で子ノードのクラスラベルが全ての同じ場合とそうでない場合で条件分岐します。
      すべて同じ場合は、クラスラベルが決定するので、その属性をkey、クラスラベルをvalueとし、
      辞書に記録します。そうでない場合は、まだ分岐の可能性があるので、この時点では？というクラスラベルをつけておきます。
      こうしてfor文を抜けると、属性ごとにクラスラベルがついた、辞書が返されます。
      <CodeBlock language="python">{Code4}</CodeBlock>
      <SubSubSection title="出力" />
      <CodeBlock language="python">{output1}</CodeBlock>
      <SubSection title="再帰的に呼び出すことで、決定木を作る関数" />
      この関数が完成すればID3アルゴリズムは完成と言って良いぐらいです。頑張りましょう。
      上で定義した、部分木を生成する関数<Marking>generate_subtree</Marking>
      関数を用いて、再帰的に決定木を作りだします。
      <SubSubSection title="コードの説明" />
      まず、<Blue>19行目</Blue>で与えられたデータが空の場合に
      <Marking>prev_labels</Marking>
      (親ノードのラベル)を参照して クラスラベルを多数決で決定します。そして、
      <Blue>22行目</Blue>
      では、与えられた特徴量のリストが空のとき、labelsで多数決をとり
      その選ばれたクラスラベルを返すというコードです。これは再帰的にこの関数を使うための、再帰処理の終了条件として
      捉えてください。<Blue>22行目</Blue>では<Marking>root</Marking>
      に空の辞書を代入して定義します。
      これはルートノードもしくは親ノードだと考えてください。
      <Blue>27行目で</Blue>分岐に用いる特徴量を定義してから、<Blue>30行目</Blue>
      でルートノード(親ノード)に特徴量をkey、空の辞書をvalueとして記録します。この空の辞書に、
      属性とそのラベルを追加していきます。次に、<Marking>subtree</Marking>
      にmax_info_featureを使用した部分木を代入しておきます。
      <Blue>35行目</Blue>でmax_info_featureをfaeture_listからremoveします。
      この理由は、親ノードが使用した特徴量は使う必要がなく、また、再帰の終了条件にも関わってくるからです。
      <br />
      いよいよfor文に入ります。生成した、部分木は辞書なのでitems()によりkeyとvalueをfor文で回すことができます。
      このとき、<Marking>feature_value</Marking>には子ノードの属性
      <Marking>clas</Marking>にはその属性のクラスラベル
      が渡されます。generate_subtree関数のとこで述べたようにまだ分岐の可能性がある場合は
      ? というラベルをつけたので、それを利用して条件分岐します。
      <br />
      <Blue>38行目</Blue> : ?
      の場合、train、labelをその属性だけのデータにするためにmaskを定義して、抽出します。
      そのデータを使い<Marking>make_tree</Marking>を<Marking>再帰的</Marking>に
      呼び出します。ここで重要なのがmake_treeの返り値をルートノードの特徴量の属性のkeyに登録する
      ということです。こうすることで木構造が構成されます。
      <br />
      <Blue>44行目</Blue> : ?
      でない場合はクラスラベルが決まっているということなので、ルートノードの特徴量の属性のkeyにその
      クラスを登録します。
      そして、再帰処理が終了したらtreeには木構造をした辞書が入っているのでreturnでtreeを返します。
      <CodeBlock language="python">{Code5}</CodeBlock>
      <SubSection title="ID3関数" />
      ここまで来ればID3アルゴリズムを用いた決定木を生成する関数は次のように書くことができます。
      <SubSubSection title="コードの説明" />
      make_treeに渡す特徴量のリストをfeature_listに代入して定義します。
      そして、make_treeにtrain, labels,
      feature_listを渡してmake_treeを呼び出し、その結果を treeに代入し、tree を
      return して完成です。
      <CodeBlock language="python">{Code6}</CodeBlock>
      <SubSection title="実行" />
      それでは最初のデータを用いて<Marking>ID3</Marking>
      関数を実行していきましょう。すると実行結果は以下のようになります。
      <CodeBlock language="python">{Code7}</CodeBlock>
      これでは少しわかりづらいので見やすくすると
      <CodeBlock language="python">{Code8}</CodeBlock>
      となります。最初の分岐に用いた特徴量はFeatureで、Featureによって、Sunny,
      Rain,
      Overcastの属性に分岐しました。そこからさらに、属性がSunnyのグループを特徴量Humidityで分岐した結果、
      特徴量はまだ残っていますが、同じクラスしかいないグループに分けられたので、クラスラベルがついています。
      HighならばクラスラベルはNo、NormalならばYesとなりました。Rainも同様に結果がでています。
      Overcastは1回目の分岐で同じクラスしかいないグループに分岐したため、
      すぐにクラスラベルが出ています。
    </DefaultLayout>
  );
};

export default Pages;
