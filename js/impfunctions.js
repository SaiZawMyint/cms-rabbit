
var imgId = 0;
function doSomething(cmds) {
	
			var cmd = cmds.slice(0,cmds.indexOf('*'));
			var id = cmds.slice(cmds.indexOf('*')+1,cmds.length);
			
			console.log(cmd,id);
			if (cmd == "textEditor") {
				ExecTextEditor(id);
			}
			if (cmd == "photo") {
				ExecPhoto(id);
			}
			if (cmd == "video") {
				ExecVideo(id);
			}
			if (cmd == "styleSheet") {
				ExecStyleSheet(id);
			}
			if (cmd == "paste") {
				Paste(id);
			}
			if (cmd == "layout") {
				ExecLayout(id);
			}

}

function ExecTextEditor(idi) {
	var f = $_create("div");
	var id = _(idi);
	f.classList.add('x-editor');
	f.setAttribute('data-command','text');
	var editor = new Editor(f);
	editor.applyEditor('textEditor');
	id.appendChild(f);
	var o = [id,f];

	var ad = editor.additionalTool;
	var pad = ad.parentElement;
	var cache = {parent:pad,child:ad,comment:"add"};

	com.action('add',o,'Text',cache);
}

function ExecPhoto(idi) {
	var id = _(idi);
	var f = $_create('div');
	f.classList.add('x-editor');
	f.style.overflow="hidden";
	f.setAttribute('data-command','photo');
	var editor = new Editor(f);
	editor.applyEditor('imageEditor');

	var c = document.createElement("input");
	c.setAttribute("type","file");
	c.setAttribute("accept","image/*");
	
	c.click();
	
	c.addEventListener("change",getPhoto);
	function getPhoto(evt){

	var files=evt.target.files;
	if(files.length === 0){
		console.log('No file is selected !');
		return;
	}	
	var reader=new FileReader();
	reader.onload=function(event){
		var img = document.createElement("img");
		img.classList.add("cus-img");
	 	img.src =event.target.result;
		

		f.appendChild(img);
		id.appendChild(f);
		var o = [id,f];
		com.action('add',o,'Photo',null);
	};
	reader.readAsDataURL(files[0]);
	};
	
}

