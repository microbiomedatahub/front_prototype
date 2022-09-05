# Elasticsearchのインストール
- バージョンは6.4.3限定（6.x.xは動くかも、7.x.xはそのままでは動かない）
- リバースプロキシを設定しない場合（開発環境）はcorsの設定をする
 
  /etc/elasticsearch/elasticsearch.yml を編集し以下を追加
```
http.cors.enabled: true
http.cors.allow-origin: "*"
```


# 起動方法

## Node.js のインストール
- node.js をインストールする

  https://nodejs.org/ja/

## Github からclone する
```
git clone git@github.com:microbiomedatahub/front_prototype.git
```

## パッケージのインストール
```
# cd front_parototype
# npm i
```

## ElasticsearchのURL編集
- 必要応じてelasticsearchのURL変える

  src/pages/analysis/metagenome_seacrhkit.jsを編集
```
const host = "http://192.168.10.106:9200/facet_metagenome_public"
```


## 開発サーバー起動
```
# npm start
``` 
開発サーバーはコードの変更を反映するので、再起動は必要ありません。

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
