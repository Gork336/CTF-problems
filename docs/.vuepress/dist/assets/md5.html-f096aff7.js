import{_ as e,o as r,c as b,e as a}from"./app-bd32c210.js";const d={},s=a(`<p>既要两变量个值不相同，又要两个变量md5值一样，<br> 可以发现此时判断md5值是否一样用的是<code>==</code>，这是php的弱类型比较，<br><strong>方法一：</strong> 可以使用带0e开头的数字穿进行传递参数，因为php会将0e开头的数字转化为0，故此时md5值相等，而两个变量值不相等；<br><strong>方法二：</strong> 可以传递数组，如name[]=123,password[]=456，md5不能加密数组，故两个md5返回的都是null</p><p>另：若遇到<code>===</code>这样的强类型比较，方法一就失效了，方法二仍然有效，或者还可以使用软件fastcoll进行md5碰撞，生成两个字符串使得他们的md5值相同</p><p>另：0e开头的数字</p><blockquote><p>s878926199a<br> 0e545993274517709034328855841020<br> s155964671a<br> 0e342768416822451524974117254469<br> s214587387a<br> 0e848240448830537924465865611904<br> s214587387a<br> 0e848240448830537924465865611904<br> s878926199a<br> 0e545993274517709034328855841020<br> s1091221200a<br> 0e940624217856561557816327384675<br> s1885207154a<br> 0e509367213418206700842008763514<br> s1502113478a<br> 0e861580163291561247404381396064<br> s1885207154a<br> 0e509367213418206700842008763514<br> s1836677006a<br> 0e481036490867661113260034900752<br> s155964671a<br> 0e342768416822451524974117254469<br> s1184209335a<br> 0e072485820392773389523109082030<br> s1665632922a<br> 0e731198061491163073197128363787<br> s1502113478a<br> 0e861580163291561247404381396064<br> s1836677006a<br> 0e481036490867661113260034900752<br> s1091221200a<br> 0e940624217856561557816327384675<br> s155964671a<br> 0e342768416822451524974117254469<br> s1502113478a<br> 0e861580163291561247404381396064<br> s155964671a<br> 0e342768416822451524974117254469<br> s1665632922a<br> 0e731198061491163073197128363787<br> s155964671a<br> 0e342768416822451524974117254469<br> s1091221200a<br> 0e940624217856561557816327384675<br> s1836677006a<br> 0e481036490867661113260034900752<br> s1885207154a<br> 0e509367213418206700842008763514<br> s532378020a<br> 0e220463095855511507588041205815<br> s878926199a<br> 0e545993274517709034328855841020<br> s1091221200a<br> 0e940624217856561557816327384675<br> s214587387a<br> 0e848240448830537924465865611904<br> s1502113478a<br> 0e861580163291561247404381396064<br> s1091221200a<br> 0e940624217856561557816327384675<br> s1665632922a<br> 0e731198061491163073197128363787<br> s1885207154a<br> 0e509367213418206700842008763514<br> s1836677006a<br> 0e481036490867661113260034900752<br> s1665632922a<br> 0e731198061491163073197128363787<br> s878926199a<br> 0e545993274517709034328855841020<br> 240610708<br> 0e462097431906509019562988736854<br> 314282422</p></blockquote><p>强判断的md5的绕过 直接用md5碰撞</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>array1=psycho%0A%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00W%ADZ%AF%3C%8A%13V%B5%96%18m%A5%EA2%81_%FB%D9%24%22%2F%8F%D4D%A27vX%B8%08%D7m%2C%E0%D4LR%D7%FBo%10t%19%02%82%7D%7B%2B%9Bt%05%FFl%AE%8DE%F4%1F%84%3C%AE%01%0F%9B%12%D4%81%A5J%F9H%0FyE%2A%DC%2B%B1%B4%0F%DEcC%40%DA29%8B%C3%00%7F%8B_h%C6%D3%8Bd8%AF%85%7C%14w%06%C2%3AC%BC%0C%1B%FD%BB%98%CE%16%CE%B7%B6%3A%F3%99%B59%F9%FF%C2
&amp;array2=psycho%0A%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00W%ADZ%AF%3C%8A%13V%B5%96%18m%A5%EA2%81_%FB%D9%A4%22%2F%8F%D4D%A27vX%B8%08%D7m%2C%E0%D4LR%D7%FBo%10t%19%02%02%7E%7B%2B%9Bt%05%FFl%AE%8DE%F4%1F%04%3C%AE%01%0F%9B%12%D4%81%A5J%F9H%0FyE%2A%DC%2B%B1%B4%0F%DEc%C3%40%DA29%8B%C3%00%7F%8B_h%C6%D3%8Bd8%AF%85%7C%14w%06%C2%3AC%3C%0C%1B%FD%BB%98%CE%16%CE%B7%B6%3A%F3%9959%F9%FF%C2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>https://www.mscs.dal.ca/~selinger/md5collision/</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>d131dd02c5e6eec4693d9a0698aff95c2fcab58712467eab4004583eb8fb7f89 
55ad340609f4b30283e488832571415a085125e8f7cdc99fd91dbdf280373c5b 
d8823e3156348f5bae6dacd436c919c6dd53e2b487da03fd02396306d248cda0 
e99f33420f577ee8ce54b67080a80d1ec69821bcb6a8839396f9652b6ff72a70


and

d131dd02c5e6eec4693d9a0698aff95c2fcab50712467eab4004583eb8fb7f89 
55ad340609f4b30283e4888325f1415a085125e8f7cdc99fd91dbd7280373c5b 
d8823e3156348f5bae6dacd436c919c6dd53e23487da03fd02396306d248cda0 
e99f33420f577ee8ce54b67080280d1ec69821bcb6a8839396f965ab6ff72a70
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[s];function n(i,l){return r(),b("div",null,c)}const m=e(d,[["render",n],["__file","md5.html.vue"]]);export{m as default};
