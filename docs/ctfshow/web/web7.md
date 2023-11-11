#SQL注入 
查看列表文章发现 ?id=xx 判断为 sql注入 数值型注入
`http://4ab2ee77-229d-4706-a68d-0fe996b880bc.challenge.ctf.show/index.php?id=1`
过滤了空格，需要`/**/`替代
参照[[web2]]
但其中 `table_schema="web7"` 发现双引号可以单引号不可以