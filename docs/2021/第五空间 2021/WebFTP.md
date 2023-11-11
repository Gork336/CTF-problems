#PHP

使用网站扫描工具（御剑后台扫描，dirmap 等）扫描网站后台，发现存在…/.git 目录，以及/phpinfo.php

方法一：进入/phpinfo.php，全文查找“falg”关键字，得到 flag。
方法二：进入/.git 目录，查看 readme.md，获取 flag。
