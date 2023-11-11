#PHP_SSESSION 
```
<?php        
	function replaceSpecialChar($strParam{             
	$regex = "/(select|from|where|join|sleep|and|\s|union|,)/i";                return preg_replace($regex,"",$strParam);           }           if(strlen($password)!=strlen(replaceSpecialChar($password))){               die("sql inject error");           }           if($password==$_SESSION['password']){               
			echo $flag;           }
		else{               
			echo "error";           }    
	?>
```

这一题出flag的条件是 `$password==$_SESSION['password']`，password是由我们自己输入的，session中的password存储在本地，所以我们只需要输入空密码，并且将本地的session删除即可成功绕过。