function ExecVideo(idi) {
	var id = _(idi);
	var vr = videoRule();
	Dialog('information','Video Rules',vr,"ApplyVideo("+id.id+")");
}
function ExecStyleSheet(idi) {
	var id = _(idi);
	var x = customElement(id,"Background*color","Color*color","Padding*text","Font*text","TextAlign*text");
	console.log(id);
	Dialog('Editor','Customize Panel',x,'cancelA()');
}
function ExecLayout(idi) {
	var id = _(idi);
	var elements = document.createElement("div");
	elements.setAttribute("id","tools");
	elements.style.borderRight="0";
	elements.innerHTML="<ul>\r\n" + 
"				<li class=\"layout1\" onclick=\"Dolayout(1,'"+id.id+"',"+true+")\">\r\n" + 
"					<nav class=\"normal-view\">\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c1 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"					</nav>\r\n" + 
"					<nav class=\"hover\">\r\n" + 
"						<label for=\"hover\">Layout 1</label>\r\n" + 
"					</nav>\r\n" + 
"				</li>\r\n" + 
"				<li class=\"layout2\" onclick=\"Dolayout(2,'"+id.id+"',"+true+")\">\r\n" + 
"					<nav class=\"normal-view\">\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"					</nav>\r\n" + 
"					<nav class=\"hover\">\r\n" + 
"						<label for=\"hover\">Layout 2</label>\r\n" + 
"					</nav>\r\n" + 
"				</li>\r\n" + 
"				<li class=\"layout3\" onclick=\"Dolayout(3,'"+id.id+"',"+true+")\">\r\n" + 
"					<nav class=\"normal-view\">\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c1 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"					</nav>\r\n" + 
"					<nav class=\"hover\">\r\n" + 
"						<label for=\"hover\">Layout 3</label>\r\n" + 
"					</nav>\r\n" + 
"				</li>\r\n" + 
"				<li class=\"layout4\" onclick=\"Dolayout(4,'"+id.id+"',"+true+")\">\r\n" + 
"					<nav class=\"normal-view\">\r\n" + 
"						<nav class=\"row r1 n1\">\r\n" + 
"							<nav class=\"col c1 cb\"></nav>\r\n" + 
"							\r\n" + 
"						</nav>\r\n" + 
"					</nav>\r\n" + 
"					<nav class=\"hover\">\r\n" + 
"						<label for=\"hover\">Layout 4</label>\r\n" + 
"					</nav>\r\n" + 
"				</li>\r\n" + 
"				<li class=\"layout5\" onclick=\"Dolayout(5,'"+id.id+"',"+true+")\">\r\n" + 
"					<nav class=\"normal-view\">\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c3 cb\"></nav>\r\n" + 
"							<nav class=\"col c3 cb\"></nav>\r\n" + 
"							<nav class=\"col c3 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"					</nav>\r\n" + 
"					<nav class=\"hover\">\r\n" + 
"						<label for=\"hover\">Layout 5</label>\r\n" + 
"					</nav>\r\n" + 
"				</li>\r\n" + 
"				<li class=\"layout6\" onclick=\"Dolayout(6,'"+id.id+"',"+true+")\">\r\n" + 
"					<nav class=\"normal-view\">\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c1 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c3 cb\"></nav>\r\n" + 
"							<nav class=\"col c3 cb\"></nav>\r\n" + 
"							<nav class=\"col c3 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"					</nav>\r\n" + 
"					<nav class=\"hover\">\r\n" + 
"						<label for=\"hover\">Layout 6</label>\r\n" + 
"					</nav>\r\n" + 
"				</li>\r\n" + 
"				<li class=\"layout7\" onclick=\"Dolayout(7,'"+id.id+"',"+true+")\">\r\n" + 
"					<nav class=\"normal-view\">\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c1 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"						<nav class=\"row r2 n2\">\r\n" + 
"							<nav class=\"col c1 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"					</nav>\r\n" + 
"					<nav class=\"hover\">\r\n" + 
"						<label for=\"hover\">Layout 7</label>\r\n" + 
"					</nav>\r\n" + 
"				</li>\r\n" + 
"				<li class=\"layout8\" onclick=\"Dolayout(8,'"+id.id+"',"+true+")\">\r\n" + 
"					<nav class=\"normal-view\">\r\n" + 
"						<nav class=\"row r1 n1\">\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"							<nav class=\"col c2 cb\"></nav>\r\n" + 
"						</nav>\r\n" + 
"					</nav>\r\n" + 
"					<nav class=\"hover\">\r\n" + 
"						<label for=\"hover\">Layout 8</label>\r\n" + 
"					</nav>\r\n" + 
"				</li>\r\n" + 
"			</ul>";

	elements.style.width="100%";
	Dialog('information','Choose Layout',elements,'cancelA()');
}

