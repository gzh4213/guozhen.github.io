import{_ as s,c as a,o as n,a as e}from"./app.6871c975.js";const F=JSON.parse('{"title":"数组","description":"","frontmatter":{},"headers":[{"level":2,"title":"稀疏数组","slug":"稀疏数组","link":"#稀疏数组","children":[]},{"level":2,"title":"类数组","slug":"类数组","link":"#类数组","children":[]},{"level":2,"title":"转字符串方法","slug":"转字符串方法","link":"#转字符串方法","children":[{"level":3,"title":"toString","slug":"tostring","link":"#tostring","children":[]},{"level":3,"title":"join","slug":"join","link":"#join","children":[]}]},{"level":2,"title":"堆栈方法","slug":"堆栈方法","link":"#堆栈方法","children":[{"level":3,"title":"push","slug":"push","link":"#push","children":[]},{"level":3,"title":"unshift","slug":"unshift","link":"#unshift","children":[]},{"level":3,"title":"pop","slug":"pop","link":"#pop","children":[]},{"level":3,"title":"shift","slug":"shift","link":"#shift","children":[]}]},{"level":2,"title":"排序方法","slug":"排序方法","link":"#排序方法","children":[{"level":3,"title":"sort","slug":"sort","link":"#sort","children":[]},{"level":3,"title":"reverse","slug":"reverse","link":"#reverse","children":[]}]},{"level":2,"title":"拼接方法","slug":"拼接方法","link":"#拼接方法","children":[{"level":3,"title":"concat","slug":"concat","link":"#concat","children":[]}]},{"level":2,"title":"删改方法","slug":"删改方法","link":"#删改方法","children":[{"level":3,"title":"slice","slug":"slice","link":"#slice","children":[]},{"level":3,"title":"splice(start, length, value)","slug":"splice-start-length-value","link":"#splice-start-length-value","children":[]}]},{"level":2,"title":"indexOf lastIndexOf","slug":"indexof-lastindexof","link":"#indexof-lastindexof","children":[]},{"level":2,"title":"静态/构造函数方法","slug":"静态-构造函数方法","link":"#静态-构造函数方法","children":[{"level":3,"title":"Array.of()","slug":"array-of","link":"#array-of","children":[]},{"level":3,"title":"Array.from()","slug":"array-from","link":"#array-from","children":[]},{"level":3,"title":"keys()","slug":"keys","link":"#keys","children":[]}]},{"level":2,"title":"fill 填充方法","slug":"fill-填充方法","link":"#fill-填充方法","children":[]},{"level":2,"title":"遍历方法","slug":"遍历方法","link":"#遍历方法","children":[{"level":3,"title":"forEach","slug":"foreach","link":"#foreach","children":[]},{"level":3,"title":"map","slug":"map","link":"#map","children":[]},{"level":3,"title":"reduce","slug":"reduce","link":"#reduce","children":[]},{"level":3,"title":"reduceRight","slug":"reduceright","link":"#reduceright","children":[]},{"level":3,"title":"some","slug":"some","link":"#some","children":[]},{"level":3,"title":"every","slug":"every","link":"#every","children":[]},{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"keys","slug":"keys-1","link":"#keys-1","children":[]},{"level":3,"title":"values","slug":"values","link":"#values","children":[]},{"level":3,"title":"entries","slug":"entries","link":"#entries","children":[]}]}],"relativePath":"frontend/js/index.md","lastUpdated":1675249728000}'),l={name:"frontend/js/index.md"},r=e(`<h1 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-hidden="true">#</a></h1><h2 id="稀疏数组" tabindex="-1">稀疏数组 <a class="header-anchor" href="#稀疏数组" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr)  </span><span style="color:#676E95;font-style:italic;">// [1,empty,3,4,5]</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="类数组" tabindex="-1">类数组 <a class="header-anchor" href="#类数组" aria-hidden="true">#</a></h2><p>如 arguments, DOMList, 字符串, 具有length,和固定顺序，但不具有数组的一些方法</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">12345</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cosole</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">cosole</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 类数组上，设计修改长度的方法都不可用</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">push</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str)</span></span>
<span class="line"><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">forEach</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="转字符串方法" tabindex="-1">转字符串方法 <a class="header-anchor" href="#转字符串方法" aria-hidden="true">#</a></h2><h3 id="tostring" tabindex="-1">toString <a class="header-anchor" href="#tostring" aria-hidden="true">#</a></h3><h3 id="join" tabindex="-1">join <a class="header-anchor" href="#join" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 可将n维数组扁平化</span></span>
<span class="line"><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">([[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]])</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="堆栈方法" tabindex="-1">堆栈方法 <a class="header-anchor" href="#堆栈方法" aria-hidden="true">#</a></h2><h3 id="push" tabindex="-1">push <a class="header-anchor" href="#push" aria-hidden="true">#</a></h3><h3 id="unshift" tabindex="-1">unshift <a class="header-anchor" href="#unshift" aria-hidden="true">#</a></h3><ul><li>返回值：数组变化后的最新长度</li></ul><h3 id="pop" tabindex="-1">pop <a class="header-anchor" href="#pop" aria-hidden="true">#</a></h3><h3 id="shift" tabindex="-1">shift <a class="header-anchor" href="#shift" aria-hidden="true">#</a></h3><ul><li>返回值： 删除的项目</li></ul><h2 id="排序方法" tabindex="-1">排序方法 <a class="header-anchor" href="#排序方法" aria-hidden="true">#</a></h2><h3 id="sort" tabindex="-1">sort <a class="header-anchor" href="#sort" aria-hidden="true">#</a></h3><p>返回排序之后的原数组</p><h3 id="reverse" tabindex="-1">reverse <a class="header-anchor" href="#reverse" aria-hidden="true">#</a></h3><p>返回倒序后的原数组</p><h2 id="拼接方法" tabindex="-1">拼接方法 <a class="header-anchor" href="#拼接方法" aria-hidden="true">#</a></h2><h3 id="concat" tabindex="-1">concat <a class="header-anchor" href="#concat" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">concat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">concat</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]))</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="删改方法" tabindex="-1">删改方法 <a class="header-anchor" href="#删改方法" aria-hidden="true">#</a></h2><h3 id="slice" tabindex="-1">slice <a class="header-anchor" href="#slice" aria-hidden="true">#</a></h3><blockquote><p>[ ) 左闭右开 返回新的截取后的数组</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 调用slice方法，将字符串转成数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(str)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="splice-start-length-value" tabindex="-1">splice(start, length, value) <a class="header-anchor" href="#splice-start-length-value" aria-hidden="true">#</a></h3><blockquote><p>截取规则，左闭右开 删除数组指定范围的数组，并返回被删除的数组，会修改原数组</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="indexof-lastindexof" tabindex="-1">indexOf lastIndexOf <a class="header-anchor" href="#indexof-lastindexof" aria-hidden="true">#</a></h2><h2 id="静态-构造函数方法" tabindex="-1">静态/构造函数方法 <a class="header-anchor" href="#静态-构造函数方法" aria-hidden="true">#</a></h2><h3 id="array-of" tabindex="-1">Array.of() <a class="header-anchor" href="#array-of" aria-hidden="true">#</a></h3><h3 id="array-from" tabindex="-1">Array.from() <a class="header-anchor" href="#array-from" aria-hidden="true">#</a></h3><h3 id="keys" tabindex="-1">keys() <a class="header-anchor" href="#keys" aria-hidden="true">#</a></h3><h2 id="fill-填充方法" tabindex="-1">fill 填充方法 <a class="header-anchor" href="#fill-填充方法" aria-hidden="true">#</a></h2><h2 id="遍历方法" tabindex="-1">遍历方法 <a class="header-anchor" href="#遍历方法" aria-hidden="true">#</a></h2><h3 id="foreach" tabindex="-1">forEach <a class="header-anchor" href="#foreach" aria-hidden="true">#</a></h3><h3 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h3><h3 id="reduce" tabindex="-1">reduce <a class="header-anchor" href="#reduce" aria-hidden="true">#</a></h3><h3 id="reduceright" tabindex="-1">reduceRight <a class="header-anchor" href="#reduceright" aria-hidden="true">#</a></h3><h3 id="some" tabindex="-1">some <a class="header-anchor" href="#some" aria-hidden="true">#</a></h3><h3 id="every" tabindex="-1">every <a class="header-anchor" href="#every" aria-hidden="true">#</a></h3><h3 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-hidden="true">#</a></h3><h3 id="keys-1" tabindex="-1">keys <a class="header-anchor" href="#keys-1" aria-hidden="true">#</a></h3><h3 id="values" tabindex="-1">values <a class="header-anchor" href="#values" aria-hidden="true">#</a></h3><h3 id="entries" tabindex="-1">entries <a class="header-anchor" href="#entries" aria-hidden="true">#</a></h3>`,49),p=[r];function o(t,c,i,h,d,y){return n(),a("div",null,p)}const D=s(l,[["render",o]]);export{F as __pageData,D as default};