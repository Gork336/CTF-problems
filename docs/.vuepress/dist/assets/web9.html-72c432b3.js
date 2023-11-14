import{_ as e,o as t,c as s,e as i}from"./app-1b1a51ce.js";const n={},l=i(`<p>#SQL注入</p><p>存在 robots.txt 文件</p><blockquote><p>robots.txt是一个文本文件,同时也是一个协议,规定了爬虫访问的规则( 哪些文件可以爬取,哪些文件不可以爬取)</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>User-agent: *
Disallow: /index.phps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 /index.phps 文件, 将其下载到本地</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
        $flag=&quot;&quot;;
		$password=$_POST[&#39;password&#39;];
		if(strlen($password)&gt;10){
			die(&quot;password error&quot;);
		}
		$sql=&quot;select * from user where username =&#39;admin&#39; and password =&#39;&quot;.md5($password,true).&quot;&#39;&quot;;
		$result=mysqli_query($con,$sql);
			if(mysqli_num_rows($result)&gt;0){
					while($row=mysqli_fetch_assoc($result)){
						 echo &quot;登陆成功&lt;br&gt;&quot;;
						 echo $flag;
					 }
			}
    ?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在密码框中输入 ffifdyop, 即可登录成功, 获取flag</p><blockquote><p>ffifdyop 的MD5加密结果是 276f722736c95d99e921722cf9ed621c 经过MySQL编码后会变成&#39;or&#39;6xxx,使SQL恒成立,相当于万能密码,可以绕过md5()函数的加密</p></blockquote>`,8),d=[l];function r(a,o){return t(),s("div",null,d)}const u=e(n,[["render",r],["__file","web9.html.vue"]]);export{u as default};
