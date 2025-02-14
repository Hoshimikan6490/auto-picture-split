const fs = require("node:fs");
const path = require("path");
const { exiftool } = require("exiftool-vendored");
const { lensTypes, moveFile, newDirs, unDoFileMove } = require("./config");

async function getLensInfo(imagePath) {
  try {
    const metadata = await exiftool.read(imagePath);

    return metadata.LensModel ? metadata.LensModel : null;
  } catch (error) {
    console.error(`[ERROR 00]: PATH=${imagePath}`);
  }
}

async function moveFileWithoutOverWrite(srcPath, destPath) {
  if (fs.existsSync(destPath))
    return console.error(`[ERROR 01]: PATH=${destPath}`);

  // ファイルが存在しなければ移動する
  fs.renameSync(srcPath, destPath);
}

async function moveFileFromLensModel() {
  const oldFolderPath = "./data/old";
  const newFolderPath = "./data/new";
  const oldFiles = fs.readdirSync(oldFolderPath);

  // 移動先フォルダの存在確認と作成
  newDirs.forEach((dir) => {
    if (!fs.existsSync(`${newFolderPath}/${dir}`))
      fs.mkdirSync(`${newFolderPath}/${dir}`);
  });
  if (!fs.existsSync(`${newFolderPath}/その他`))
    fs.mkdirSync(`${newFolderPath}/その他`);

  for (const image of oldFiles) {
    const filePath = path.join(oldFolderPath, image);
    await getLensInfo(filePath).then((LensModel) => {
      if (!moveFile)
        return console.info(
          `ファイル名「${image}」のレンズ情報は「${LensModel}」です。`
        );

      // レンズモデル名が含まれるフォルダ名を探してそのフォルダに保存
      let foundLensModel = null;
      for (const index in lensTypes) {
        if (LensModel.includes(lensTypes[index])) {
          foundLensModel = index;
          break;
        }
      }

      if (foundLensModel != null) {
        return moveFileWithoutOverWrite(
          filePath,
          `${newFolderPath}/${newDirs[foundLensModel]}/${image}`
        );
      } else {
        // 見つからない場合は、「その他」フォルダに移動する
        return moveFileWithoutOverWrite(
          filePath,
          `${newFolderPath}/その他/${image}`
        );
      }
    }); // 各ファイルを順番に処理
  }

  await exiftool.end(); // すべての処理が終わった後に ExifTool を終了
  console.info("done");
}

async function fileMoveUndo() {
  const oldFolderPath = "./data/old";
  const newFolderPath = "./data/new";

  // newのディレクトリを取得
  let newFolders = fs
    .readdirSync(newFolderPath)
    .filter((name) =>
      fs.statSync(path.join(newFolderPath, name)).isDirectory()
    );

  // 各ディレクトリ内の全てのファイルをoldフォルダに移動
  newFolders.forEach(async (newDir) => {
    // ファイル一覧を取得
    const files = fs.readdirSync(`${newFolderPath}/${newDir}`);

    for (const file of files) {
      const srcPath = path.join(`${newFolderPath}/${newDir}`, file);
      const destPath = path.join(oldFolderPath, file);

      // ファイルを移動
      await moveFileWithoutOverWrite(srcPath, destPath);
    }
  });
}

if (!unDoFileMove) {
  console.info(`画像ファイルの移動を開始します`);
  moveFileFromLensModel();
} else {
  console.info(`画像ファイルの移動をキャンセルします`);
  fileMoveUndo();
}
