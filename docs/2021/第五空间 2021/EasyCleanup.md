#PHP

```php
<?php
if (!isset($_GET['mode'])) {
    highlight_file(__file__);
} else if ($_GET['mode'] == "eval") {
    $shell = isset($_GET['shell']) ? $_GET['shell'] : 'phpinfo();';
    if (strlen($shell) > 15 | filter($shell) | checkNums($shell)) exit("hacker");
    eval($shell);
}


if (isset($_GET['file'])) {
    if (strlen($_GET['file']) > 15 | filter($_GET['file'])) exit("hacker");
    include $_GET['file'];
}


function filter($var)
{
    $banned = ["while", "for", "\$_", "include", "env", "require", "?", ":", "^", "+", "-", "%", "*", "`"];

    foreach ($banned as $ban) {
        if (strstr($var, $ban)) return True;
    }

    return False;
}

function checkNums($var)
{
    $alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $cnt = 0;
    for ($i = 0; $i < strlen($alphanum); $i++) {
        for ($j = 0; $j < strlen($var); $j++) {
            if ($var[$j] == $alphanum[$i]) {
                $cnt += 1;
                if ($cnt > 8) return True;
            }
        }
    }
    return False;
}

```

```url
?mode=eval&shell=system('ls /');
```

发现 nssctfasdasdflag

#### 本题考点

1. 利用 session.upload_progress 进行文件包含
2. 条件竞争

具体参考
[[第五空间 2021]EasyCleanup_ph0ebus 的博客-CSDN 博客](https://blog.csdn.net/qq_46266259/article/details/128867195)

php session.upload_progress 通用利用脚本
https://www.nssctf.cn/note/set/2588
