## 按照 Vue.js 官方教程实现的demo 

### demo
1. 数据的双向绑定
2. 数据的循环输出
3. 字符串反转
4. todoList
5. computed 属性
6. Class 与 Style 绑定-单个class 样式绑定
7. 多个样式绑定-- 数组语法
8. 绑定事件--addTodoList 同demo4 
9. 过渡效果
10. 引入animate.css
11. 注册组件
12. 父子组件通信
13. props 传递数据
14. 动态绑定 props
15. 单个Slot
16. 带名字的 Slot
17. tab 切换
18. vue-router
19. 编译作用域
20. 广播事件
21. Vue + Webpack 小例子
22. vue-router 单页式页面
23. vue-router SPA
24. vue-router SPA 登录注册demo
25. vue-router SPA 子路由
26. vue-vuex counter demo
27. list: Weui+Vue+Python 做的一个评论小框框
29. Counter 计数器 -- Vuex demo1
30. Vuex Getter 用法
31. Vuex Actions 用法






### 笔记

##### v-cloak: 

在组件未渲染完成之前总会在页面上显示出一些 ``{{}}`` 的为渲染前的字符 这个属性就是用来修改这个问题的 只需要在渲染的父级加上该属性，然后在css 里面加上 ``[v-cloak]{display:none}`` 就可以了

##### 组件间的通信

每一个 Vue 的实力都是一个事件触发器， 上面有：

* <code>$on()</code> 监听事件
* <code>$emit()</code> 在它上面触发事件
* <code>$dispatch()</code> 派发事件，事件沿着父链冒泡
* <code>$broadcast</code> 广播事件，事件向下传导给所有的后代  

$dispatch : 可以将子组件上面的值传递到父组件上面，同demo12 父组件用一个events 里面对应的函数名 来接收传递过来的值

$children : 是父组件用来获取其下子组件的  ``this.$children`` 返回的是一个数组，里面包括所有的子组件

$refs: 组件个数较多的时候，我们难以记住各个组件的顺序和位置，通过序号访问比较方便。 ``v-ref:_uid`` 就可以给zujia


##### Props 传递值

把数据从父组件传递到子组件的时候可以使用 <code>props</code> 参数

绑定的时候绑定在<child></child> 的上面 同demo13

动态绑定一个数据的时候 在<code>child</code> 上面要使用<code>v-bind:propsName="parentPropsName"</code> 

还要注意的是如果传递的数据里面有大写的字母 需要在child 上面绑定的时候换成<code>"-"</code>连接

传递数值的时候 例如
``
    <child some-prop="1">nihao</child>
``

这样的话传递的就是一个字符串的 1 而不是一个数值。数值的传递见下面：

``
    <child :some-prop="1"></child>
``

##### 编译作用域 

父组件模板的内容在父组件作用域内编译 子组件模板的内容在子组件作用域内编译

##### Slot内容分发: 

父组件里面的内容会被抛弃不显示  除非在子组件模板中包含``slot``,如果子组件模板里面只有一个没有任何特性的``slot`` 那么父组件中的内容将被插入到这里替换掉 ``slot`` 见 demo15 demo16 

单个 ``slot`` 的话就是很简单的父组件有什么就在这里显示什么

多个 ``slot`` 跟父组件对应的话 是 ``slot`` 上面的 ``name``
和 父组件上面的 ``slot`` 对应 分别显示对应的元素

##### 组件开发三大步
    
1. ``Vue.extend()``： 它是 ``Vue`` 构造器的扩展，创建的是一个组件构造器，而不是一个具体的组件实例,其中的 ``template`` 是用于定义组件要渲染的 HTML
2. ``Vue.component()`` ：注册组件，提供两个参数第一个是组件的标签，也就是在DOM 中插入时候的写法，第二个参数是构造器组件的名称,该方法是创建一个组件的实例
3. 将组件挂在到某个 ``Vue`` 的实例下，来应用组件 


##### 关于Vue.js 开发环境报错Cannot read property 'indexOf' of undefined

这是一个悲伤的故事~  话说只是因为安装的npm 包的版本有冲突导致的。还得我检查了好多次代码。 关于版本的冲突问题 cnpm 安装的时候会有提示 告诉你哪个包安装的应该对应的那个版本~ 


##### 关于 Vue+Webpack 的小例子

