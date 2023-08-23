import{_ as s,o as n,c as a,S as l}from"./chunks/framework.7291615c.js";const d=JSON.parse('{"title":"客户端介绍","description":"","frontmatter":{},"headers":[],"relativePath":"client/index.md","filePath":"client/index.md","lastUpdated":1692765891000}'),p={name:"client/index.md"},e=l(`<h1 id="客户端介绍" tabindex="-1">客户端介绍 <a class="header-anchor" href="#客户端介绍" aria-label="Permalink to &quot;客户端介绍&quot;">​</a></h1><h2 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h2><p>Minecraft 客户端，是 Minecraft 游戏本身一大组成部分。通俗来说，玩家游玩的 Minecraft 游戏本身就是客户端。</p><p>客户端需要使用 <code>启动器</code> 启动。有关启动器，可以参考<a href="https://crashmc.com/basis.html" target="_blank" rel="noreferrer">基础知识</a>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果您对 Minecraft 有较详细的理解，那么您不必完整阅读。</p></div><h2 id="游戏文件-日志" tabindex="-1">游戏文件 &amp; 日志 <a class="header-anchor" href="#游戏文件-日志" aria-label="Permalink to &quot;游戏文件 &amp; 日志&quot;">​</a></h2><p>游戏的文件目录一般如下所示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.minecraft</span></span>
<span class="line"><span style="color:#A6ACCD;">├─assets</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─indexes</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─objects</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─00</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─01</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─02</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─03</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─04</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─05</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─06</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─07</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─08</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─09</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0a</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0b</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0c</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0d</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0e</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0f</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─10</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─11</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─12</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─...</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─fe</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ff</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─skins</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─00</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─01</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─02</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─03</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─04</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─05</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─06</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─07</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─08</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─09</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0a</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0b</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0c</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0d</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0e</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─0f</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─10</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─11</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─12</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─...</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─fe</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ff</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─virtual</span></span>
<span class="line"><span style="color:#A6ACCD;">│      └─legacy</span></span>
<span class="line"><span style="color:#A6ACCD;">│          ├─...</span></span>
<span class="line"><span style="color:#A6ACCD;">├─libraries</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─...</span></span>
<span class="line"><span style="color:#A6ACCD;">└─versions</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─[版本名]</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─[版本名]-natives</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─crash-reports</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─logs</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─mods</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─resourcepacks</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─saves</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │  └─[存档名]</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      ├─advancements</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      ├─data</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      ├─datapacks</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      ├─DIM-1</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      │  └─data</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      ├─DIM1</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      │  └─data</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      ├─entities</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      ├─playerdata</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      ├─poi</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      ├─region</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      ├─serverconfig</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │      └─stats</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  └─screenshots</span></span></code></pre></div><p>这其中，我们要寻找的日志如下。部分启动器也支持导出错误报告，此时可以在错误报告中直接寻找。</p><ul><li><p>关闭版本隔离：<code>.minecraft\\crash-reports\\crash-***.txt</code></p></li><li><p>开启版本隔离：<code>.minecraft\\versions\\***\\crash-reports\\crash-***.txt</code></p></li></ul><h2 id="处理崩溃" tabindex="-1">处理崩溃 <a class="header-anchor" href="#处理崩溃" aria-label="Permalink to &quot;处理崩溃&quot;">​</a></h2><p>得到了崩溃日志，就可以处理崩溃了。在接下来的文档中，有针对于 Mod 问题、系统问题、原版问题的解决方案，您可以对照日志自行参考解决。</p><p>最后，希望我们能帮助您成功解决问题，祝您游玩愉快！</p>`,13),c=[e];function o(t,C,r,A,i,y){return n(),a("div",null,c)}const h=s(p,[["render",o]]);export{d as __pageData,h as default};
