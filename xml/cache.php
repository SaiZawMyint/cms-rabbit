<?php
	
	$x = $_POST['doc'] ? $_POST['doc'] : null;
	$nfilename = "";

	$gs = "cache";
	$nfilename = "cache/".$gs.".cache";

	if (is_file($nfilename)) {
		file_put_contents($nfilename, $x);
		echo "Saved Draff file.";
	}

?>