
SSTI:Server Side Template Injection，服务端模板注入。

常见模板：
Python: Jinja

### Jinja
jinja 的官方文档：[Template Designer Documentation — Jinja Documentation (3.1.x) (palletsprojects.com)](https://jinja.palletsprojects.com/en/3.1.x/templates/)

默认的几种分隔符
- `{% ... %}` for [Statements](https://jinja.palletsprojects.com/en/3.1.x/templates/#list-of-control-structures) 
- `{{ ... }}` for [Expressions](https://jinja.palletsprojects.com/en/3.1.x/templates/#expressions) to print to the template output
- `{# ... #}` for [Comments](https://jinja.palletsprojects.com/en/3.1.x/templates/#comments) not included in the template output

[细说Jinja2之SSTI&bypass - 合天网安实验室 - 博客园 (cnblogs.com)](https://www.cnblogs.com/hetianlab/p/14154635.html)

[1. SSTI（模板注入）漏洞（入门篇） - bmjoker - 博客园 (cnblogs.com)](https://www.cnblogs.com/bmjoker/p/13508538.html)

[Marven11/Fenjing: 一个类似SQLMap的Jinja2 SSTI利用脚本 | A SQLMap-like Jinja2 SSTI cracker (github.com)](https://github.com/Marven11/Fenjing)


