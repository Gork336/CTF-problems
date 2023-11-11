#PHP 序列化

```php
 <?php
class A{
    public $code = "";
    function __call($method,$args){
        eval($this->code);

    }
    function __wakeup(){
        $this->code = "";
    }
}

class B{
    function __destruct(){
        echo $this->a->a();
    }
}
if(isset($_REQUEST['poc'])){
    preg_match_all('/"[BA]":(.*?):/s',$_REQUEST['poc'],$ret);
    if (isset($ret[1])) {
        foreach ($ret[1] as $i) {
            if(intval($i)!==1){
                exit("you want to bypass wakeup ? no !");
            }
        }
        unserialize($_REQUEST['poc']);
    }


}else{
    highlight_file(__FILE__);
}

```

#### 本题考点

1. php 反序列化绕过\_\_wakeup()魔术方法
2. 利用 Redis 主从复制漏洞 RCE
3. 蚁剑插件 disable_function 也可以

参考
[[天翼杯 2021]esay_eval_ph0ebus 的博客-CSDN 博客](https://blog.csdn.net/qq_46266259/article/details/128891937)
