const path = require("path");
const ora = require("ora");
const rm = require("rimraf");
const chalk = require("chalk");
const webpack = require("webpack");
const fs = require("fs");

const config = require("./webpack.conf");
const pkg = require("../package.json");
const rootPath = path.resolve(__dirname, "../");

// 构建全量压缩包
let building = ora("building...");
building.start();
rm(path.resolve(rootPath, "dist", `${pkg.name}.min.js`), err => {
  if (err) throw err;
  webpack(config, function(err, stats) {
    if (err) throw err;
    // 删除temp文件夹
    // deleteFolder(path.resolve(rootPath, "temp"));
    building.stop();
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + "\n\n"
    );
    console.log(chalk.cyan("  Build complete.\n"));
  });
});

function deleteFolder(path) {
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file, index) {
      var curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        deleteFolder(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}
