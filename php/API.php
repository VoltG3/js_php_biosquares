


<?php 
    include("config.php");

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");

    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode( '/', $uri );

    // open connection to mysql db
    $connection = mysqli_connect($host, $user, $pass, $dbase) or die("Error " . mysqli_error($connection));

    // fetch table rows from mysql db
    $sql = "SELECT * FROM $table";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    // create an array
        $emparray = array();
        while($row =mysqli_fetch_assoc($result)){
            $emparray[] = $row;
        }

    // convert PHP Array to JSON String
        echo json_encode($emparray);         
?>