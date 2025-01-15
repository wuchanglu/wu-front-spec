/*
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2025-01-15 01:00:07
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-15 01:56:12
 * @FilePath: /wu-front-spec/packages/stylelint-config/index.js
 * @Description: 配置对象，定义了 Stylelint 的默认严重级别、插件和规则
 * @type {Object}
 */
module.exports = {
  /**
   * 默认严重级别为警告 (避免接入项目之后对现有工作流程影响太大，拼命改代码)
   * @type {string}
   */
  defaultSeverity: "error",
  customSyntax: 'postcss-scss',
  /**
   * 使用的插件列表
   * @type {Array}
   */
  plugins: ["stylelint-scss"],
  /**
   * 规则定义
   * @type {Object}
   */
  rules: {
    /**
     * 可能的错误规则
     * @link https://stylelint.io/user-guide/rules/#possible-errors
     */
    // 是否禁止未知的 at 规则（@规则）
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    // 禁止空块
    "block-no-empty": null,
    // 禁止无效的十六进制颜色
    "color-no-invalid-hex": true,
    // 禁止空注释
    "comment-no-empty": true,
    // 禁止声明块中的重复属性，允许连续重复但值不同的属性
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"],
      },
    ],
    // 禁止简写属性覆盖其他属性
    "declaration-block-no-shorthand-property-overrides": true,
    // 禁止重复的字体族名称
    "font-family-no-duplicate-names": true,
    // 禁止 calc() 函数中的运算符周围没有空格
    "function-calc-no-unspaced-operator": true,
    // 禁止 linear-gradient() 函数中的非标准方向
    "function-linear-gradient-no-nonstandard-direction": true,
    // 禁止关键帧声明中的 !important
    "keyframe-declaration-no-important": true,
    // 禁止未知的媒体特性名称
    "media-feature-name-no-unknown": true,
    // 允许选择器的特异性递减（即覆盖样式）
    "no-descending-specificity": null, // @reason 实际有很多这样用的，且多数人熟悉 css 优先级
    // 禁止重复的 @import 规则
    "no-duplicate-at-import-rules": true,
    // 禁止重复的选择器
    "no-duplicate-selectors": true,
    // 允许空源文件
    "no-empty-source": null,
    // 禁止多余的分号
    "no-extra-semicolons": true,
    // 禁止无效的双斜杠注释
    "no-invalid-double-slash-comments": true,
    // 禁止未知的属性
    "property-no-unknown": true,
    // 禁止未知的伪类，但允许 global、local 和 export 伪类
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "local", "export"],
      },
    ],
    // 禁止未知的伪元素
    "selector-pseudo-element-no-unknown": true,
    // 禁止字符串中的换行符
    "string-no-newline": true,
    // 禁止未知的单位，但允许 rpx 单位
    "unit-no-unknown": [
      true,
      {
        ignoreUnits: ["rpx"],
      },
    ],

    /**
     * 样式问题规则
     * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
     */
    // 缩进为 2 个空格
    indentation: 2,
    // 在多行块的闭合大括号前总是换行
    "block-closing-brace-newline-before": "always-multi-line",
    // 在单行块的闭合大括号前总是有一个空格
    "block-closing-brace-space-before": "always-single-line",
    // 在多行块的开放大括号后总是换行
    "block-opening-brace-newline-after": "always-multi-line",
    // 在开放大括号前总是有一个空格
    "block-opening-brace-space-before": "always",
    // 在单行块的开放大括号后总是有一个空格
    "block-opening-brace-space-after": "always-single-line",
    // 十六进制颜色使用小写字母
    "color-hex-case": "lower",
    // 十六进制颜色使用短格式
    "color-hex-length": "short",
    // 注释内部总是有空格
    "comment-whitespace-inside": "always",
    // 在声明的冒号前禁止有空格
    "declaration-colon-space-before": "never",
    // 在声明的冒号后总是有一个空格
    "declaration-colon-space-after": "always",
    // 单行声明块中最多有一个声明
    "declaration-block-single-line-max-declarations": 1,
    // 声明块总是以分号结尾，错误级别为 error
    "declaration-block-trailing-semicolon": [
      "always",
      {
        severity: "error",
      },
    ],
    // 长度为零的值禁止有单位，但允许自定义属性
    "length-zero-no-unit": [
      true,
      {
        ignore: ["custom-properties"],
      },
    ],
    // 最大行长度为 100 个字符
    "max-line-length": 100,
    // 禁止 ID 选择器
    "selector-max-id": 0,
    // 在值列表的逗号后总是有一个空格
    "value-list-comma-space-after": "always-single-line",

    /**
     * stylelint-scss 规则
     * @link https://www.npmjs.com/package/stylelint-scss
     */
    // 双斜杠注释内部总是有空格
    "scss/double-slash-comment-whitespace-inside": "always",
  },
  /**
   * 忽略的文件列表
   * @type {Array}
   */
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
};
