/*
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2025-01-15 02:02:06
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-16 16:25:14
 * @FilePath: /wu-front-spec/packages/eslint-config/__tests__/eslint-config.test.js
 * @Description: 验证js
 */

const assert = require("assert").strict;
const eslint = require("eslint");
const path = require("path");
const sumBy = require("lodash/sumBy");
/**
 * 判断一个值是否为对象。
 *
 * @param {*} obj - 需要判断的值。
 * @returns {boolean} 如果值是对象则返回true，否则返回false。
 */
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

describe("测试eslint 的检测效果", () => {
  it("测试js的lint效果", async () => {
    const configPath = path.resolve(__dirname, "../index.js");
    const filePath = path.resolve(__dirname, "./fixtures/index.js");
    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false, //关掉这个参数，不然会将目录下的.eslintrc配置与configPath里面的合并
      ignore: false,
    });

    const config = await cli.calculateConfigForFile(configPath);
    assert.ok(isObject(config));
    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    // console.log(results);
    // console.log(results[0].messages);

    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.equal(sumBy(results, "errorCount"), 4);
    assert.equal(sumBy(results, "warningCount"), 1);
  });
  it("测试es5的lint效果", async () => {
    const configPath = path.resolve(__dirname, "../es5.js");
    const filePath = path.join(__dirname, "./fixtures/es5.js");

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });
    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);

    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.equal(sumBy(results, "warningCount"), 0);

    // 验证 es5 覆盖的规则是否正常，取 comma-dangle 进行测试
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId === "comma-dangle";
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it("测试vue的lint效果", async () => {
    const configPath = path.resolve(__dirname, "../vue.js");

    const filePath = path.join(__dirname, "./fixtures/vue.vue");

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.equal(sumBy(results, "warningCount"), 0);

    // 验证 eslint-plugin-vue 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf("vue/") !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it("测试js-essential的eslint效果", async () => {
    const configPath = path.resolve(__dirname, "../essential/index.js");

    const filePath = path.join(__dirname, "./fixtures/index.js");

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.equal(sumBy(results, "errorCount"), 0);
    assert.notEqual(sumBy(results, "warningCount"), 0);

    // 验证黑名单中的规则已关闭
    const { messages } = results[0];

    // 验证 semi 被关闭
    const semiErrors = messages.filter((result) => {
      return result.ruleId === "semi";
    });
    assert.equal(semiErrors.length, 0);

    // 验证 comma-spacing 被降级
    const commaSpacingErrors = messages.filter((result) => {
      return result.ruleId === "comma-spacing";
    });
    assert.equal(commaSpacingErrors[0].severity, 1);
  });

  it("测试es5-essential的eslint效果", async () => {
    const configPath = path.resolve(__dirname, "../essential/es5.js");

    const filePath = path.join(__dirname, "./fixtures/es5.js");

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.notEqual(sumBy(results, "warningCount"), 0);
    // 验证 es5 覆盖的规则是否正常，取 comma-dangle 进行测试
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId === "comma-dangle";
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证黑名单中的规则已关闭，取 semi 进行测试
    const errorReportedByReactPluginBlackList = messages.filter((result) => {
      return result.ruleId === "semi";
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it("测试react-essential的eslint效果", async () => {
    const configPath = path.resolve(__dirname, "../essential/react.js");

    const filePath = path.join(__dirname, "./fixtures/react.jsx");

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.notEqual(sumBy(results, "warningCount"), 0);
    // 验证 react plugin 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf("react/") !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证黑名单中的规则已关闭，取 react/jsx-indent 进行测试
    const errorReportedByReactPluginBlackList = messages.filter((result) => {
      return result.ruleId === "react/jsx-indent";
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it("测试vue-essential的eslint效果", async () => {
    const configPath = path.resolve(__dirname, "../essential/vue.js");

    const filePath = path.join(__dirname, "./fixtures/vue.vue");

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, "fatalErrorCount"), 0);
    assert.notEqual(sumBy(results, "errorCount"), 0);
    assert.equal(sumBy(results, "warningCount"), 0);

    // 验证 vue plugin 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf("vue/") !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证黑名单中的规则已关闭
    const errorReportedByReactPluginBlackList = messages.filter((result) => {
      return result.ruleId === "indent";
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it("测试node的eslint效果", async () => {
    const configPath = path.resolve(__dirname, "../node.js");
    const filePath = path.join(__dirname, "./fixtures/node.js");

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.strictEqual(config.env.node, true);
    assert.strictEqual(config.plugins.includes("node"), true);

    // 验证已开启的 link 规则是否校验正常
    const results = await cli.lintFiles([filePath]);
    const { messages, errorCount, warningCount } = results[0];
    const ruleIds = Array.from(messages.map((item) => item.ruleId));
    // console.log('js-node',ruleIds);
    assert.strictEqual(ruleIds.includes("node/prefer-promises/fs"), true);
    assert.strictEqual(ruleIds.includes("no-unused-vars"), true);
    assert.strictEqual(ruleIds.includes("node/no-new-require"), true);
    assert.strictEqual(ruleIds.includes("semi"), true);
    assert.strictEqual(ruleIds.includes("quotes"), true);
    assert.strictEqual(errorCount, 7);
    assert.strictEqual(warningCount, 4);

    // 验证已关闭的 link 规则是否校验正常，以 node/exports-style 为例
    assert.strictEqual(ruleIds.includes("node/exports-style"), false);
  });
});
