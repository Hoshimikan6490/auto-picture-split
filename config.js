module.exports = {
  // ファイルの移動を全て元に戻す場合はtrueにする。trueの場合は、他のパラメータの内容は無視される
  unDoFileMove: false,

  // ファイルの変更履歴を残す場合はtrue。残さない場合はfalseに設定する。
  watchFileChanges: true,

  // 画像ファイルの移動を行うかどうか(trueの場合に移動する)
  // 画像のレンズ情報を知りたいだけで移動しない場合はfalseに設定する
  moveFile: false,

  // 整理後に保存されるフォルダ名を指定
  newDirs: [""],
  // 整理時に使用するレンズタイプの検索キーワードを指定
  lensTypes: [""],
};
