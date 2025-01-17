/*
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2025-01-16 17:06:40
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-16 18:15:19
 * @FilePath: /wu-front-spec/packages/eslint-plugin/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入 Node.js 的 path 模块，用于处理文件路径
const path = require("path");
// 引入 require-all 模块，用于加载指定目录下的所有模块
const requireAll = require("require-all");
/**
 * 导出的插件对象，包含 rules、configs 和 processors 三个属性
 * @type {Object}
 */
const exportPulgin = {
  // 加载 rules 目录下的所有规则模块
  rules: requireAll({
    dirname: path.resolve(__dirname, "./rules"),
  }),
  // 加载 configs 目录下的所有配置模块
  configs: requireAll({
    dirname: path.resolve(__dirname, "./configs"),
  }),
  /**
   * 处理器对象，用于处理特定文件类型的代码
   * @type {Object}
   */
  processors: {
    // 处理 .json 文件的处理器
    ".json": {
      /**
       * 预处理函数，将 JSON 文件内容转换为 JavaScript 代码
       * @param {string} text - 要处理的 JSON 文件内容
       * @returns {Array<string>} - 包含转换后的 JavaScript 代码的数组
       */
      preprocess(text) {
        // 将 json 文件代码转为 js 代码。因为我们要处理 package.json 里面的依赖 version
        return [`module.exports = ${text}`];
      },
    },
  },
};
// 导出插件对象，使其可以被其他模块使用
module.exports = exportPulgin;

