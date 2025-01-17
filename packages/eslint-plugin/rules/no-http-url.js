/*
 * @Author: 吴昌禄 wuzhanglu@qq.com
 * @Date: 2025-01-16 17:24:43
 * @LastEditors: 吴昌禄 wuzhanglu@qq.com
 * @LastEditTime: 2025-01-16 18:05:28
 * @FilePath: /wu-front-spec/packages/eslint-plugin/rules/no-http-url.js
 * @Description:
 */
const RULE_NAME = "no-http-url";

module.exports = {
  name: RULE_NAME,
  meta: {
    type: "suggestion",
    fixable: null,
    messages: {
      noHttpUrl: 'Recommended "{{url}}" switch to HTTPS', //给特定messageid添加输出内容，有规则的
    },
  },
  create(context) {
    return {
      Literal: function handleRequires(node) {
        if (
          node.value &&
          typeof node.value === "string" &&
          /http:\/\//i.test(node.value)
        ) {
          context.report({
            node,
            messageId: "noHttpUrl", //和上面meta的messages里面要输出的对应上，
            data: {
              url: node.value,
            },
          });
        }
      },
    };
  },
};
