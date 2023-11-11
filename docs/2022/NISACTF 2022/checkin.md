#代码审计 
看似直接传参就行，实际上还是有点问题的
```php
 <?php
error_reporting(0);
include "flag.php";
// ‮⁦NISACTF⁩⁦Welcome to
if ("jitanglailo" == $_GET[ahahahaha] &‮⁦+!!⁩⁦& "‮⁦ Flag!⁩⁦N1SACTF" == $_GET[‮⁦Ugeiwo⁩⁦cuishiyuan]) { //tnnd! weishenme b
    echo $FLAG;
}
show_source(__FILE__);
?> 
```

后面这几串字符颜色是不一样的
把这个页面copy到vscode里
![[Pasted image 20230517150619.png]]
明显看到与网页里看到的是不一样的，将正确的参数与值，urlencode后传入即可