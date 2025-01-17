/*
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2025-01-17 00:48:01
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-17 01:12:29
 * @FilePath: /wu-front-spec/packages/wucl-fe-lint/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  extends: ['wucl-eslint-config/typescript/node', 'prettier'],
  rules: {
    '@typescript-eslint/no-require-imports': 0,
    'no-console': 0,
  },
};
