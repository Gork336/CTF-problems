#### Description:

I have written a super safe flag encryptor. I’m sure nobody can figure out what my original flag was:

0xd19ee193b461fd8d1452e7659acb1f47dc3ed445c8eb4ff191b1abfa7969

Dockerfile for your convenience / to ensure correct environment.

#### Download:

https://2022.ctf.link/assets/files/required-27edfc0c02c5f748.tar.xz

在 /files 文件夹下有很多 js 文件，在 required.js 里调用了很多对应的 js 文件

```javascript
f = [...require('fs').readFileSync('./flag')]
require('./28')(753, 434, 790)
require('./157')(227, 950, 740)
require('./736')(722, 540, 325)
...
中间很多行，这里只列取开头结尾几行
...
require('./555')(19, 660, 307)
require('./394')(535, 970, 358)
require('./725')(9, 30, 288)
require('./37')(f)
```

先随便看几个文件

```
module.exports = (i,j,t)=>(
i%=30,j%=30,t%=30,
i+=[],
j+"",
t=(t+{}).split("[")[0],f[i]*=f[25],f[i]&=0xff)
```

都是类似于这种的，把 f[] 的几位做一些运算

看到文件最后是调用 37.js

37.js 如下

```
module.exports = (i,j,t)=>(i += [],
j + "",
t = (t + {}).split("[")[0],
console.log(require('./314')(i)))
```

314.js

```
module.exports = (i,j,t)=>(i += [],
j + "",
t = (t + {}).split("[")[0],
s = '0x',
i.split(',').forEach(b=>(s += ('0' + (b - 0).toString(16)).slice(-2))),s)
```

这里两个调用后就是输出了，输出的就是 0xd19ee193b461fd8d1452e7659acb1f47dc3ed445c8eb4ff191b1abfa7969
是把 flag 加密运算得来的，那么逆运算算回去，既可以得到 flag

要搞清楚每个文件进行了什么运算，可以在每个文件后加上 console.log() 输出每一步的操作

```python
import os
import re

path = "./files"
outpath = "./out"
files = os.listdir(path)
s = []

for file in files:
    str = ""
    if not os.path.isdir(file) and file.endswith(".js") and file != "required.js":
        f = open(path + "/" + file, "r")
        str = f.read()
        f.close()

        # 原文件内容：
        #   module.exports=(i,j,t)=>(i%=30,j%=30,t%=30,i+=[],j+"",t=(t+{}).split("[")[0],f[j]+=f[i],f[j]&=0xff)
        # 修改成：
        #   module.exports=(i,j,t)=>(i%=30,j%=30,t%=30,i+=[],j+"",t=(t+{}).split("[")[0],console.log("f[" + j + "]+=f[" + i + "],f[" + j + "]&=0xff"),f[j]+=f[i],f[j]&=0xff)
        if "i%=30" in str:
            oper = re.findall(r"f\[.*?$", str)[0][:-1]
            oper = (
                oper.replace("i", '" + i + "')
                .replace("j", '" + j + "')
                .replace("t", '" + t + "')
            )
            patch = 'split("[")[0],console.log("' + oper + '"),'
            str = str.replace('split("[")[0],', patch)
            f = open(path + "/" + file, "w")
            f.write(str)
            f.close()
            print("[+] Open And Write: " + file)
            print("[+] " + str)

```

之后运行 required，得到所有的运算

```
f[17]+=f[5],f[17]&=0xff
f[29]=~f[29]&0xff
f[3]^=f[11]
f[6]=f[6]<<7&0xff|f[6]>>1
···
列举一部分

```

之后将这些运算倒序一下，然后将每一步都改为原来的逆运算，运行一下，将
0xd19ee193b461fd8d1452e7659acb1f47dc3ed445c8eb4ff191b1abfa7969
逆回去，就是 flag
官方解答提到的运算：

- `flag[?] = ? ^ ?` (`?` either of , , `XX` `YY` `ZZ`)
- `flag[?] = ? - ?` (`?` either of , , `XX` `YY` `ZZ`)
- `flag[?] = ? + ?` (`?` either of , , `XX` `YY` `ZZ`)
- `flag[i] = reverse_bits(i)` (`i` either of , , `XX` `YY` `ZZ`)
- `flag[i] = i << 7 & 0xff | i >> 1` (`i` either of , , `XX` `YY` `ZZ`)
- `flag[i] = i << 1 & 0xff | i >> 7` (`i` either of , , `XX` `YY` `ZZ`)
- `flag[i] = ~i 0xff` (`i` either of , , `XX` `YY` `ZZ`)
- `flag[i] = graycode(i)` (`i` either of , , , [Wikipedia](https://en.wikipedia.org/wiki/Gray_code)`XX` `YY` `ZZ`)

这里是逆运算

```
// 1、原句不动可逆向
f[24]=~f[24]&0xff
f[24]=~f[24]&0xff

// 2/3、+ 和 - 互换即可
f[1]+=f[24],f[1]&=0xff
f[1]-=f[24],f[1]&=0xff

// 4、f[14]=f[14]^(f[14]>>1)
逆运算
f[1]^=f[1]>>4
f[1]^=f[1]>>2
f[1]^=f[1]>>1

// 5、直接可逆
f[23]^=f[21]
f[23]^=f[21]

// 6、直接可逆
f[15]=(((f[15]*0x0802&0x22110)|(f[15]*0x8020&0x88440))*0x10101>>>16)&0xff
f[15]=(((f[15]*0x0802&0x22110)|(f[15]*0x8020&0x88440))*0x10101>>>16)&0xff

// 7、按下面改，1和7互换
f[11]=f[11]<<1&0xff|f[11]>>7
f[11]=f[11]<<7&0xff|f[11]>>1

// 8、按下面改，7和1互换
f[20]=f[20]<<7&0xff|f[20]>>1
f[20]=f[20]<<1&0xff|f[20]>>7
```

参考：

1. [ctf-writeups/hxp_ctf_2022/required at master · ispoleet/ctf-writeups (github.com)](https://github.com/ispoleet/ctf-writeups/tree/master/hxp_ctf_2022/required)
2. [【hxpCTF 2022】required - WP - 『脱壳破解区』 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|www.52pojie.cn](https://www.52pojie.cn/thread-1759330-1-1.html)
3. [hxp | hxp CTF 2022: required](https://hxp.io/blog/103/hxp-CTF-2022-required/)
