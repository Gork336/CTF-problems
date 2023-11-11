#SQL注入 

存在 robots.txt 文件

> robots.txt是一个文本文件,同时也是一个协议,规定了爬虫访问的规则( 哪些文件可以爬取,哪些文件不可以爬取)

```
User-agent: *
Disallow: /index.phps
```

访问 /index.phps 文件, 将其下载到本地

```
<?php
        $flag="";
		$password=$_POST['password'];
		if(strlen($password)>10){
			die("password error");
		}
		$sql="select * from user where username ='admin' and password ='".md5($password,true)."'";
		$result=mysqli_query($con,$sql);
			if(mysqli_num_rows($result)>0){
					while($row=mysqli_fetch_assoc($result)){
						 echo "登陆成功<br>";
						 echo $flag;
					 }
			}
    ?>
```

在密码框中输入 ffifdyop, 即可登录成功, 获取flag

> ffifdyop 的MD5加密结果是 276f722736c95d99e921722cf9ed621c
> 经过MySQL编码后会变成'or'6xxx,使SQL恒成立,相当于万能密码,可以绕过md5()函数的加密
