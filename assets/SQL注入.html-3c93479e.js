import{_ as e,o as n,c as i,e as s}from"./app-91d1060a.js";const a={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql
information_schema.schemata：记录数据库信息的表  
information_schema.tables：记录表名信息的表  
information_schema.columns：记录列名信息的表  
schema_name 数据库名  
table_name 表名  
column_name 列名  
table_schema 数据库名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>再进行boolean注入之前我们还需要知道一些MySQL的一些内置函数  

length(str)：返回str字符串的长度。  

substr(str, pos, len)：将str从pos位置开始截取len长度的字符进行返回。注意这里的pos位置是从1开始
的，不是数组的0开始  

mid(str,pos,len):跟上面的一样，截取字符串  

ascii(str)：返回字符串str的最左面字符的ASCII代码值。 

ord(str):同上，返回ascii码  

if(a,b,c) :a为条件，a为true，返回b，否则返回c，如if(1&gt;2,1,0),返回0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>集中常见的报错注入用到的函数  

1.updatexml()  
2.floor()  
3.extractvalue()  
4.exp()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>updatexml()的使用方法:

updatexml()的语法为  
UPDATEXML (XML_document, XPath_string, new_value);  
第一个参数：XML_document是String格式，为XML文档对象的名称  
第二个参数：XPath_string (Xpath格式的字符串) ，如果不了解Xpath语法，可以在网上查找教程。  
第三个参数：new_value，String格式，替换查找到的符合条件的数据  
如果找不到相应的xpath路径，updatexml函数就会报出错误  
concat()函数。此函数用于连接字符串；由于updatexml()函数xpath路径需要连接特殊字符，被连接的特殊字符需要进行16进制编码  
concat_ws()函数。语法concat_ws(0x7e,database(),use())，会把查出来的库名和用户通过~连接起来完成报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function t(v,c){return n(),i("div",null,l)}const m=e(a,[["render",t],["__file","SQL注入.html.vue"]]);export{m as default};
