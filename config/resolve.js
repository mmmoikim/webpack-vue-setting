const path = require("path");
const ROOT = path.resolve(__dirname, "../");
const APP_DIR = path.resolve(ROOT, "src");
const BUILD_DIR = path.resolve(ROOT, "dist");

module.exports = {
  alias: {
    $Styles: APP_DIR + "/assets/styles",
    $View: APP_DIR + "/view",
    $Src: APP_DIR,
    vue$: "vue/dist/vue.esm.js"
  },
  extensions: ["*", ".js", ".vue", ".json"]
};
