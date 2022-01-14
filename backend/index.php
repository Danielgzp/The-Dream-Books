<?php
	include_once "core/cors.php";
	
	$page = $_GET['page'];

	if(isset($_GET['id']) && $page == 'books'){

		include_once('controllers/apiController.php');

		$id = $_GET['id'];

		$show_api = new apiController();
		$show_api = $show_api->show_api('id', $id);

		echo $show_api = json_encode($show_api, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

	}else if(isset($_GET['pagination'])){

		include_once('controllers/paginationController.php');

		
		if(isset($_GET['pagination'])){
			$url = $_GET['page'];
		}else{
			$url = 1;
		}

		$pagination = new paginationController();
		$pagination = $pagination->pagination($url);

		echo $pagination = json_encode($pagination, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

	}else if($page == 'books' || $page == 'categories' || $page == 'autores'){

		include_once('controllers/apiController.php');

		$show_api = new apiController();
		$show_api = $show_api->show_api($page, $id = null);
		echo $show_api = json_encode($show_api, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

	}else if($page == 'signup'){

		include_once('controllers/authController.php');
		$data = json_decode(file_get_contents("php://input"));
		$get = new authController();
		$get = $get->signup($data);
		echo json_encode($get);

		}else if($page == "signin"){

			include_once('controllers/authController.php');
			$data = json_decode(file_get_contents("php://input"));
			$get = new authController();
			$get = $get->signin($data);
			echo json_encode($get);

		}else if($page == "addAuthor"){

			include_once('controllers/bookController.php');
			$data = json_decode(file_get_contents("php://input"));
			$get = new bookController();
			$get = $get->add_author($data);
			echo json_encode($get);

		}else if($page == "addCategory"){

			include_once('controllers/bookController.php');
			$data = json_decode(file_get_contents("php://input"));
			$get = new bookController();
			$get = $get->add_category($data);
			echo json_encode($get);

		}else if($page == "addBook"){

			include_once('controllers/bookController.php');
			$data = json_decode(file_get_contents("php://input"));
			$get = new bookController();
			$get = $get->add_book($data);
			echo json_encode($get);

		}else if($page == "updateBook"){
			
			include_once('controllers/bookController.php');
			$data = json_decode(file_get_contents("php://input"));
			$get = new bookController();
			$get = $get->update_book($data);
			echo json_encode($get);

		}else if($page == "deleteBook"){
			
			include_once('controllers/bookController.php');
			$data = json_decode(file_get_contents("php://input"));
			$get = new bookController();
			$get = $get->delete_book($data);
			echo json_encode($get);

		}
?>