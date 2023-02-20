# Elasticsearchのインストール
- バージョンは6.4.3限定（6.x.xは動くかも、7.x.xはそのままでは動かない）
- リバースプロキシを設定しない場合（開発環境）はcorsの設定をする
 
  /etc/elasticsearch/elasticsearch.yml を編集し以下を追加
```
http.cors.enabled: true
http.cors.allow-origin: "*"
```

## mac に　elasticsearch インストール方法
mac に es インストールしてから起動
```
brew services start elasticsearch@6
```

停止
```
brew services stop elasticsearch@6
```

## elasticsearchにSIPデータを投入方法
### template 登録
template登録
```
curl -XPUT -H "Content-Type: application/json" -d @sip_template.json 'http://localhost:9200/_template/sip_facet_template'
```
template削除
```
curl -XDELETE 'localhost:9200/_template/sip_facet_template?pretty'
```
### buld登録用のndjson作成
```
ruby converter.rb [入力tsvファイル]
```
sip_sample.json というファイルが生成される

### index data bulk登録
converter.rb で作成したsip_sample.json を指定
```
curl -XPUT -H "Content-Type: application/x-ndjson" --data-binary @sip_sample.json 'http://localhost:9200/sip_facet_public/sip_facet/_bulk'
```

index 削除
```
curl -XDELETE 'http://localhost:9200/sip_facet_public?pretty'
```

# アプリケーション起動方法

## Node.js のインストール
- node.js をインストールする

  https://nodejs.org/ja/

## Github からclone する
```
git clone git@github.com:microbiomedatahub/front_prototype.git
```

## パッケージのインストール
- package-lock.jsonを書き換えないようにするので、`nmp i` は使わない
```
# cd front_parototype
# npm ci
```

## ElasticsearchのURL編集
- .env.sample をコピーしてファイル名を.env に書き換える
- 必要応じてelasticsearchのURL変える
- 必要応じてpltly APIのURL変える

```
REACT_APP_ELASTICSEARCH_HOST=http://192.168.10.106:9200/facet_metagenome_public
REACT_APP_PLOTLY_URL=https://mb.ddbj.nig.ac.jp/plotly_data?view=taxonomic_comparison&id=
```

## プロジェクト選択
```
REACT_APP_PROJECT_TYPE=sip
```

## 開発サーバー起動
```
# npm start
``` 
- 開発サーバーはコードの変更を反映するので、再起動は必要ありません。
ただし、.env の内容を書き換えた場合は、再起動必要

## 本番サーバーへのデプロイ
```
# npm run build
```
buidディレクトリの中身をサーバーに配置すればOK
ビルド時の.envの設定でビルドされるので、本番サーバーには.envは不必要


## コンテンツ開発
### analysis追加
- src/pages/analysis以下にファイルを追加します。

ex) src/pages/analysis/hogegenome.js

- src/App.jsを編集してhogegenomeをインポートします。
```
import Hogegenome  from './pages/analysis/hogegenome_searchkit';
```

- ルーティングの設定をします。
```
<Route path="/analysis/metagenome" element={<Metagenome />} />
// 追加
<Route path="/analysis/hogegenome" element={<Hogegenome />} />
```

- ヘッダーにリンクを追加します。

  src/pages/header.js を編集
```
<li><a href="/analysis/metagenome">Metagenomic samples</a></li>
// 以下追加
<li><a href="/analysis/hogegenome">Hogegenomic samples</a></li>
```

## プロジェクトごとのデザイン変更
例えば、プロジェクトaを変更したい場合、project_a_css.js を編集します。 
背景色を変更したい場合は、以下を編集します。
```
let background_color = "#d9e016"
```
その他、本格的に変更したい場合は、中のcss部分を変更します。
また、以下の該当部分を編集します。（if 分で分岐している箇所）
src/pages/header.js -- ヘッダー
src/pages/footer.js -- フッター
src/pages/portal.js -- ランディングページ
src/pages/about.js -- アバウトページ


# ###########################


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
