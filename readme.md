# auto-picture-split
## 概要
画像のexif属性からレンズ情報を取得してそれを元に画像ファイルを整理するスクリプトです。

[![twitter共有ボタン](https://img.shields.io/twitter/url?url=https://twitter.com/share&style=social&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyNDggMjA0Ij4KICA8cGF0aCBmaWxsPSIjMWQ5YmYwIiBkPSJNMjIxLjk1IDUxLjI5Yy4xNSAyLjE3LjE1IDQuMzQuMTUgNi41MyAwIDY2LjczLTUwLjggMTQzLjY5LTE0My42OSAxNDMuNjl2LS4wNGMtMjcuNDQuMDQtNTQuMzEtNy44Mi03Ny40MS0yMi42NCAzLjk5LjQ4IDggLjcyIDEyLjAyLjczIDIyLjc0LjAyIDQ0LjgzLTcuNjEgNjIuNzItMjEuNjYtMjEuNjEtLjQxLTQwLjU2LTE0LjUtNDcuMTgtMzUuMDcgNy41NyAxLjQ2IDE1LjM3IDEuMTYgMjIuOC0uODctMjMuNTYtNC43Ni00MC41MS0yNS40Ni00MC41MS00OS41di0uNjRjNy4wMiAzLjkxIDE0Ljg4IDYuMDggMjIuOTIgNi4zMkMxMS41OCA2My4zMSA0Ljc0IDMzLjc5IDE4LjE0IDEwLjcxYzI1LjY0IDMxLjU1IDYzLjQ3IDUwLjczIDEwNC4wOCA1Mi43Ni00LjA3LTE3LjU0IDEuNDktMzUuOTIgMTQuNjEtNDguMjUgMjAuMzQtMTkuMTIgNTIuMzMtMTguMTQgNzEuNDUgMi4xOSAxMS4zMS0yLjIzIDIyLjE1LTYuMzggMzIuMDctMTIuMjYtMy43NyAxMS42OS0xMS42NiAyMS42Mi0yMi4yIDI3LjkzIDEwLjAxLTEuMTggMTkuNzktMy44NiAyOS03Ljk1LTYuNzggMTAuMTYtMTUuMzIgMTkuMDEtMjUuMiAyNi4xNnoiLz4KPC9zdmc+&label=Twitterで共有する)](https://twitter.com/share?text=画像のexif属性からレンズ情報を取得してそれを元に画像ファイルを整理するスクリプト！&url=https://github.com/Hoshimikan6490/auto-picture-split&hashtags=exif,画像,ファイル整理&via=hoshimikan6490)
[![Facebook共有ボタン](https://img.shields.io/twitter/url?url=https://www.facebook.com/plugins/share_button.php?&width=102&height=20&style=social&logo=facebook&logoSize=auto&label=Facebookで共有する)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/Hoshimikan6490/auto-picture-split)
[![LINE共有ボタン](https://img.shields.io/twitter/url?url=https%3A%2F%2Fwww.facebook.com%2Fplugins%2Fshare_button.php%3Fhref%3Dhttps%253A%252F%252Fgithub.com%252FHoshimikan6490%252Fauto-picture-split%26layout%26size%26width%3D102%26height%3D20%26appId&style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABZVBMVEUAAAAAv1AAz1AQz1AAx1AAx1gIx1AIx1gEw1QEx1QDxVQDxlMDyFQGxlMDxlMGxlMFyVYFx1YFxFUFx1UFyFUFxVUFyFUHxlQHyFcHxlQHxlYHyFQGxVQGx1QGx1YGxVQGx1QFxlYFxlMFyFYGx1UFx1UGxlQGx1UFxlQGxlQGxlQGxlUGyFQGyFYFx1QFx1UFx1UGx1UFxlQFxlUGx1UFxlQGx1UGx1UGx1UGx1UFxlUGx1UFxlUGx1UGx1UHx1UHx1YWymAWy18lzmolzmsmzmo00XU10XQ10XVE1X9E1YBU2IpU2Ypj3JVy355y359z35+B46mB46qC46qD46qR5rWR57SR57WS5rSS5rWS57Wh6r6h6r+i6r+j6r+w7cix7cmx7cq/8dTA8dTA8dXB8dTP9N7P9N/P9d7Q9N/Q9d7R9d/e+Ojf+Ojf+Ong+Ong+Ort+/Pu+/Pv+/T+//7+///////t6CW8AAAAPnRSTlMAEBAQICAgIEBAT09PT1BQXl9gYG5vb29vcHBwf39/gICOj4+en5+foKCur6+vvr6/zc7Ozs/P3d7f7u7v/u2viCUAAAL8SURBVEjHnZdpVxMxFIbTFlrqgisibsWKuxawilM0KW0EoYsKRXFp3WhRQKAy0/x+MzOdZpnMTOz7oacnyXPum3uSmzsAKBU/M3F3oYCoCnOPM2NxoK34jTkkaW5iRAsd85F9fmxo1JZxIhQdDUFt3Q4xf/klipBxLihPt5CGbqrZBaSlpwrrowWkKWNkeJbS8plReX5VqdVrlVWFc5H25aryuWOSvvZbtXJI1s6Lc+XNAeipifkF8ErQhhWoD3/BknZPMNwlAWpwq2Y9dpxnN0mwtllw6F2TgiZLyCGWQ6e1WUqXpdDcTaqTKH0TQ48yFncj4d67QWj7pEwxuEmidTwwnhFcY6KjDc53jAX+ZM+Z7V1nzW6b/j1yBo5I21E/Z5xvLtcO1e4bwKjTQNi0IzXc9UtuRqzXHnwKZAZsifhgVOVhU0wZnAKP2LlUwHQrDrzEbXrLA2a4fFVVcOnIjdyg6t+XpgfkubNZ98P1VbQi75nBBkBhtuvdMio5cJ1Kjgw5GCtg8pFOiHvmzhgHI9OFEcZ4zYNJxYHtsVU3srWmhJ3T2S7aWibLxU6jSOHj5aXNQzqCiv09H7A7zV9mZ9Nmy9YP8r1ldlv7dID+umNfXdtfWAkGz7jQ2xpH22L1IAfuIznf4VdynS1/yN9IhN5Hwn+41dfE6lf6FcEecPWXFqKYUO7xQSj7d4Wv/HGhhNn0ji5L8wXAtPRKbVh6LJwEQPLtWO+p9yuwCCal0uvdr5/+6L09LC7K+Yr+IPrWjmXxBqwP0ivrvTfq/qm89pYl7/iNrz0AIDA0VxKp5d9YnoGnvWdyNgjuuJbXfRNwZvA+pxZDIvf2VhQ9TZK1BlcDYHu364pxeJZvSrJKFvesJlaxWaEbiuWVdLWsHJ6X+rCY8R9NXFJuAVPa9POkv/lM5bVQOJ9Q9r1ZqMFmEwEd94VI64uTwa1+6k5ocJhLhn5ljBswGE1Hft+kcxAOiTrmL4k8hDB3PaH/UZdIZx7kDEpB48nMxZMB5D9iyXNg4LrCVgAAAABJRU5ErkJggg==&logoSize=auto&label=LINEで共有する)](https://social-plugins.line.me/lineit/share?url=https://github.com/Hoshimikan6490/auto-picture-split&text=画像のexif属性からレンズ情報を取得してそれを元に画像ファイルを整理するスクリプト！)
[![misskey共有ボタン](https://img.shields.io/twitter/url?url=https://misskey.io/share&style=social&logo=misskey&logoSize=auto&label=misskeyで共有する)](https://misskey.io/share?url=https://github.com/Hoshimikan6490/auto-picture-split&title=auto+picture+split&text=画像のexif属性からレンズ情報を取得してそれを元に画像ファイルを整理するスクリプト！)
[![Pocket共有ボタン](https://img.shields.io/twitter/url?url=https://getpocket.com/edit&style=social&logo=pocket&logoSize=auto&label=Pocketで共有する)](https://getpocket.com/edit?url=https://github.com/Hoshimikan6490/auto-picture-split)
[![Email共有ボタン](https://img.shields.io/twitter/url?url=http://mail.google.com&style=social&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxOTIwIDE5MjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZD0iTTE5MjAgNDI4LjI2NnYxMTg5LjU0bC00NjQuMTYtNTgwLjE0Ni04OC4yMDMgNzAuNTg1IDQ2OC42NzkgNTg1LjkwNEg4My42ODRsNDY4LjY3OS01ODUuOTA0LTg4LjIwMi03MC41ODVMMCAxNjE3LjgwNVY0MjguMjY1bDk1OS45NDQgODMyLjQ0MUwxOTIwIDQyOC4yNjZaTTE5MTkuOTMyIDIyNnY1Mi42MjdsLTk1OS45NDMgODMyLjQ0TC4wNDUgMjc4LjYyOFYyMjZoMTkxOS44ODdaIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4NCjwvc3ZnPg==&logoColor=black&logoSize=auto&label=Emailで共有する)](mailto:?subject=auto+picture+split&body=画像のexif属性からレンズ情報を取得してそれを元に画像ファイルを整理するスクリプト！%0D%0Ahttps://github.com/Hoshimikan6490/auto-picture-split)

## 動作確認済み環境
- OS: Windows 11 Education
- nodejs: v22.12.0
- npm: 11.1.0

## コードの使い方
1. nodejsとnpmのインストールを行う。(方法は、お調べください。どうしても分からない事などがあればDiscussionsでご質問ください。)
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
  newDirs: ["20mm～70mmの写真","70mm～200mmの写真"],
  // 整理時に使用するレンズタイプの検索キーワードを指定
  lensTypes: ["20-70","70-200"],
};
```

## FAQ
### 誤った設定でファイル移動をしてしまった場合はどうすれば良いですか？
誤った設定でファイル移動をしてしまった場合は、`config.js`の「unDoFileMove」を「true」の状態で、`node index.js`を実行すれば、`./data/new`に移動された画像ファイルが全て`./data/old`に戻されます。
### 同一のファイル名の画像があった場合はどうなりますか？
原則、警告を出して処理をスキップする仕様になっております。スキップした場合は`[ERROR 01]: FILE ALREADY EXISTED(srcPATH=○○○○, destPATH=○○○○)`というエラーが表示されます。心配であれば`config.js`の「watchFileChanges」を「true」に設定することでファイルの作成・削除・上書き等のログを記録することができます。
### 画像はどのように整理されますか？
画像ファイルは、それに含まれるレンズ情報を読み取り、そこから`config.js`の「lensType」を元にレンズ情報にその文字列が含まれる画像ファイルを「newDirs」で指定したフォルダ名のフォルダに移動させます。画像にレンズ情報が含まれていない画像ファイルは処理が行われず、「ERROR 00」や「ERROR 02」などが表示されます。レンズ情報に合致するフォルダが見つからなかった場合は「./data/new/その他」フォルダに保存されます。
### 「[ERROR 00]: CAN NOT GET LENS INFO(PATH=○○○○)」と表示されました。どうすれば良いですか？
このエラーは、「PATH=○○○○」のファイルのレンズ情報の取得に失敗した場合に表示されます。表示されたパスのファイルが画像ファイルであり、画像にレンズ情報が保存されているかをご確認ください。レンズ情報が含まれていない場合は処理が行われませんので、ご自身でファイル整理をお願い致します。
### 「[ERROR 01]: FILE ALREADY EXISTED(srcPATH=○○○○, destPATH=○○○○)」と表示されました。どうすれば良いですか？
このエラーは、画像ファイルを「srcPATH=○○○○」のパスから「destPATH=○○○○」のパスへ移動しようとした場合に既に「destPATH」の方にファイルが存在していた場合に表示されます。上書き防止のためにこの場合は移動がキャンセルされますので、ご自身でファイルの比較/整理をお願い致します。
### 「[ERROR 02]: CAN NOT MOVE FILE BECAUSE LENS INFO IS NOT FOUND(PATH=○○○○)」と表示されました。どうすれば良いですか？
このエラーは、画像ファイルを移動する際に画像のレンズ情報が見つからず、ファイルの移動が出来なかった場合に表示されます。表示されたパスのファイルが画像ファイルであり、画像にレンズ情報が保存されているかをご確認ください。レンズ情報が含まれていない場合は処理が行われませんので、ご自身でファイル整理をお願い致します。

## ライセンス情報

|項目|内容|
|---|---|
|改変・改造|✅|
|二次配布|✅(ただし、無改造で二次配布する場合はこのリポジトリへのURLを必ず明示する事)|
|開発者によるサポート|✅|
|動作保証|❌(実行者各自の責任で適切にバックアップなどを行ってください。)|
