import{_ as t,r as p,o as e,c as o,a as n,b as s,d as c,e as i}from"./app-bd32c210.js";const l={},u=i(`<p>#PHP 序列化</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code> <span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$code</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__call</span><span class="token punctuation">(</span><span class="token variable">$method</span><span class="token punctuation">,</span><span class="token variable">$args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">eval</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">code</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__wakeup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">code</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">B</span><span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function-definition function">__destruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">a</span><span class="token operator">-&gt;</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;poc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">preg_match_all</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&quot;[BA]&quot;:(.*?):/s&#39;</span><span class="token punctuation">,</span><span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;poc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token variable">$ret</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$ret</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$ret</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token variable">$i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">intval</span><span class="token punctuation">(</span><span class="token variable">$i</span><span class="token punctuation">)</span><span class="token operator">!==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">exit</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;you want to bypass wakeup ? no !&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;poc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="本题考点" tabindex="-1"><a class="header-anchor" href="#本题考点" aria-hidden="true">#</a> 本题考点</h4><ol><li>php 反序列化绕过__wakeup()魔术方法</li><li>利用 Redis 主从复制漏洞 RCE</li><li>蚁剑插件 disable_function 也可以</li></ol>`,4),k={href:"https://blog.csdn.net/qq_46266259/article/details/128891937",target:"_blank",rel:"noopener noreferrer"};function r(d,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[s("参考 "),n("a",k,[s("[天翼杯 2021]esay_eval_ph0ebus 的博客-CSDN 博客"),c(a)])])])}const m=t(l,[["render",r],["__file","esay_eval.html.vue"]]);export{m as default};
