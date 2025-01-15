<!--
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2025-01-14 00:20:58
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-15 19:39:24
 * @FilePath: /wu-front-spec/readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

## 开发中遇到的问题

1. @commitlint/cli 必须安装不然 sh commitlint 无法执行
2. conventional-changelog-cli 必须安装不然 sh conventional-changelog 无法执行
3. github action 工作流和 pages 相关处理 参考 [【前端工程化】自动化篇-Github Action 基本使用、自动部署组件库文档、github3D 指标统计](https://juejin.cn/post/7356815857078157331?searchId=20250114000759B69C3611EFE295264B28#heading-41)
4. stylelint 版本过高还得去兼容 它内部import('xxx')的代码，所以直接14版本就够了


## 8.2 第二节课
1. 提供CSS、JavaScript、Typescript、Node编码规范；
2. 创建stylelint-config-encode，支持测试用例；
3. 创建eslint-config-encode支持前端不同项目维度（JavaScript、Typescript、React、Vue）下的eslint定制化配置；
4. 支持prettier；

## 8.3 第三节课
1. 编码一套定制的eslint插件；
2. 基于前两节课内容，提供一套完整的CLI，支持一键接入上述完整的规范内容；
3. 支持自动安装linter依赖：eslint、stylelint、commitlint、markdownlint；
4. 支持自动创建.eslintrc.js、.eslintignore、.stylelintrc.js、.stylelintignore、commitlint.config.js、.markdownlint.json、.markdownlintignore、.prettierrc.js、.editorconfig等；

## 8.4 第四节课
1. 支持基于代码提交时使用husky执行前三节课的编码规范扫描；
2. 支持针对前三节课的编码规范进行一键修复；
3. 总结完整的前端编码规范工程化流程，梳理如何在简历上体现优势，以及面试中相关的常见Q&A；