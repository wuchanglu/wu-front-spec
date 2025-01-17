/*
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2025-01-16 17:57:24
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-17 01:12:18
 * @FilePath: /wu-front-spec/packages/eslint-plugin/__tests__/rules/no-broad-semantic-versioning.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const rule = require('../../rules/no-broad-semantic-versioning');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-broad-semantic-versioning', rule, {
  valid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'wucl-eslint-plugin': '^0.0.5' },
      })}`,
    },
    {
      filename: 'package.js',
      code: 'var t = 1',
    },
  ],

  invalid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'wucl-eslint-plugin': '*' },
      })}`,
      errors: [
        {
          message: 'The "wucl-eslint-plugin" is not recommended to use "*"',
        },
      ],
    },
  ],
});
