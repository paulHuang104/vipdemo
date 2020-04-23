// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const resolve = (...dir) => path.join(__dirname, ...dir);
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  },
  chainWebpack: config => {
    // 104vip-f2e-common 設置共用別名
    config.resolve.alias.set(
      "@104vip-f2e-common",
      resolve("node_modules/104vip-f2e-common", "src")
    );
  }
};
