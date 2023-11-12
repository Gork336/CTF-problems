#PHP
view-source:url
查看源码，在 js 文件里发现注释 `NSSCTF{TnNTY1RmLnBocA==}`
base64decode
NsScTf.php

```php
<?php
error_reporting(0);
//hint: 与get相似的另一种请求协议是什么呢
include("flag.php");
class nss
{
    static function ctf()
    {
        include("./hint2.php");
    }
}
if (isset($_GET['p'])) {
    if (preg_match("/n|c/m", $_GET['p'], $matches))
        die("no");
    call_user_func($_GET['p']);
} else {
    highlight_file(__FILE__);
}

```

call_user_func — 把第一个参数作为回调函数调用
[PHP: call_user_func - Manual](https://www.php.net/manual/zh/function.call-user-func.php)

POST `p=Nss::Ctf`
返回： 有没有一种可能，类是 nss2

POST `p=Nss2::Ctf`

在 HTML 注释里有 flag
