# 插件开发

### 1. 创建插件工程

- ** 为了方便管理，我将插件工程放在本工程项目的./plugin目录下 **
- ** 如果要发布npm包可以将其独立出来 **

```js
├─doc
├─img
├─node_modules
├─plugin
│  ├─gitbook-plugin-test001   //插件命名规范 gitbook-plugin-xxxxx
│  └─gitbook-plugin-test002
└─_book
```

### 2. 本地插件引用

* 在book.json中引入插件 test001
* 在插件目录gitbook-plugin-test001下执行  npm link
* 在引用插件的主工程下执行 npm link ./plugin/gitbook-plugin-test001

>> 这样就在node_modules下软连接了插件工程

