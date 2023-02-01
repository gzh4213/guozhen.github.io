import{_ as e,c as i,o as l,a}from"./app.6871c975.js";const u=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[{"level":2,"title":"盒模型","slug":"盒模型","link":"#盒模型","children":[]},{"level":2,"title":"选择器","slug":"选择器","link":"#选择器","children":[]},{"level":2,"title":"伪类和伪元素的区别","slug":"伪类和伪元素的区别","link":"#伪类和伪元素的区别","children":[]},{"level":2,"title":"BFC","slug":"bfc","link":"#bfc","children":[]},{"level":2,"title":"浮动","slug":"浮动","link":"#浮动","children":[]}],"relativePath":"frontend/interview/CSS.md","lastUpdated":1675249728000}'),t={name:"frontend/interview/CSS.md"},n=a('<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h1><h2 id="盒模型" tabindex="-1">盒模型 <a class="header-anchor" href="#盒模型" aria-hidden="true">#</a></h2><p>盒模型由四个部分组成，分别是margin,border,padding,content</p><p>标准盒模型的width和height属性的范围只包含了content</p><p>IE盒模型的width和height的属性的范围包含了border，padding和content</p><h2 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器" aria-hidden="true">#</a></h2><ul><li>id选择器（#myid)</li><li>类选择器（.myclassname)</li><li>标签选择器（div,h1,p）</li><li>后代选择器（h1 p）</li><li>相邻后代选择器（子）选择器（ul&gt;li)</li><li>兄弟选择器（li～a）</li><li>相邻兄弟选择器（li+a）</li><li>属性选择器（a[rel=&#39;external&#39;]）</li><li>伪类选择器（a:hover, li:nth-child)</li><li>伪元素选择器（::before, ::after)</li><li>通配符选择器（*）</li></ul><h2 id="伪类和伪元素的区别" tabindex="-1">伪类和伪元素的区别 <a class="header-anchor" href="#伪类和伪元素的区别" aria-hidden="true">#</a></h2><p>伪类用于当已有的元素处于某个状态时，为其添加对应的样式 伪元素用于创建一些不在文档树中的元素，并为其添加样式</p><h2 id="bfc" tabindex="-1">BFC <a class="header-anchor" href="#bfc" aria-hidden="true">#</a></h2><p>块级格式化上下文（Block Fromatting Context,BFC），是一个独立的布局环境，内部和外部互不影响</p><p>创建BFC</p><ul><li>根元素或包含根元素的元素</li><li>浮动元素float=left|right或inherit(!= none)</li><li>绝对定位元素position=absolute或fixed</li><li>display=inline-block|flex|inline-flex|table-cell|tabel-caption</li><li>overflow=hidden|auto|scroll(!=visible)</li></ul><h2 id="浮动" tabindex="-1">浮动 <a class="header-anchor" href="#浮动" aria-hidden="true">#</a></h2>',14),r=[n];function d(h,c,o,s,p,f){return l(),i("div",null,r)}const b=e(t,[["render",d]]);export{u as __pageData,b as default};