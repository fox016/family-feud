<?php

try
{
  // Init data struct
  $questions = [];
  $index = -1;

  // Read in file
  $filename = "./family-feud.txt";
  $fp = fopen($filename, "r");
  if($fp) {
    while(($line = fgets($fp)) !== false) {
      // Case: Question line
      if(preg_match('/^(\d+)\.\s*(.*)$/', $line, $matches)) {
        $questions[] = [
          "number" => intval($matches[1]),
          "text" => trim($matches[2]),
          "responses" => []
        ];
        $index++;
      }
      // Case: Blank line
      else if(preg_match('/^\s*$/', $line)) {
        // Skip
      }
      // Case: Response line
      else if(preg_match('/^([^\(]*)\((\d*)\)/', $line, $matches)) {
        $questions[$index]['responses'][] = [
          "text" => $matches[1],
          "count" => intval($matches[2])
        ];
      }
      // Case: Error
      else {
        throw new Exception("Invalid line: $line");
      }
    }
    if(!feof($fp)) {
      echo "Error: unexpected fgets() fail\n";
    }
  }
  fclose($fp);

  echo json_encode($questions);
}
catch(Exception $e)
{
  die($e->getMessage());
}
