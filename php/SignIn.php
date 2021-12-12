<?php
	include_once "cors.php";
	include_once "functions.php";

	$datos = json_decode(file_get_contents("php://input"));
	$resultado = new funciones();
	$resultado = $resultado->SingIn($datos);
	echo json_encode($resultado);
?>