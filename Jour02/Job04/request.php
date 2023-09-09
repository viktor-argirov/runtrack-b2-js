<?php
require_once('connexion.php');

function my_insert_student(string $email, string $fullname, string $gender, int $grade_id, string $birthdate) : bool {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }

    if (!DateTime::createFromFormat('Y-m-d', $birthdate)) {
        return false;
    }

    $conn = connectToDatabase();

    $stmt = $conn->prepare("INSERT INTO student (email, fullname, gender, grade_id, birthdate) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssis", $email, $fullname, $gender, $grade_id, $birthdate);

    $result = $stmt->execute();

    $stmt->close();
    $conn->close();

    return $result;
}

$email = $_POST["email"];
$fullname = $_POST["fullname"];
$gender = $_POST["gender"];
$grade = $_POST["grade"];
$birthdate = $_POST["birthdate"];

if (my_insert_student($email, $fullname, $gender, $grade, $birthdate)) {
    echo "success";
} else {
    echo "error";
}
?>