function Paste(idi) {
	// body...
	if (cpy_item != null) {
		var id = _(idi);
		var ele1 = cpy_item.element;
		var ele = $_create('div');
		ele.innerHTML=ele1.innerHTML;

		var f1 = ele.firstElementChild;
		var x = ele.lastElementChild;
		ele.removeChild(f1);

		var type = cpy_item.type;
		var f = $_create('div');
		f.appendChild(x);
		f.classList.add('x-editor');
		if (ele1.style.length > 0) {
			for(var i = 0 ; i < ele1.style.length ; i ++){
				f.style.setProperty(ele1.style[i],ele1.style.getPropertyValue(ele1.style[i]));
			}
		}

		if (type == 'text') {

			f.setAttribute("data-command","text");
			var editor = new Editor(f);
			editor.applyEditor('textEditor');
			
		}
		if (type == 'image') {
			var or = f.firstElementChild;
			f.innerHTML="";
			f.setAttribute('data-command','photo');
			var editor = new Editor(f);
			editor.applyEditor('imageEditor');
			f.appendChild(or);
		}
		if (type == 'video') {
			var or = f.firstElementChild;
			f.innerHTML="";
			f.setAttribute('data-command','video');
			var editor = new Editor(f);
			editor.applyEditor('videoEditor');
			f.appendChild(or);
		}
		id.appendChild(f);
		var o = [id,f];
		com.action("add",o,type,null);
	}
	
}
//command
var com = new Command();
var cud = 1;
UR();
function UR(){
	var act = $_classes('action');
	for(let x of act){
		x.addEventListener('click',(e)=>{
			var cmd = x.dataset['command'];
			var selection = com.item;
			
			if (cmd == 'undo') {
				if (selection.length >= cud) {
					var select = selection[selection.length-cud];
					var bh = select.behaviour;
					var obj = select.object;
					var cm = select.comment;
					var cac = select.cache;
					if (bh === 'add') {
						var parent = obj[0];
						var child = obj[1];
						parent.removeChild(child);
						var o = [parent,child];
						com.item[selection.length-cud].behaviour = "remove";

						if (cac != null) {
							if (cac.comment == 'add' ) {
								cac.parent.removeChild(cac.child);
								cac.comment = 'remove';
							}
						}

						if (cud <= com.item.length) {
							cud++;
						}
					}else if (bh === 'remove'){
						var parent = obj[0];
						var child = obj[1];
						parent.appendChild(child);
						var o = [parent,child];
						com.item[selection.length-cud].behaviour = "add";
						if (cac != null) {
							if (cac.comment == 'remove' ) {
								cac.parent.appendChild(cac.child);
								cac.comment = 'add';
							}
						}
					}
					


					notification("Undo "+cm);
				}
			}
			if (cmd == 'redo') {
				if (cud > 1) {
					var c = cud - 1;
					var select = selection[selection.length-c];

					var bh = select.behaviour;
					var obj = select.object;
					var cm = select.comment;
					var cac = select.cache;
					if (bh === 'remove') {
						var parent = obj[0];
						var child = obj[1];
						parent.appendChild(child);
						var o = [parent,child];
						com.item[selection.length-c].behaviour = "add";

						if (cac != null) {
							if (cac.comment == 'remove' ) {
								cac.parent.appendChild(cac.child);
								cac.comment = 'add';
							}
						}

						if (cud > 0) {
							cud--;
						}
					}else if(bh === 'add'){
						var parent = obj[0];
						var child = obj[1];
						parent.removeChild(child);
						var o = [parent,child];
						com.item[selection.length-c].behaviour = "remove";
						
						if (cac != null) {
							if (cac.comment == 'add' ) {
								cac.parent.removeChild(cac.child);
								cac.comment = 'remove';
							}
						}
					}
					notification("Redo "+cm);
				}
			}
			showC(false);
		});
	}
}

//gradient
var Pgradient = new Gradient('panel');



doActionToGBs();
function doActionToGBs(){

	var gc = $_classes('gc-color');
	for(var i = 0 ; i < gc.length; i++){
		let xgc = gc[i];
		xgc.addEventListener('click',(e)=>{
			var cgc = xgc.firstElementChild;
			cgc.click();
			cgc.addEventListener('input',(e)=>{
				xgc.style.backgroundColor=e.target.value;
				var b = cgc.dataset['command'];

				Pgradient.updateColorsAt(b,e.target.value);
			});
		});
	
	}

	var gr = $_classes('gc-r');
	for(let xgr of gr){
		xgr.addEventListener('input',(e)=>{
			var b = xgr.dataset['command'];
			Pgradient.updateColorRangeAt(b,e.target.value);
		});
	}
}


