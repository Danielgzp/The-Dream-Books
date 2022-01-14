<?php

	require_once('core/db.php');

	class apiModel extends db{

		protected function show_books(){

			$query = 'SELECT b.id_book AS id, book_image AS books_image, book_name, a.author AS autor, description, download, price FROM books b JOIN authors_books ab ON b.id_book = ab.id_book JOIN authors a ON ab.id_author = a.id_author ORDER BY b.id_book DESC';
			
			$query = mysqli_query(self::db(), $query);
			
			$query = $query->fetch_all(MYSQLI_ASSOC);

			return $query;

		}

		protected function show_categories(){

			$query = 'SELECT category AS categorie_name, id_category AS categorie_id FROM categories ORDER BY category ASC';
			
			$query = mysqli_query(self::db(), $query);
			
			$query = $query->fetch_all(MYSQLI_ASSOC);

			return $query;

		}

		protected function show_categories_content($category_name){

			$query = 'SELECT b.id_book AS id, book_image AS books_image, book_name, a.author AS autor, description, download, price FROM books b JOIN authors_books ab ON b.id_book = ab.id_book JOIN authors a ON ab.id_author = a.id_author JOIN categories_books cb ON b.id_book = cb.id_book JOIN categories c ON cb.id_category = c.id_category WHERE c.category = "'.$category_name.'"';

			$query = mysqli_query(self::db(), $query);

			$query = $query->fetch_all(MYSQLI_ASSOC);

			return $query;
		}

		protected function show_authors(){

			$query = 'SELECT id_author, author AS autor_name FROM authors';
			
			$query = mysqli_query(self::db(), $query);
			
			$query = $query->fetch_all(MYSQLI_ASSOC);

			return $query;
		}

		protected function show_authors_content($author_name){

			$query = 'SELECT b.id_book AS id, book_image AS books_image, book_name, a.author AS autor, description, download, price FROM books b JOIN authors_books ab ON b.id_book = ab.id_book JOIN authors a ON ab.id_author = a.id_author WHERE a.author = "'.$author_name.'"';

			$query = mysqli_query(self::db(), $query);

			$query = $query->fetch_all(MYSQLI_ASSOC);

			return $query;
		}

		protected function show_book_by_id($id){

			$query = 'SELECT b.id_book AS id, book_image AS books_image, book_name, a.author AS autor, description, download, price FROM books b JOIN authors_books ab ON b.id_book = ab.id_book JOIN authors a ON ab.id_author = a.id_author WHERE b.id_book = "'.$id.'"';
			
			$query = mysqli_query(self::db(), $query);
			
			$query = $query->fetch_all(MYSQLI_ASSOC);

			return $query;
		}

	}

?>