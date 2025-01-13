```json
{
  // 引用 开源的 markdownlint 的配置模式，然后在做一些配置
  "$schema": "https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json",
  // 使用默认配置
  "default": true,
  // 设置无序列表的样式为破折号
  "ul-style": {
    "style": "dash"
  },
  // 禁止尾随空格
  "no-trailing-spaces": {
    // 换行符后的空格数为0
    "br_spaces": 0,
    // 列表项之间没有空行
    "list_item_empty_lines": false
  },
  // 禁用列表标记后的空格
  "list-marker-space": false,
  // 禁用行长度限制
  "line-length": false,
  // 允许内联HTML
  "no-inline-html": false,
  // 允许重复的标题
  "no-duplicate-header": false,
  // 定义特定的专有名词
  "proper-names": {
    // 定义专有名词列表
    "names": [
      "JavaScript",
      "HTML",
      "CSS",
      "AJAX",
      "JSON",
      "DOM",
      "BOM",
      "Less",
      "Sass",
      "SCSS",
      "HTTP",
      "HTTPS",
      "WebSocket",
      "ECMAScript",
      "ECMAScript 2015",
      "ECMAScript 6",
      "ES6",
      "ES2015",
      "jQuery",
      "jQuery Mobile",
      "React",
      "React Native",
      "Bootstrap",
      "Gulp",
      "Grunt",
      "webpack",
      "Yeoman",
      "npm",
      "spm",
      "Babel",
      "Mocha",
      "Jasmine",
      "PHP",
      "Java",
      "Node.js",
      "NodeJS",
      "MySQL",
      "MongoDB",
      "Redis",
      "Apache",
      "Nginx",
      "NGINX",
      "GitHub",
      "GitLab",
      "GitCafe",
      "Chrome",
      "Firefox",
      "Safari",
      "Internet Explore",
      "IE",
      "IE 7",
      "Opera",
      "UC",
      "Android",
      "iOS",
      "Windows",
      "OS X",
      "Ubuntu",
      "Linux",
      "Debian",
      "PC",
      "Mobile",
      "H5",
      "MacBook",
      "MacBook Pro",
      "MacBook Air",
      "iMac",
      "Mac Pro",
      "iPad",
      "Mac mini",
      "iPad Air",
      "iPad Air 2",
      "iPad mini",
      "iPhone",
      "iPhone 6s",
      "iPhone 6s Plus",
      "Apple Watch",
      "Alibaba",
      "Taobao",
      "Google",
      "Alphabet",
      "Apple",
      "Microsoft",
      "Yahoo",
      "FPS",
      "UI",
      "URL",
      "URI",
      "URLs",
      "URIs",
      "Visual Studio Code"
    ],
    // 不在代码块中检查专有名词
    "code_blocks": false
  }
}
```
