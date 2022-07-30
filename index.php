
<?php

	include_once('source/databases/dbconnection.php');

	session_start();

	$username = isset($_SESSION['username']) ? $_SESSION['username'] : null;
	$open = isset($_GET['open']) ? true : false;

	$sql="SELECT * FROM medicares where username=?";

		if ($conn->connect_error) {
		die("Failed to connect : ".$conn->connect_error);
		}else{
		$stmt=$conn->prepare($sql);
		$stmt->bind_param("s",$username);
		$stmt->execute();
		$stmt_result=$stmt->get_result();

		if ($stmt_result->num_rows>0) {
			$data=$stmt_result->fetch_assoc();
			$src_prof=$data['profile'];
			$user_id=$data['id'];
		}else{
			
		}
	}
	if (!$open) {
		$cache = "xml/cache/cache.cache";
		if(is_file($cache)){
			$content = file_get_contents($cache);
			if ($content !== null) {
				$doc = new DOMDocument();
				libxml_use_internal_errors(true);
				$doc->loadHTML($content);

			}
		}
	}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Rabbit Web Editor</title>
	<script type="text/javascript" src="\JNine-itech\cms-web-design-texteditor\JS/jnine-texteditor.js"></script>
	<link rel="icon" type="image/*" href="./source/Img/news_active.png">
	<link rel="stylesheet" type="text/css" href="./css/style.css">
	<link rel="stylesheet" type="text/css" href="./css/editor.css">
	<script type="text/javascript" src="/Rabbit/js/functions.js"></script>
	<script type="text/javascript" src="/Rabbit/js/index.js"></script>
	<script type="text/javascript" src="/Rabbit/js/editorFunction.js"></script>
	
