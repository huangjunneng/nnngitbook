# 环境准备


这里也加评论
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
    "id": window.location.pathname,
    "distractionFreeMode": true
 });
gitalk.render("gitalk-container"); 
</script>