var ds = false;
function showDirection() {
	var d = $_('.directions');
	var typ =_('g-typ').value;
	if (!ds) {
		applyGradientDirection(d,typ);
		d.style.height='60px';
		ds=true;
	}else{
		d.style.height="0px";
		ds=false;
		d.innerHTML='';
	}
	
}
var gad = false;
function applyGradientDirection(d,typ) {

	var deg = 0;
	var dg = ['center','top','left','bottom','right','top left','top right','bottom left','bottom right'];
	var AP = _('panel');
	var precolor = "";
	if (_('s-r-c').value) {
		precolor = _('s-r-c').value;
	}else{
		precolor="#00bcd4";
	}

	
	var collection = [];

	for (var i = 0; i < 2; i++) {
		for(var j = 0 ; j < 5 ; j++){
			let x = $_create('span');
			x.classList.add('de');
			if (typ == 'Linear') {
				x.style.background="linear-gradient("+deg+"deg,#ffffff,#00bcd4)";
				x.setAttribute('data-command',deg+"deg");
				deg +=40;
			}
			if (typ == 'Radial') {
				if (deg != 10) {
					x.style.background="radial-gradient(circle at "+dg[deg]+",#ffffff,#00bcd4)";
					x.setAttribute('data-command',"circle at "+dg[deg]);
					deg++;
				}
				if(deg == 10){
					x.style.background="radial-gradient(circle at center,#00bcd4,#00bcd4)";
					x.setAttribute('data-command',"circle at center");
				}
				
			}
			x.addEventListener('click',(e)=>{
				var bh = x.dataset['command'];
				if (!gad) {
					_('gad').style.display = "flex";
					gad = true;
				}
				if (typ == 'Linear') {
					Pgradient.updateTyp('linear-gradient');
				}
				if (typ == 'Radial') {
					Pgradient.updateTyp('radial-gradient');
				}
				Pgradient.updateDirection(bh);
				console.log(bh);
				showDirection();
			});
			x.style.gridRow = i+1;
			x.style.gridColumn = j+1;
			d.appendChild(x);
		}
	}
}

function addGradientColor() {
	var x = $_classes('gc-color').length;

	var field = $_create('nav');
	field.classList.add('gc-field');

	var colorF = $_create('nav');
	colorF.classList.add('gc-color');;
	colorF.style.backgroundColor="#ffffff";

	var colorinp = $_create('input');
	colorinp.type="color";
	colorinp.classList.add('gc-child');
	colorinp.style.width="0";
	colorinp.style.height="0";
	colorinp.setAttribute('data-command',x);

	colorF.appendChild(colorinp);

	var range = $_create('input');
	range.type = "range";
	range.value=0;
	range.classList.add('gc-child');
	range.classList.add('gc-r');
	range.setAttribute('data-command',x);

	var close = $_create('icon');
	close.classList.add('gc-child');
	close.classList.add('icon');
	close.classList.add('close');

	field.appendChild(colorF);
	field.appendChild(range);
	field.appendChild(close);

	var z = Pgradient.getAllColor.length;
	Pgradient.updateColorsAt(z,"#ffffff");
	Pgradient.updateColorRangeAt(z,0);

	_('more-gc').appendChild(field);
	doActionToGBs();
}

function deleteGColor(index){
	
}
function updateGradient(grad) {
	var x = grad;
	x = x.trim();
	var typ = x.slice(0,x.indexOf('('));
	var vals = x.slice(x.indexOf('(')+1,x.lastIndexOf(')'));
	var dir = vals.slice(0,vals.indexOf(','));
	var val = vals.slice(vals.indexOf(',')+1,vals.length)+",";

	var countGe = $_classes('gc-color').length;

	countInc = 0;
	var xval = val;
	var aval=[];
	var rcl = 0;
	for(var i = 0 ; i < val.length ; i++ ){
		if (val[i]===',') {
			if (val[i-1] === '%') {
				countInc++;
				var r = xval.slice(0+rcl,i);
				rcl += r.length+1;
				aval.push(r);
			
			}
		}
	}

	var diff = countInc - countGe;

	for(var i = 0 ; i < diff ; i++){
		addGradientColor();
	}

	var rec = $_classes('gc-color');
	var grec = $_classes('gc-r');
	for(var i = 0 ; i < rec.length ; i++){
		let xo = rec[i];
		let gxo = grec[i];

		let o = aval[i];
		o=o.trim();

		var cbv = o.slice(0,o.lastIndexOf(' '));
		var rv = parseInt(o.slice(o.lastIndexOf(' ')+1,o.length-1));

		xo.style.backgroundColor=cbv;
		Pgradient.updateColorsAt(i,cbv);

		gxo.value=rv;
		Pgradient.updateColorRangeAt(i,rv);
	}

}

