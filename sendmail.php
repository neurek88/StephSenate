<?php
header('Content-Type: application/json');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$to = " pleasantfriendsNE@gmail.com";
$subject = "Message From Website";

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['message'];

$email_message .= "Name: ".$name."\n";
$email_message .= "Email: ".$email."\n";
$email_message .= "Telephone: ".$phone."\n";
$email_message .= "Message: ".$text."\n";
$headers = "From:".$name."\r\n".
mail($to,$subject,$email_message);
?>