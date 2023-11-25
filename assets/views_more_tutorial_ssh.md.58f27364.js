import{_ as s,o as a,c as n,M as e}from"./chunks/framework.3d15f885.js";const y=JSON.parse('{"title":"本地为不同的git账号配置不同的SSH-Key","description":"","frontmatter":{},"headers":[],"relativePath":"views/more/tutorial/ssh.md","filePath":"views/more/tutorial/ssh.md","lastUpdated":1700905769000}'),l={name:"views/more/tutorial/ssh.md"},p=e(`<h1 id="本地为不同的git账号配置不同的ssh-key" tabindex="-1">本地为不同的git账号配置不同的SSH-Key <a class="header-anchor" href="#本地为不同的git账号配置不同的ssh-key" aria-label="Permalink to &quot;本地为不同的git账号配置不同的SSH-Key&quot;">​</a></h1><ol><li>切换到ssh目录下</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">cd </span><span style="color:#89DDFF;">~/.</span><span style="color:#BABED8;">ssh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>为不同git账号生成SSH-Key</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// github</span></span>
<span class="line"><span style="color:#BABED8;">ssh</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">keygen </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">t rsa </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_mail@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">f github_rsa</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 公司git</span></span>
<span class="line"><span style="color:#BABED8;">ssh</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">keygen </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">t rsa </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_mail@company.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">f company_rsa</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>生成后把SSH公钥添加到git管理系统配置中</p><ol start="3"><li>生成配置文件<code>config</code>,并添加一下内容</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># github.com</span></span>
<span class="line"><span style="color:#babed8;">Host github.com</span></span>
<span class="line"><span style="color:#babed8;">HostName github.com</span></span>
<span class="line"><span style="color:#babed8;">PreferredAuthentications publickey</span></span>
<span class="line"><span style="color:#babed8;">IdentityFile ~/.ssh/github_rsa</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># gitlab.company.com</span></span>
<span class="line"><span style="color:#babed8;">Host gitlab.company.com</span></span>
<span class="line"><span style="color:#babed8;">HostName gitlab.company.com</span></span>
<span class="line"><span style="color:#babed8;">PreferredAuthentications publickey</span></span>
<span class="line"><span style="color:#babed8;">IdentityFile ~/.ssh/company_rsa</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="4"><li>测试配置是否成功</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">ssh -T git@github.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出返回如下说明配置成功</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Hi gzh4213! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,12),o=[p];function t(r,i,c,b,d,u){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};