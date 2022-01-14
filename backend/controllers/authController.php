<?php
	require_once('models/authModel.php');

	class authController extends authModel{

		public function signup($data){

			$name = $data->nombre;
        	$last_name = $data->apellido;
        	$age = $data->edad;
        	$date_birth = $data->fecha_nacimiento;
        	$country = $data->pais;
        	$email = $data->correo;
        	$pass = $data->clave;
        	$pass2 = $data->clave2;
        	$privilege = "usuario";
        	$date = date("Y-m-d H:i:s");

        	if($pass != $pass2 || strlen($pass) < 8){

        		if($pass != $pass2){
                	$alert = "Las contraseñas no coinciden";
        		}else{
        			$alert = "La contraseña debe tener mínimo 8 carácteres";
        		}

            }else{
	            if($age < 10 || $age > 100){

	                $alert = "Ingresa una edad correcta. Tienes que tener más de 10 años";
	                 
	            }else{

	                if(!preg_match("/^[a-zA-ZÀ-ÿ\s]{1,40}$/", $name) || !preg_match("/^[a-zA-ZÀ-ÿ\s]{1,40}$/", $last_name) || !preg_match("/^[a-zA-ZÀ-ÿ\s]{1,40}$/", $country)){

                    	$alert = "Sólo se permiten letras en los campos de nombre, apellido y país";

                	}else{

                		$query = authModel::check_email($email);

                		if($query){

                			$alert = "El correo ya existe";

                		}else{

                			$add = [
                				"name" => $name,
                				"last_name" => $last_name,
                				"age" => $age,
                				"date_birth" => $date_birth,
                				"country" => $country,
                				"email" => $email,
                				"password" => $pass,
                				"privilege" => $privilege,
                				"date" => $date
                			];

                			$add = authModel::signup($add);

                			if($add){
                				$alert = "S";
                			}else{
                				$alert = "Ha ocurrido un error al registrar la cuenta";
                			}
                		}
                	}
            	}
        	}

        	return $alert;
		}

		public function signin($data){

			$email = $data->correo;
			$pass = $data->clave;

			$check = [
				"email" => $email,
				"password" => $pass
			];

			$query = authModel::signin($check);
			$query2 = authModel::check_email($email);

			if($query2){
				if(!$query){
					$alert = "Tu contraseña es incorrecta";
				}else{
					foreach($query as $d){
						$alert = array();
						$alert['id'] = $d['id_user'];
						$alert['nombre'] = $d['name'];
						$alert['apellido'] = $d['last_name'];
						$alert['correo'] = $d['email'];
						$alert['privilegio'] = $d['privilege'];
					}
				}
			}else{
				$alert = "Tu correo no existe en nuestra base de datos";
			}

			return $alert;
		}
	}


?>