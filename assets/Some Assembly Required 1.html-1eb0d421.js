import{_ as e,o as a,c as s,e as c}from"./app-3b511de6.js";const d={},i=c(`<p>有js文件，js文件有这样一个目录 <code>./JIFxzHyW8W</code> ,尝试访问，下载下来一个文件，flag在里面</p><p>预期解可能如下： 还是那个文件，利用 wabt 反编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wasm-decompile JIFxzHyW8W
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果包含：</p><div class="language-dcmp line-numbers-mode" data-ext="dcmp"><pre class="language-dcmp"><code>data d_picoCTFa2843c6ba4157dc1bc052(offset: 1024) =
&quot;picoCTF{a2843c6ba4157dc1bc052818a6242c3f}\\00\\00&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),n=[i];function l(o,t){return a(),s("div",null,n)}const m=e(d,[["render",l],["__file","Some Assembly Required 1.html.vue"]]);export{m as default};
