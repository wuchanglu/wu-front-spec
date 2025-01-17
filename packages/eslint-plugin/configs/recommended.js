/*
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2025-01-16 17:12:14
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-16 17:13:25
 * @FilePath: /wu-front-spec/packages/eslint-plugin/configs/recommended.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  plugins: ["wucl-eslint-plugin"],
  rules: {
    "wucl-eslint-plugin/no-http-url": "warn", // 规则严重程度设置
    "wucl-eslint-plugin/no-secret-info": "error", // 规则严重程度设置
  },
};
