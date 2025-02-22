# auto-picture-split
画像のexif属性からレンズ情報を取得してそれを元に画像ファイルを整理するスクリプトです。

## 動作確認済み環境
- OS: Windows 11 Education
- nodejs: v22.12.0
- npm: 11.1.0

## コードの使い方
1. `git clone https://github.com/Hoshimikan6490/auto-picture-split.git`を実行するか、このコードをzip形式でダウンロードする。
2. zip形式でダウンロードした場合は、展開(解凍)する。
3. このプロジェクトの一番上のディレクトリで、`npm i`を実行する。
4. 画像を`./data/old`の中に全て保存する。
5. `config.js`の「unDoFileMove」を「false」,「moveFile」を「false」の状態にして、`node index.js`を実行し、写真のレンズ情報を確認する。
6. 手順5で確認したレンズ情報を基に`config.js`の「lensTypes」にレンズ情報の一部を、「newDirs」に整理後のディレクトリ名を設定する。なお、ここで指定した「lensTypes」と「newDirs」は同一の順番で処理されるため、「lensType」の１番目で指定したレンズで撮影された写真を「newDirs」の１番目で指定したディレクトリ名のディレクトリに保存される。
7. `config.js`の「unDoFileMove」を「false」,「moveFile」を「true」の状態にして、`node index.js`を実行し、写真のレンズ情報を確認する。

## config.jsの記入例
```js
module.exports = {
  // ファイルの移動を全て元に戻す場合はtrueにする。trueの場合は、他のパラメータの内容は無視される
  unDoFileMove: false,

  // ファイルの変更履歴を残す場合はtrue。残さない場合はfalseに設定する。
  watchFileChanges: true,

  // 画像ファイルの移動を行うかどうか(trueの場合に移動する)
  // 画像のレンズ情報を知りたいだけで移動しない場合はfalseに設定する
  moveFile: false,

  // 整理後に保存されるフォルダ名を指定
  newDirs: ["20-70","70-200"],
  // 整理時に使用するレンズタイプの検索キーワードを指定
  lensTypes: ["20mm～70mmの写真","70mm～200mmの写真"],
};
```

## FAQ
### 誤った設定でファイル移動をしてしまった場合はどうすれば良いですか？
誤った設定でファイル移動をしてしまった場合は、`config.js`の「unDoFileMove」を「true」の状態で、`node index.js`を実行すれば、`./data/new`に移動された画像ファイルが全て`./data/old`に戻されます。
### 同一のファイル名の画像があった場合はどうなりますか？
原則、警告を出して処理をスキップする仕様になっております。スキップした場合は`[ERROR 01]: FILE ALREADY EXISTED(srcPATH=○○○○, destPATH=○○○○)`というエラーが表示されます。心配であれば`config.js`の「watchFileChanges」を「true」に設定することでファイルの作成・削除・上書き等のログを記録することができます。
### 「[ERROR 00]: CAN NOT GET LENS INFO(PATH=○○○○)」と表示されました。どうすれば良いですか？
(TODO: 後で書きます)
### 「[ERROR 01]: FILE ALREADY EXISTED(srcPATH=○○○○, destPATH=○○○○)」と表示されました。どうすれば良いですか？
(TODO: 後で書きます)
### 「[ERROR 02]: CAN NOT MOVE FILE BECAUSE LENS INFO IS NOT FOUND(PATH=○○○○)」と表示されました。どうすれば良いですか？
(TODO: 後で書きます)

## ライセンス情報

|項目|内容|
|---|---|
|改変・改造|✅|
|二次配布|✅(ただし、無改造で二次配布する場合はこのリポジトリへのURLを必ず明示する事)|
|開発者によるサポート|✅|
|動作保証|❌(実行者各自の責任で適切にバックアップなどを行ってください。)|