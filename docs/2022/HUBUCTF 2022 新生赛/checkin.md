#PHP 序列化

序列化，但是不是给出的值，需要 PHP 弱类型比较

```php
<?php
$p = array(
    "username" => true,
    "password" => true
);
echo serialize($p);
```
