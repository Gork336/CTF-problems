#文件下载

发现有 admin.php
尝试弱口令登录，最后得出是 admin，12345
进入后台发现可以导出主题，存在任意文件下载，不过需要 base64
这里直接尝试 /flag 是可以的，下载的文件 是 zip 后缀不过是纯文本的需要改后缀查看
