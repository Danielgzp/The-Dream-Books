<?php
	require_once('core/db.php');

	class authModel extends db{

		protected function check_email($email){

			$query = mysqli_query(self::db(), "SELECT * FROM users WHERE email = '$email'");

            $query = $query->fetch_all(MYSQLI_ASSOC);

            return $query;


		}

		protected function signup($add){

			$sql = "INSERT INTO users(name, last_name, age, date_birth, country, email, password, privilege, account_date) VALUES ('".$add["name"]."', '".$add["last_name"]."', '".$add["age"]."', '".$add["date_birth"]."', '".$add["country"]."', '".$add["email"]."', '".$add["password"]."', '".$add["privilege"]."', '".$add["date"]."')";

            $query = mysqli_query(self::db(), $sql);

	        return $query;
		}

		protected function signin($data){

			$sql = "SELECT * FROM users WHERE email = '".$data["email"]."' AND password = '".$data["password"]."'";

			$query = mysqli_query(self::db(), $sql);

			$query = $query->fetch_all(MYSQLI_ASSOC);

			return $query;
		}
	}
?>