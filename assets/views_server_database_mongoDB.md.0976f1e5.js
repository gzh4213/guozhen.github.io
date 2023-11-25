import{_ as a,o as e,c as o,M as r}from"./chunks/framework.3d15f885.js";const u=JSON.parse('{"title":"MongoDB","description":"","frontmatter":{},"headers":[],"relativePath":"views/server/database/mongoDB.md","filePath":"views/server/database/mongoDB.md","lastUpdated":1700905769000}'),t={name:"views/server/database/mongoDB.md"},d=r('<h1 id="mongodb" tabindex="-1">MongoDB <a class="header-anchor" href="#mongodb" aria-label="Permalink to &quot;MongoDB&quot;">​</a></h1><p>Mongodb中有三个重要概念需要掌握</p><ul><li>数据库(database) 数据库是一个数据仓库，数据库服务下可以创建很多数据库，数据库中可以存放很多集合</li><li>集合(collection) 集合类似于JS中的数组，在集合中可以存放很多文档</li><li>文档(document) 文档是数据库中的最小单位，类似于JS中的对象</li></ul><p>集合 = 表 文档 = 记录</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p><a href="https://www.mongodb.com/docs/v5.0/tutorial/install-mongodb-on-os-x/" target="_blank" rel="noreferrer">官方安装地址</a></p><ol><li><p>安装相关工具 <code>brew tap mongodb/brew</code></p></li><li><p>更新homebrew <code>brew update</code></p></li><li><p>安装MongoDB community <code>brew install mongodb-community@5.0</code></p></li></ol><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h2><p><code>brew services start mongodb-community@5.0</code></p><h2 id="停止" tabindex="-1">停止 <a class="header-anchor" href="#停止" aria-label="Permalink to &quot;停止&quot;">​</a></h2><p><code>brew services stop mongodb-community@5.0</code></p><h2 id="连接" tabindex="-1">连接 <a class="header-anchor" href="#连接" aria-label="Permalink to &quot;连接&quot;">​</a></h2><p><code>mongosh</code></p><h2 id="数据库命令" tabindex="-1">数据库命令 <a class="header-anchor" href="#数据库命令" aria-label="Permalink to &quot;数据库命令&quot;">​</a></h2><h3 id="显示所有的数据库" tabindex="-1">显示所有的数据库 <a class="header-anchor" href="#显示所有的数据库" aria-label="Permalink to &quot;显示所有的数据库&quot;">​</a></h3><p><code>show dbs</code></p><h3 id="切换到指定的数据库-如果数据库不存在会自动创建数据库" tabindex="-1">切换到指定的数据库，如果数据库不存在会自动创建数据库 <a class="header-anchor" href="#切换到指定的数据库-如果数据库不存在会自动创建数据库" aria-label="Permalink to &quot;切换到指定的数据库，如果数据库不存在会自动创建数据库&quot;">​</a></h3><p><code>use 数据库名</code></p><h3 id="显示当前所在的数据库" tabindex="-1">显示当前所在的数据库 <a class="header-anchor" href="#显示当前所在的数据库" aria-label="Permalink to &quot;显示当前所在的数据库&quot;">​</a></h3><p><code>db</code></p><h3 id="删除当前的数据库" tabindex="-1">删除当前的数据库 <a class="header-anchor" href="#删除当前的数据库" aria-label="Permalink to &quot;删除当前的数据库&quot;">​</a></h3><p><code>use 库名</code></p><p><code>db.dropDatabase()</code></p><h2 id="集合命令" tabindex="-1">集合命令 <a class="header-anchor" href="#集合命令" aria-label="Permalink to &quot;集合命令&quot;">​</a></h2><h3 id="创建集合" tabindex="-1">创建集合 <a class="header-anchor" href="#创建集合" aria-label="Permalink to &quot;创建集合&quot;">​</a></h3><p><code>db.createCollection(&#39;集合名字&#39;)</code></p><h3 id="显示当前数据库中的所有集合" tabindex="-1">显示当前数据库中的所有集合 <a class="header-anchor" href="#显示当前数据库中的所有集合" aria-label="Permalink to &quot;显示当前数据库中的所有集合&quot;">​</a></h3><p><code>show collections</code></p><h3 id="删除某个集合" tabindex="-1">删除某个集合 <a class="header-anchor" href="#删除某个集合" aria-label="Permalink to &quot;删除某个集合&quot;">​</a></h3><p><code>db.集合名.drop()</code></p><h3 id="重命名集合" tabindex="-1">重命名集合 <a class="header-anchor" href="#重命名集合" aria-label="Permalink to &quot;重命名集合&quot;">​</a></h3><p><code>db.集合名.renameCollection(&#39;rename&#39;)</code></p><h2 id="文档命令" tabindex="-1">文档命令 <a class="header-anchor" href="#文档命令" aria-label="Permalink to &quot;文档命令&quot;">​</a></h2><h3 id="插入文档" tabindex="-1">插入文档 <a class="header-anchor" href="#插入文档" aria-label="Permalink to &quot;插入文档&quot;">​</a></h3><p><code>db.集合名.insert(文档对象)</code></p><h3 id="查询文档" tabindex="-1">查询文档 <a class="header-anchor" href="#查询文档" aria-label="Permalink to &quot;查询文档&quot;">​</a></h3><p><code>db.集合名.find(查询条件)</code></p><h3 id="更新文档" tabindex="-1">更新文档 <a class="header-anchor" href="#更新文档" aria-label="Permalink to &quot;更新文档&quot;">​</a></h3><p><code>db.集合名.update(查询条件，新的文档)</code></p><p><code>db.集合名.update({name:&#39;张三&#39;}, {$set: {age: 19}})</code></p><h3 id="删除文档" tabindex="-1">删除文档 <a class="header-anchor" href="#删除文档" aria-label="Permalink to &quot;删除文档&quot;">​</a></h3><p><code>db.集合名.remove(查询条件)</code></p><h2 id="mongoose" tabindex="-1">Mongoose <a class="header-anchor" href="#mongoose" aria-label="Permalink to &quot;Mongoose&quot;">​</a></h2><p>是一个对象文档模型库，官网：<a href="http://www.mongoosejs.net/" target="_blank" rel="noreferrer">http://www.mongoosejs.net/</a></p><p>方便使用代码操作mongodb数据库</p><h2 id="图形化工具" tabindex="-1">图形化工具 <a class="header-anchor" href="#图形化工具" aria-label="Permalink to &quot;图形化工具&quot;">​</a></h2><h3 id="robo-3t" tabindex="-1">Robo 3T <a class="header-anchor" href="#robo-3t" aria-label="Permalink to &quot;Robo 3T&quot;">​</a></h3><p><a href="https://robomongo.org/" target="_blank" rel="noreferrer">下载地址</a></p><h3 id="navicat" tabindex="-1">Navicat <a class="header-anchor" href="#navicat" aria-label="Permalink to &quot;Navicat&quot;">​</a></h3><p><a href="https://www.navicat.com.cn/" target="_blank" rel="noreferrer">下载地址</a></p>',50),n=[d];function i(l,h,c,s,b,p){return e(),o("div",null,n)}const q=a(t,[["render",i]]);export{u as __pageData,q as default};