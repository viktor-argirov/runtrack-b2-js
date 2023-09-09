<?php
function my_search_student(string $email) : array {
    global $pdo;
   
    $query = $pdo->prepare("SELECT * FROM student WHERE email = :email");
    $query->bindParam(":email", $email, PDO::PARAM_STR);
    $query->execute();
    
    $studentData = $query->fetchAll(PDO::FETCH_ASSOC);

    return $studentData ? $studentData : [];
}

$email = isset($_GET['email']) ? $_GET['email'] : '';

header('Content-Type: application/json');
echo json_encode(my_search_student($email));
?>