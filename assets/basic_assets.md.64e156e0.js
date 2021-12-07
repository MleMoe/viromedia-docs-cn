import{_ as n,c as s,o as a,a as t}from"./app.551f901f.js";const m='{"title":"Assets \u8D44\u6E90","description":"","frontmatter":{"sidebarDepth":4},"headers":[{"level":2,"title":"\u652F\u6301\u7684\u8D44\u6E90\u7C7B\u578B","slug":"\u652F\u6301\u7684\u8D44\u6E90\u7C7B\u578B"},{"level":2,"title":"\u589E\u52A0\u8D44\u6E90\u7C7B\u522B","slug":"\u589E\u52A0\u8D44\u6E90\u7C7B\u522B"}],"relativePath":"basic/assets.md","lastUpdated":1638858231801}',p={},o=t(`<h1 id="assets-\u8D44\u6E90" tabindex="-1">Assets \u8D44\u6E90 <a class="header-anchor" href="#assets-\u8D44\u6E90" aria-hidden="true">#</a></h1><p>\u5C06\u8D44\u6E90\u52A0\u8F7D\u5230\u4F60\u7684\u573A\u666F\u4E2D</p><p>\u8D44\u6E90\u662F\u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u6587\u672C\u6216\u4E8C\u8FDB\u5236\u8D44\u6E90\u3002\u5176\u4E2D\u5305\u62EC\u56FE\u50CF\u3001\u7EB9\u7406\u3001\u58F0\u97F3\u3001\u89C6\u9891\u7B49\u3002\u5BF9\u4E8E\u7EDD\u5927\u591A\u6570\u7EC4\u4EF6\uFF0C\u5305\u62EC <code>&lt;ViroImage&gt;</code>\u3001<code>&lt;ViroSound&gt;</code>\u3001<code>&lt;ViroVideo&gt;</code> \u7B49\uFF0C\u8981\u4F7F\u7528\u7684\u8D44\u6E90\u662F\u901A\u8FC7 source \u5C5E\u6027\u6307\u5B9A\u7684\u3002</p><p><code>source</code> \u63A5\u53D7\u672C\u5730\u548C\u8FDC\u7A0B\u8D44\u6E90\u3002\u8981\u4F7F\u7528\u672C\u5730\u8D44\u6E90\uFF0C\u8BF7\u4F7F\u7528 require \u51FD\u6570\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>Viro360Image source<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./res/360_park.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre></div><p>\u5728\u8C03\u8BD5\u7248\u672C\u4E2D\uFF0C\u672C\u5730\u8D44\u6E90\u4ECE\u6B63\u5728\u8FD0\u884C\u7684\u5305\u670D\u52A1\u5668\u4E2D\u63D0\u53D6\u3002\u5728\u53D1\u5E03\u7248\u672C\u4E2D\uFF0C\u672C\u5730\u8D44\u6E90\u4E0E\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u6346\u7ED1\u5728\u4E00\u8D77\u3002</p><p>\u8981\u4F7F\u7528\u8FDC\u7A0B\u8D44\u6E90\uFF0C\u53EA\u9700\u8BBE\u7F6E\u6E90 URI\uFF0C\u5982\u4E0B\u4F8B\u6240\u793A\uFF1A</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>Viro360Image source<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> uri<span class="token operator">:</span> <span class="token string">&#39;https://www.mywebsite.com/360_park.jpg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre></div><blockquote><p><strong>\u8D44\u6E90\u6587\u4EF6\u547D\u540D\u6307\u5357</strong> \u5305\u670D\u52A1\u5668\u548C\u8D44\u6E90\u6346\u7ED1\u5668\u5C06\u65E0\u6CD5\u6B63\u786E\u63D0\u4F9B\u540D\u79F0\u4E2D\u5305\u542B\u7A7A\u683C\u3001\u8FDE\u5B57\u7B26\u3001\u62EC\u53F7\u6216\u5176\u5B83\u7B26\u53F7\u7684\u8D44\u6E90\u3002 \u540D\u79F0\u76F8\u540C\u4F46\u6269\u5C55\u540D\u4E0D\u540C\u7684\u8D44\u6E90\u5728 Android \u4E0A\u4E0D\u8D77\u4F5C\u7528\u3002\u4E3A\u6BCF\u4E2A\u8D44\u6E90\u63D0\u4F9B\u552F\u4E00\u7684\u540D\u79F0\u3002</p></blockquote><h2 id="\u652F\u6301\u7684\u8D44\u6E90\u7C7B\u578B" tabindex="-1">\u652F\u6301\u7684\u8D44\u6E90\u7C7B\u578B <a class="header-anchor" href="#\u652F\u6301\u7684\u8D44\u6E90\u7C7B\u578B" aria-hidden="true">#</a></h2><p>React Native \u5F00\u7BB1\u5373\u7528\u5730\u652F\u6301\u4EE5\u4E0B\u8D44\u6E90\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4EEC\u5C06\u5728\u53D1\u5E03\u6A21\u5F0F\u4E0B\u4E0E\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u4E00\u8D77\u6253\u5305\uFF0C\u5E76\u5728\u8C03\u8BD5\u6A21\u5F0F\u4E0B\u7531\u4F60\u7684\u5305\u670D\u52A1\u5668\u652F\u6301\u83B7\u53D6\u3002</p><p>\u56FE\u7247\u683C\u5F0F\uFF1A\u201Cjpg\u201D\u3001\u201Cjpeg\u201D\u3001\u201Cpng\u201D\u3001\u201Cgif\u201D \u89C6\u9891\u683C\u5F0F\uFF1A\u201Cm4v\u201D\u3001\u201Cmov\u201D\u3001\u201Cmp4\u201D\u3001\u201Cmpeg\u201D\u3001\u201Cmpg\u201D\u3001\u201Cwebm\u201D \u97F3\u9891\u683C\u5F0F\uFF1A\u201Caac\u201D\u3001\u201Caiff\u201D\u3001\u201Ccaf\u201D\u3001\u201Cm4a\u201D\u3001\u201Cmp3\u201D\u3001\u201Cwav\u201D</p><p>\u6B64\u5916\uFF0CViro \u589E\u52A0\u4E86\u5BF9 3D \u5BF9\u8C61\u8D44\u6E90\u7684\u652F\u6301\uFF1A 3D \u5BF9\u8C61\u683C\u5F0F\uFF1Aobj\u3001mtl\u3001vrx\uFF08Viro \u81EA\u5B9A\u4E49 3d \u6A21\u578B\u683C\u5F0F\uFF09\u3001gltf\u3001glb\u3001bin\u3001arobject</p><blockquote><p>Viro \u4EC5\u4E3A\u901A\u8FC7 react-viro-cli \u811A\u672C\u521B\u5EFA\u7684\u9879\u76EE\u6DFB\u52A0\u4E86\u5BF9\u8FD9\u4E9B\u683C\u5F0F\u7684\u652F\u6301\u3002\u5BF9\u4E8E\u4E0D\u662F\u4F7F\u7528\u6B64\u811A\u672C\u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u5FC5\u987B\u6309\u7167\u4E0B\u4E00\u90E8\u5206\u624B\u52A8\u6DFB\u52A0\u8FD9\u4E9B\u683C\u5F0F\u3002</p></blockquote><h2 id="\u589E\u52A0\u8D44\u6E90\u7C7B\u522B" tabindex="-1">\u589E\u52A0\u8D44\u6E90\u7C7B\u522B <a class="header-anchor" href="#\u589E\u52A0\u8D44\u6E90\u7C7B\u522B" aria-hidden="true">#</a></h2><blockquote><p>\u533A\u5206\u5927\u5C0F\u5199 \u8D44\u6E90\u7C7B\u578B\u533A\u5206\u5927\u5C0F\u5199\uFF01\u4F8B\u5982\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u652F\u6301\u201CJPG\u201D\u4F5C\u4E3A\u6269\u5C55\u540D\uFF0C\u800C\u201Cjpg\u201D\u652F\u6301\u3002</p></blockquote><p>\u8981\u6DFB\u52A0\u5176\u5B83\u8D44\u6E90\u7C7B\u578B\uFF0C\u8BF7\u7F16\u8F91\uFF08\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\uFF09\u9879\u76EE\u6839\u76EE\u5F55\uFF08\u5305\u542B node_modules \u7684\u6587\u4EF6\u5939\uFF09\u7684 rn-cli.config \u6587\u4EF6\u3002\u5728\u6B64\u6587\u4EF6\u4E2D\uFF0C\u7F16\u8F91 getAssetExts() \u4EE5\u8FD4\u56DE\u4F60\u60F3\u8981\u5305\u542B\u7684\u5176\u5B83\u8D44\u6E90\u7C7B\u578B\u3002</p><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> blacklist <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;react-native/packager/blacklist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">getProjectRoots</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getRoots</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">getAssetRoots</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getRoots</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">getAssetExts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;mtl&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;JPG&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;vrx&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;hdr&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;gltf&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;glb&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;bin&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;arobject&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;gif&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">getBlacklistRE</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">blacklist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">_getRoots</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// match on either path separator</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__dirname<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules[\\/\\\\]react-native[\\/\\\\]packager$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// packager is running from node_modules of another project</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../../..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__dirname<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Pods\\/React\\/packager$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// packager is running from node_modules of another project</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../../..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">getTransformModulePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;react-native/packager/transformer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,18),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
