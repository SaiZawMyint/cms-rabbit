<?php
	
	session_start();

	$username = $_SESSION['username'];
	$type = "news";

	function RandomNumbers(int $length)
	{
		$array=[];

		for ($i=0; $i < $length; $i++) { 
			$array[]=mt_rand(1,10);
		}
		return $array;
	}	

	$data = isset(($_POST['magazine'])) ? $_POST['magazine'] : "none";
	if(isset($_POST['magazine'])){

		$magazine=$_POST['magazine'];

		$filename=$_FILES["file1"]["name"];
		$filetype=$_FILES["file1"]["type"];
		$filetmp_name=$_FILES["file1"]["tmp_name"];
		$filesize=$_FILES["file1"]["size"];
		$fileerror=$_FILES["file1"]["error"];

		$gs=implode("", RandomNumbers(10));
		
		$title = $_POST['title'];
		$Writter= $_POST['Writter'];
		$Comment = $_POST['Comment'];

		$nfilename="C:/Users/Acer/Desktop/mag".$gs.".html";
		


		
		
		$dataE = $title.'*'.$Writter.'*'.$Comment;
		if (!is_file($nfilename)) {
			file_put_contents($nfilename, $magazine);

			$ts=substr($filetype, strpos($filetype, "/")+1);
			$ncname = "C:/Users/Acer/Desktop/p".$gs.'.'.$ts;
			
			if (move_uploaded_file($filetmp_name, $ncname)) {
					echo "<center>See your file <a href='Magazine/?id=$post_id&npf=$gs&title=$title'><i>here<i></a>.</center>";
				}
		}
		}
	
	



?>