import{_ as n,o as s,c as a,e}from"./app-bd32c210.js";const t={},p=e(`<p>#PHP 序列化</p><p>序列化，但是不是给出的值，需要 PHP 弱类型比较</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$p</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
    <span class="token string double-quoted-string">&quot;username&quot;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;password&quot;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token variable">$p</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","checkin.html.vue"]]);export{u as default};
