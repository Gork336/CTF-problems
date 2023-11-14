import{_ as n,o as s,c as a,e as p}from"./app-bd32c210.js";const t={},e=p(`<p>#PHP</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Content-type:text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;gdou&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;ctf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$b</span> <span class="token operator">=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;ctf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;gdou&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;gdou&#39;</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;ctf&#39;</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">md5</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">md5</span><span class="token punctuation">(</span><span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_COOKIE</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cookie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$_COOKIE</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cookie&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39;j0k3r&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;aaa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;bbb&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token variable">$aaa</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;aaa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token variable">$bbb</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;bbb&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$aaa</span> <span class="token operator">==</span> <span class="token number">114514</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$bbb</span> <span class="token operator">==</span> <span class="token number">114514</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$aaa</span> <span class="token operator">!=</span> <span class="token variable">$bbb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token variable">$give</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;cancanwordflag&#39;</span><span class="token punctuation">;</span>
                        <span class="token variable">$get</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;hacker!&#39;</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;flag&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;flag&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token variable">$give</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;flag&#39;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;flag&#39;</span> <span class="token operator">||</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;flag&#39;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;flag&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token variable">$get</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$_POST</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token variable">$$key</span> <span class="token operator">=</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$_GET</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token variable">$$key</span> <span class="token operator">=</span> <span class="token variable">$$value</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">echo</span> <span class="token variable">$flag</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;洗洗睡吧&quot;</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;行不行啊细狗&quot;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;菜菜&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;就这?&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;别来沾边&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MD5 强等于，数组绕过 另一个 aaa 和 bbb 不相等，但与 114514 都弱比较相同 ，比如 114514a ，只会取前面的数字部分</p>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","受不了一点.html.vue"]]);export{k as default};
