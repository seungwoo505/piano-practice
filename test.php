<?php
    $name = "s".$_POST['name'];

    $filename = "test.txt";
    $fp = fopen($filename, 'w');
    $fw = fwrite($fp, $name);
    fclose($fp);
?>

<!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>