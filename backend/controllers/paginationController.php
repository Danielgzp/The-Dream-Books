<?php

	require_once('models/paginationModel.php');

	class paginationController extends paginationModel{

		public function pagination($page){

			$array = [];

			$num_total_rows = paginationModel::num_rows();

			$num_items_by_page = 30;

			if($page == 1){
				$start = 0;
				$page = 1;
			}else{
				$start = ($page - 1) * $num_items_by_page;
			}

			$total_pages = ceil($num_total_rows / $num_items_by_page);

			if($page > $total_pages){

				return "Ya ha pasado el limite de páginas";

			}else{

				$show_books = paginationModel::show_books($start, $num_items_by_page);

				$array2 = $show_books;

				if($total_pages > 1){
					
					if($page != 1){
						$prev = "http://localhost/backend/books/page/".($page - 1);
					}else{
						$prev = null;
					}

					if($page != $total_pages){
						$next = "http://localhost/backend/books/page/".($page + 1);
					}

					if($page == $total_pages){
						$next = null;
					}
				}

				$array = [
					"info" => [
						"count" => $num_total_rows,
						"pages" => $total_pages,
						"next" => $next,
						"prev" => $prev
					],
					"results" => []

				];

				$array['results'] = $array2;

				return $array;
			}

		}

	}

?>