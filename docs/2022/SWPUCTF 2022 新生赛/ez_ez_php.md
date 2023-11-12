#PHP #PHP 伪协议

```php
 <?php
error_reporting(0);
if (isset($_GET['file'])) {
    if ( substr($_GET["file"], 0, 3) === "php" ) {
        echo "Nice!!!";
        include($_GET["file"]);
    }

    else {
        echo "Hacker!!";
    }
}else {
    highlight_file(__FILE__);
}
//flag.php
```

```url
?file=php://filter/resource=flag.php

?file=php://filter/resource=flag
```
