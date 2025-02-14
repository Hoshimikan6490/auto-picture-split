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

## FAQ
### 誤った設定でファイル移動をしてしまった場合はどうすれば良いですか？
誤った設定でファイル移動をしてしまった場合は、`config.js`の「unDoFileMove」を「true」の状態で、`node index.js`を実行すれば、`./data/new`に移動された画像ファイルが全て`./data/old`に戻されます。
### 同一のファイル名の画像があった場合はどうなりますか？
(後で書きます)
### 「[ERROR 00] ○○○○」と表示されました
(後で書きます)
### 「[ERROR 01] ○○○○」と表示されました。
(後で書きます)