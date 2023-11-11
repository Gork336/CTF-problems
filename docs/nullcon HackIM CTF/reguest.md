题目说明：HTTP requests and libraries are hard. Sometimes they do not behave as expected, which might lead to vulnerabilities.
附件：

```python
from flask import Flask, Response, request
import requests
import io

app = Flask(__name__)


@app.route("/")
def index():
    s = requests.Session()
    cookies = {"role": "guest"}

    output = io.StringIO()
    output.write("Usage: Look at the code ;-)\n\n")
    try:
        output.write("Overwriting cookies with default value! This must be secure!\n")
        cookies = {**dict(request.cookies), **cookies}
        headers = {**dict(request.headers)}

        if cookies["role"] != "guest":
            raise Exception("Illegal access!")

        r = requests.Request(
            "GET", "http://backend:8080/whoami", cookies=cookies, headers=headers
        )
        prep = r.prepare()

        output.write("Prepared request cookies are: ")
        output.write(str(prep._cookies.items()))
        output.write("\n")
        output.write("Sending request...")
        output.write("\n")

        resp = s.send(prep, timeout=2.0)

        output.write("Request cookies are: ")
        output.write(str(resp.request._cookies.items()))
        output.write("\n\n")
        if "Admin" in resp.content.decode():
            output.write("Someone's drunk oO\n\n")
        output.write("Response is: ")
        output.write(resp.content.decode())
        output.write("\n\n")
    except Exception as e:
        print(e)
        output.write("Error :-/" + str(e))
        output.write("\n\n")

    return Response(output.getvalue(), mimetype="text/plain")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="8080", debug=False)

```

```python
import os
from flask import Flask, request, Response

app = Flask(__name__)


@app.route("/whoami")
def whoami():
    role = request.cookies.get("role", "guest")
    really = request.cookies.get("really", "no")
    if role == "admin":
        if really == "yes":
            resp = "Admin: " + os.environ["FLAG"]
        else:
            resp = "Guest: Nope"
    else:
        resp = "Guest: Nope"
    return Response(resp, mimetype="text/plain")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="8080", debug=False)

```

可以看到 `backend.py` 中，只有 cookie 中的 role 为 admin 且 really 为 yes 才会返回 flag
![[Pasted image 20230312151718.png]]
页面会显示出一些发送的信息
这里用 python 构造请求并发送：

```python
import requests

url = "http://52.59.124.14:10014/"
cookies = {"role": "admin", "really": "yes"}
res = requests.get(url, cookies=cookies)
print(res.text)

```

即可
