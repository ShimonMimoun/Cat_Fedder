<?php 
  $tag =$_POST['tag'];

  header('Content-type: application/json');

if (!empty($tag)) {
    

$username ='shimon';
$password ='******************';
$host ='avim.eu';
$dbname = 'catfeeder';

// Create connection
$conn = mysqli_connect($host, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM cat where \"$tag\" ";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $row = mysqli_fetch_assoc($result);
    echo $row["name"];    
} else {
    echo json_encode('{"no sucess": "false"}' );

}


mysqli_close($conn);
}
else {echo json_encode( '{"jsonError": "NO GET"}');
}

?>