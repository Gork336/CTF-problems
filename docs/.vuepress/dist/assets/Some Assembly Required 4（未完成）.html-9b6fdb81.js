import{_ as e,o as d,c as s,e as a}from"./app-bd32c210.js";const i={},n=a(`<p>利用 wabt 反编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wasm-decompile ZoRd23o0wd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样得到</p><div class="language-dcmp line-numbers-mode" data-ext="dcmp"><pre class="language-dcmp"><code>data d_ja8i7_hKe6E3E9VDBoWY(offset: 1024) =
&quot;\\18j|a\\118i7\\1e_}[hK]=\\02\\18\\14{e6E](\\3E\\099VDB};o@W\\7f\\0eY\\00\\00&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面函数多了一大串</p><p>https://picoctf2021.haydenhousen.com/web-exploitation/some-assembly-required-4</p><p>使用 wasm2c ，</p><div class="language-h line-numbers-mode" data-ext="h"><pre class="language-h"><code>static const u8 data_segment_data_w2c_ZoRd23o0wd_d0[] = {
  0x18, 0x6a, 0x7c, 0x61, 0x11, 0x38, 0x69, 0x37, 0x1e, 0x5f, 0x7d, 0x5b, 
  0x68, 0x4b, 0x5d, 0x3d, 0x02, 0x18, 0x14, 0x7b, 0x65, 0x36, 0x45, 0x5d, 
  0x28, 0x5c, 0x33, 0x45, 0x09, 0x39, 0x56, 0x44, 0x42, 0x7d, 0x3b, 0x6f, 
  0x40, 0x57, 0x7f, 0x0e, 0x59, 0x00, 0x00, 
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>^9b064a</p>`,9),c=[n];function l(x,t){return d(),s("div",null,c)}const r=e(i,[["render",l],["__file","Some Assembly Required 4（未完成）.html.vue"]]);export{r as default};
