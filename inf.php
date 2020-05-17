Здравствуйте, <?php echo htmlspecialchars($_POST['opis']); ?>.
Вам <?php echo htmlspecialchars($_POST['sslk']); ?> лет.

<?php 
$a="mstr.unshift('";
$fd = fopen("hello.txt", 'a') or die("не удалось создать файл");
$str = $a .= $_POST['opis'] .= "'); ";
fputs($fd, $str);
fclose($fd);

$as="mssl.unshift('";
$fd = fopen("hello.txt", 'a') or die("не удалось создать файл");
$strs = $as .= $_POST['sslk'] .= "'); ";
fputs($fd, $strs);
fclose($fd);

/*
//Создаем массив с данными
$info = [
  "name" => $_POST['opis'],
  "lname" => $_POST['sslk'],
];

// преобразовываем его в json вид
$json = json_encode($info);

// создаем новый файл
$file = fopen('new.json', 'a');

// и записываем туда данные
$write = fwrite($file,$json);

// проверяем успешность выполнения операции
if($write) echo "Данные успешно записаны!<br>";
else echo "Не удалось записать данные!<br>";

//закрываем файл
fclose($file);
*/?>

<?php header("Location:index.html?v1"); ?>