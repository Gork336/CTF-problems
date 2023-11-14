import{_ as e,o as i,c as d,e as s}from"./app-91d1060a.js";const n={},a=s(`<p>利用 wabt 反编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wasm-decompile aD8SvhyVkb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果包含：</p><div class="language-dcmp line-numbers-mode" data-ext="dcmp"><pre class="language-dcmp"><code>data d_xakgKNsmnj8j9lk88mm1n9i1j8kl(offset: 1024) =
&quot;xakgK\\Nsmn;j8j&lt;9;&lt;?=l?k88mm1n9i1j&gt;:8k?l0u\\00\\00&quot;;

  if (eqz(f)) goto B_a;
  var g:int = e[3];
  var h:int = 8;
  var i:int = g ^ h;
  e[3] = i;
  label B_a:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 <code>Some Assembly Required 1</code> 对比可知，data部分应该是 flag，剩下的一点是比 <code>Some Assembly Required 1</code> 多出来的 其中有异或（^）操作，而且 <code>h=8</code> 尝试异或 ，<code>key=8</code> 得出结果</p>`,5),l=[a];function c(m,r){return i(),d("div",null,l)}const t=e(n,[["render",c],["__file","Some Assembly Required 2.html.vue"]]);export{t as default};
