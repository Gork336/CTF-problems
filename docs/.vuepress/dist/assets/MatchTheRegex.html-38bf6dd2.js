import{_ as e,o as t,c as n,e as s}from"./app-b6035c39.js";const i={},l=s(`<p>#正则表达式 查看源码 存在以下脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
	function send_request() {
		let val = document.getElementById(&quot;name&quot;).value;
		// ^p.....F!?
		fetch(\`/flag?input=\${val}\`)
			.then(res =&gt; res.text())
			.then(res =&gt; {
				const res_json = JSON.parse(res);
				alert(res_json.flag)
				return false;
			})
		return false;
	}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键在于匹配 <code>^p.....F!?</code></p><p>可行解：ppppppF picoCTF</p>`,4),d=[l];function a(c,r){return t(),n("div",null,d)}const u=e(i,[["render",a],["__file","MatchTheRegex.html.vue"]]);export{u as default};