</head>
<body>
	<div id="main-body">
		<div id="header">
			<nav class="r-icon"></nav>
			<h3>RABBIT</h3>
			<ul>
				<?php
					if ($username != null) {
					?>
						
						<li class="preview-console" onclick="previewer()" title="Preview Magazine"></li>
						<li class="mag_up" onclick="interview()" title="Save File"></li>
						
						<a href="Profile/"><li class="preview-console" style="background: url(<?php echo $src_prof;?>) no-repeat;background-size: 100% 100%;background-position: center;" title="<?php echo($username)?>"></li></a>
						<li class="more_act" title="More" onclick="showC(false)">
							
						</li>
					<?php
					}else{
						?>
							<form action="/Medicare/Login.php" method="POST" id="login_form">
								<input type="text" name="rd" value="/Rabbit/" hidden="hidden">
								<input type="submit" name="" class="login" value="Login">
							</form>
						<?php
					}					
					?>
			</ul>
		</div>
		<div id="b-field">
		<div id="tools">
			<div>
				<nav class="p-tool">
					<span id="t1" class="tools-menus layout-edit active" title="Layout" onclick="choiceTool(0)"></span>
					<span id="t2" class="tools-menus bg-col-icon" title="Customize Background" onclick="choiceTool(1)"></span>
					<span id="t4" class="tools-menus openfile-icon" title="Open File" onclick="OF()"></span>
					<span id="t6" class="tools-menus code-icon" title="Draff File" onclick="codePanel()"></span>
					<span id="t5" class="tools-menus hide-tools right" title="Open Tool Panel" onclick="closeTools()"></span>
					
				</nav>
				<span id="t0" class="tools-menus setting-icon d-icon" title="Setting"></span>
			</div>
			<ul id="layout">
				<fieldset>
					<legend>Layouts</legend>
				<li class="layout1" onclick="Dolayout(1,'panel',false)">
					<nav class="normal-view">
						<nav class="row r2 n2">
							<nav class="col c2 cb"></nav>
							<nav class="col c2 cb"></nav>
						</nav>
						<nav class="row r2 n2">
							<nav class="col c1 cb"></nav>
						</nav>
					</nav>
					<nav class="hover">
						<label for="hover">Layout 1</label>
					</nav>
				</li>
				<li class="layout2" onclick="Dolayout(2,'panel',false)">
					<nav class="normal-view">
						<nav class="row r2 n2">
							<nav class="col c2 cb"></nav>
							<nav class="col c2 cb"></nav>
						</nav>
						<nav class="row r2 n2">
							<nav class="col c2 cb"></nav>
							<nav class="col c2 cb"></nav>
						</nav>
					</nav>
					<nav class="hover">
						<label for="hover">Layout 2</label>
					</nav>
				</li>
				<li class="layout3" onclick="Dolayout(3,'panel',false)">
					<nav class="normal-view">
						<nav class="row r2 n2">
							<nav class="col c1 cb"></nav>
						</nav>
						<nav class="row r2 n2">
							<nav class="col c2 cb"></nav>
							<nav class="col c2 cb"></nav>
						</nav>
					</nav>
					<nav class="hover">
						<label for="hover">Layout 3</label>
					</nav>
				</li>
				<li class="layout4" onclick="Dolayout(4,'panel',false)">
					<nav class="normal-view">
						<nav class="row r1 n1">
							<nav class="col c1 cb"></nav>
							
						</nav>
					</nav>
					<nav class="hover">
						<label for="hover">Layout 4</label>
					</nav>
				</li>
				<li class="layout5" onclick="Dolayout(5,'panel',false)">
					<nav class="normal-view">
						<nav class="row r2 n2">
							<nav class="col c2 cb"></nav>
							<nav class="col c2 cb"></nav>
						</nav>
						<nav class="row r2 n2">
							<nav class="col c3 cb"></nav>
							<nav class="col c3 cb"></nav>
							<nav class="col c3 cb"></nav>
						</nav>
					</nav>
					<nav class="hover">
						<label for="hover">Layout 5</label>
					</nav>
				</li>
				<li class="layout6" onclick="Dolayout(6,'panel',false)">
					<nav class="normal-view">
						<nav class="row r2 n2">
							<nav class="col c1 cb"></nav>
						</nav>
						<nav class="row r2 n2">
							<nav class="col c3 cb"></nav>
							<nav class="col c3 cb"></nav>
							<nav class="col c3 cb"></nav>
						</nav>
					</nav>
					<nav class="hover">
						<label for="hover">Layout 6</label>
					</nav>
				</li>
				<li class="layout7" onclick="Dolayout(7,'panel',false)">
					<nav class="normal-view">
						<nav class="row r2 n2">
							<nav class="col c1 cb"></nav>
						</nav>
						<nav class="row r2 n2">
							<nav class="col c1 cb"></nav>
						</nav>
					</nav>
					<nav class="hover">
						<label for="hover">Layout 7</label>
					</nav>
				</li>
				<li class="layout8" onclick="Dolayout(8,'panel',false)">
					<nav class="normal-view">
						<nav class="row r1 n1">
							<nav class="col c2 cb"></nav>
							<nav class="col c2 cb"></nav>
						</nav>
					</nav>
					<nav class="hover">
						<label for="hover">Layout 8</label>
					</nav>
				</li>
				</fieldset>
			</ul>
			<ul id="backgroundColor" style="display: none;">
				<fieldset>
					<legend>Choose Color</legend>
					<li class="bgc" style="background-color: none;box-shadow: none;">
						<nav class="bgc-row">
							<nav class="c-child col1" onclick="choseColor(1)"></nav>
							<nav class="c-child col2" onclick="choseColor(2)"></nav>
							<nav class="c-child col3" onclick="choseColor(3)"></nav>
							<nav class="c-child col4" onclick="choseColor(4)"></nav>
							<nav class="c-child col5" onclick="choseColor(5)"></nav>
							<nav class="c-child col6" onclick="choseColor(6)"></nav>
						</nav>
						<nav class="bgc-row">
							<nav class="c-child col7" onclick="choseColor(7)"></nav>
							<nav class="c-child col8" onclick="choseColor(8)"></nav>
							<nav class="c-child col9" onclick="choseColor(9)"></nav>
							<nav class="c-child col10" onclick="choseColor(10)"></nav>
							<nav class="c-child col11" onclick="choseColor(11)"></nav>
							<nav class="c-child col12" onclick="choseColor(12)"></nav>
						</nav>
						<nav class="bgc-row">
							<nav class="c-child col13" onclick="choseColor(13)"></nav>
							<nav class="c-child col14" onclick="choseColor(14)"></nav>
							<nav class="c-child col15" onclick="choseColor(15)"></nav>
							<nav class="c-child col16" onclick="choseColor(16)"></nav>
							<nav class="c-child col17" onclick="choseColor(17)"></nav>
							<nav class="c-child col18" onclick="choseColor(18)"></nav>
						</nav>
					</li>
				</fieldset>
				<br>
				<fieldset>
					<legend>Customize color</legend>
					<li class="cus-col" style="background-color: transparent;box-shadow: none;">
						<input class="show-res-cc" id="s-r-c" oninput="ONC()"></input>
						<nav class="filter-c" onclick="ColorClick()">
							<input type="color" id="fc" style="width: 0px;height: 0px;float: right;">
						</nav>
					</li>
				</fieldset>
				<br>
				<fieldset>
					<legend>Gradient Color</legend>
						<fieldset class="x-small">
							<legend>Gradient type</legend>
							<select class="selector" id="g-typ">
								<option>Linear</option>
								<option>Radial</option>
							</select>
							<span class="icon help" style="width: 25px;height: 25px;" title="What's Gradient type?"></span>
						</fieldset>
						<fieldset class="x-small">
							<legend>Direction</legend>
							<nav class="cs-selector down"  onclick="showDirection()">
								<span class="icon text-edit"></span>
							</nav>
							<span class="icon help" style="width: 25px;height: 25px;" title="What's the Behaviour of Gradient?"></span>
						</fieldset>
						<fieldset class="x-small">
							<nav class="directions">

							</nav>
						</fieldset>
						<fieldset class="x-small re" id="gad" style="display: none;">
							<legend>Customize Gradient Color</legend>

							<nav class="gc-field">
								<nav class="gc-color" style="background-color: #ffffff;"><input type="color" class="gc-child" name="" style="width: 0;height: 0;" data-command="0"></nav>
								<input type="range" class="gc-child gc-r" name="" style="cursor: pointer;" data-command="0" value="0">
								<span class="gc-child icon close" onclick="deleteGColor(0)"></span>
							</nav>
							<nav class="gc-field">
								<nav class="gc-color" style="background-color: #00bcd4;"><input type="color" class="gc-child" name="" style="width: 0;height: 0;" data-command="1"></nav>
								<input type="range" class="gc-child gc-r" name="" style="cursor: pointer;" data-command="1" value="100">
								<span class="gc-child icon close" onclick="deleteGColor(1)"></span>
							</nav>
							<nav id="more-gc"></nav>
							<nav class="gc-field">
								<input type='button' class="gc-child gc-button" value="Add Color" onclick="addGradientColor()">
							</nav>
						</fieldset>
				</fieldset>
			</ul>
		</div>
		<div id="panel" style="<?php if($p_style !== null){echo $p_style;}else{echo "background-color:#ffffff;";} ?>">
	<?php
		if ($open) {
			$filename=$_FILES["file"]["name"];
			$filetype=$_FILES["file"]["type"];
			$filetmp_name=$_FILES["file"]["tmp_name"];
			$filesize=$_FILES["file"]["size"];
			$fileerror=$_FILES["file"]["error"];
			
			$f_type=substr($filename, strripos($filename, '.')+1);
			if ($f_type == 'html') {
				if (is_file($filetmp_name)) {
					$content_f=file_get_contents($filetmp_name);
					echo $content_f;
				}else{
					echo "no file";
				}
			}else{
				
			}
		}
	?>
		</div>
		</div>
		<div id="footer"></div>
	</div>
	<div id="preview">
		<div id="result">
			<div id="header" style="height: 12%;">
				<h3 style="align-items: center;padding-left: 5px;">Preview</h3>
				<ul>
					<nav class="close-pre-light feel-size" onclick="closePre()"></nav>
				</ul>
			</div>
			<div id="obj" style="height: 90%"></div>
		</div>

	</div>
	<div id="alert-body">
		<div id="alert-box">
			<nav class="a-title">
				<nav class="a-a close-pre-light" id="b-c" onclick="cancelA()"></nav>
				<span id="a-icon" class="icon"></span><h3 id="a-title-f"></h3>
			</nav>

			<nav class="a-body" id="a-body-f"> 
				
			</nav>
			<nav class="a-footer" id="a-footer">
				<center><nav class="a-ok" id="a-ok-f" onclick="cancelA()">Ok</nav></center>
			</nav>
		</div>
	</div>
<div class="more-m hide-more">
	<fieldset>
		<legend>System</legend>
		<nav title="Undo" class="action" data-command="undo"><span class="x-icon undo"></span>Undo</nav>
		<nav title="Redo" class="action" data-command="redo"><span class="x-icon redo"></span>Redo</nav>
	</fieldset>	
</div>
<script type="text/javascript" src="/Rabbit/js/impfunctions.js"></script>

</body>
</html>