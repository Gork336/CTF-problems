import{_ as p,r as o,o as i,c,a as n,b as s,d as e,e as t}from"./app-b1c518ef.js";const l={},u=t(`<h4 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description:</h4><p>I have written a super safe flag encryptor. I’m sure nobody can figure out what my original flag was:</p><p>0xd19ee193b461fd8d1452e7659acb1f47dc3ed445c8eb4ff191b1abfa7969</p><p>Dockerfile for your convenience / to ensure correct environment.</p><h4 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> Download:</h4><p>https://2022.ctf.link/assets/files/required-27edfc0c02c5f748.tar.xz</p><p>在 /files 文件夹下有很多 js 文件，在 required.js 里调用了很多对应的 js 文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./flag&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./28&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">753</span><span class="token punctuation">,</span> <span class="token number">434</span><span class="token punctuation">,</span> <span class="token number">790</span><span class="token punctuation">)</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./157&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">227</span><span class="token punctuation">,</span> <span class="token number">950</span><span class="token punctuation">,</span> <span class="token number">740</span><span class="token punctuation">)</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./736&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">722</span><span class="token punctuation">,</span> <span class="token number">540</span><span class="token punctuation">,</span> <span class="token number">325</span><span class="token punctuation">)</span>
<span class="token operator">...</span>
中间很多行，这里只列取开头结尾几行
<span class="token operator">...</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./555&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">660</span><span class="token punctuation">,</span> <span class="token number">307</span><span class="token punctuation">)</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./394&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">535</span><span class="token punctuation">,</span> <span class="token number">970</span><span class="token punctuation">,</span> <span class="token number">358</span><span class="token punctuation">)</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./725&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">288</span><span class="token punctuation">)</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./37&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先随便看几个文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = (i,j,t)=&gt;(
i%=30,j%=30,t%=30,
i+=[],
j+&quot;&quot;,
t=(t+{}).split(&quot;[&quot;)[0],f[i]*=f[25],f[i]&amp;=0xff)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>都是类似于这种的，把 f[] 的几位做一些运算</p><p>看到文件最后是调用 37.js</p><p>37.js 如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = (i,j,t)=&gt;(i += [],
j + &quot;&quot;,
t = (t + {}).split(&quot;[&quot;)[0],
console.log(require(&#39;./314&#39;)(i)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>314.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = (i,j,t)=&gt;(i += [],
j + &quot;&quot;,
t = (t + {}).split(&quot;[&quot;)[0],
s = &#39;0x&#39;,
i.split(&#39;,&#39;).forEach(b=&gt;(s += (&#39;0&#39; + (b - 0).toString(16)).slice(-2))),s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里两个调用后就是输出了，输出的就是 0xd19ee193b461fd8d1452e7659acb1f47dc3ed445c8eb4ff191b1abfa7969 是把 flag 加密运算得来的，那么逆运算算回去，既可以得到 flag</p><p>要搞清楚每个文件进行了什么运算，可以在每个文件后加上 console.log() 输出每一步的操作</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> re

path <span class="token operator">=</span> <span class="token string">&quot;./files&quot;</span>
outpath <span class="token operator">=</span> <span class="token string">&quot;./out&quot;</span>
files <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> files<span class="token punctuation">:</span>
    <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token builtin">file</span><span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token builtin">file</span> <span class="token operator">!=</span> <span class="token string">&quot;required.js&quot;</span><span class="token punctuation">:</span>
        f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> <span class="token builtin">file</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span>
        <span class="token builtin">str</span> <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 原文件内容：</span>
        <span class="token comment">#   module.exports=(i,j,t)=&gt;(i%=30,j%=30,t%=30,i+=[],j+&quot;&quot;,t=(t+{}).split(&quot;[&quot;)[0],f[j]+=f[i],f[j]&amp;=0xff)</span>
        <span class="token comment"># 修改成：</span>
        <span class="token comment">#   module.exports=(i,j,t)=&gt;(i%=30,j%=30,t%=30,i+=[],j+&quot;&quot;,t=(t+{}).split(&quot;[&quot;)[0],console.log(&quot;f[&quot; + j + &quot;]+=f[&quot; + i + &quot;],f[&quot; + j + &quot;]&amp;=0xff&quot;),f[j]+=f[i],f[j]&amp;=0xff)</span>
        <span class="token keyword">if</span> <span class="token string">&quot;i%=30&quot;</span> <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
            oper <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">r&quot;f\\[.*?$&quot;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
            oper <span class="token operator">=</span> <span class="token punctuation">(</span>
                oper<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;&quot; + i + &quot;&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;j&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;&quot; + j + &quot;&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;t&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;&quot; + t + &quot;&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
            patch <span class="token operator">=</span> <span class="token string">&#39;split(&quot;[&quot;)[0],console.log(&quot;&#39;</span> <span class="token operator">+</span> oper <span class="token operator">+</span> <span class="token string">&#39;&quot;),&#39;</span>
            <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;split(&quot;[&quot;)[0],&#39;</span><span class="token punctuation">,</span> patch<span class="token punctuation">)</span>
            f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> <span class="token builtin">file</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span>
            f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;[+] Open And Write: &quot;</span> <span class="token operator">+</span> <span class="token builtin">file</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;[+] &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后运行 required，得到所有的运算</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>f[17]+=f[5],f[17]&amp;=0xff
f[29]=~f[29]&amp;0xff
f[3]^=f[11]
f[6]=f[6]&lt;&lt;7&amp;0xff|f[6]&gt;&gt;1
···
列举一部分

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后将这些运算倒序一下，然后将每一步都改为原来的逆运算，运行一下，将 0xd19ee193b461fd8d1452e7659acb1f47dc3ed445c8eb4ff191b1abfa7969 逆回去，就是 flag 官方解答提到的运算：</p>`,22),d=t("<li><code>flag[?] = ? ^ ?</code> (<code>?</code> either of , , <code>XX</code> <code>YY</code> <code>ZZ</code>)</li><li><code>flag[?] = ? - ?</code> (<code>?</code> either of , , <code>XX</code> <code>YY</code> <code>ZZ</code>)</li><li><code>flag[?] = ? + ?</code> (<code>?</code> either of , , <code>XX</code> <code>YY</code> <code>ZZ</code>)</li><li><code>flag[i] = reverse_bits(i)</code> (<code>i</code> either of , , <code>XX</code> <code>YY</code> <code>ZZ</code>)</li><li><code>flag[i] = i &lt;&lt; 7 &amp; 0xff | i &gt;&gt; 1</code> (<code>i</code> either of , , <code>XX</code> <code>YY</code> <code>ZZ</code>)</li><li><code>flag[i] = i &lt;&lt; 1 &amp; 0xff | i &gt;&gt; 7</code> (<code>i</code> either of , , <code>XX</code> <code>YY</code> <code>ZZ</code>)</li><li><code>flag[i] = ~i 0xff</code> (<code>i</code> either of , , <code>XX</code> <code>YY</code> <code>ZZ</code>)</li>",7),r=n("code",null,"flag[i] = graycode(i)",-1),k=n("code",null,"i",-1),v={href:"https://en.wikipedia.org/wiki/Gray_code",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"XX",-1),m=n("code",null,"YY",-1),b=n("code",null,"ZZ",-1),g=t(`<p>这里是逆运算</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1、原句不动可逆向
f[24]=~f[24]&amp;0xff
f[24]=~f[24]&amp;0xff

// 2/3、+ 和 - 互换即可
f[1]+=f[24],f[1]&amp;=0xff
f[1]-=f[24],f[1]&amp;=0xff

// 4、f[14]=f[14]^(f[14]&gt;&gt;1)
逆运算
f[1]^=f[1]&gt;&gt;4
f[1]^=f[1]&gt;&gt;2
f[1]^=f[1]&gt;&gt;1

// 5、直接可逆
f[23]^=f[21]
f[23]^=f[21]

// 6、直接可逆
f[15]=(((f[15]*0x0802&amp;0x22110)|(f[15]*0x8020&amp;0x88440))*0x10101&gt;&gt;&gt;16)&amp;0xff
f[15]=(((f[15]*0x0802&amp;0x22110)|(f[15]*0x8020&amp;0x88440))*0x10101&gt;&gt;&gt;16)&amp;0xff

// 7、按下面改，1和7互换
f[11]=f[11]&lt;&lt;1&amp;0xff|f[11]&gt;&gt;7
f[11]=f[11]&lt;&lt;7&amp;0xff|f[11]&gt;&gt;1

// 8、按下面改，7和1互换
f[20]=f[20]&lt;&lt;7&amp;0xff|f[20]&gt;&gt;1
f[20]=f[20]&lt;&lt;1&amp;0xff|f[20]&gt;&gt;7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：</p>`,3),q={href:"https://github.com/ispoleet/ctf-writeups/tree/master/hxp_ctf_2022/required",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.52pojie.cn/thread-1759330-1-1.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://hxp.io/blog/103/hxp-CTF-2022-required/",target:"_blank",rel:"noopener noreferrer"};function _(j,w){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("ul",null,[d,n("li",null,[r,s(" ("),k,s(" either of , , , "),n("a",v,[s("Wikipedia"),e(a)]),f,s(),m,s(),b,s(")")])]),g,n("ol",null,[n("li",null,[n("a",q,[s("ctf-writeups/hxp_ctf_2022/required at master · ispoleet/ctf-writeups (github.com)"),e(a)])]),n("li",null,[n("a",x,[s("【hxpCTF 2022】required - WP - 『脱壳破解区』 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|www.52pojie.cn"),e(a)])]),n("li",null,[n("a",h,[s("hxp | hxp CTF 2022: required"),e(a)])])])])}const X=p(l,[["render",_],["__file","required.html.vue"]]);export{X as default};
