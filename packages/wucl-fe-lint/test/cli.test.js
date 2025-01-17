/*
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2023-10-25 23:47:27
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-17 23:30:17
 * @FilePath: /wu-front-spec/packages/wucl-fe-lint/test/cli.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
const fs = require('fs-extra');
const execa = require('execa');
const packageJson = require('../package.json');
const cli = (args, options) => {
  return execa('node', [path.resolve(__dirname, '../lib/cli.js'), ...args], options);
};

test('--version should output right version', async () => {
  const { stdout } = await cli(['--version']);
  expect(stdout).toBe(packageJson.version);
});

describe(`'fix' command`, () => {
  const dir = path.resolve(__dirname, './fixtures/autofix');
  const outputFilePath = path.resolve(dir, './temp/temp.js');
  const errorFileContent = fs.readFileSync(path.resolve(dir, './semi-error.js'), 'utf8');
  const expectedFileContent = fs.readFileSync(path.resolve(dir, './semi-expected.js'), 'utf8');

  beforeEach(() => {
    fs.outputFileSync(outputFilePath, errorFileContent, 'utf8');
  });

  test('should autofix problematic code', async () => {
    await cli(['fix'], {
      cwd: path.dirname(`${dir}/result`),
    });
    expect(fs.readFileSync(outputFilePath, 'utf8')).toEqual(expectedFileContent);
  });

  afterEach(() => {
    fs.removeSync(`${dir}/temp`);
  });
});

describe(`'exec' command`, () => {
  const semverRegex = /(\d+)\.(\d+)\.(\d+)/;

  test(`'exec eslint' should work as expected`, async () => {
    const { stdout } = await cli(['exec', 'eslint', '--version']);
    expect(stdout).toMatch(semverRegex);
  });

  test(`'exec stylelint' should work as expected`, async () => {
    const { stdout } = await cli(['exec', 'stylelint', '--version']);
    expect(stdout).toMatch(semverRegex);
  });

  test(`'exec commitlint' should work as expected`, async () => {
    const { stdout } = await cli(['exec', 'commitlint', '--version']);
    expect(stdout).toMatch(semverRegex);
  });
});
