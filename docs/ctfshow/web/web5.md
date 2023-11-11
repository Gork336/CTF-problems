#MD5 
脚本内容
```
 <?php           
	 $flag="";        
	 $v1=$_GET['v1'];        
	 $v2=$_GET['v2'];           
	 if(isset($v1) && isset($v2)){               
		 if(!ctype_alpha($v1)){                   
			 die("v1 error");               
		 }               
		 if(!is_numeric($v2)){                   
			 die("v2 error");               
		 }               
		 if(md5($v1)==md5($v2)){                   
			 echo $flag;               
		 }           
	 }else{                          
		 echo "where is flag?";           
		 }    
?>
```

`ctype_alpha()`函数是PHP中的字符类型(CType)函数，用于检查给定的字符串是否仅包含字母。
它返回true -如果字符串只包含字母，否则返回FALSE。
***
`die()` 函数输出一条消息，并退出当前脚本。
***
`is_numeric()` 函数用于检测变量是否为数字或数字字符串。
***
所以要求应该是：
- `v1` 只包含字母
- `v2` 为数字
- md5值相同

构造v1=QNKCDZO&v2=240610708

> md5漏洞介绍：
PHP在处理哈希字符串时，它把每一个以“0E”开头的哈希值都解释为0所以只要v1与v2的md5值以0E开头即可。这样最后php解析到的v1和v2的md5值就都是0了

>这里附上常见的0E开头的MD5
0e开头的md5和原值：
QNKCDZO
0e830400451993494058024219903391
240610708
0e462097431906509019562988736854
