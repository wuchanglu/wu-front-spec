/**
 * commitlint 配置文件
 * 用于定义提交信息的格式和内容规则
 */
module.exports = {
  // 使用的解析器预设，继承开源的 commit 配置
  parserPreset: "conventional-changelog-conventionalcommits",

  // 定义提交信息的规则
  rules: {
    // 正文部分前面必须有一个空行
    "body-leading-blank": [1, "always"],
    // 正文部分每行的长度不能超过 100 个字符
    "body-max-line-length": [2, "always", 100],
    // 页脚部分前面必须有一个空行
    "footer-leading-blank": [1, "always"],
    // 页脚部分每行的长度不能超过 100 个字符
    "footer-max-line-length": [2, "always", 100],
    // 标题部分长度不能超过 100 个字符
    "header-max-length": [2, "always", 100],
    // 作用域部分必须是小写字母
    "scope-case": [2, "always", "lower-case"],
    // 禁用提交信息主题部分的大小写检查
    "subject-case": [0],
    // 要求提交信息的主题部分不能为空
    "subject-empty": [2, "never"],
    // 要求提交信息的主题部分不能以句号结尾
    "subject-full-stop": [2, "never", "."],
    // 要求提交信息的类型部分必须是小写字母
    "type-case": [2, "always", "lower-case"],
    // 要求提交信息的类型部分不能为空
    "type-empty": [2, "never"],
    // 要求提交信息的类型部分必须是预定义的类型之一
    "type-enum": [
      2,
      "always",
      [
        // 用于描述新功能的添加
        "feat",
        // 用于描述错误修复
        "fix",
        // 用于描述文档的更新
        "docs",
        // 用于描述代码格式或样式的更改
        "style",
        // 用于描述测试相关的更改
        "test",
        // 用于描述代码重构
        "refactor",
        // 用于描述杂项任务或维护工作
        "chore",
        // 用于描述撤销之前的提交
        "revert",
      ],
    ],
  },
};
