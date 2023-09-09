<?php
function connectToDatabase() {
    $hostname = "localhost"; 
    $username = "root"; 
    $password = "123456789"; 
    $database = "lp_official"; 


    $conn = new mysqli($hostname, $username, $password, $database);

    if ($conn->connect_error) {
        die("Database connection failed: " . $conn->connect_error);
    }

    return $conn;
}
?>