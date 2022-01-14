<?php

	require_once('core/db.php');

	class paginationModel extends db{

		protected function num_rows(){
			
			$query = "SELECT COUNT(*) as total_books FROM books";

			$query = mysqli_query(self::db(), $query);

			$query = $query->fetch_assoc();

			$query = $query['total_books'];
			
			return $query;

		}

		protected function show_books($start, $num_items_by_page){

			$query = 'SELECT b.id_book AS id, book_image AS books_image, book_name, a.author AS autor, description, download, price FROM books b JOIN authors_books ab ON b.id_book = ab.id_book JOIN authors a ON ab.id_author = a.id_author ORDER BY b.id_book DESC LIMIT '.$start.', '.$num_items_by_page;
			
			$query = mysqli_query(self::db(), $query);
			
			$query = $query->fetch_all(MYSQLI_ASSOC);

			return $query;
		}
	}

?>