#文件上传

查看 HTML ，发现存在 `/source`
访问，获取到源码

```python
cur.execute("insert into files (id, path) values (?, ?)", (uid, file.filename,))
```

这里执行 SQL 语句，uid 和 filename 插入表中
之后又有

```python
return redirect('/file/' + uid)
```

我们将上传文件名设置为 `/flag` ，即可根据 uid 访问到 /flag 路径
