<?php 
  $tag =$_POST['tag'];
  $weight =$_POST['weight'];
 
  
  header('Content-type: application/json');



if (!empty($tag)) {

  $username ='shimon';
  $password ='******************';
  $host ='avim.eu';
  $dbname = 'catfeeder';
    
    $bdd =   new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $username, $password); 
    $sql = "INSERT INTO log (tag_id,weight) VALUES (\"$tag\",$weight)";
  echo $sql;
    $stmt= $bdd->prepare($sql);

    if ($stmt->execute()) { 
        echo json_encode('{"sucess": "true"}' );
        echo "\n";
    } else {
        echo json_encode('{"no sucess": "false"}' );
    }
    $bdd = null;


    
}
else {
    echo json_encode( '{"jsonError": "NO GET"}');
}

?>