import{_ as a,o as s,c as e,M as n}from"./chunks/framework.3d15f885.js";const m=JSON.parse('{"title":"Vue","description":"","frontmatter":{},"headers":[],"relativePath":"views/interview/Vue.md","filePath":"views/interview/Vue.md","lastUpdated":1700905769000}'),l={name:"views/interview/Vue.md"},p=n(`<h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h1><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">对template的解析步骤大致分为以下几步：</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">将html文档片段解析成ast描述符</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">将ast描述符解析成字符串</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">生成render函数</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  *  1.将temmplate解析ast tree</span></span>
<span class="line"><span style="color:#babed8;">  *  2.将ast tree转换成render语法字符串</span></span>
<span class="line"><span style="color:#babed8;">  *  3.生成render方法</span></span>
<span class="line"><span style="color:#babed8;">  */</span></span>
<span class="line"><span style="color:#babed8;">/**</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_1-vue组件之间通信方式有哪些" tabindex="-1">1.Vue组件之间通信方式有哪些？ <a class="header-anchor" href="#_1-vue组件之间通信方式有哪些" aria-label="Permalink to &quot;1.Vue组件之间通信方式有哪些？&quot;">​</a></h2><ul><li>props</li><li>$emit/$on</li><li>$children/$parent</li><li>$attrs/$listeners</li><li>ref</li><li>$root</li><li>eventbus</li><li>vuex</li></ul><p>vue3中使用mitt代替eventbus</p><ul><li>父子组件 <ul><li><code>props</code>,<code>$emit</code>,<code>$parent</code>,<code>ref</code>,<code>$attrs</code></li></ul></li><li>兄弟组件 <ul><li><code>$parent</code>,<code>$root</code>,<code>eventbus</code>,<code>vuex</code></li></ul></li><li>跨层级关系 <ul><li><code>eventbus</code>,<code>vuex</code>,<code>provide</code>+<code>inject</code></li></ul></li></ul><h2 id="_2-v-if-和-v-for的优先级" tabindex="-1">2.v-if 和 v-for的优先级 <a class="header-anchor" href="#_2-v-if-和-v-for的优先级" aria-label="Permalink to &quot;2.v-if 和 v-for的优先级&quot;">​</a></h2><p>vue2 v-for 优先级 高于 v-if vue3 v-for 优先级 低于 v-if</p><h2 id="_3-简述vue声明周期" tabindex="-1">3.简述Vue声明周期 <a class="header-anchor" href="#_3-简述vue声明周期" aria-label="Permalink to &quot;3.简述Vue声明周期&quot;">​</a></h2><p>Vue生命周期总共可以分为8个阶段：创建前后、载入前后、更新前后、销毁前后 Vue3中新增了三个用于调试和服务端渲染的场景</p><h2 id="_4-双向绑定原理" tabindex="-1">4.双向绑定原理 <a class="header-anchor" href="#_4-双向绑定原理" aria-label="Permalink to &quot;4.双向绑定原理&quot;">​</a></h2><ul><li>vue中双向绑定是一个指令<code>v-model</code>，它是一个语法糖，默认是:value 和 @input，可以绑定一个响应式数据到视图，更新视图对应数据可以同时改变</li><li>通常在表单上使用，还可以在自定义组件上使用，表示某个值的输入输出控制</li><li>Vue3中 改为modelValue 和 update:modelValue 的组合，还可以指定多个 v-model</li></ul><h2 id="_5-如何扩展一个组件" tabindex="-1">5.如何扩展一个组件 <a class="header-anchor" href="#_5-如何扩展一个组件" aria-label="Permalink to &quot;5.如何扩展一个组件&quot;">​</a></h2><ul><li>常见的组件扩展方法有： mixins, slots, extends等</li><li>mixins可能遇到使用多个mixins时，定义的变量名冲突，不好排查，不透明不灵活</li></ul><p>Vue.extend 又是什么？</p><h2 id="_6-子组件是否可以直接改变父组件的数据" tabindex="-1">6.子组件是否可以直接改变父组件的数据 <a class="header-anchor" href="#_6-子组件是否可以直接改变父组件的数据" aria-label="Permalink to &quot;6.子组件是否可以直接改变父组件的数据&quot;">​</a></h2><p>开发遵循单向数据流，避免子组件更改父组件数据，使数据无法理解</p><h2 id="_7-vue权限管理怎么做-控制到按钮级别的权限怎么做" tabindex="-1">7.Vue权限管理怎么做？控制到按钮级别的权限怎么做 <a class="header-anchor" href="#_7-vue权限管理怎么做-控制到按钮级别的权限怎么做" aria-label="Permalink to &quot;7.Vue权限管理怎么做？控制到按钮级别的权限怎么做&quot;">​</a></h2><p>通常由服务端实现，在权限管理系统根据角色配置相应的权限，在登录前端页面时会返回权限列表，打开某个页面或者按钮时，查询是否有权限</p><h2 id="_8-原理-说说对vue响应式的理解" tabindex="-1">8.原理--说说对vue响应式的理解 <a class="header-anchor" href="#_8-原理-说说对vue响应式的理解" aria-label="Permalink to &quot;8.原理--说说对vue响应式的理解&quot;">​</a></h2><ul><li>所谓数据响应式就是能够使数据变化可以被检测并对这种变化做出响应的机制</li><li>MVVM框架中要解决的一个核心问题是连接数据层和视图层，通过数据驱动应用，数据变化，视图更新，要做到这点就需要对数据做响应式处理，这样一旦数据发生变化就可以立即做出更新处理</li><li>vue2根据数据类型来做不同的处理， 对象采用 Object.defineProperty的方式定义数据拦截，数组对7个变更方法做了封装，但存在一些缺点：初始化时的递归遍历会造成性能损失，无法监听到属性的变化和删除， 数组的length无法监听，对ES6的 Set, Map这些数据接口不支持</li><li>vue3 使用Proxy代理处理响应式数据，初始化性能和内存消耗得到很大的改善</li></ul><h2 id="_9-原理-说说对虚拟dom的理解" tabindex="-1">9.原理--说说对虚拟DOM的理解 <a class="header-anchor" href="#_9-原理-说说对虚拟dom的理解" aria-label="Permalink to &quot;9.原理--说说对虚拟DOM的理解&quot;">​</a></h2><ul><li>就是虚拟的dom对象，本身就是一个JavaScript对象，只不过它是通过不同的属性去描述一个视图结构</li><li>将真实的元素节点抽象成VNode,有效减少直接操作dom的次数，从而提高程序性能</li><li>方便跨平台使用</li><li>如何生成？ template --(compile 编译)--&gt; render funtion --&gt; VNode --&gt; 真实DOM</li></ul><h2 id="_10-原理-diff算法" tabindex="-1">10.原理--diff算法 <a class="header-anchor" href="#_10-原理-diff算法" aria-label="Permalink to &quot;10.原理--diff算法&quot;">​</a></h2><ul><li>diff算法称为 patching算法， 由Snabbdom修改而来，虚拟DOM要想转化为真实DOM就需要通过patch方法转换</li><li>最初Vue1.x中没有diff算法，视图中的每个响应数据依赖都有对应的更新函数，可以做到精准更新，因此不需要虚拟DOM和patching算法，但粒度过细导致Vue1.x无法承载较大的应用，Vue2中为了降低Watcher粒度，提升性能，使每个组件对应一个Watcher，因此需要引入diff算法才能精确找到发生变化的地方并高效更新</li><li>diff算法执行的时刻是在组件内响应式数据发生变化时触发实例执行更新函数，更新函数会再次执行render函数获取最新的虚拟dom，然后执行patch函数，对新老虚拟DOM进行对比，找到两者发生变化的地方进行更新，最后转化为真实DOM</li><li>patch是一个递归的过程，遵循深度优先，同层比较的策略，以vue3的pathc为例： <ul><li>首先判断两个节点是否为相同同类节点，不同则删除重新创建</li><li>如果双方都是元素节点则递归更新子元素，同时更新元素属性</li><li></li></ul></li><li>vue3中引入的更新策略：编译器优化 patchFlags、block等</li></ul><h2 id="_11-vue3新特性" tabindex="-1">11.Vue3新特性 <a class="header-anchor" href="#_11-vue3新特性" aria-label="Permalink to &quot;11.Vue3新特性&quot;">​</a></h2><ul><li>API层面 <ul><li>Compositon API</li><li>SFC Compositon API 语法糖</li><li>Teleport传送门</li><li>Fragments 片段</li><li>Emits选项</li><li>自定义渲染器</li><li>SFC CSS变量</li><li>Suspense</li></ul></li><li>框架改进 <ul><li>更快 <ul><li>虚拟DOM重写</li><li>编译器优化：静态提升、patchFlags、block等</li><li>基于Proxy的响应式系统</li></ul></li><li>更小 <ul><li>更好的摇树优化</li></ul></li><li>更容易维护 <ul><li>TypeScript + 模块化</li></ul></li><li>更容易扩展 <ul><li>独立的响应化模块</li><li>自定义渲染器</li></ul></li></ul></li></ul><h2 id="_12-动态路由" tabindex="-1">12.动态路由 <a class="header-anchor" href="#_12-动态路由" aria-label="Permalink to &quot;12.动态路由&quot;">​</a></h2><ul><li>很多时候，我们需要将给定的匹配模式的路由映射到同一个组件，这种情况就需要定义动态路由</li></ul><h2 id="_13-从零实现一个vue路由" tabindex="-1">13.从零实现一个vue路由 <a class="header-anchor" href="#_13-从零实现一个vue路由" aria-label="Permalink to &quot;13.从零实现一个vue路由&quot;">​</a></h2><ul><li>vue路由要解决的问题：用户点击跳转链接，内容切换，页面不刷新</li><li>借助hash或history api实现url跳转页面不刷新</li><li>同时监听hashchange事件，或者popstate事件处理跳转</li><li>根据hash值或者state值从routes表中匹配对应component并渲染</li></ul><h2 id="_14-key的作用" tabindex="-1">14.key的作用 <a class="header-anchor" href="#_14-key的作用" aria-label="Permalink to &quot;14.key的作用&quot;">​</a></h2><p>key的主要作用是 patch算法过程中更高效，判断是否是相同节点 是通过 key和tag</p><h2 id="_15-nexttick原理" tabindex="-1">15.nextTick原理 <a class="header-anchor" href="#_15-nexttick原理" aria-label="Permalink to &quot;15.nextTick原理&quot;">​</a></h2><ul><li>nextTick是等待下一次DOM更新刷新的工具方法</li><li>Vue有个异步更新策略，意思是如果数据变化，Vue是不会立即更新DOM，而是开启一个队列，把组件更新函数保存在队列中，在同一事件循环中发生的所有数据变更会异步的批量更新。这一策略导致我们对数据的修改不会立刻体现在DOM上，此时如果想要获取更新后的DOM状态，就需要使用nextTick</li></ul><h2 id="_16-watch和computed的区别以及选择" tabindex="-1">16.watch和computed的区别以及选择 <a class="header-anchor" href="#_16-watch和computed的区别以及选择" aria-label="Permalink to &quot;16.watch和computed的区别以及选择&quot;">​</a></h2><p>computed 是具有响应式的返回值，降低模版中表达式的复杂性，具有缓存性、懒加载 watch 是监听数据的变化，执行回调</p><p>watch 和 watchEffect 区别</p><h2 id="_17-子组件和父组件的创建和挂在顺序" tabindex="-1">17.子组件和父组件的创建和挂在顺序 <a class="header-anchor" href="#_17-子组件和父组件的创建和挂在顺序" aria-label="Permalink to &quot;17.子组件和父组件的创建和挂在顺序&quot;">​</a></h2><p>创建过程自上而下，挂在过程自下而上</p><h2 id="_18-如何缓存当前组件、更新" tabindex="-1">18.如何缓存当前组件、更新 <a class="header-anchor" href="#_18-如何缓存当前组件、更新" aria-label="Permalink to &quot;18.如何缓存当前组件、更新&quot;">​</a></h2><p>缓存组件使用 keep-alive, 使用 include和exclude可以指定或排除</p><h2 id="_19-从0-1构建vue项目" tabindex="-1">19.从0-1构建Vue项目 <a class="header-anchor" href="#_19-从0-1构建vue项目" aria-label="Permalink to &quot;19.从0-1构建Vue项目&quot;">​</a></h2><h2 id="_20-工作中最佳的项目实践" tabindex="-1">20.工作中最佳的项目实践 <a class="header-anchor" href="#_20-工作中最佳的项目实践" aria-label="Permalink to &quot;20.工作中最佳的项目实践&quot;">​</a></h2><h2 id="_21-vuex理解" tabindex="-1">21.vuex理解 <a class="header-anchor" href="#_21-vuex理解" aria-label="Permalink to &quot;21.vuex理解&quot;">​</a></h2><p>全局集中式状态管理模式库，</p><h2 id="_22-从template到render发生了什么" tabindex="-1">22.从template到render发生了什么 <a class="header-anchor" href="#_22-从template到render发生了什么" aria-label="Permalink to &quot;22.从template到render发生了什么&quot;">​</a></h2><h2 id="_23-vue实例过程中发生了什么" tabindex="-1">23.Vue实例过程中发生了什么 <a class="header-anchor" href="#_23-vue实例过程中发生了什么" aria-label="Permalink to &quot;23.Vue实例过程中发生了什么&quot;">​</a></h2><p>初始化 建立更新机制</p><p>初始化会创建组件实例， 初始化组件状态， 创建各种响应式数据</p><h2 id="_24-vue性能优化方法" tabindex="-1">24.Vue性能优化方法 <a class="header-anchor" href="#_24-vue性能优化方法" aria-label="Permalink to &quot;24.Vue性能优化方法&quot;">​</a></h2><ul><li>路由懒加载</li><li>KeepAlive 缓存页面，避免重复创建实例</li><li>长列表性能优化：vue-virtual-scroller</li><li>定时器销毁</li><li>图片懒加载 vue-lazyload</li><li>组件库按需加载</li></ul><h2 id="_25-vue为什么只能有一个根元素" tabindex="-1">25.vue为什么只能有一个根元素 <a class="header-anchor" href="#_25-vue为什么只能有一个根元素" aria-label="Permalink to &quot;25.vue为什么只能有一个根元素&quot;">​</a></h2><p>Vue3支持多个根节点</p><h2 id="_26-一个完整的父子组件生命周期" tabindex="-1">26.一个完整的父子组件生命周期： <a class="header-anchor" href="#_26-一个完整的父子组件生命周期" aria-label="Permalink to &quot;26.一个完整的父子组件生命周期：&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">父beforeCreate</span></span>
<span class="line"><span style="color:#babed8;">父created</span></span>
<span class="line"><span style="color:#babed8;">父beforeMount</span></span>
<span class="line"><span style="color:#babed8;">子beforeCreate</span></span>
<span class="line"><span style="color:#babed8;">子created</span></span>
<span class="line"><span style="color:#babed8;">子beforeMount</span></span>
<span class="line"><span style="color:#babed8;">子mounted</span></span>
<span class="line"><span style="color:#babed8;">父mounted</span></span>
<span class="line"><span style="color:#babed8;">父beforeUpdate</span></span>
<span class="line"><span style="color:#babed8;">子beforeUpdate</span></span>
<span class="line"><span style="color:#babed8;">子updated</span></span>
<span class="line"><span style="color:#babed8;">父updated</span></span>
<span class="line"><span style="color:#babed8;">父beforeDestroy</span></span>
<span class="line"><span style="color:#babed8;">子beforeDestroy</span></span>
<span class="line"><span style="color:#babed8;">子destroyed</span></span>
<span class="line"><span style="color:#babed8;">父destroyed</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_27-v-model" tabindex="-1">27.v-model <a class="header-anchor" href="#_27-v-model" aria-label="Permalink to &quot;27.v-model&quot;">​</a></h2><p>v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：</p><ul><li>text 和 textarea 元素使用 value property 和 input 事件；</li><li>checkbox 和 radio 使用 checked property 和 change 事件；</li><li>select 字段将 value 作为 prop 并将 change 作为事件。</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Vue2</span></span>
<span class="line"><span style="color:#BABED8;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">base-checkbox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">prop</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checked</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">event</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">change</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">checked</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Boolean</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;input</span></span>
<span class="line"><span style="color:#C3E88D;">      type=&quot;checkbox&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">      v-bind:checked=&quot;checked&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">      v-on:change=&quot;$emit(&#39;change&#39;, $event.target.checked)&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    &gt;</span></span>
<span class="line"><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Vue3</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">defineProps([&#39;modelValue&#39;])</span></span>
<span class="line"><span style="color:#BABED8;">defineEmits([&#39;update:modelValue&#39;])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span></span>
<span class="line"><span style="color:#89DDFF;">    :value=&quot;modelValue&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    @input=&quot;$emit(&#39;update:modelValue&#39;, $event.target.value)&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,60),o=[p];function r(i,t,c,u,b,d){return s(),e("div",null,o)}const y=a(l,[["render",r]]);export{m as __pageData,y as default};