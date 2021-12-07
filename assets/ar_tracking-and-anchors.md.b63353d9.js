import{_ as n,c as a,o as s,a as o}from"./app.551f901f.js";const m='{"title":"\u8FFD\u8E2A\u4E0E\u951A\u70B9","description":"","frontmatter":{"sidebarDepth":4},"headers":[{"level":2,"title":"\u76F8\u673A\u8FFD\u8E2A","slug":"\u76F8\u673A\u8FFD\u8E2A"},{"level":2,"title":"\u951A\u68C0\u6D4B","slug":"\u951A\u68C0\u6D4B"},{"level":3,"title":"\u81EA\u52A8\u951A\u5B9A","slug":"\u81EA\u52A8\u951A\u5B9A"},{"level":3,"title":"\u624B\u52A8\u951A\u5B9A","slug":"\u624B\u52A8\u951A\u5B9A"}],"relativePath":"ar/tracking-and-anchors.md","lastUpdated":1638858231801}',e={},t=o(`<h1 id="\u8FFD\u8E2A\u4E0E\u951A\u70B9" tabindex="-1">\u8FFD\u8E2A\u4E0E\u951A\u70B9 <a class="header-anchor" href="#\u8FFD\u8E2A\u4E0E\u951A\u70B9" aria-hidden="true">#</a></h1><p>\u5F53\u4F60\u4F7F\u7528 AR \u65F6\uFF0C\u4F60\u4F1A\u5173\u6CE8\u7684\u7B2C\u4E00\u4EF6\u4E8B\u4E00\u5B9A\u662F\u76F8\u673A\u4F20\u9001\u8FC7\u6765\u7684\u80CC\u666F\u5F71\u50CF\u3002\u8FD9\u4E2A\u76F8\u673A\u80CC\u666F\u4EE3\u8868\u7740\u771F\u5B9E\u4E16\u754C\u3002Viro \u53EF\u4EE5\u8BA9\u4F60\u4E0E\u771F\u5B9E\u4E16\u754C\u878D\u5408\u865A\u62DF\u5BF9\u8C61\u548C UI\u3002\u53EF\u4EE5\u4F7F\u7528\u8DDF\u8E2A\u548C\u951A\u70B9\u6765\u5B8C\u6210\u6B64\u64CD\u4F5C\u3002</p><h2 id="\u76F8\u673A\u8FFD\u8E2A" tabindex="-1">\u76F8\u673A\u8FFD\u8E2A <a class="header-anchor" href="#\u76F8\u673A\u8FFD\u8E2A" aria-hidden="true">#</a></h2><p>viro \u652F\u6301 6 \u81EA\u7531\u5EA6\u7684 AR \u4F53\u9A8C\u5F00\u53D1\uFF0C\u8FD9\u610F\u5473\u7740 viro \u901A\u8FC7\u79FB\u52A8\u865A\u62DF\u76F8\u673A\u6765\u54CD\u5E94\u7528\u6237\u7684\u65CB\u8F6C\u548C\u4F4D\u7F6E\u3002</p><p>viro AR \u548C VR \u4E00\u6837\uFF0C\u4F7F\u7528\u53F3\u624B\u5750\u6807\u7CFB\uFF0C\u76F8\u673A\u7684\u521D\u59CB\u5750\u6807\u70B9\u4E3A <code>[0, 0, 0]</code>\uFF0C\u770B\u5411 <code>[0, 0, -1]</code> \u65B9\u5411\uFF0C\u6446\u653E\u4F4D\u7F6E\u4E3A <code>[0, 1, 0]</code></p><div style="text-align:center;"><img src="https://files.readme.io/2b217fb-camera.png" height="300"></div><p>\u5F53\u7528\u6237\u9996\u6B21\u8FDB\u5165 AR \u4F53\u9A8C\u65F6\uFF0C\u76F8\u673A\u5C06\u653E\u7F6E\u5728 <code>[0,0,0]</code> \u70B9\uFF0C\u540C\u65F6\u5E95\u5C42\u7684 AR \u7CFB\u7EDF\u4F1A\u5F97\u5230\u5176\u65B9\u4F4D\u4FE1\u606F\u3002\u5728\u77ED\u6682\u7684\u4E00\u4F1A\u540E\uFF0C\u76F8\u673A\u8DDF\u8E2A\u5C31\u4F1A\u5B8C\u6210\uFF0C\u5F00\u53D1\u4EBA\u5458\u4F1A\u63A5\u6536 <code>OntrackingInitialized</code> \u56DE\u8C03\uFF0C\u6B64\u65F6\u76F8\u673A\u5DF2\u7ECF\u53EF\u4EE5\u8DDF\u8E2A\u7528\u6237\u5728\u5176\u4E16\u754C\u7684\u79FB\u52A8\u3002</p><h2 id="\u951A\u68C0\u6D4B" tabindex="-1">\u951A\u68C0\u6D4B <a class="header-anchor" href="#\u951A\u68C0\u6D4B" aria-hidden="true">#</a></h2><p>\u5411\u771F\u5B9E\u4E16\u754C\u6DFB\u52A0\u865A\u62DF\u5185\u5BB9\u7684\u4E3B\u8981\u65B9\u6CD5\u662F\u4FA6\u542C AR \u7CFB\u7EDF\u68C0\u6D4B\u5230\u7684\u951A\u70B9\u3002\u951A\u70B9\u662F\u771F\u5B9E\u4E16\u754C\u4E2D\u53D1\u73B0\u7684\u5782\u76F4/\u6C34\u5E73\u5E73\u9762\uFF0C\u6216\u8005\u662F\u56FE\u50CF\uFF08\u5982\u6D77\u62A5\u6216\u6807\u8BB0\uFF09\u3002\u82E5\u60F3\u5C06\u5185\u5BB9\u9644\u52A0\u5230\u56FE\u50CF\uFF0C\u8BF7\u53C2\u9605<a href="https://docs.viromedia.com/docs/ar-image-recognition" target="_blank" rel="noopener noreferrer">\u56FE\u50CF\u8BC6\u522B</a>\u3002\u672C\u6307\u5357\u63CF\u8FF0\u4E86\u5C06\u5185\u5BB9\u6DFB\u52A0\u5230\u68C0\u6D4B\u5230\u7684\u5E73\u9762\u7684\u4E24\u79CD\u65B9\u6CD5\u3002</p><h3 id="\u81EA\u52A8\u951A\u5B9A" tabindex="-1">\u81EA\u52A8\u951A\u5B9A <a class="header-anchor" href="#\u81EA\u52A8\u951A\u5B9A" aria-hidden="true">#</a></h3><p>\u8981\u542F\u7528\u81EA\u52A8\u951A\u5B9A\uFF0C\u8BF7\u4E3A\u7EC4\u4EF6\u4F20\u5165 minheight \u548C minwidth \u5C5E\u6027\u3002\u5728\u68C0\u6D4B\u5230\u5E73\u9762\u65F6\uFF0C\u5C06\u5728\u7EC4\u4EF6\uFF08\u4F5C\u4E3A\u5B50\u7EC4\u4EF6\uFF09\u5185\u5D4C\u5165\u4F60\u60F3\u8981\u663E\u793A\u7684\u5185\u5BB9\u3002</p><p>\u5F53 AR \u7CFB\u7EDF\u627E\u5230\u4E0E\u7ED9\u5B9A\u5C3A\u5BF8\u5339\u914D\u7684\u5E73\u9762\u65F6\uFF0C\u5C06\u4F1A\u4E0E\u73B0\u5B9E\u4E16\u754C\u5E73\u9762\u56FA\u5B9A\uFF0C\u5E76\u4E14\u663E\u793A\u5B50\u7EC4\u4EF6\u3002\u8FD9\u4E9B\u5B50\u7EC4\u4EF6\u4F7F\u7528\u5E73\u9762\u7EC4\u4EF6\u7684\u5750\u6807\u4F53\u7CFB\u3002\u4EFB\u4F55\u771F\u5B9E\u4E16\u754C\u5E73\u9762\u7684\u66F4\u65B0\u5C06\u901A\u8FC7 <a href="https://docs.viromedia.com/docs/viroarscene" target="_blank" rel="noopener noreferrer"><code>ViroARScene</code></a>\u7684\u56DE\u8C03\u51FD\u6570<code>onAnchorFound</code>\u3001 <code>onAnchorUpdated</code> \u548C <code>onAnchorRemoved</code> \u53CD\u9988\u7ED9\u5F00\u53D1\u4EBA\u5458\u3002</p><p>\u4F8B\u5982\uFF0C\u4E0B\u9762\u7684\u793A\u4F8B\u5C06\u5728\u68C0\u6D4B\u5230\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u81F3\u5C11\u4E3A 0.5 \u7C73\u7684\u5E73\u9762\u65F6\uFF0C\u663E\u793A\u4E00\u4E2A box\u3002</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>ViroARPlane minHeight<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.5</span><span class="token punctuation">}</span> minWidth<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.5</span><span class="token punctuation">}</span> alignment<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;Horizontal&#39;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>ViroBox position<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span> scale<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ViroARPlane<span class="token operator">&gt;</span>
</code></pre></div><h3 id="\u624B\u52A8\u951A\u5B9A" tabindex="-1">\u624B\u52A8\u951A\u5B9A <a class="header-anchor" href="#\u624B\u52A8\u951A\u5B9A" aria-hidden="true">#</a></h3><p>\u624B\u52A8\u951A\u5B9A\u8BA9\u5F00\u53D1\u4EBA\u5458\u901A\u8FC7\u76D1\u542C\u6240\u6709\u4F20\u5165\u7684\u951A\u70B9\u6765\u4E13\u95E8\u9009\u62E9\u8981\u4F7F\u7528\u7684\u5E73\u9762\uFF0C\u800C\u4E0D\u662F\u8BA9\u5E73\u53F0\u9009\u62E9\u7B2C\u4E00\u4E2A\u7B26\u5408\u58F0\u660E\u8981\u6C42\u7684\u53EF\u7528\u5E73\u9762\u3002</p><p>\u8981\u4FA6\u542C\u68C0\u6D4B\u5230\u7684\u951A\u70B9\uFF0C\u8BF7\u5BF9 <code>ViroARScene</code> \u7EC4\u4EF6\u8BBE\u7F6E <code>onAnchorFound</code>\u3001<code>onAnchorUpdated</code> \u548C <code>onAnchorRemoved</code> \u4FA6\u542C\u5668\u3002\u627E\u5230\u5408\u9002\u7684\u951A\u70B9\u540E\uFF0C\u5728\u6E32\u67D3\u51FD\u6570\u4E2D\u8BBE\u7F6E\u8981\u56FA\u5B9A\u5230\u8BE5\u951A\u70B9\u7684\u5E73\u9762\u7684 <code>anchorId</code> \u5C5E\u6027\u3002</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>ViroARPlane anchorId<span class="token operator">=</span><span class="token punctuation">{</span>foundAnchor<span class="token punctuation">.</span>anchorId<span class="token punctuation">}</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>ViroBox position<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span> scale<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ViroARPlane<span class="token operator">&gt;</span>
</code></pre></div>`,18),p=[t];function c(r,l,i,d,u,k){return s(),a("div",null,p)}var g=n(e,[["render",c]]);export{m as __pageData,g as default};