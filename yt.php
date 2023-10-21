<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        <p>http://localhost/yt.php?don=gwuZoIHku3E&s=5</p>
    </div>
    <div><?php
            for ($x = 0; $x <= $_GET['s']; $x++) {
                // echo "hi";
                echo "
            <iframe width='420' height='315'
                src='https://www.youtube.com/embed/" . $_GET['don'] . "?playlist=" . $_GET['don'] . "&loop=1&autoplay=1&mute=1'>
            </iframe>";
            }
            ?>
    </div>
</body>

</html>