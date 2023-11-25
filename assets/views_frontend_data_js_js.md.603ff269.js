import{_ as a,o as s,c as e,M as n}from"./chunks/framework.3d15f885.js";const m=JSON.parse('{"title":"基础知识","description":"","frontmatter":{},"headers":[],"relativePath":"views/frontend/data/js/js.md","filePath":"views/frontend/data/js/js.md","lastUpdated":1700905769000}'),l={name:"views/frontend/data/js/js.md"},r=n(`<h1 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h1><h2 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h2><p>介绍数组的一些常见函数，以及在实战开发过程中能更好操作数组的lodash包</p><h3 id="push" tabindex="-1">push() <a class="header-anchor" href="#push" aria-label="Permalink to &quot;push()&quot;">​</a></h3><p>说明：向数组的末尾添加一个或多个元素，并返回新的长度</p><h3 id="unshift" tabindex="-1">unshift() <a class="header-anchor" href="#unshift" aria-label="Permalink to &quot;unshift()&quot;">​</a></h3><p>说明：将参数添加到原数组开头，并返回数组的长度</p><h3 id="pop" tabindex="-1">pop() <a class="header-anchor" href="#pop" aria-label="Permalink to &quot;pop()&quot;">​</a></h3><p>说明：删除数组末尾一个或多个元素，并返回被删除的元素</p><h3 id="splice" tabindex="-1">splice() <a class="header-anchor" href="#splice" aria-label="Permalink to &quot;splice()&quot;">​</a></h3><p>说明： 当splice传递两个参数的时候，参数1:开始删除的下标位置,参数2:删除数组元素的个数，返回新的数组。当splice传递三个参数的时候，参数1:开始删除的下表位置,参数2:删除数组元素的个数，参数3:向数组添加的新元素。注意数组下标0开始。</p><h3 id="last" tabindex="-1">_.last() <a class="header-anchor" href="#last" aria-label="Permalink to &quot;_.last()&quot;">​</a></h3><p>说明：获取数组最后一个元素， 不会改变原始数组</p><h3 id="reverse" tabindex="-1">reverse() <a class="header-anchor" href="#reverse" aria-label="Permalink to &quot;reverse()&quot;">​</a></h3><p>说明： 颠倒数组，返回新的数组。lodash提供的 _.reverse</p><h3 id="join" tabindex="-1">join <a class="header-anchor" href="#join" aria-label="Permalink to &quot;join&quot;">​</a></h3><p>说明:用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。返回一个字符串 代码</p><h3 id="contact" tabindex="-1">contact <a class="header-anchor" href="#contact" aria-label="Permalink to &quot;contact&quot;">​</a></h3><p>说明：用于连接两个或多个数组,并返回一个新数组，新数组是将参数添加到原数组中构成</p><h3 id="数组去重-set、-uniq" tabindex="-1">数组去重：Set、_.uniq() <a class="header-anchor" href="#数组去重-set、-uniq" aria-label="Permalink to &quot;数组去重：Set、_.uniq()&quot;">​</a></h3><p>ES6 新增了Set这一数据结构 类似数组 但是Set成员具有唯一性，基于唯一性适合做数组去重</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">let array=[&#39;数字&#39;,&#39;花朵&#39;,&#39;数字&#39;,&#39;地球&#39;,&#39;人类&#39;,&#39;头发&#39;,&#39;眼睛&#39;,&#39;细胞&#39;];</span></span>
<span class="line"><span style="color:#babed8;">console.log(...(new Set(array)))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>lodash提供的函数 _uniq</p><h3 id="数组求和-sum" tabindex="-1">数组求和： _sum <a class="header-anchor" href="#数组求和-sum" aria-label="Permalink to &quot;数组求和： _sum&quot;">​</a></h3><p>lodash中的函数 _.sum</p><h3 id="获取数组中指定键值对的值组成数组" tabindex="-1">获取数组中指定键值对的值组成数组 <a class="header-anchor" href="#获取数组中指定键值对的值组成数组" aria-label="Permalink to &quot;获取数组中指定键值对的值组成数组&quot;">​</a></h3><p>lodash中的函数 _map 说明：例如这样一个包含对象的数组<code>[{id:1,name:&#39;koala&#39;},{id:2,name:&#39;koala1&#39;}]</code>,想拿到数组对象中id的数据组成一个数组。map的参数1:原型数组，参数2对象中的某一个键值对 代码：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">let array=[{id:1,name:&#39;koala&#39;},{id:2,name:&#39;koala1&#39;}];</span></span>
<span class="line"><span style="color:#babed8;">let result=_map(array,&#39;id&#39;);</span></span>
<span class="line"><span style="color:#babed8;">//[1,2]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="获取数组中某个值的角标" tabindex="-1">获取数组中某个值的角标 <a class="header-anchor" href="#获取数组中某个值的角标" aria-label="Permalink to &quot;获取数组中某个值的角标&quot;">​</a></h3><p>返回遇到的第一个符合的值的下标值 indexOf:</p><p>lodash中的函数**_.findIndex** 说明:对于一个数组，里面每个值是对象的时候，这个函数，可以不完全判断对象一定是相同的。 代码:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">var users = [</span></span>
<span class="line"><span style="color:#babed8;">    { &#39;user&#39;: &#39;barney&#39;,  &#39;active&#39;: false ,&#39;role&#39;:1},</span></span>
<span class="line"><span style="color:#babed8;">    { &#39;user&#39;: &#39;fred&#39;,    &#39;active&#39;: false ,&#39;role&#39;:2},</span></span>
<span class="line"><span style="color:#babed8;">    { &#39;user&#39;: &#39;fred&#39;, &#39;active&#39;: true ,&#39;role&#39;:3}</span></span>
<span class="line"><span style="color:#babed8;">  ];</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">console.log(  _.findIndex(users, { &#39;user&#39;: &#39;fred&#39;, &#39;role&#39;: 3 }));// 输出2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="数组包含值判断" tabindex="-1">数组包含值判断 <a class="header-anchor" href="#数组包含值判断" aria-label="Permalink to &quot;数组包含值判断&quot;">​</a></h3><ul><li>indexOf 说明:返回对应元素下标，在上面已经详细介绍过。</li><li>includes 说明:返回的直接是true/false，同时对NaN找不到的问题也得到解决。效率应该会比indexOf高一些</li></ul><h3 id="把一个字符串分割成字符串数组" tabindex="-1">把一个字符串分割成字符串数组 <a class="header-anchor" href="#把一个字符串分割成字符串数组" aria-label="Permalink to &quot;把一个字符串分割成字符串数组&quot;">​</a></h3><p>split 说明：split函数两个参数，参数1:字符串或正则表达式，从该参数指定的地方分割 (必须)，参数2:可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度</p><h2 id="一道面试题" tabindex="-1">一道面试题: <a class="header-anchor" href="#一道面试题" aria-label="Permalink to &quot;一道面试题:&quot;">​</a></h2><blockquote><p>给定任意非负整数，反复累加各位数字直到结果为个位数为止。例如给定非负整数912，第一次累加9+1+2 = 12, 第二次累加1+2 = 3, 3为个位数，循 环终止返回3。请编程实现。</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">function add(num){</span></span>
<span class="line"><span style="color:#babed8;">    if(isNaN(num)) return;</span></span>
<span class="line"><span style="color:#babed8;">    if(num&lt;10) return num</span></span>
<span class="line"><span style="color:#babed8;">    const res=num.toString().split(&#39;&#39;).reduce((sum,value)=&gt;{</span></span>
<span class="line"><span style="color:#babed8;">        return sum+Number(value)</span></span>
<span class="line"><span style="color:#babed8;">    },0)</span></span>
<span class="line"><span style="color:#babed8;">    return add(res);</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">add(345);</span></span>
<span class="line"><span style="color:#babed8;">3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><p>内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使其在外部函数被返回return掉（寿命终结）了之后 个人理解：闭包是在函数里面定义一个函数，该函数可以是匿名函数，该子函数能够读写父函数的布局</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><ul><li>词法：javascript不会在方括号<code>[...]</code>前添加一个隐式的分号</li><li><code>&quot;use strict&quot;</code> 指令将浏览器引擎转换为“现代”模式，改变一些内建特性的行为</li><li>变量是数据的“命名存储”，JavaScript 的变量命名有两个限制： <ul><li>变量名称必须仅包含字母，数字，符号 $ 和 _。</li><li>首字符必须非数字。</li></ul></li><li>类型转换 <ul><li>Number类型转换时，null变成数字0， undefined变成NaN</li></ul></li></ul>`,43),i=[r];function p(t,o,c,d,u,b){return s(),e("div",null,i)}const f=a(l,[["render",p]]);export{m as __pageData,f as default};
