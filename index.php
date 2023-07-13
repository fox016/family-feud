<?php

try
{
  $json = file_get_contents('./data.json');
}
catch(Exception $e)
{
  die($e->getMessage());
}

?>
<!DOCTYPE html>
<html lang='en'>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap" rel="stylesheet">
  <link rel='stylesheet' href='feud.css' type='text/css' />
  <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
  <script type='text/javascript'>
  var _questions = <?php echo $json; ?>;
  </script>
  <script type='text/javascript' src='feud.js'></script>
</head>
<body>
  <div id='header'>
    <button id='prevBtn'>&lt;</button>
    <div id='question'></div>
    <button id='nextBtn'>&gt;</button>
  </div>
  <div id='responseWrapper'>
  </div>
</body>
</html>
