#代码审计 
查看snake.js
有一段
```javascript
if (this["getScore"]() > -0x1e9 * -0xf + 0x5 * 0x6d + -0x2e * 0xaa)
        return (
          alert(
            _0x324fcb(0x2d9, 0x2c3, 0x2db, 0x2f3) +
              "k3r_h0pe_t" +
              _0xe4a674(0x5a1, 0x595, 0x59e, 0x57c) +
              "irlfriend}"
          ),
          ![]
        );
```
alert的内容就是 flag ,用到的两个函数在前面一大坨里定义了
复制到控制器运行即可

或者直接修改
```javascript
Snake.prototype.getScore=()=>70
```