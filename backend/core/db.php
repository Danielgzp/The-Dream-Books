<?php
	require_once('config.php');

	class db{

		public function db(){
				
				$connection = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

				if(mysqli_connect_errno()){
					echo "Fallo al conectar a MySql";
	                return;
				}

				mysqli_set_charset($connection, DB_CHARSET);

				return $connection;
			}
		}
?>