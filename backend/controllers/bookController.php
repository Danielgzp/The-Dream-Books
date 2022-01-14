<?php
	require_once('models/bookModel.php');

	class bookController extends bookModel{

		public function add_author($data){

			$author_name = $data;
            	
            $check = bookModel::check_author($author_name);

            if($check){

                $alert = "El autor ya existe en nuestra base de datos";

            }else{

            $query = bookModel::add_author($author_name);

		        if(!$query){

					$alert = "Ha ocurrido un error conectando con la base de datos.";

				}else{

		            $alert = "S";
		        }

            }
            

			return $alert;
		}


		public function add_category($data){

			$category_name = $data;

			if(!preg_match("/^[a-zA-ZÀ-ÿ\s]{1,40}$/", $category_name)){

                $alert = "Sólo se permiten letras para el nombre de la categoría";

            }else{
            	
            	$check = bookModel::check_category($category_name);

                if($check){

                	$alert = "La categoría ya existe en nuestra base de datos";

                }else{

                	$query = bookModel::add_category($category_name);

	                if(!$query){

						$alert = "Ha ocurrido un error conectando con la base de datos.";

					}else{

	                	$alert = "S";
	                }

                }
            }

			return $alert;

		}

		public function add_book($data){

			$book_name = $data->book_name;
			$book_image = $data->books_image;
			$description = $data->description;
			$download = $data->download;
			$price = $data->price;
			$id_author = $data->author;
			$id_category = $data->category;
			$upload_date = date("Y-m-d H:i:s");

			if(!is_numeric($price)){

				$alert = "El precio tiene que ser númerico";

			}else{

				$book = [
					"book_name" => $book_name,
					"book_image" => $book_image,
					"description" => $description,
					"download" => $download,
					"price" => $price,
					"upload_date" => $upload_date
				];

				$save_book = bookModel::add_book($book);

				

		        if(!$save_book){

					$alert = "Ha ocurrido un error conectando con la base de datos.";

				}else{


		            $get_id = bookModel::get_id_book();

		            $id_book = $get_id['id_book'];

		            $save_author = bookModel::save_author($id_author, $id_book);

		            if(!$save_author){

		            	$alert = "Ha ocurrido un error al insertar el autor";

		            }else{

		            	$save_category = bookModel::save_category($id_category, $id_book);

		            	if(!$save_category){

		            		$alert = "Ha ocurrido un error al insertar la categoría";

		            	}else{

		            		$alert = "S";

		            	}
		            }

				}
			}

			return $alert;
		}

		public function update_book($data){

			$id_book = $data->id;
			$book_name = $data->book_name;
			$book_image = $data->books_image;
			$description = $data->description;
			$download = $data->download;
			$price = $data->price;
			$id_author = $data->author;
			$id_category = $data->category;

			if(!is_numeric($price)){

				$alert = "El precio tiene que ser númerico";

			}else{

				$book = [
					"id_book" => $id_book,
					"book_name" => $book_name,
					"book_image" => $book_image,
					"description" => $description,
					"download" => $download,
					"price" => $price,
					"id_author" => $id_author,
					"id_category" => $id_category
				];

				$update_book = bookModel::update_book($book);

				if(!$update_book){

					$alert = "Ha ocurrido un error al actualizar los datos";

				}else{

					$alert = "S";

				}

			}	
			return $alert;
		}

		public function delete_book($data){

			$id = $data;

			//Para usarlo así hay que habilitar CASCADE ON en las FK
			//De lo contrario hay que eliminar primero "los hijos" y luego "los padres"

			$delete = bookModel::delete_book($id);

			if(!$delete){

				$alert = "Ha ocurrido un error eliminando el libro";

			}else{

				$alert = "S";
				
			}

			return $alert;
		}

	}

?>