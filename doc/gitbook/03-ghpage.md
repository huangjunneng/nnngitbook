# 发布GitHub pages

1. 将文件push到master分支

2. 将_book下的文件push到gh-pages分支上
```js
git subtree push --prefix=_book origin gh-pages
```

3. 展示地址就是 Github用户名.github.io/创建的仓库名

   https://huangjunneng.github.io/nnngitbook