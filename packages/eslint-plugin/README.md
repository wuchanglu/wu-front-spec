<!--
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2025-01-16 17:05:34
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-16 18:18:47
 * @FilePath: /wu-front-spec/packages/eslint-plugin/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# wucl-eslint-plugin

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install wucl-eslint-plugin eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ["wucl-eslint-config"],
  rules: {
    "wucl-eslint-plugin/no-secret-info": "error",
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: "plugin:wucl-eslint-plugin/recommended",
};
```

## 支持的规则

- [`no-broad-semantic-versioning`] 不要指定宽泛的版本范围
- [`no-http-url`]使用 HTTPS 协议头的 URL，而不是 HTTP
- [`no-js-in-ts-project`]不要在 TS 项目中使用 JS
- [`no-secret-info`] 不要在代码中直接设置 `password` `token` and `secret` 信息

## 插件的实现流程

### 默认导出的插件对象如下所示

```js
{
    rules:[
        {
            name: '规则名',
            meta: { //元数据
                type: 'suggestion',
                fixable: null, //是否修复
                messages:{
                    templateMessageId: 'xxxx "{{url}}" ewq' //特定messageId的输出规则
                }
            },
            create(context){
                //返回一个访问者对象
                return {
                    // key为节点类型，处理函数入参为这个节点
                    Literal: function handleRequires(node) {
                        if(xxx){
                            //上报错误的api
                            context.report({
                                node,
                                messageId: "templateMessageId", //和上面meta的messages里面要输出的对应上，
                                data: {
                                    url: node.value,
                                },
                            });
                        }

                    }
                }
            }
        }
    ], //规则数组
    configs: [
        {
            plugins: ["wucl-eslint-plugin"],
            rules: {
                "wucl-eslint-plugin/no-http-url": "warn", // 规则严重程度设置
                "wucl-eslint-plugin/no-secret-info": "error", // 规则严重程度设置
            },
        }
    ]
}
```

1. 插件可以为 ESLint 提供自定义的规则。要做到这一点，插件必须输出 rules 对象，其中包含一个规则 ID 到规则的键值映射。规则 ID 不需要遵循任何命名惯例（比如可以是 dollar-sign）。了解更多关于在插件中创建自定义规则的信息，请参见自定义规则。  
   你也可以创建插件，告诉 ESLint 如何处理 JavaScript 以外的文件。为了创建一个处理器，从你的模块导出的对象必须符合以下接口：

2. 你可以通过在 processors 键中包含处理器函数来为插件添加处理器。关于定义自定义处理器的更多信息，请参考自定义处理器。
3. 你可以通过在 configs 键下指定配置，将其捆绑在一个插件内。适用于当你想捆绑自定义规则和额外配置集合时。每个插件支持多个配置。

你可以在配置中包括来自也同样来自插件中的单个规则。你必须在配置中的 plugins 数组里指定你的的插件名称，并指定你想要启用的来自插件中的任何规则。任何规则必须以以缩略插件名或完整插件名为前缀。

[插件编写的官方说明文档](https://zh-hans.eslint.org/docs/latest/extend/plugins)
