import{_ as s,o as a,c as n,e}from"./app-3b511de6.js";const t={},o=e(`<p>#SQL 注入 #堆叠注入</p><p>这道题目需要我们去对后端语句进行猜测</p><p>输入的内容为*,1</p><p>内置的 sql 语句为</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">sql</span> <span class="token operator">=</span> <span class="token string">&quot;select&quot;</span><span class="token punctuation">.</span><span class="token keyword">sql</span> <span class="token operator">=</span> <span class="token string">&quot;select &quot;</span><span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token operator">=</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&#39;query&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">&quot;||flag from Flag&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果$post[&#39;query&#39;]的数据为*,1，sql 语句就变成了<code>select *,1||flag from Flag</code>，也就是<code>select \\*,1 from Flag</code>，也就是直接查询出了 Flag 表中的所有内容</p><p>官方给的 payload 是 1;set sql_mode=PIPES_AS_CONCAT;select 1</p><p>拼接一下就是 select 1;set sql_mode=PIPES_AS_CONCAT;select 1||flag from Flag 关于 <code>sql_mode</code> : 它定义了 MySQL 应支持的 SQL 语法，以及应该在数据上执行何种确认检查，其中的 <code>PIPES_AS_CONCAT</code> 将 <code>||</code> 视为字符串的连接操作符而非 “或” 运算符</p>`,8),p=[o];function c(l,r){return a(),n("div",null,p)}const u=s(t,[["render",c],["__file","EasySQL.html.vue"]]);export{u as default};
