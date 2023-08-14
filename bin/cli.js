#! /usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");
const package = require("../package.json");

// 定义当前版本
program.version(`v${package.version}`);

program
  .command("create")
  .description("创建模板")
  .action(async () => {
    const { name } = await inquirer.prompt({
      type: "input",
      name: "name",
      message: "请输入项目名称：",
    });
    console.log("项目名称", name);
  });
// 解析用户执行命令传入参数
program.parse(process.argv);
