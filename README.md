<!--
 * @Author: jincheng
 * @Date: 2023-08-16 16:10:46
 * @FilePath: /king-cli/README.md
-->
# 学习搭建cli脚手架

## 安装
### 全局安装
$ npm install -g king-cli
# or yarn
$ yarn global add king-cli

### 借助npx
创建模版
$ npx create king-cli <name> [-t|--template]
示例
$ npx create king-cli hello-cli -template dumi2-demo

## 使用
创建模版
$ king-cli create <name> [-t|--template]
示例
$ king-cli create hello-cli -t dumi2-demo
