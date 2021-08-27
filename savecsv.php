<?php
  $cs = fopen('userlist.csv', 'a');
  fwrite($cs, "\n".mb_convert_encoding($_POST[Ulist], "BIG5", "UTF-8"));
  fclose($cs);
?>