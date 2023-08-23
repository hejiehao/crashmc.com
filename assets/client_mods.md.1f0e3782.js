import{_ as t,E as l,o as r,c as p,k as e,a,J as o,S as n}from"./chunks/framework.7291615c.js";const F=JSON.parse('{"title":"模组问题","description":"","frontmatter":{},"headers":[],"relativePath":"client/mods.md","filePath":"client/mods.md","lastUpdated":1692765891000}'),i={name:"client/mods.md"},c=n(`<h1 id="模组问题" tabindex="-1">模组问题 <a class="header-anchor" href="#模组问题" aria-label="Permalink to &quot;模组问题&quot;">​</a></h1><p><code>Minecraft</code> 拥有庞大的玩家社区，也有许多的社区开发者制作 <code>Mod</code> 为原版游戏增加扩展内容及玩法，但同时这也导致了许许多多的问题，这里列出部分常见的 <code>Mod</code> 问题及解决方案。</p><h2 id="java-问题" tabindex="-1">Java 问题 <a class="header-anchor" href="#java-问题" aria-label="Permalink to &quot;Java 问题&quot;">​</a></h2><h3 id="java-版本不匹配" tabindex="-1">Java 版本不匹配 <a class="header-anchor" href="#java-版本不匹配" aria-label="Permalink to &quot;Java 版本不匹配&quot;">​</a></h3><p>解释：有些时候，一些 Mod 会要求特殊的 Java 版本。此时使用不正确的 Java 版本将无法启动游戏。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>除非你匹配到了下方示例中的关键词，否则，我们始终建议保持启动器的 <strong>自动决定 Java</strong> 功能为开启状态。</p></div><p>解决方案：根据 Log 引导，使用正确的 Java 版本启动游戏。检查括号内的 <code>class file version</code> 后跟随的数字，然后在 Java 版本列表里查找对应的 Java 大版本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 示例中是因为使用的 Java 与 Minecraft 要求的 Java 版本不符导致崩溃，应当使用 Java 17</span></span>
<span class="line"><span style="color:#A6ACCD;">// 因为安装了 Mod 导致崩溃时， net/minecraft/client/main/Main 部分会改变</span></span>
<span class="line"><span style="color:#A6ACCD;">// 因此建议只检索 java.lang.UnsupportedClassVersionError 部分</span></span>
<span class="line"><span style="color:#A6ACCD;">java.lang.UnsupportedClassVersionError: net/minecraft/client/main/Main has been compiled by a more recent version of the Java Runtime (class file version 61.0), this version of the Java Runtime only recognizes class file versions up to 52.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 下列几种其他常见日志</span></span>
<span class="line"><span style="color:#A6ACCD;">java.lang.UnsupportedClassVersionError: net/fabricmc/loader/impl/launch/knot/KnotClient : Unsupported major.minor version</span></span>
<span class="line"><span style="color:#A6ACCD;">Unsupported class file major version</span></span></code></pre></div><table><thead><tr><th>关键词</th><th>解决方案</th></tr></thead><tbody><tr><td><code>no such method: sun.misc.Unsafe.defineAnonymousClass</code></td><td>Java 版本过高，降低 Java 版本至 <a href="https://ghproxy.com/https://github.com/bell-sw/Liberica/releases/download/8u312%2B7/bellsoft-jre8u312+7-windows-amd64-full.msi" target="_blank" rel="noreferrer">Java 8u312</a> 或者 <a href="https://ghproxy.com/https://github.com/bell-sw/Liberica/releases/download/11.0.13%2B8/bellsoft-jre11.0.13+8-windows-amd64-full.msi" target="_blank" rel="noreferrer">Java 11.0.13</a></td></tr></tbody></table><p>附 Java 版本查询列表</p><details class="details custom-block"><summary>Java 版本查询列表</summary><table><thead><tr><th>Java 大版本</th><th>Class File Version</th></tr></thead><tbody><tr><td>Java 20</td><td>64</td></tr><tr><td>Java 19</td><td>63</td></tr><tr><td>Java 18</td><td>62</td></tr><tr><td>Java 17</td><td>61</td></tr><tr><td>Java 16</td><td>60</td></tr><tr><td>Java 15</td><td>59</td></tr><tr><td>Java 14</td><td>58</td></tr><tr><td>Java 13</td><td>57</td></tr><tr><td>Java 12</td><td>56</td></tr><tr><td>Java 11</td><td>55</td></tr><tr><td>Java 10</td><td>54</td></tr><tr><td>Java 9</td><td>53</td></tr><tr><td>Java 8</td><td>52</td></tr><tr><td>Java 7</td><td>51</td></tr></tbody></table></details><h3 id="其他-java-问题" tabindex="-1">其他 Java 问题 <a class="header-anchor" href="#其他-java-问题" aria-label="Permalink to &quot;其他 Java 问题&quot;">​</a></h3><p>解释：由于低版本 Forge 和高版本 Java 不兼容，导致了游戏崩溃。</p><p>解决方案：卸载当前 Java 8 ，然后前往其他地方获取版本号在 <code>8u51-8u312</code> 之间的 Java 8。</p>`,14),d={class:"details custom-block"},h=e("summary",null,"常见的第三方启动器获取 Java 方法",-1),u=e("code",null,"本体设置",-1),m=e("code",null,"Java 虚拟机与内存",-1),g=e("code",null,"自动下载",-1),C=n(`<details class="details custom-block"><summary>其他 Java 获取方法</summary><p>从官网下载并手动安装 Java: <a href="https://www.java.com/zh-CN/download/" target="_blank" rel="noreferrer">Java 8</a> | <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noreferrer">JDK 17+</a></p><p>获取 (Java 9+) 且已存档的 JDK 包: <a href="https://jdk.java.net/archive/" target="_blank" rel="noreferrer">https://jdk.java.net/archive/</a></p></details><h2 id="mod-重复安装" tabindex="-1">Mod 重复安装 <a class="header-anchor" href="#mod-重复安装" aria-label="Permalink to &quot;Mod 重复安装&quot;">​</a></h2><p>解释：由于有 Mod 重复安装，导致游戏无法正常运行。</p><p>解决方案：排查重复的 Mod，然后移除重复项直至只剩下一个该 Mod 文件。</p><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">DuplicateModsFoundException</span></span>
<span class="line"><span style="color:#A6ACCD;">Found a duplicate mod</span></span>
<span class="line"><span style="color:#A6ACCD;">ModResolutionException: Duplicate</span></span></code></pre></div><h2 id="mod-过多导致超出-id-限制" tabindex="-1">Mod 过多导致超出 ID 限制 <a class="header-anchor" href="#mod-过多导致超出-id-限制" aria-label="Permalink to &quot;Mod 过多导致超出 ID 限制&quot;">​</a></h2><p>解释：安装的 Mod 过多，超出了游戏的 ID 限制，导致游戏崩溃。</p><p>解决方案：请尝试安装 JEID 等修复 Mod，或删除部分大型 Mod。</p><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">maximum id range exceeded</span></span></code></pre></div><h2 id="解压了-mod" tabindex="-1">解压了 Mod <a class="header-anchor" href="#解压了-mod" aria-label="Permalink to &quot;解压了 Mod&quot;">​</a></h2><p>解释：因为 Mod 文件被解压，导致游戏崩溃。</p><p>解决方案：删除 <code>mods</code> 文件夹中已被解压的 Mod ，然后重新获取被删除的 Mod。</p><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">The directories below appear to be extracted jar files. Fix this before you continue.</span></span>
<span class="line"><span style="color:#A6ACCD;">Extracted mod jars found, loading will NOT continue</span></span></code></pre></div><h2 id="mod-名称含有特殊字符" tabindex="-1">Mod 名称含有特殊字符 <a class="header-anchor" href="#mod-名称含有特殊字符" aria-label="Permalink to &quot;Mod 名称含有特殊字符&quot;">​</a></h2><p>解释：由于 Mod 名称中含有特殊字符，游戏无法正常启动。</p><p>解决方案：删去 Mod 文件名中的特殊字符，然后再次启动游戏。</p><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Invalid module name: &#39;&#39; is not a Java identifier</span></span></code></pre></div><h2 id="mod-文件损坏" tabindex="-1">Mod 文件损坏 <a class="header-anchor" href="#mod-文件损坏" aria-label="Permalink to &quot;Mod 文件损坏&quot;">​</a></h2><p>解释：可能在下载 Mod 文件时出现一些意外，导致 Mod 文件读取时出错。</p><p>解决方案：重新下载这个 Mod 并将原来的替换。</p><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 可查看上下文观察是哪个 Mod 损坏了。</span></span>
<span class="line"><span style="color:#A6ACCD;">Caused by: java.util.zip.ZipException: zip END header not found</span></span></code></pre></div><h2 id="一些-mod-需要访问国外网络" tabindex="-1">一些 Mod 需要访问国外网络 <a class="header-anchor" href="#一些-mod-需要访问国外网络" aria-label="Permalink to &quot;一些 Mod 需要访问国外网络&quot;">​</a></h2><p>解释：一些整合包里会内置一个自动下载 Mod 的 Mod，但部分 Mod 需要访问国外网络才能顺利下载。下面列出目前已知访问国外网络的 Mod：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 这个 Mod 会访问失败时直接崩溃游戏</span></span>
<span class="line"><span style="color:#A6ACCD;">- modpack-update-checker</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这个 Mod 会让游戏在加载 Mod 阶段未响应</span></span>
<span class="line"><span style="color:#A6ACCD;">- commonality</span></span></code></pre></div><p>解决方案：</p><p>1.尝试禁用这些 Mod；</p><p>2.使用加速器或 VPN。</p><h2 id="forge" tabindex="-1">Forge <a class="header-anchor" href="#forge" aria-label="Permalink to &quot;Forge&quot;">​</a></h2><h3 id="json-问题" tabindex="-1">Json 问题 <a class="header-anchor" href="#json-问题" aria-label="Permalink to &quot;Json 问题&quot;">​</a></h3><p>解释：可能由于使用一些启动器修改了 Forge 版本，当前实例的 Json 文件存在异常。</p><p>解决方案：</p><p>重新安装：请尝试重新全新安装 Forge，而非使用其他启动器修改 Forge 版本。</p>`,37),b=e("code",null,"核心列表",-1),y=e("code",null,"核心高级设置",-1),f=e("code",null,"恢复 / 删除",-1),M=e("code",null,"重置此核心",-1),v=n(`<p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Found multiple arguments for option fml.forgeVersion, but you asked for only one</span></span></code></pre></div><h3 id="night-config-库的问题" tabindex="-1">Night Config 库的问题 <a class="header-anchor" href="#night-config-库的问题" aria-label="Permalink to &quot;Night Config 库的问题&quot;">​</a></h3><p>解释：Night Config 库的一些常见问题导致的，会导致无法读取配置文件。有关详细信息，可访问<a href="https://github.com/Fuzss/nightconfigfixes#readme" target="_blank" rel="noreferrer">此处</a>查看。</p><p>解决方案：请尝试下载并安装该 Mod：<code>Night Config Fixes</code>。<a href="https://www.mcmod.cn/class/9007.html" target="_blank" rel="noreferrer">MC百科</a> | <a href="https://www.curseforge.com/minecraft/mc-mods/night-config-fixes" target="_blank" rel="noreferrer">CurseForge</a></p><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Caused by: com.electronwill.nightconfig.core.io.ParsingException: Not enough data available</span></span></code></pre></div><h3 id="缺少前置" tabindex="-1">缺少前置 <a class="header-anchor" href="#缺少前置" aria-label="Permalink to &quot;缺少前置&quot;">​</a></h3><p>解释：有 Mod 依赖其他 Mod 运行，但未安装依赖的 Mod。</p><p>解决方案：</p><ol><li>安装依赖 Mod</li></ol><p>找到 <code>Mod ID</code> 字样，然后根据后面提示的 Mod 信息查找对应 Mod 并下载安装。</p><p>如果一个 Mod 要求特定版本的另一个 Mod ，那么你应当寻找符合要求的 Mod 版本。</p><p>相关英文提示： any -&gt; 任何 ； version(s) -&gt; 版本 ； require(s) -&gt; 要求，需要 ； of -&gt; 的（介词）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在示例中，您应该安装 Boatload Mod 的前置 Mod：Blueprint 高于 5.4.0 的版本。</span></span>
<span class="line"><span style="color:#A6ACCD;">Missing or unsupported mandatory dependencies:</span></span>
<span class="line"><span style="color:#A6ACCD;">        Mod ID: &#39;blueprint&#39;, Requested by: &#39;boatload&#39;, Expected range: &#39;[5.4.0,)&#39;, Actual version: &#39;[MISSING]&#39;</span></span></code></pre></div><p>您也可以通过 <a href="https://www.mcmod.cn/" target="_blank" rel="noreferrer">MC百科</a>、<a href="https://modrinth.com/mods" target="_blank" rel="noreferrer">Modrinth</a>、<a href="https://www.curseforge.com/minecraft/mc-mods" target="_blank" rel="noreferrer">CurseForge</a> 等网站搜索 Mod 所需的前置 Mod。</p><blockquote><p>Modrinth 和 CurseForge 目前为止未提供中文界面，有困难的用户建议使用 MC百科 进行查询。</p></blockquote><ol start="2"><li>删除需要前置的 Mod</li></ol><p>找到 <code>Requested by</code> 字样，然后根据前面提示的 Mod 信息删除对应 Mod。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在示例中，您应该删除 Boatload Mod。</span></span>
<span class="line"><span style="color:#A6ACCD;">Missing or unsupported mandatory dependencies:</span></span>
<span class="line"><span style="color:#A6ACCD;">        Mod ID: &#39;blueprint&#39;, Requested by: &#39;boatload&#39;, Expected range: &#39;[5.4.0,)&#39;, Actual version: &#39;[MISSING]&#39;</span></span></code></pre></div><p>关键词</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Missing or unsupported mandatory dependencies:</span></span></code></pre></div><h2 id="neoforge" tabindex="-1">NeoForge <a class="header-anchor" href="#neoforge" aria-label="Permalink to &quot;NeoForge&quot;">​</a></h2><h3 id="缺少前置-1" tabindex="-1">缺少前置 <a class="header-anchor" href="#缺少前置-1" aria-label="Permalink to &quot;缺少前置&quot;">​</a></h3><p>解释：有 Mod 依赖其他 Mod 运行，但未安装依赖的 Mod。</p><p>解决方案：</p><ol><li>安装依赖 Mod</li></ol><p>找到 <code>Mod ID</code> 字样，然后根据后面提示的 Mod 信息查找对应 Mod 并下载安装。</p><p>如果一个 Mod 要求特定版本的另一个 Mod ，那么你应当寻找符合要求的 Mod 版本。</p><p>相关英文提示： any -&gt; 任何 ； version(s) -&gt; 版本 ； require(s) -&gt; 要求，需要 ； of -&gt; 的（介词）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在示例中，您应该安装 Boatload Mod 的前置 Mod：Blueprint 高于 5.4.0 的版本。</span></span>
<span class="line"><span style="color:#A6ACCD;">Missing or unsupported mandatory dependencies:</span></span>
<span class="line"><span style="color:#A6ACCD;">        Mod ID: &#39;blueprint&#39;, Requested by: &#39;boatload&#39;, Expected range: &#39;[5.4.0,)&#39;, Actual version: &#39;[MISSING]&#39;</span></span></code></pre></div><p>您也可以通过 <a href="https://www.mcmod.cn/" target="_blank" rel="noreferrer">MC百科</a>、<a href="https://modrinth.com/mods" target="_blank" rel="noreferrer">Modrinth</a>、<a href="https://www.curseforge.com/minecraft/mc-mods" target="_blank" rel="noreferrer">CurseForge</a> 等网站搜索 Mod 所需的前置 Mod。</p><blockquote><p>Modrinth 和 CurseForge 目前为止未提供中文界面，有困难的用户建议使用 MC百科 进行查询。</p></blockquote><ol start="2"><li>删除需要前置的 Mod</li></ol><p>找到 <code>Requested by</code> 字样，然后根据前面提示的 Mod 信息删除对应 Mod。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在示例中，您应该删除 Boatload Mod。</span></span>
<span class="line"><span style="color:#A6ACCD;">Missing or unsupported mandatory dependencies:</span></span>
<span class="line"><span style="color:#A6ACCD;">        Mod ID: &#39;blueprint&#39;, Requested by: &#39;boatload&#39;, Expected range: &#39;[5.4.0,)&#39;, Actual version: &#39;[MISSING]&#39;</span></span></code></pre></div><p>关键词</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Missing or unsupported mandatory dependencies:</span></span></code></pre></div><h2 id="fabric" tabindex="-1">Fabric <a class="header-anchor" href="#fabric" aria-label="Permalink to &quot;Fabric&quot;">​</a></h2><h3 id="版本不兼容" tabindex="-1">版本不兼容 <a class="header-anchor" href="#版本不兼容" aria-label="Permalink to &quot;版本不兼容&quot;">​</a></h3><p>解释：有 Mod 与当前游戏版本不兼容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在示例中，你应该安装 Fabric API 1.20.1 版</span></span>
<span class="line"><span style="color:#A6ACCD;">- Mod &#39;Fabric API&#39; (fabric-api) 0.82.1+1.20 requires any version between 1.20- (inclusive) and 1.20.1- (exclusive) of &#39;Minecraft&#39; (minecraft), but only the wrong version is present: 1.20.1!</span></span></code></pre></div><h3 id="缺少前置-2" tabindex="-1">缺少前置 <a class="header-anchor" href="#缺少前置-2" aria-label="Permalink to &quot;缺少前置&quot;">​</a></h3><p>解释：有 Mod 依赖其他 Mod 运行，但未安装依赖的 Mod。</p><p>解决方案：</p><ol><li>安装依赖 Mod</li></ol><p>在 <code>Unmet dependency listing</code> 中找到 <code>requires</code> 字样，然后根据后面提示的 Mod 信息查找对应 Mod 并下载安装。</p><p>如果一个 Mod 要求特定版本的另一个 Mod ，那么你应当寻找符合要求的 Mod 版本。</p><p>相关英文提示： any -&gt; 任何 ； version(s) -&gt; 版本 ； require(s) -&gt; 要求，需要 ； of -&gt; 的（介词）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在示例中，您应该安装 Zoomify Mod 的前置 Mod：Fabric API。</span></span>
<span class="line"><span style="color:#A6ACCD;">Unmet dependency listing:</span></span>
<span class="line"><span style="color:#A6ACCD;">	 - Mod &#39;Zoomify&#39; (zoomify) 2.11.0 requires any version of fabric-api, which is missing!</span></span></code></pre></div><p>您也可以通过 <a href="https://www.mcmod.cn/" target="_blank" rel="noreferrer">MC 百科</a>、<a href="https://modrinth.com/mods" target="_blank" rel="noreferrer">Modrinth</a>、<a href="https://www.curseforge.com/minecraft/mc-mods" target="_blank" rel="noreferrer">CurseForge</a> 等网站搜索 Mod 所需的前置 Mod。</p><blockquote><p>Modrinth 和 CurseForge 目前为止未提供中文界面，有困难的用户建议使用 MC 百科 进行查询。</p></blockquote><ol start="2"><li>删除需要前置的 Mod</li></ol><p>在 <code>Unmet dependency listing</code> 中找到 <code>requires</code> 字样，然后根据前面提示的 Mod 信息删除对应 Mod。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在示例中，您应该删除 Zoomify Mod。</span></span>
<span class="line"><span style="color:#A6ACCD;">Unmet dependency listing:</span></span>
<span class="line"><span style="color:#A6ACCD;">	 - Mod &#39;Zoomify&#39; (zoomify) 2.11.0 requires any version of fabric-api, which is missing!</span></span></code></pre></div><p>关键词</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">net.fabricmc.loader.impl.FormattedException: Mod resolution encountered an incompatible mod set!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">which is missing!</span></span></code></pre></div><h3 id="mod-冲突" tabindex="-1">Mod 冲突 <a class="header-anchor" href="#mod-冲突" aria-label="Permalink to &quot;Mod 冲突&quot;">​</a></h3><p>解释：由于两个或多个 Mod 互相冲突，导致游戏无法正常运行。</p><p>解决方案：移除相互冲突的其中一个 Mod。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在示例中，您应该移除 OptiFabric，或移除 Sodium 和 Iris</span></span>
<span class="line"><span style="color:#A6ACCD;">net.fabricmc.loader.impl.FormattedException: Mod resolution encountered an incompatible mod set!</span></span>
<span class="line"><span style="color:#A6ACCD;">A potential solution has been determined:</span></span>
<span class="line"><span style="color:#A6ACCD;">	 - Replace mod &#39;Sodium&#39; (sodium) 0.4.10+build.27 with any version that is compatible with:</span></span>
<span class="line"><span style="color:#A6ACCD;">		 - optifabric 1.13.25</span></span>
<span class="line"><span style="color:#A6ACCD;">	 - Replace mod &#39;Iris&#39; (iris) 1.6.4 with any version that is compatible with:</span></span>
<span class="line"><span style="color:#A6ACCD;">		 - optifabric 1.13.25</span></span></code></pre></div><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">net.fabricmc.loader.impl.FormattedException: Mod resolution encountered an incompatible mod set!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">that is compatible with</span></span></code></pre></div><h2 id="quilt" tabindex="-1">Quilt <a class="header-anchor" href="#quilt" aria-label="Permalink to &quot;Quilt&quot;">​</a></h2><h3 id="缺少前置-3" tabindex="-1">缺少前置 <a class="header-anchor" href="#缺少前置-3" aria-label="Permalink to &quot;缺少前置&quot;">​</a></h3><p>解释：有 Mod 依赖于其他 Mod 运行，但未安装依赖的 Mod。</p><p>解决方案：</p><ol><li>安装依赖 Mod</li></ol><p>在 <code>Unmet dependency listing</code> 中找到 <code>requires</code> 字样，然后根据后面提示的 Mod 信息查找对应 Mod 并下载安装。</p><p>如果一个 Mod 要求特定版本的另一个 Mod ，那么你应当寻找符合要求的 Mod 版本。在 Quilt 中，括号中的前面一串数字代表最低版本，后面一串数字代表最高版本。</p><p>相关英文提示： any -&gt; 任何 ； version(s) -&gt; 版本 ； require(s) -&gt; 要求，需要 ； of -&gt; 的（介词）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在示例中，您应该安装 Sodium Extra Mod 的前置 Mod：Sodium。</span></span>
<span class="line"><span style="color:#A6ACCD;">Sodium Extra requires version [0.4.10, ∞) of sodium, which is missing!</span></span></code></pre></div><p>您也可以通过 <a href="https://www.mcmod.cn/" target="_blank" rel="noreferrer">MC 百科</a>、<a href="https://modrinth.com/mods" target="_blank" rel="noreferrer">Modrinth</a>、<a href="https://www.curseforge.com/minecraft/mc-mods" target="_blank" rel="noreferrer">CurseForge</a> 等网站搜索 Mod 所需的前置 Mod。</p><blockquote><p>Modrinth 和 CurseForge 目前为止未提供中文界面，有困难的用户建议使用 MC 百科 进行查询。</p></blockquote><ol start="2"><li>删除需要前置的 Mod</li></ol><p>在 <code>Unmet dependency listing</code> 中找到 <code>requires</code> 字样，然后根据前面提示的 Mod 信息删除对应 Mod。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在示例中，您应该删除 Sodium Extra Mod。</span></span>
<span class="line"><span style="color:#A6ACCD;">Sodium Extra requires version [0.4.10, ∞) of sodium, which is missing!</span></span></code></pre></div><p>关键词</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">which is missing!</span></span></code></pre></div><h2 id="liteloader" tabindex="-1">LiteLoader <a class="header-anchor" href="#liteloader" aria-label="Permalink to &quot;LiteLoader&quot;">​</a></h2><h3 id="缺少前置-4" tabindex="-1">缺少前置 <a class="header-anchor" href="#缺少前置-4" aria-label="Permalink to &quot;缺少前置&quot;">​</a></h3><p>解释：有 Mod 依赖其他 Mod 运行，但未安装依赖的 Mod。</p><p>请注意：与其他 Mod 加载器不同的是，通过 LiteLoader 加载的 Mod 在缺少前置的时候并不会导致游戏崩溃，因此您需要手动查看是否存在前置 Mod 缺失的情况。</p><p>进入游戏后，点击游戏右上角的半透明浮窗即可查看通过 LiteLoader 安装的 Mod 列表。</p><p>在一般情况下，点击显示 <code>缺少前置库</code> 的 Mod 后，会打开该 Mod 的详情界面，在界面中会提示您该 Mod 所需要的前置。</p><p><img src="https://cdn.crashmc.com/https://raw.githubusercontent.com/bingxin666/crashmc_pic/main/client/mods/liteloader-mod-02.png" alt="Liteloader-mod-01" title="提示缺少的前置库"></p><p>解决方案：</p><ol><li>安装依赖 Mod</li></ol><p>您可以通过 <a href="https://www.mcmod.cn/" target="_blank" rel="noreferrer">MC 百科</a>、<a href="https://modrinth.com/mods" target="_blank" rel="noreferrer">Modrinth</a>、<a href="https://www.curseforge.com/minecraft/mc-mods" target="_blank" rel="noreferrer">CurseForge</a> 等网站搜索 Mod 所需的前置 Mod。</p><blockquote><p>Modrinth 和 CurseForge 目前为止未提供中文界面，有困难的用户建议使用 MC 百科 进行查询。</p></blockquote><ol start="2"><li>删除需要前置的 Mod</li></ol><p>根据 Mod 列表的提示，手动删除对应的 Mod。</p><h3 id="与-forge-冲突" tabindex="-1">与 Forge 冲突 <a class="header-anchor" href="#与-forge-冲突" aria-label="Permalink to &quot;与 Forge 冲突&quot;">​</a></h3><p>解释：由于 LiteLoader 与 Forge 冲突，游戏崩溃了。</p><p>解决方案：卸载 LiteLoader（重新安装没有 LiteLoader 的实例，然后迁移数据）。</p><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">org.spongepowered.asm.service.ServiceInitialisationException: ModLauncher is not available</span></span></code></pre></div><h2 id="optifine" tabindex="-1">OptiFine <a class="header-anchor" href="#optifine" aria-label="Permalink to &quot;OptiFine&quot;">​</a></h2><h4 id="无法加载世界" tabindex="-1">无法加载世界 <a class="header-anchor" href="#无法加载世界" aria-label="Permalink to &quot;无法加载世界&quot;">​</a></h4><p>解释：使用的 OptiFine 导致了游戏出现问题。</p><p>解决方案：可以尝试更换 OptiFine 的版本。</p><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">java.lang.NoSuchMethodError: net.minecraft.world.server.ChunkManager$ProxyTicketManager.shouldForceTicks(J)Z</span></span></code></pre></div><h4 id="forge-与-optifine-兼容性问题导致的崩溃" tabindex="-1">Forge 与 OptiFine 兼容性问题导致的崩溃 <a class="header-anchor" href="#forge-与-optifine-兼容性问题导致的崩溃" aria-label="Permalink to &quot;Forge 与 OptiFine 兼容性问题导致的崩溃&quot;">​</a></h4><p>解释：使用的 Forge 版本过高 / 过低 或 OptiFine 并未兼容该版本的 Forge，导致游戏崩溃。</p><p>解决方案：前往 <a href="https://optifine.net/downloads" target="_blank" rel="noreferrer">OptiFine 官网</a> ，按照提示安装对应的 Forge 版本。</p><p>提示：</p><ul><li><p>点击 <code>Show all versions</code> 即可展开所有的游戏版本，点击 <code>+ More</code> 和 <code>+ Preview versions</code> 可展开更多；</p></li><li><p>若显示 <code>Forge N/A</code> 则代表该版本的 OptiFine 不兼容任何 Forge 版本。</p></li></ul><p>你可以在日志中逐个匹配下面的关键词，以确定是否是该原因导致崩溃（关键词仅供参考）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">java.lang.NoSuchMethodError: &#39;void net.minecraftforge.client.gui.overlay.ForgeGui.renderSelectedItemName(net.minecraft.client.gui.GuiGraphics, int)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">java.lang.NoSuchMethodError: &#39;java.lang.Class sun.misc.Unsafe.defineAnonymousClass(java.lang.Class, byte[], java.lang.Object[])&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">java.lang.NoSuchMethodError: &#39;java.lang.String com.mojang.blaze3d.systems.RenderSystem.getBackendDescription()&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">java.lang.NoSuchMethodError: &#39;net.minecraft.network.chat.FormattedText net.minecraft.client.gui.Font.ellipsize(net.minecraft.network.chat.FormattedText, int)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">java.lang.NoSuchMethodError: &#39;void net.minecraft.server.level.DistanceManager</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">java.lang.NoSuchMethodError: &#39;void net.minecraft.client.renderer.block.model.BakedQuad.&lt;init&gt;(int[], int, net.minecraft.core.Direction, net.minecraft.client.renderer.texture.TextureAtlasSprite, boolean, boolean)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">java.lang.NoSuchMethodError: &#39;void net.minecraft.client.renderer.texture.SpriteContents.&lt;init&gt;(net.minecraft.resources.ResourceLocation</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">java.lang.NoSuchMethodError: &#39;void net.minecraft.server.level.DistanceManager.addRegionTicket(net.minecraft.server.level.TicketType, net.minecraft.world.level.ChunkPos, int, java.lang.Object, boolean)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">java.lang.NoSuchMethodError: net.minecraft.launchwrapper.ITweaker.injectIntoClassLoader(Lnet/minecraft/launchwrapper/LaunchClassLoader;)V</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">TRANSFORMER/net.optifine/net.optifine.reflect.Reflector.&lt;clinit&gt;(Reflector.java</span></span></code></pre></div>`,110);function A(k,D,_,q,w,x){const s=l("LauncherBadge");return r(),p("div",null,[c,e("details",d,[h,e("p",null,[a("在"),o(s,{type:"bakaxl",text:"BakaXL"}),a("启动器设置中获取 Java：前往 "),u,a(" -> "),m,a(" ，点击获取对应的 Java 版本。")]),e("p",null,[a("在"),o(s,{type:"pcl",text:"PCL2"}),a("启动器中获取 Java：卸载当前 Java 后重启启动器，直接点击启动游戏，启动器提示自动补全 Java 时，点击 "),g,a(" 。")]),e("p",null,[a("在"),o(s,{type:"hmcl",text:"HMCL"}),a("启动器中获取 Java：卸载当前 Java 后重启启动器，按照启动器引导下载 Java。")])]),C,e("p",null,[a("重置核心"),o(s,{type:"bakaxl",text:"仅 BakaXL"}),a(" ：前往 "),b,a(" -> "),y,a(" -> "),f,a(" -> "),M,a(" 尝试重置核心。")]),v])}const P=t(i,[["render",A]]);export{F as __pageData,P as default};
