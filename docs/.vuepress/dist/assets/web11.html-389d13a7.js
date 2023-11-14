import{_ as e,o as s,c as t,e as r}from"./app-bd32c210.js";const n={},a=r(`<p>#PHP_SSESSION</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php        
	function replaceSpecialChar($strParam{             
	$regex = &quot;/(select|from|where|join|sleep|and|\\s|union|,)/i&quot;;                return preg_replace($regex,&quot;&quot;,$strParam);           }           if(strlen($password)!=strlen(replaceSpecialChar($password))){               die(&quot;sql inject error&quot;);           }           if($password==$_SESSION[&#39;password&#39;]){               
			echo $flag;           }
		else{               
			echo &quot;error&quot;;           }    
	?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一题出flag的条件是 <code>$password==$_SESSION[&#39;password&#39;]</code>，password是由我们自己输入的，session中的password存储在本地，所以我们只需要输入空密码，并且将本地的session删除即可成功绕过。</p>`,3),i=[a];function o(l,d){return s(),t("div",null,i)}const u=e(n,[["render",o],["__file","web11.html.vue"]]);export{u as default};
