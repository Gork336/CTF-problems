#文件上传

发现题目要求我们上传一个文件，通过尝试我们发现无法直接上传 php 文件但可以上传 jpg、png 类的图片。
写一个文件：

```php
<?php
	phpinfo();
?>
```

后缀改成.jpg  
上传中用 burpsuite 抓包，改文件后缀为.php  
上传成功的提示

```text
./upload/1.php succesfully uploaded!
```

然后访问这个文件，在 phpinfo()页面查找 flag 即可