目录结构图如下：
![目录结构](http://7xlqb6.com1.z0.glb.clouddn.com/VueJs-directory.png)

其中 component 里面的 header.vue 是一个header 的组件 app.vue 是一个总的组件，用来组合像 Header 这样的总的组件。

index.js 就是入口的文件, 用来实例化组件  然后渲染出来的。

### Vue-router SPA

下面我记录一下基于 vue-router 的最简单的 SPA
文档的目录是下面这样的

![images](http://7xlqb6.com1.z0.glb.clouddn.com/vue-router-spa.png)

其中``src``就是整个的开发项目

``components`` 里面就是所有的组件

``views`` 里面是各个路由所对应的页面

``main.js`` 是定义路由的总入口页面

在 ``components`` 里面的都是单独的``vue``组件，每个组件的``vue``文件包括 ``css`` ``template``  ``script`` 的东东，如下图的con2.vue所示：

![images](http://7xlqb6.com1.z0.glb.clouddn.com/vue-con2.png)

当然在component 里面还有许多这样的小组件

在 ``views`` 里面就是各个页面应该引入的组件的，也就是组建的组合加工处，相关代码示例如下图所示：

![index.vue](http://7xlqb6.com1.z0.glb.clouddn.com/views.png)

像上面的那个就调用了两个子组件 ``header.vue``和``con1.vue``

做到这里页面就搞好了，只剩下路由的问题了，所有对组件的路由都是写在``main.js`` 里面的，如下图所示：

![main.js](http://7xlqb6.com1.z0.glb.clouddn.com/main-js.png)

里面的每一个路由对应自己的组件，访问该路由的时候加载对应的组件，如下图所示：

这是访问 page1 的时候的页面内容

![vue-router-page1](http://7xlqb6.com1.z0.glb.clouddn.com/Vue-router-page1.png)


这是访问 page2 的时候的页面内容

![vue-router-page2](http://7xlqb6.com1.z0.glb.clouddn.com/Vue-router-page2.png)

处于演示的目的这个丑丑页面就不进行美化了，凑合凑合看~

大体的逻辑就是酱紫的~  


### vuex

首先[官方文档](https://vuex.vuejs.org/zh-cn/)在这里

其次要注意的是： **store** 必须是单独出来写的，不能是直接在组件中使用比如在 main.js 中直接使用
```
	import Vuex from 'vuex'
	Vue.use(Vuex)
```

会报错： vuex is not define

见demo29 的方式【教程中最简单的vuex demo】

在 store.js 中的方式是：

```
export default new Vuex.Store({

})
```

这种方式。

在引用的时候有两种方式，

第一种是使用 **import** 的方式在需要的组件中引用，这种方式比较麻烦，
如下：

```
import store from '../store.js'

//... 省略 ...

computed:{
    count(){
      return store.state.count
    }
  },
  methods:{
    increment(){
      store.commit('increment')
    },
    decrement(){
      store.commit('decrement')
    }
  }
```
还有一种方式是用从 **根组件** 注入到每一个组件。在main.js 中【vue-cli生成的脚手架中】添加 store

```
new Vue({
	el: '#app',
	template: '<App/>',
	store,
	components: {
		App
	}
})
```

然后在各个组件中就不需要再次引入了。使用方式从 **store** 变成了 **this.$store** 的方式。如下：

```
computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    }
  }
```

**Getters** 这个属性相当于 **store** 里面的一个 **computed**,它可以对着 **state** 里面的数据进行一个操作【见demo30】

**Mutations**

**Mutations** 是更改 Vuex 的 store 的唯一的方式，类似于事件，不能直接调用，触发的方式也只有调用 **commit(handler name)** 来触发事件

**Mutations 接收参数** 即 **载荷（payload）**  一般情况下参数都是 从 **commit** 传过来的一个对象 [见demo29 incrementDouble方法]

因为回调函数不晓得什么时候调用，或者是什么时候回调成功，如果有两个回调，也不知道是哪个先回调。所以 Mutations 都是同步事务


**Actions** 

**Actions** 跟mutations 的不同在于：

1. Action 提交的是mutation，而不是直接变更状态
2. Action 可以包含的任意异步操作

actions 有两种写法一种是 context 的方法，然后``context.commit`` 触发 mutations 

还有一种是参数直接是 **{{commit}}** 然后 ``commit(handler)`` 触发 mutations

其中 context 为：

![context](http://7xlqb6.com1.z0.glb.clouddn.com/vuex-actions-context)

commit 为:

```
function boundCommit(type, payload, options) {
	return commit.call(store, type, payload, options)
}
```
由此可见，他们都是触发 ``boundCommit`` 这个函数

actions 接收参数为：

以 **载荷** 的形式分发的话

```
this.$store.dispatch("handler",{ampunt:10})
```

这样的话，在 **actions** 那边接收的话是用 **payload** 接收,如下

```
incrementAsync(context,payload){
		console.info(context)
		setTimeout(function(){
			context.commit('increment',payload)
		},1000)
	}
```

以 **对象** 形式分发,如下

```
this.$store.dispatch({
	type:'handler',
	amount:10
})
```

**actions** 接收形式同上 [见demo31]


**Moudules**

使用单一的状态🌲会导致所有的状态集中到一个很大的对象中，store 会变得臃肿，那么这个时候就需要按一定的规则将store分割出来，如下：

```
const moudleA = {
	//...
}

const moduleB = {
	//...
}

const store = new Vuex.Store({
	modules:{
		a: moduleA,
		b: moduleB
	}
})

store.state.a  //-> moduleA 的状态
```

【见demo32 hello.vue】


对于模块内部的mutations 和 getter，接收到的第一个参数是 **模块的局部状态**

```
const ModuleA = {
	state:{
		count:0
	},
	mutations:{
		increment(state){
			state.count++
		}
	}
}
```

在 **严格模式** 下面，使用 ``stric: true`` 的话，强制性所有的修改都是在 **mutations** 里面执行的。

但是使用 ``v-model`` 的话会出现一些问题，因为 ``v-model`` 会视图直接修改某个data 的值，会导致抛出一个错误

**解决的方法1** 

就是给 input 去绑定 value 的值，然后在input 上面绑定一个``input`` 或者 ``change`` 事件，在该事件回调中调用 commit 触发 **mutations** 这样的话就等于不用 ``v-model`` 的属性了

[见demo32 hello.vue]

**解决方法2**

使用带有 setter 的双向绑定计算属性，利用 set 函数来 commit 事件。可以保留 ``v-model`` 的使用

[见demo32 updateInput.vue]

