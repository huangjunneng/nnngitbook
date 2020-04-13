# 一、环境准备

### 1. 检查我的开发环境

```js
git --version         // git version 2.23.0.windows.1
node --version        // v10.16.3
npm --version         // 6.9.0
```
### 2.安装 gitbook-cli 脚手架工具

```js
npm install -g gitbook-cli

//查看安装版本
 gitbook -V  
// CLI version: 2.3.2
// GitBook version: 3.2.3
```

# 二、初始化项目

### 1、 初始化git项目

```js
npm init
```
### 2、 初始化gitbook项目

```js
gitbook init
```
  自动生成以下两个文件：
+ SUMMARY.md  是标准化的摘要文件，即gitbook电子书的目录文件。
+ README.md  是默认的简介文件

### 3、在根目录手动创建以下几个文件：
|||
|-|:-|
|book.json| 配置文件.|
|GLOSSARY.md| 词汇表文件，用于全书的专业词汇解释.|
|LANGS.md| 支持国际化编写的语言文件|

### 4、在SUMMARY.md文件编写电子书目录：
```html
# Summary

* [项目简介](README.md)
-----
* [留言区](doc/talk/README.md)
-----
* [gitbook 开发](doc/gitbook/README.md)
    * [环境准备](doc/gitbook/init.md)
    * [开发过程](doc/gitbook/FQA.md)
    * [FQA](doc/gitbook/FQA.md)
* [学习笔记](doc/learn/README.md)
    * [环境准备](doc/learn/init.md)
```

### 5、初始化gitbook目录文档：
```js
gitbook init
```
> 每次更新SUMMARY.md文件，都必须执行*gitbook init*。
> 对新添加的目录，会重新生成.md文档,对已经存在的目录则不变。


### 6、启动gitbook项目：
```js
gitbook serve
//启动成功后，一般在4000端口查看效果
Serving book on http://localhost:4000
```

### 6、构建gitbook静态页面：
```js
gitbook build
//构建成功后生成 *_book* 文件夹
```