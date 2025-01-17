#!/usr/bin/env node
// 引入 path 模块，用于处理文件路径
import path from 'path';
// 引入 commander 模块，用于创建命令行接口
import { program } from 'commander';
// 引入 cross-spawn 模块，用于在 Node.js 中跨平台地执行命令
import spawn from 'cross-spawn';
// 引入 init 函数，用于初始化项目
import init from './actions/init';
// 引入 update 函数，用于更新项目
import update from './actions/update';
// 引入 generateTemplate 函数，用于生成模板文件
import generateTemplate from './utils/generate-template';
// 引入 PKG_NAME 和 PKG_VERSION 常量，用于获取包名和版本号
import { PKG_NAME, PKG_VERSION } from './utils/constants';

// 获取当前工作目录
const cwd = process.cwd();

// 设置命令行工具的版本和描述
program
  .version(PKG_VERSION)
  .description(
    `${PKG_NAME} 是 前端编码规范工程化 的配套 Lint 工具，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡点，降低项目实施规约的成本`,
  );

// 定义 init 命令，用于初始化项目
program
  .command('init')
  .description('一键接入：为项目初始化规约工具和配置，可以根据项目类型和需求进行定制')
  .option('--vscode', '写入.vscode/setting.json配置') //解析 --vscode 参数，使它能够通过cmd.version访问
  .action(async (cmd) => {
    // 如果指定了 --vscode 选项，则生成 .vscode/settings.json 配置文件
    if (cmd.vscode) {
      const configPath = path.resolve(cwd, `${PKG_NAME}.config.js`);
      generateTemplate(cwd, require(configPath), true);
    } else {
      // 否则，调用 init 函数进行初始化
      await init({
        cwd,
        checkVersionUpdate: true,
      });
    }
  });

// 定义 commit-msg-scan 命令，用于检查 commit message
program
  .command('commit-msg-scan')
  .description('commit message 检查: git commit 时对 commit message 进行检查')
  .action(() => {
    // 使用 cross-spawn 执行 commitlint 命令，检查 commit message
    const result = spawn.sync('commitlint', ['-E', 'HUSKY_GIT_PARAMS'], { stdio: 'inherit' });

    // 如果检查失败，则退出进程
    if (result.status !== 0) {
      process.exit(result.status);
    }
  });

// 定义 update 命令，用于更新项目
program
  .command('update')
  .description(`更新 ${PKG_NAME} 至最新版本`)
  .action(() => update(true));

// 解析命令行参数 网上查到的demo代码都放在底部
program.parse(process.argv);
