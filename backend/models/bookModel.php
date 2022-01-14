<?php 
	require_once('core/db.php');

	class bookModel extends db{

		protected function check_author($author_name){

			$query = mysqli_query(self::db(), "SELECT * FROM authors WHERE author = '$author_name'");

            $query = $query->fetch_all(MYSQLI_ASSOC);

            return $query;
		}

		protected function add_author($author_name){

			$query = "INSERT INTO authors (author) VALUES ('$author_name')";

            $query = mysqli_query(self::db(), $query);

            return $query;
		}

		protected function check_category($category_name){

			$query = mysqli_query(self::db(), "SELECT * FROM categories WHERE category = '$category_name'");

            $query = $query->fetch_all(MYSQLI_ASSOC);

            return $query;
		}

		protected function add_category($category_name){

			$query = "INSERT INTO categories (category) VALUES ('$category_name')";

            $query = mysqli_query(self::db(), $query);

            return $query;
		}

		protected function add_book($book){

			$query = "INSERT INTO books(book_image, book_name, description, download, price, upload_date) VALUES ('".$book["book_image"]."', '".$book["book_name"]."', '".$book["description"]."', '".$book["download"]."', '".$book["price"]."', '".$book["upload_date"]."')";

	        $query = mysqli_query(self::db(), $query);

	        return $query;
		}

		protected function get_id_book(){

			$query = "SELECT id_book FROM books ORDER BY id_book DESC LIMIT 1";

		    $query = mysqli_query(self::db(), $query);

		    $query = $query->fetch_assoc();

		    return $query;
		}

		protected function save_author($id_author, $id_book){

			$query = "INSERT INTO authors_books (id_author, id_book) VALUES ('$id_author', '$id_book')";

		    $query = mysqli_query(self::db(), $query);

		    return $query;

		}

		protected function save_category($id_category, $id_book){

			$query = "INSERT INTO categories_books (id_category, id_book) VALUES ('$id_category', '$id_book')";
		    
		    $query = mysqli_query(self::db(), $query);

		    return $query;

		}

		protected function update_book($book){

			$query = "UPDATE books b JOIN authors_books ab ON b.id_book = ab.id_book JOIN categories_books cb ON b.id_book = cb.id_book SET b.book_name = '".$book["book_name"]."', b.book_image = '".$book["book_image"]."', b.description = '".$book["description"]."', b.download = '".$book["download"]."', b.price = '".$book["price"]."', ab.id_author = '".$book["id_author"]."', cb.id_category = '".$book["id_category"]."' WHERE b.id_book = '".$book["id_book"]."'";

			$query = mysqli_query(self::db(), $query);

			return $query;
		}

		protected function delete_book($id){

			$query = "DELETE FROM books WHERE id_book = '$id'";

			$query = mysqli_query(self::db(), $query);

			return $query;

		}
	}
?>