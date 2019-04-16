<?php
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$token = $obj['token'];
try{
	$decoded = JWT::decode($token, $key, array('HS256'));
	if($decoded->expire < time()){
		echo 'HET_HAN';
	}
	else{
		$email = $decoded->email;
		$ImagesUser = $obj['ImagesUser'];
		$sql = "UPDATE users SET ImagesUser='$ImagesUser' WHERE email ='$email'";
		$user = $mysqli->query($sql);
		if($user){
			$result = $mysqli->query("SELECT  u.ImagesUser FROM users u where email = '$email'");

			$user = mysqli_fetch_assoc($result);
			print_r(json_encode($user));
		}
		else{
			echo 'KHONG_THANH_CONG';
		}

	}
}

catch(Exception $e){
	echo 'LOI';
}




?>