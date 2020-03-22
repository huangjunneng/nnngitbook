# nnngitbook
gitbook markdown 

# 环境准备
git --version   git version 2.23.0.windows.1
node --version    v10.16.3
npm --version     6.9.0
 * gitbook -V  
CLI version: 2.3.2
GitBook version: 3.2.3

1、 初始化git项目
npm init

2、 初始化gitbokk项目
gitbook init

自动生成以下两个文件：
 * SUMMARY.md  是标准化的摘要文件，即gitbook电子书的目录文件。
 * README.md  是默认的简介文件

3、在根目录手动创建以下几个文件：
* book.json  配置文件
* GLOSSARY.md  词汇表文件，用于全书的专业词汇解释。
* LANGS.md  支持国际化编写的语言文件。



![img/wxskm.png](img/wxskm.png) ![img/wxzsm.png](img/wxzsm.png)

<div>nnn</div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
<div id="gitalk-container"></div>
<script>
var gitalk = new Gitalk({ 
    "clientID": "a5740dd5f139334f7201",
    "clientSecret": "01fdd5258b15403a2fc9194f5434d56789ebe161", 
    "repo": "huangjunneng.github.io", 
    "owner": "huangjunneng", 
    "admin": ["huangjunneng"],
    "id": "https://huangjunneng.github.io/",
    "distractionFreeMode": false
 });
gitalk.render("gitalk-container"); 
</script>
