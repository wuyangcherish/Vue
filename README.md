# Vue.js

## 资料

* [Vue.js--60分钟组件快速入门](http://www.cnblogs.com/keepfool/p/5625583.html)


## Vue 

### 问题总结

####  filter 的问题

在 Vue2.0 中，将之前的 filterBy 等移除了,没办法直接按照输入框的值进行过滤了~

所以以后写的过滤都必须是在**computed**里面进行自定义的，例如下面的代码：

```
return _that.list.filter(function(item){
	return item.name.toLowerCase().indexOf(_that.newItem.toLowerCase()) !== -1
})
```

其中**newItem** 就是输入的值

computed 会自动监测到**v-model** 的变化然后进行相应的筛选

筛选条件为： 返回在这个数组中匹配到的数据

#### 动态改变页面导航栏标题

vue-router2 中有一节[路由原信息(https://router.vuejs.org/zh-cn/advanced/navigation-guards.html)里面有两个全局的钩子。``beforeEach`` 和 ``aftereach`` 

如果想要改变其标题，应该放到 ``beforeEach`` 里面，这时候只要其路由信息有改变就会加载对应的标题。如下：

```
router.beforeEach((to,from,next)=>{
	document.title = to.meta.title || document.title
})
``` 

上面就是说如果找到 ``meta`` 信息中的 **title** ,那么就修改标题，如果没找到就用原始标题。 

当然你必须手动在 **route** 对应路径里面添加相应的**meta** 和 **title** 

#### props 的问题

在 Vue2 里面不能直接改变来自 props 的值，也就是父级传过来的值，那么如果想改变的话，可以将其保存到**data** 中，或者是放到 **computed** 中

#### v-html 

Vue 中默认对输出的文本都进行转义处理，假设在文本中存在 HTML 标签的话，将会把文本标签转义输出，这会导致不是你想要的结果，那么就用到这个标签了。

``<div v-html="list.content">list.content</div>``

这样你的输出就会将**list.content** 中的 HTML 标签当做 HTML 解析之后再输出。

#### 动态加载的html文件没有办法引用到设置好的css

这种情况下 如果显示的内容是一段 HTML 代码， 你发现设置好的某些样式在上面没有显示出来，比如限制了一个图片的宽度，但是审查元素，发现该元素上面没有设置好的参数，那么检查下 ``<style type="text">`` 标签上面有没有 **scoped** 参数，去掉即可









