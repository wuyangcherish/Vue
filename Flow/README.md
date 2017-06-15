## Flow 

### 资料

1. [官网-中文](https://zhenyong.github.io/flowtype/)

2. [writing Vue Components with Flow](https://alligator.io/vuejs/components-flow/)



### 安装

windows7 

[点击下载](https://github.com/facebook/flow/releases/tag/v0.48.0) 之后，解压缩,直接将 ``.exe`` 文件放到 system32 下，然后运行  flow 就可以看到成功了

Mac 

``brew install flow``


### 检测 Vue 文件

怎样在 Vue 中正常使用 flow 参照资料链接 [2]

成功之后发现  ``flow  check`` 检测不到 vue 文件中的错误

解决该问题见这个链接[some way to check .vue file with flow](https://github.com/facebook/flow/issues/2691)

**要在 .flowconfig 文件的 [options] 选项下添加**

```code
module.file_ext=.js
module.file_ext=.vue
```




