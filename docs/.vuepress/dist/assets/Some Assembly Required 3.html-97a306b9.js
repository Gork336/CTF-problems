import{_ as e,o as i,c as n,e as d}from"./app-bd32c210.js";const s={},a=d(`<p>这回的 <code>/qCCYI0ajpD</code> 在下面的 <code>fetch</code> 利用 wabt 反编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wasm-decompile aD8SvhyVkb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样得到</p><div class="language-dcmp line-numbers-mode" data-ext="dcmp"><pre class="language-dcmp"><code>data d_nAaf3ab7(offset: 1024) =
  &quot;\\9dn\\93\\c8\\b2\\b9A\\8b\\c1\\c5\\dca\\c6\\97\\94\\8cf\\91\\91\\c1\\893\\94\\9e\\c9\\dda\\91&quot;
  &quot;\\c4\\c8\\ddb\\c0\\92\\c1\\8c7\\95\\93\\c8\\90\\00\\00&quot;;
data d_b(offset: 1067) = &quot;\\f1\\a7\\f0\\07\\ed&quot;;

if (eqz(f)) goto B_a;
  var g:int = 4;
  var h:int = e[2];
  var i:int = 5;
  var j:int = h % i;
  var k:ubyte_ptr = g - j;
  var l:int = k[1067];
  var m:int = 24;
  var n:int = l &lt;&lt; m;
  var o:int = n &gt;&gt; m;
  var p:int = e[3];
  var q:int = p ^ o;
  e[3] = q;
  label B_a:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较像16进制，但又有点不是 查阅众多</p><p>https://github.com/Dvd848/CTFs/blob/master/2021_picoCTF/Some_Assembly_Required_3.md</p><p>https://picoctf2021.haydenhousen.com/web-exploitation/some-assembly-required-3</p><p>使用 wasm2c ，得到以下数据，像是上面的数据的正常 16 进制</p><div class="language-h line-numbers-mode" data-ext="h"><pre class="language-h"><code>static const u8 data_segment_data_w2c_qCCYI0ajpD_d0[] = {
  0x9d, 0x6e, 0x93, 0xc8, 0xb2, 0xb9, 0x41, 0x8b, 0xc1, 0xc5, 0xdc, 0x61, 
  0xc6, 0x97, 0x94, 0x8c, 0x66, 0x91, 0x91, 0xc1, 0x89, 0x33, 0x94, 0x9e, 
  0xc9, 0xdd, 0x61, 0x91, 0xc4, 0xc8, 0xdd, 0x62, 0xc0, 0x92, 0xc1, 0x8c, 
  0x37, 0x95, 0x93, 0xc8, 0x90, 0x00, 0x00, 
};

static const u8 data_segment_data_w2c_qCCYI0ajpD_d1[] = {
  0xf1, 0xa7, 0xf0, 0x07, 0xed, 
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还是异或，不过把 <code> 0xf1, 0xa7, 0xf0, 0x07, 0xed</code> 反转 <code>ed 07 f0 a7 f1</code> 作为key</p>`,10),c=[a];function l(v,t){return i(),n("div",null,c)}const m=e(s,[["render",l],["__file","Some Assembly Required 3.html.vue"]]);export{m as default};
