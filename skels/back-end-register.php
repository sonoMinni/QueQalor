<?php
$servername = "localhost";
$db_name = "qq";
$username = "root";
$password = "fragola86";
$conn = mysqli_connect($servername, $username, $password, $db_name);
print_r($_POST);
if (isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['email']) && isset($_POST['number']) && isset($_POST['pw']) && isset($_POST['confirmPW'])) {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $pw = $_POST['pw'];
    $confirmPW = $_POST['confirmPW'];
    if ($pw == $confirmPW) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            if (preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/', $pw)) {
                if (preg_match('/^[0-9]{10}$/', $number)) {
                    $sql = "SELECT * FROM users WHERE email = '$email'";
                    $result = mysqli_query($conn, $sql);
                    if (mysqli_num_rows($result) > 0) {
                        echo "email already in use";
                    } else {
                        $sql = "INSERT INTO users (name, lastname, email, phone_number, password) VALUES ('$name', '$surname', '$email', '$number', '$pw')";
                        $result = mysqli_query($conn, $sql);
                        if ($result) {
                            echo "ok";
                            header("Location: http://localhost:8000/skels/landing.html#");
                            die();
                        } else {
                            echo "error";
                        }
                    }
                } else {
                    echo "invalid number";
                }
            } else {
                echo "invalid password";
            }
        } else {
            echo "invalid email";
        }
    } else {
        echo "passwords don't match";
    }
} else {
    echo "error";
}
?>
