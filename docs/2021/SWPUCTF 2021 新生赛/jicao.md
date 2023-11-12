#PHP

```php
<?php
	highlight_file('index.php');
	include("flag.php");
	$id=$_POST['id'];
	$json=json_decode($_GET['json'],true);
	if ($id=="wllmNB"&&$json['x']=="wllm")
		{echo $flag;}
?>
```

![[Pasted image 20230127205845.png]]
