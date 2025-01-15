/*
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2025-01-15 00:55:04
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-15 02:00:24
 * @FilePath: /wu-front-spec/packages/stylelint-config/__tests__/stylelint-config.test.js
 * @Description: jest 测试文件
 */
const assert = require("assert");
const stylelint = require("stylelint");
const path = require("path");
describe("test/stylelint-config.test.js", () => {
  it("测试css的lint效果", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/index.css")];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePaths,
      fix: false, //先不修复
    });
    if (result && result.output) {
      let filesResult = [];
      try {
        filesResult = JSON.parse(result.output || "[]");
        filesResult.forEach((item) => {
          //   console.log(`====== ${filePaths} ======`);
          //   console.log(item.warnings);
        });
      } catch (error) {
      } finally {
        assert.ok(filesResult[0]?.warnings.length === 16); //理论上此处应该错误数要和文件内错误语法数量一致
      }
    }
  });
  it("测试scss的lint效果", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/sass-test.scss")];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePaths,
      fix: false, //先不修复
    });
    if (result && result.output) {
      let filesResult = [];
      try {
        filesResult = JSON.parse(result.output || "[]");
        filesResult.forEach((item) => {
        //   console.log(`====== ${filePaths} ======`);
        //   console.log(item.warnings);
        });
      } catch (error) {
      } finally {
        // console.log('aaaa=',filesResult[0]?.warnings.length);
        assert.ok(filesResult[0]?.warnings.length === 2); //理论上此处应该错误数要和文件内错误语法数量一致
      }
    }
  });
  it("测试less的lint效果", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/less-test.less")];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePaths,
      fix: false, //先不修复
    });
    if (result && result.output) {
      let filesResult = [];
      try {
        filesResult = JSON.parse(result.output || "[]");
        filesResult.forEach((item) => {
        //   console.log(`====== ${filePaths} ======`);
        //   console.log(item.warnings);
        });
      } catch (error) {
      } finally {
        assert.ok(filesResult[0]?.warnings.length === 1); //理论上此处应该错误数要和文件内错误语法数量一致
      }
    }
  });
  it("测试css module 的lint效果", async () => {
    const filePaths = [path.join(__dirname, "./fixtures/css-module.scss")];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePaths,
      fix: false, //先不修复
    });
    if (result && result.output) {
      let filesResult = [];
      try {
        filesResult = JSON.parse(result.output || "[]");
        filesResult.forEach((item) => {
        //   console.log(`====== ${filePaths} ======`);
        //   console.log(item.warnings);
        });
      } catch (error) {
      } finally {
        assert.ok(filesResult[0]?.warnings.length === 0); //理论上此处应该错误数要和文件内错误语法数量一致
      }
    }
  });
});
