import{_ as n,o as s,c as a,e as p}from"./app-1b1a51ce.js";const e={},t=p(`<p>#PHP 序列化</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Happy New Year~ MAKE A WISH
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;Happy New Year~ MAKE A WISH&lt;br&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;wish&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    @<span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;wish&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token variable">$a</span><span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Road_is_Long</span><span class="token punctuation">;</span>
    <span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/***************************pop your 2022*****************************/</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Road_is_Long</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$page</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$string</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token operator">=</span><span class="token string single-quoted-string">&#39;index.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">page</span> <span class="token operator">=</span> <span class="token variable">$file</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token operator">-&gt;</span><span class="token property">page</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__wakeup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/file|ftp|http|https|gopher|dict|\\.\\./i&quot;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">page</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;You can Not Enter 2022&quot;</span><span class="token punctuation">;</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">page</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;index.php&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Try_Work_Hard</span><span class="token punctuation">{</span>
    <span class="token keyword">protected</span>  <span class="token variable">$var</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">append</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">include</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Make_a_Change</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$effort</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">effort</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__get</span><span class="token punctuation">(</span><span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$function</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">effort</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**********************Try to See flag.php*****************************/</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>//__wakeup =&gt;  __toString =&gt; __get =&gt; __invoke =&gt; append
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>


<span class="token keyword">class</span> <span class="token class-name-definition class-name">Road_is_Long</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$page</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Try_Work_Hard</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span>  <span class="token variable">$var</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;/flag&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Make_a_Change</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$effort</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// $a=new Road_is_Long();</span>
<span class="token comment">// $b= new Make_a_Change();</span>
<span class="token comment">// $c= new Try_Work_Hard();</span>
<span class="token comment">// $a-&gt;page=$a;</span>
<span class="token comment">// $a-&gt;string=$b;</span>
<span class="token comment">// $b-&gt;effort=$c;</span>
<span class="token variable">$a</span><span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Road_is_Long</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token operator">-&gt;</span><span class="token property">page</span><span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Road_is_Long</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token operator">-&gt;</span><span class="token property">page</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Make_a_Change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token operator">-&gt;</span><span class="token property">page</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token operator">-&gt;</span><span class="token property">effort</span><span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Try_Work_Hard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token punctuation">(</span><span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token function">serialize</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","popchains.html.vue"]]);export{r as default};
