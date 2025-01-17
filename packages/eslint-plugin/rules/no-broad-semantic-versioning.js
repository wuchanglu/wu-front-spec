const path = require("path");

const RULE_NAME = "no-broad-semantic-versioning";

/**
 * ESLint 规则的导出对象，包含规则的元数据和创建函数。
 * @module no-broad-semantic-versioning
 */
module.exports = {
  // 规则的名称
  name: RULE_NAME,
  // 规则的元数据
  meta: {
    // 规则的类型，这里是问题类型，表示会报告问题但不自动修复
    type: "problem",
    // 规则不可自动修复
    fixable: null,
    // 规则的消息对象，包含错误消息模板
    messages: {
      // 错误消息模板，用于提示不推荐使用过于宽泛的版本号
      noBroadSemanticVersioning:
        'The "{{dependencyName}}" is not recommended to use "{{versioning}}"',
    },
  },

  /**
   * ESLint 规则的 create 函数，用于检查 package.json 文件中的依赖版本是否使用了过于宽泛的语义化版本号。
   * @param {Object} context - ESLint 提供的上下文对象，包含当前文件的信息。
   * @returns {Object} - 返回一个对象，包含 ESLint 规则的 AST 选择器和对应的处理函数。
   */
  create(context) {
    // 如果当前文件名不是 package.json，则直接返回，不进行检查
    if (path.basename(context.getFilename()) !== "package.json") {
      return {};
    }

    // 获取当前工作目录
    const cwd = context.getCwd();

    return {
      /**
       * 处理 package.json 中的属性节点
       * @param {Object} node - AST 中的属性节点
       */
      Property: function handleRequires(node) {
        // 检查节点是否为 dependencies 或 devDependencies 属性
        if (
          node.key &&
          node.key.value &&
          (node.key.value === "dependencies" ||
            node.key.value === "devDependencies") &&
          node.value &&
          node.value.properties
        ) {
          // 遍历 dependencies 或 devDependencies 中的每个依赖项
          node.value.properties.forEach((property) => {
            // 检查依赖项的键和值是否存在
            if (property.key && property.key.value) {
              // 获取依赖项的名称和版本
              const dependencyName = property.key.value;
              const dependencyVersion = property.value.value;
              // 检查版本是否包含通配符 *、x 或大于号 >
              if (
                // 通配符 *
                dependencyVersion.indexOf("*") > -1 ||
                // 通配符 x
                dependencyVersion.indexOf("x") > -1 ||
                // 大于号 >
                dependencyVersion.indexOf(">") > -1
              ) {
                // 报告错误，提示不推荐使用过于宽泛的版本号
                context.report({
                  loc: property.loc,
                  messageId: "noBroadSemanticVersioning",
                  data: {
                    dependencyName,
                    versioning: dependencyVersion,
                  },
                });
              }
            }
          });
        }
      },
    };
  },
};
