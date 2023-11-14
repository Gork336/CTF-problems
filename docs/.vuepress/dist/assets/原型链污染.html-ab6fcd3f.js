import{_ as i,r as a,o as r,c as s,a as e,b as n,d,e as o}from"./app-b6035c39.js";const l={},c=e("p",null,"#js",-1),p={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"},v=o(`<p>简单地说，JavaScript中存在对象，实例的对象具有一个私有属性<code>__proto__</code>，通过这个属性可以访问到它的原型，对象的原型又有原型... 由此，一般 对象 都存在一个继承关系的链，链的末端是 NULL</p><p>一个简单的原型链例子：</p><p>![[Pasted image 20230315180424.png]]</p><p>继承链即： second --&gt; first --&gt; Object.prototype --&gt; null 而且，通过second可以访问到链上游的属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>特别的
对于数组和函数：

数组都继承于 Array.prototype
函数都继承于 Function.prototype

上面两个都继承于
Object.prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以下方式访问得到某一实例对象的原型对象：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>objectname[&quot;__proto__&quot;]
objectname.__proto__
objectname.constructor.prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原型链污染" tabindex="-1"><a class="header-anchor" href="#原型链污染" aria-hidden="true">#</a> 原型链污染</h2><p>如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let first=function(){}
first.prototype.name=&quot;zero&quot;

let third=function(){}
console.log(third.name)
//name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>third与first本没有关系，但是都继承自原型Object,通过<code>first.prototype</code>修改的属性将会可以被所有的继承自Object的实例访问到</p><p>原型链污染，其实也就是，如果可以更改某个原型的属性，那么包含这个原型的所有链中，继承自它的实例都可以访问到被更改的属性</p>`,12);function u(m,_){const t=a("ExternalLinkIcon");return r(),s("div",null,[c,e("p",null,[n("关于继承与原型链的介绍可以参考："),e("a",p,[n("继承与原型链 - JavaScript | MDN (mozilla.org)"),d(t)])]),v])}const h=i(l,[["render",u],["__file","原型链污染.html.vue"]]);export{h as default};
