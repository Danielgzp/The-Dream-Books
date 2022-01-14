<?php 

	require_once('models/apiModel.php');

	class apiController extends apiModel{

		public function show_api($data, $id){

			$array = [];
			if($data == 'books'){

				$show_books = apiModel::show_books();
				$array = $show_books;

			}else if($data == 'categories'){

				$show_categories = apiModel::show_categories();

				foreach($show_categories as $d){
					$array2 = [];
					$results = [
						'categorie_name' => $d['categorie_name'],
						'categorie_id' => $d['categorie_id'],
						'categorie_books' => []
					];
					
					$show_categories_content = apiModel::show_categories_content($d['categorie_name']);

					foreach($show_categories_content as $e){
						$results2 = [
							'id' => $e['id'],
							'books_image' => $e['books_image'],
							'book_name' => $e['book_name'],
							'autor' => $e['autor']
						];
						array_push($array2, $results2);
					}

					$results['categorie_books'] = $array2;
					array_push($array, $results);
				}

			}else if($data == 'autores'){

				$show_authors = apiModel::show_authors();

				foreach($show_authors as $d){
					$array2 = [];
					$results = [
						'id_author' => $d['id_author'],
						'autor_name' => $d['autor_name'],
						'published_books' => []
					];

					$show_authors_content = apiModel::show_authors_content($d['autor_name']);

					foreach($show_authors_content as $e){
						$results2 = [
							'id' => $e['id'],
							'books_image' => $e['books_image'],
							'book_name' => $e['book_name'],
							'autor' => $e['autor']
						];
						array_push($array2, $results2);
					}
					$results['published_books'] = $array2;
					array_push($array, $results);
				}


			}else if($data == 'id'){

				$show_book_by_id = apiModel::show_book_by_id($id);

				foreach($show_book_by_id as $data){
					$array = [
						'id' => $data['id'],
						'books_image' => $data['books_image'],
						'book_name' => $data['book_name'],
						'autor' => $data['autor'],
						'description' => $data['description'],
						'download' => $data['download'],
						'price' => $data['price']
					];
				}

			}else{

				echo "Ha ocurrido un error";

			}
			return $array;
		}
	}

?>