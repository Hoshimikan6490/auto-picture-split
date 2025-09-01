const chokidar = require("chokidar");
const fs = require("fs");

// 監視対象のディレクトリとログファイルの設定
const dirToWatch = "./data"; // 監視するディレクトリ
const logFile = "file_changes.log"; // ログファイル名

// Date内容の調整
// 2桁0埋め
function zz(n) {
	return `0${n}`.slice(-2);
}
function fromTimestampToJPstr(timestamp) {
	const date = new Date(timestamp);

	// UTCの日付から日本標準時(JST)に調整
	const jstOffset = 9 * 60 * 60 * 1000; // JSTはUTC+9
	const jstDate = new Date(date.getTime() + jstOffset);

	// 年、月、日、時、分、秒、ミリ秒を取得
	const year = jstDate.getUTCFullYear();
	const month = jstDate.getUTCMonth() + 1; // 0から始まるため +1
	const day = jstDate.getUTCDate();
	const hours = jstDate.getUTCHours();
	const minutes = jstDate.getUTCMinutes();
	const seconds = jstDate.getUTCSeconds();
	const milliseconds = jstDate.getUTCMilliseconds(); // ミリ秒を取得

	// フォーマットされた日付文字列を作成
	return `${year}/${zz(month)}/${zz(day)} ${zz(hours)}:${zz(minutes)}:${zz(
		seconds
	)}.${milliseconds}`;
}

// ログ記録用の関数
function logChange(action, filePath) {
	const timestamp = new Date();
	const logMessage = `${fromTimestampToJPstr(
		timestamp
	)} - ${action}: ${filePath}\n`;

	fs.appendFile(logFile, logMessage, (err) => {
		if (err) {
			console.error("ログの記録に失敗しました:", err);
		}
	});
}

// chokidarでディレクトリの監視
function startWatching() {
	const watcher = chokidar.watch(dirToWatch, {
		persistent: true,
		ignoreInitial: false,
		awaitWriteFinish: true,
	});

	// 監視するファイル変更イベント
	watcher.on("ready", function () {
		watcher
			.on("add", (filePath) => logChange("ファイル作成", filePath))
			.on("change", (filePath) => logChange("ファイル変更", filePath))
			.on("unlink", (filePath) => logChange("ファイル削除", filePath))
			.on("rename", (oldPath, newPath) => {
				// 名前変更や移動を扱う
				fs.access(newPath, fs.constants.F_OK, (err) => {
					if (err) {
						// 新しいパスが存在しない場合は削除とみなす
						logChange("ファイル削除", oldPath);
					} else {
						// 新しいパスが存在する場合は移動または名前変更とみなす
						logChange(
							"ファイル移動/名前変更",
							`旧パス: ${oldPath}, 新パス: ${newPath}`
						);
					}
				});
			})
			.on("error", (error) => console.error("監視エラー:", error));
	});

	console.log(`監視を開始しました: ${dirToWatch}`);
}

module.exports = {
	startWatching,
};
