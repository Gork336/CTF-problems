import{_ as e,o as i,c as t,e as n}from"./app-81cf5d26.js";const d={},l=n(`<p>#MD5 脚本内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;?php           
	 $flag=&quot;&quot;;        
	 $v1=$_GET[&#39;v1&#39;];        
	 $v2=$_GET[&#39;v2&#39;];           
	 if(isset($v1) &amp;&amp; isset($v2)){               
		 if(!ctype_alpha($v1)){                   
			 die(&quot;v1 error&quot;);               
		 }               
		 if(!is_numeric($v2)){                   
			 die(&quot;v2 error&quot;);               
		 }               
		 if(md5($v1)==md5($v2)){                   
			 echo $flag;               
		 }           
	 }else{                          
		 echo &quot;where is flag?&quot;;           
		 }    
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ctype_alpha()</code>函数是PHP中的字符类型(CType)函数，用于检查给定的字符串是否仅包含字母。 它返回true -如果字符串只包含字母，否则返回FALSE。</p><hr><p><code>die()</code> 函数输出一条消息，并退出当前脚本。</p><hr><p><code>is_numeric()</code> 函数用于检测变量是否为数字或数字字符串。</p><hr><p>所以要求应该是：</p><ul><li><code>v1</code> 只包含字母</li><li><code>v2</code> 为数字</li><li>md5值相同</li></ul><p>构造v1=QNKCDZO&amp;v2=240610708</p><blockquote><p>md5漏洞介绍： PHP在处理哈希字符串时，它把每一个以“0E”开头的哈希值都解释为0所以只要v1与v2的md5值以0E开头即可。这样最后php解析到的v1和v2的md5值就都是0了</p></blockquote><blockquote><p>这里附上常见的0E开头的MD5 0e开头的md5和原值： QNKCDZO 0e830400451993494058024219903391 240610708 0e462097431906509019562988736854</p></blockquote>`,13),s=[l];function v(c,a){return i(),t("div",null,s)}const r=e(d,[["render",v],["__file","web5.html.vue"]]);export{r as default};
