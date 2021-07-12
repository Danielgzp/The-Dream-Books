<?php
	require_once("config.php");

	class funciones{
		
		public function NewAccount($datos){
			$nombre = $datos->nombre;
        	$apellido = $datos->apellido;
        	$edad = $datos->edad;
        	$fecha_nacimiento = $datos->fecha_nacimiento;
        	$pais = $datos->pais;
        	$correo = $datos->correo;
        	$clave = $datos->clave;
        	$clave2 = $datos->clave2;
        	$privilegio = "usuario";
        	$date = date("Y-m-d H:i:s");

        	if($clave != $clave2 || strlen($clave) < 8){

        		if($clave != $clave2){
                	$alert = "Las contraseñas no coinciden";
        		}else{
        			$alert = "La contraseña debe tener mínimo 8 carácteres";
        		}

            }else{
	            if($edad < 10 || $edad > 100){

	                $alert = "Ingresa una edad correcta. Tienes que tener más de 10 años";
	                 
	            }else{

	                if(!preg_match("/^[a-zA-ZÀ-ÿ\s]{1,40}$/", $nombre) || !preg_match("/^[a-zA-ZÀ-ÿ\s]{1,40}$/", $apellido) || !preg_match("/^[a-zA-ZÀ-ÿ\s]{1,40}$/", $pais)){

                    	$alert = "Sólo se permiten letras en los campos de nombre, apellido y país";

                	}else{

                		$query = mysqli_query(self::db(), "SELECT * FROM usuarios WHERE correo = '$correo'");

                		$consulta = $query->fetch_all(MYSQLI_ASSOC);

                		if($consulta){

                			$alert = "El correo ya existe";

                		}else{

                			$sql = "INSERT INTO usuarios(nombre, apellido, edad, fecha_nacimiento, pais, correo, clave, privilegio, fecha_cuenta) VALUES ('$nombre', '$apellido', '$edad', '$fecha_nacimiento', '$pais', '$correo', '$clave', '$privilegio', '$date')";

                    		$query2 = mysqli_query(self::db(), $sql);

	                    	if(!$query2){

								$alert = "Ha ocurrido un error conectando con la base de datos.";

							}else{

	                    		$alert = "S";

							}
                		}
                	}
            	}
        	}

        	return $alert;
		}

		public function SingIn($datos){
			$correo = $datos->correo;
			$clave = $datos->clave;

			$sql = "SELECT * FROM usuarios WHERE correo = '$correo' AND clave = '$clave'";
			$sql2 = "SELECT * FROM usuarios WHERE correo = '$correo'";

			$query = mysqli_query(self::db(), $sql);
			$consulta = $query->fetch_all(MYSQLI_ASSOC);

			if(!$query){

				$alert = "Ha ocurrido un error conectando con la base de datos";

			}else{
				if(!$consulta){
					$query2 = mysqli_query(self::db(), $sql2);
					$consulta2 = $query2->fetch_all(MYSQLI_ASSOC);

					if(!$query2){
						$alert = "Ha ocurrido un error conectando con la base de datos";
					}else{
						if(!$consulta2){
							$alert = "Tu correo no existe en la base de datos";
						}else{
							$alert = "Tu contraseña es incorrecta";
						}
					}
				}else{
					foreach($consulta as $datos){
						$alert = array();
						$alert['id'] = $datos['id'];
						$alert['nombre'] = $datos['nombre'];
						$alert['apellido'] = $datos['apellido'];
						$alert['correo'] = $datos['correo'];
						$alert['privilegio'] = $datos['privilegio'];
					}
					
				}
				
			}

			return $alert;
		}

		public function db(){
			
			$conexion = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

			if(mysqli_connect_errno()){
				echo "Fallo al conectar a MySql";
                return;
			}

			mysqli_set_charset($conexion, DB_CHARSET);

			return $conexion;
		}
	}
?>