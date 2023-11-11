#PHP

```php
 <?php
highlight_file(__FILE__);
include "./flag.php";
include "./result.php";
if(isset($_GET['aaa']) && strlen($_GET['aaa']) < 20){

    $aaa = preg_replace('/^(.*)level(.*)$/', '${1}<!-- filtered -->${2}', $_GET['aaa']);

    if(preg_match('/pass_the_level_1#/', $aaa)){
        echo "here is level 2";

        if (isset($_POST['admin']) and isset($_POST['root_pwd'])) {
            if ($_POST['admin'] == $_POST['root_pwd'])
                echo '<p>The level 2 can not pass!</p>';
        // START FORM PROCESSING
            else if (sha1($_POST['admin']) === sha1($_POST['root_pwd'])){
                echo "here is level 3,do you kown how to overcome it?";
                if (isset($_POST['level_3'])) {
                    $level_3 = json_decode($_POST['level_3']);

                    if ($level_3->result == $result) {

                        echo "success:".$flag;
                    }
                    else {
                        echo "you never beat me!";
                    }
                }
                else{
                    echo "out";
                }
            }
            else{

                die("no");
            }
        // perform validations on the form data
        }
        else{
            echo '<p>out!</p>';
        }

    }

    else{
        echo 'nonono!';
    }

    echo '<hr>';
}

?>
```

正则匹配单行模式`(?s)`下 ，`.`号将匹配所有字符，包括换行符；但默认情况下点号不匹配换行符，因此给了绕过`(.*)`的可能。

- %0apass_the_level_1%23，%0a、%23 分别是换行符、#的 URL 编码。

sha 函数无法处理数组

- `admin[]=1&root_pwd[]=2`

弱比较，字符串转化为数字的话为 0

- level_3={"result":0}
