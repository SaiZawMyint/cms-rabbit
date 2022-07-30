
//short fun
function _(id) {
	return document.getElementById(id);
}
function $_(qsl) {
	return document.querySelector(qsl);
}
function $_classes(cls) {
	return document.getElementsByClassName(cls);
}
function $_create(tag) {
	return document.createElement(tag);
}
function $_tag(tag) {
	return document.getElementsByTagName(tag);
}
//Useful array
const layout_element = new Array();
const layout_rec = new Array();
const each_l_e = new Array();
const element_rec = new Array();
const magazine_title = new Array();

var cpy_item;

window.addEventListener('beforeunload',function(e){
	e.preventDefault();
	
	storeCache();
	
//	e.returnValue='';
});

var eb = localStorage.getItem('r-loder-cache')?localStorage.getItem('r-loder-cache'):'no element';
console.log(eb);

function storeCache() {
	var prog = document.createElement("progress");
	prog.setAttribute("value","0");
	prog.setAttribute("max","100");
	prog.setAttribute("id","prog_bar");
	prog.style.width="80%";
	prog.style.float="left";
	prog.style.marginLeft="10%";
	prog.value=50;

	var lab = document.createElement("label");
	lab.setAttribute("id","loadingLab");
	lab.innerHTML="Loading";
	lab.style.textAlign="center";
	lab.style.width="100%";
	
	var body =$_create('div');
	body.style.display="flex";
	body.style.flexDirection="column";
	body.style.alignItems="center";
	body.style.justifyContent="center";
	body.appendChild(lab);
	body.appendChild(prog);

	Dialog('information','File System',body,'cancelA()');

	var form = new FormData();
	var x = _('panel');
	if (x.innerHTML != null) {
		var y = $_create('div');

		var xp = $_create('div');
		xp.id = "cache_parent";
		for(var i = 0 ; i < x.style.length ; i++ ){
			xp.style.setProperty(x.style[i],x.style.getPropertyValue(x.style[i]));
		}

		xp.innerHTML = x.innerHTML;
		y.appendChild(xp);
		form.append('doc',y.innerHTML);

		var ajax = new XMLHttpRequest();
		ajax.upload.addEventListener("progress", progressHandler, false);
		ajax.addEventListener("load", loadHandler, false);
		ajax.addEventListener("error", errorHandler, false);
		ajax.addEventListener("abort", abortHandler, false);
		ajax.open("POST","/Rabbit/xml/cache.php");
		ajax.send(form);
		
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4 && ajax.status == 200){
				cancelA();
				var cm = $_create('center');
				cm.innerHTML=ajax.responseText;
				
				Dialog('information','File System',cm,'cancelA()');
			}
		}
	}
}

function Dolayout(num,parent,childT) {
	if(num == 1){
		layout1(parent,childT);
	}
	if(num == 2){
		layout2(parent,childT);
	}
	if(num == 3){
		layout3(parent,childT);
	}
	if(num == 4){
		layout4(parent,childT);
	}
	if(num == 5){
		layout5(parent,childT);
	}
	if(num == 6){
		layout6(parent,childT);
	}
	if(num == 7){
		layout7(parent,childT);
	}
	if(num == 8){
		layout8(parent,childT);
	}
	if (childT) {
		cancelA();
	}
	if(!childT){
		
	}
	console.log(com.item);
}

function showC(b) {
	// body...
	var m = $_('.more-m');
	if (!b) {
		m.classList.toggle('hide-more');
	}else{
		m.classList.add('hide-more');
	}
	
	
}


var countli=0,countColor=0;
var countre=0;
function hoverElement(id,childT) {
	var ele = $_create("nav");
	ele.classList.add("element-hover");
	ele.classList.add("we-editor-obj");
	ele.setAttribute("id","hover_r"+countre);
	countre++;
	var srcClass =["e-text","e-photo","u-vid","text-edit","paste","layout-edit"];
	var titles =["Text Editor","Choose Photo","Choose Video","Style Sheet","Paste","Add Layout"];
	var cmd =["textEditor*"+id,"photo*"+id,"video*"+id,"styleSheet*"+id,"paste*"+id,"layout*"+id];
	var ul = $_create("ul");
	for(var i = 0 ; i < 6 ; i++){
		if (i == 5){
			if (childT) {
				continue;
			}
		}
		var li = $_create("li");
		li.classList.add(srcClass[i]);
		if (!childT) {}
		li.classList.add("we-editor-ele");
		li.title=titles[i];
		li.setAttribute("data-command",cmd[i]);
		li.setAttribute("onclick","doSomething('"+cmd[i]+"')");
		ul.appendChild(li);
	}
/*	var cf = $_create('div');
	cf.style.display="flex";
	cf.style.alignItems="center";
	cf.style.justifyContent="center";
	cf.style.width="30px";
	cf.style.height="35px";
	cf.style.float="right";

	var cancelF = document.createElement("nav");
	cancelF.style.width="15px";
	cancelF.style.height="15px";
	cancelF.style.float = "right";
	cancelF.style.cursor="pointer";
	cancelF.style.borderRadius="50%";
	cancelF.classList.add("close-pre-light");
	cancelF.setAttribute("title","close editor panel");

	cancelF.setAttribute("onclick","remove_field("+id+")");
	cf.appendChild(cancelF);*/

	ele.appendChild(ul);
/*	ele.appendChild(cf);*/
	
	return ele;
}

var layoutC=0,countEle=0;
function layout1(parent,childT) {
	var layout = new Layout();
	var row = 2;
	var col = [2,1];
	var mainview = layout.generateLayout(row,col,childT);
	_(parent).appendChild(mainview);
	var item = [_(parent),mainview];
	com.action('add',item,'layout',null);
	console.log(com.item);
}

function layout2(parent,childT) {
	var layout = new Layout();
	var row = 2;
	var col = [2,2];
	var mainview = layout.generateLayout(row,col,childT);
	_(parent).appendChild(mainview);
	var item = [_(parent),mainview];
	com.action('add',item,'layout',null);

}

function layout3(parent,childT) {
	// body...
	var layout = new Layout();
	var row = 2;
	var col = [1,2];
	var mainview = layout.generateLayout(row,col,childT);
	_(parent).appendChild(mainview);
	var item = [_(parent),mainview];
	com.action('add',item,'layout',null);

}

function layout4(parent,childT) {
	// body...
	var layout = new Layout();
	var row = 1;
	var col = [1];
	var mainview = layout.generateLayout(row,col,childT);
	_(parent).appendChild(mainview);
	var item = [_(parent),mainview];
	com.action('add',item,'layout',null);

}

function layout5(parent,childT) {
	// body...
	var layout = new Layout();
	var row = 2;
	var col = [2,3];
	var mainview = layout.generateLayout(row,col,childT);
	_(parent).appendChild(mainview);
 	var item = [_(parent),mainview];
	com.action('add',item,'layout',null);
}

function layout6(parent,childT) {
	// body...
	var layout = new Layout();
	var row = 2;
	var col = [1,3];
	var mainview = layout.generateLayout(row,col,childT);
	_(parent).appendChild(mainview);
	var item = [_(parent),mainview];
	com.action('add',item,'layout',null);
}
function layout7(parent,childT) {
	// body...
	var layout = new Layout();
	var row = 2;
	var col = [1,1];
	var mainview = layout.generateLayout(row,col,childT);
	_(parent).appendChild(mainview);
	var item = [_(parent),mainview];
	com.action('add',item,'layout',null);
}

function layout8(parent,childT) {
	// body...
	var layout = new Layout();
	var row = 1;
	var col = [2];
	var mainview = layout.generateLayout(row,col,childT);
	_(parent).appendChild(mainview);
	var item = [_(parent),mainview];
	com.action('add',item,'layout',null);
}

function cancelA() {
	document.getElementById('alert-body').style.display="none";
	document.getElementById('a-title-f').innerHTML="";
	document.getElementById('a-body-f').innerHTML="";
	document.getElementById('a-ok-f').removeAttribute("onclick");
}
//create look and feel video roll
function videoRule(){
	var displayer = document.createElement("div");
	displayer.style.width="80%";
	displayer.style.marginLeft="10%";

	
	var tip1 = document.createElement("nav");
	tip1.style.float="left";
	var warn1 = document.createElement("span");
	warn1.style.width="1em";
	warn1.style.height="1em";
	warn1.style.float="left";
	warn1.classList.add("warning-icon");
	tip1.appendChild(warn1);
	var contip1 = document.createElement("span");
	contip1.innerHTML="Your video must accept the following requirement,<br>(1) No rude content,<br>(2) No effect other business,<br>(3) Video length must less than 30MB.<br><br>";

	var vdfield = document.createElement("fieldset");
	var legend = document.createElement("legend");
	legend.innerHTML="Choose Your video";
	legend.style.padding="5px 0px";
	vdfield.appendChild(legend);
    
	var vdP = document.createElement("div");
	vdP.style.width="100%";
	vdP.style.height="150px";
	vdP.style.backgroundSize="50%";
	vdP.style.borderRadius="5px";
	vdP.style.backgroundColor="rgb(48 68 154 / 80%)";
	vdP.style.cursor="pointer";
	vdP.classList.add("u-vid");
	vdP.style.transition="width 1s";
	vdP.style.float="left";
	vdP.style.position="relative";
	vdP.setAttribute("title","Click to choose video.");
	var vdf = document.createElement("input");
	vdf.type="file";
	vdf.accept="video/mp4";


	vdfield.appendChild(vdP);
	var vdshow = document.createElement("video");
//	vdshow.innerHTML="Your Browser unavaliable to play video.";
	vdshow.autoplay="true";
	vdshow.muted="true";
	vdshow.loop ="true";
	vdshow.style.width="100%";
	vdshow.style.height="100%";
	vdshow.style.border="1px solid #00bcd4";
	var source = document.createElement("source");
	source.type="video/mp4";
	vdshow.appendChild(source);
	vdshow.load();
	vdP.addEventListener("click",()=>{
		vdf.click();
	});
	var preV = document.createElement("span");
	preV.style.width="100%";
	preV.style.height="auto";
	preV.style.textAlign="center";
	preV.style.float="left";
	preV.style.marginBottom="-40px";
	preV.style.position="relative";
	preV.style.backgroundColor="#ffa50078";
	var v = false;
	vdf.addEventListener("change",displayVid);
		function displayVid(event){
			var vdfile = event.target.files;
			if (vdfile.length === 0) {
				console.log("Please, Choose file.")
				}
				var size = vdfile[0].size;
				if (size < 30000000) {
					var reader = new FileReader();
					reader.readAsDataURL(event.target.files[0]);
					reader.onload=function(e){
						source.src = e.target.result;
						VS = e.target.result;
						vdshow.load();
						preV.innerHTML="";
						preV.style.backgroundColor="transparent";
					};
					
				}else{
					preV.innerHTML="Video file is too large.";
					vdfield.appendChild(preV);
					source.src="";
					VS="";
					vdshow.load();
					preV.style.backgroundColor="#ffa50078";
				}
				vdfield.appendChild(vdshow);
				v = true;
				vdfield.removeChild(vdP);
				vdP.style.width="40px";
				vdP.style.height="40px";
				vdP.style.borderRadius="40px";
				vdP.style.backgroundSize="30px";
				vdP.style.margin="-50px 5px 5px 5px";
				vdfield.appendChild(vdP);
			
		};

//	vdfield.appendChild(vdP);
	
	tip1.appendChild(contip1);
	displayer.appendChild(tip1);
	displayer.appendChild(vdfield);
	return displayer;

}
//Apply Video
function ApplyVideo(id){
	if (VS != "") {
		videoGenerator(VS,id);
		VS="";
	}else{
		alert("You have not choose file yet.")
	}
	
}
//show video
function videoGenerator(videosource,id){
	var field = document.createElement("div");
	field.classList.add('x-editor');
	field.setAttribute('data-command','video');
	var toolBar = document.createElement("div");
	toolBar.classList.add("we-editor-obj");
	toolBar.style.width="100%";
	toolBar.style.height="auto";
	toolBar.style.float="left";
	toolBar.style.backgroundColor="rgb(8 6 23 / 47%)";

	var vd = document.createElement("video");
	vd.style.width="100%";
	vd.style.height="100%";
	vd.style.float="left";

	var ed = new Editor(field);
	ed.applyEditor("videoEditor");

	

	var s = document.createElement("source");
	s.src = videosource;
	vd.appendChild(s);
	vd.load();
	field.appendChild(vd);
	id.appendChild(field);
	var o = [id,field];
	com.action('add',o,'Video',null);
	cancelA();
}

//custom box
function customElement(AP,...args) {
	// body...
	var parent = document.createElement("nav");
	parent.classList.add("a-body");
	args.forEach(arg=>{
		var div = arg.indexOf("*");
		var attribute = arg.slice(0,div);
		var value = arg.slice(div+1,arg.length);

		var field = document.createElement("nav");
		field.classList.add("field");

		var attr = document.createElement("nav");
		attr.classList.add("attr");
		attr.innerHTML=attribute;

		var xe = $_create('div');
		xe.style.display="flex";

		var unit = "%";



		if (attribute != "CustomElement") {
			xe.classList.add('value');
			var val = document.createElement("input");	
			val.classList.add("vr");
			val.style.color="#ffffff";

			var q = AP.style.getPropertyValue(attribute);

			if(value == "color"){
				var x = $_create('input');
				x.setAttribute("placeholder",attribute);
				x.style.width="80%";
				val.style.width="20%";
				x.style.float="left";
				val.setAttribute("type","color");
				x.value = q;
				x.addEventListener('input',(e)=>{
					AP.style.setProperty(attribute,x.value);
				});
				xe.appendChild(x);
				
				var gx = $_create('div');
				gx.style.float="right";
				gx.classList.add('icon');
				gx.classList.add('text-edit');
				gx.title="Open Gradient Color";

				if (attribute == "Background") {
					xe.appendChild(gx);
				}
				
			}
			if(value == "text"){
				val.setAttribute("type","text");
				val.setAttribute("placeholder",attribute);
				
				val.value=q;
			}
			if (value == "size") {
				val.type="number";
				val.setAttribute("placeholder",attribute);
				var c = q;
				val.value = parseInt(q);
				var un = c.slice(val.value.length,c.length);
				unit = un;
				console.log(c,"/",un);

			}
			if(value == "file"){
				val.setAttribute("type","file");
				val.setAttribute("placeholder",attribute);
			}


		}else{
			xe.classList.add('vr');
			var val = document.createElement("textarea");
			val.classList.add("custom-t");
			
			val.setAttribute("placeholder","Customize Style Sheet");

	}
		var attr1 = document.createElement("nav");
		attr.classList.add("attr");

		var res = document.createElement("div");
		res.classList.add("value");
		res.style.width='100%';
		if (attribute == "Cover") {
			val.accept="image/*";
		}
		val.addEventListener("input",(evt)=>{
			
			if(attribute == "Title"){
				magazine_title[0] = val.value;
			}
			if(attribute == "Writter"){
				magazine_title[1] = val.value;
			}
			if(attribute == "Description"){
				magazine_title[2] = val.value;
			}
			if (attribute == "Cover") {
				var prec = document.createElement("img");
				prec.classList.add("value");
				prec.style.width="90%";
				prec.style.margin="5%";
				var files=evt.target.files;
				magazine_title[3] = files;
				if(files.length === 0){
					console.log('No file is selected !');
					return;
				}
				
				var reader=new FileReader();
				reader.onload=function(event){
					prec.src = event.target.result;
				};
				reader.readAsDataURL(files[0]);
				field.style.display='flex';
				res.appendChild(attr1);
				res.appendChild(prec);
				
			}
			if (attribute == "CustomElement") {
				var x="";
				for(var i = 0 ; i < AP.style.length;i++){
					x += AP.style[i]+":"+AP.style.getPropertyValue(AP.style[i])+";";
				}
				AP.setAttribute("style",x+val.value);
				
			}
			if (attribute != "Title" && attribute != "Writter" && attribute != "Description" 
				&& attribute != "Cover" && attribute != "CustomElement") {
				if (value == "size") {
					if (unit == "") {
						unit="%";
					}
					AP.style.setProperty(attribute,val.value+unit);
					AP.style.setProperty("min-"+attribute,val.value+unit);
					AP.style.setProperty("max-"+attribute,val.value+unit);
				}else{
					AP.style.setProperty(attribute,val.value);
				}
				
			}
			if (value == "color") {
				xe.firstElementChild.value = val.value;
			}
		});
		
		if (attribute!="CustomElement") {
			field.appendChild(attr);
			xe.appendChild(val);

			if (value == "size") {
				var x = $_create('select');
				val.style.width="70%";
				x.style.width="30%";
				x.innerHTML="<option>%</option><option>px</option><option>em</option><option>vh</option><option>vw</option>";
				if (unit != "") {
					x.value = unit;
				}
				
				x.addEventListener('change',(e)=>{
					unit = x.value;
					AP.style.setProperty(attribute,val.value+unit);
					AP.style.setProperty("min-"+attribute,val.value+unit);
					AP.style.setProperty("max-"+attribute,val.value+unit);
				});
				xe.appendChild(x);
			}

			field.appendChild(xe);
			parent.appendChild(field);
		}else{
			var fs = document.createElement("fieldset");
			var legend = document.createElement("legend");
			legend.style.padding="10px 10% 0px 10%";
			legend.innerHTML="Customize style sheet";
			fs.appendChild(legend);
			fs.appendChild(field);
			xe.appendChild(val);
			field.appendChild(xe);
			parent.appendChild(fs);
		}
		
		
		
		parent.appendChild(res);
	});

	return parent;
}

function choiceTool(index) {
	// body...
	if(index == 0){
		document.getElementById('layout').style.display="block";
		document.getElementById('backgroundColor').style.display="none";	
		document.getElementById('t1').classList.add("active");
		document.getElementById('t2').classList.remove("active");

	}

	if(index == 1){
		document.getElementById('layout').style.display="none";
		document.getElementById('backgroundColor').style.display="block";	
		document.getElementById('t2').classList.add("active");
		document.getElementById('t1').classList.remove("active");
		
	}

	if (!tooldisplay) {
		var tool = document.getElementById('tools');
		var panel = document.getElementById('panel');
		tool.style.width="25%";
		panel.style.width="75%";
		panel.style.paddingLeft='0px';
		tooldisplay=true;
		document.getElementById('t5').style.transform="rotate(180deg)";
		document.getElementById('t5').style.float="right";
		_('t5').title="Hide Tool Panel";
	}
	
}

//
var tooldisplay=false;
function closeTools() {
	// body...
	
	restoreTool();
}
function restoreTool() {
	// body...
	var tool = document.getElementById('tools');
	var panel = document.getElementById('panel');
	if (tooldisplay) {
		tool.style.width="0%";
		panel.style.width="100%";
		panel.style.paddingLeft='33px';
		document.getElementById('t5').style.transform="rotate(360deg)";
		document.getElementById('t5').style.float="left";
		_('t5').title="Open Tool Panel";
		tooldisplay=false;
	}else{
		tool.style.width="25%";
		panel.style.width="75%";
		panel.style.paddingLeft='0px';
		tooldisplay=true;
		document.getElementById('t5').style.transform="rotate(180deg)";
		document.getElementById('t5').style.float="right";
		_('t5').title="Hide Tool Panel";
	}
}

function OF() {
	// body...
	var panel = _('panel');
	if (panel.childElementCount > 0) {
		var c = $_create('center');
		c.innerHTML="Are you sure, you want to open new file.<br>Current Editor will be overwrite!";
		Dialog('Warning','Open File',c,'openF()');
	}else{
		openF();
	}
	
}
function openF() {
	cancelA();
	var f = document.createElement("input");
	f.type="file";
	f.click();
	f.addEventListener("change",(e)=>{

		var file = e.target.files;
		if (file.length != 0 ) {
			var ajax = new XMLHttpRequest();
			var form = new FormData();
			form.append('file',file[0]);
			var fname = file[0].name;
			var ftype = fname.slice(fname.indexOf('.')+1,fname.length);
			

			if (ftype == 'html') {
				var prog = document.createElement("progress");
				prog.setAttribute("value","0");
				prog.setAttribute("max","100");
				prog.setAttribute("id","prog_bar");
				prog.style.width="80%";
				prog.style.float="left";
				prog.style.marginLeft="10%";
				prog.value=50;

				var lab = document.createElement("label");
				lab.setAttribute("id","loadingLab");
				lab.innerHTML="Loading";
				lab.style.textAlign="center";
				lab.style.width="100%";
				cancelA();

		
				var body = $_create('div');
				
				body.appendChild(lab);
				body.appendChild(prog);

				Dialog('loader','Openning File',body,'AbortUpload()');

				ajax.upload.addEventListener("progress", progressHandler, false);
				ajax.addEventListener("load", loadHandler, false);
				ajax.addEventListener("error", errorHandler, false);
				ajax.addEventListener("abort", abortHandler, false);
				ajax.open("POST","/Rabbit/?open=1");
					ajax.onreadystatechange=function(){
						if(ajax.readyState==4 && ajax.status == 200){
						//	cancelA();
							rebuiltElements(ajax.responseText);
							tooldisplay=false;
							gad=false;
						}
					}
					ajax.send(form);
				}else{
					var c = $_create('center');
					c.innerHTML='Cannot Open File!<br><small style="color:#d88106;">Notic : Accept html file only.</small>';
					Dialog('error','File System',c,'cancelA()');
				}
					
			}
			
		});
}
//
function rebuiltElements(source){
	document.body.innerHTML='';
	var pureElement = $_create('html');
	pureElement.innerHTML=source;
	
	document.body.innerHTML = pureElement.lastElementChild.innerHTML;
	var wee = $_classes('we-editor-obj');
	for(let w of wee){
		w.style.display='block';
	}

	var obj = _('obj');
	var panel = _('panel');
	var sty="";
	if (obj.style.backgroundImage) {
		sty += "background-image:"+obj.style.getPropertyValue('background-image');
		updateGradient(obj.style.getPropertyValue('background-image'));
	}else if(obj.style.backgroundColor){
		sty += "background-color:"+obj.style.getPropertyValue('background-color');

	}
	panel.setAttribute('style',sty);
	panel.innerHTML = obj.innerHTML;
	UR();

////////////////////////////
	var xee = $_classes('x-editor');
	for(let x of xee){
		var cmd = x.dataset['command'];
		x.style.backgroundColor='rgba(0, 0, 0, 0.184)';
		if (cmd == 'text') {
			var editor = new Editor(x);
			editor.applyEditor('textEditor');
			var o = [x.parentElement,x];

			var ad = editor.additionalTool;
			var pad = ad.parentElement;
			var cache = {parent:pad,child:ad,comment:"add"};

			com.action('add',o,'Text',cache);
		}
		if (cmd == 'photo') {
			var orp = x.firstElementChild;
			x.innerHTML = '';
			var editor = new Editor(x);
			editor.applyEditor('imageEditor');
			x.appendChild(orp);
			var o = [x.parentElement,x];
			com.action('add',o,'Photo',null);
		}
		if (cmd == 'video') {
			var orp = x.firstElementChild;
			x.innerHTML = '';
			var editor = new Editor(x);
			editor.applyEditor('videoEditor');
			x.appendChild(orp);
			var o = [x.parentElement,x];
			com.action('add',o,'Video',null);
		}
		
	}

	///////
	var vour = $_classes('c-vour');
	for(let v of vour){
		countEle++;
	}

	if(panel.childElementCount === 0){
		var c = $_create('center');
		c.innerHTML="The file you open not suppert to edit.";
		Dialog('Warning','File System',c,'cancelA()');
	}
	
}
//bg color customizing...
function ColorClick(){
	var color = document.getElementById('fc');
	color.click();
	color.addEventListener("input",(evt)=>{
		updatePreviewColor(color.value);
	});
}
function choseColor(index){
	if (index == 1) {
		updatePreviewColor("#ffffff");
	}
	if (index == 2) {
		updatePreviewColor("#f5f5f5");
	}
	if (index == 3) {
		updatePreviewColor("#c0c0c0");
	}
	if (index == 4) {
		updatePreviewColor("#a9a9a9");
	}
	if (index == 5) {
		updatePreviewColor("#808080");
	}
	if (index == 6) {
		updatePreviewColor("#000000");
	}
	if (index == 7) {
		updatePreviewColor("#00bcd4");
	}
	if (index == 8) {
		updatePreviewColor("#03a9f4");
	}
	if (index == 9) {
		updatePreviewColor("#2196f3");
	}
	if (index == 10) {
		updatePreviewColor("#3f51b5");
	}
	if (index == 11) {
		updatePreviewColor("#673ab7");
	}
	if (index == 12) {
		updatePreviewColor("#9c27b0");
	}
	if (index == 13) {
		updatePreviewColor("#ffeb3b");
	}
	if (index == 14) {
		updatePreviewColor("#ffc107");
	}
	if (index == 15) {
		updatePreviewColor("#ff9800");
	}
	if (index == 16) {
		updatePreviewColor("#ff5722");
	}
	if (index == 17) {
		updatePreviewColor("#f44336");
	}
	if (index == 18) {
		updatePreviewColor("#e91e63");
	}
}
function ONC() {
	var src = document.getElementById('s-r-c');
	var color = src.value;
	updatePreviewColor(color);
}
function updatePreviewColor(color) {
	var src = document.getElementById('s-r-c');
	var panel = document.getElementById('panel');

	if (gad) {
		_('gad').style.display="none";
		gad= false;
	}

	panel.style.removeProperty('background-image');
	src.style.backgroundColor=color;
	src.value=color;
	panel.style.backgroundColor=color;	
	if (color.length > 6) {
	   var xc = convertHEX(color);
	   src.style.color=xc;
	}
}
function convertHEX(hex){
	if(hex.indexOf('#') === 0){
		hex = hex.slice(1);
	}
	if(hex.length === 3){
		hex = hex[0] + hex[0] + hex[1]  + hex[1] + hex[2] + hex[2];
	}
/*	if (hex.length !== 6) {
		throw new Error('Invalid HEX color.');
	}*/
	var r = (225 - parseInt(hex.slice(0,2),16)).toString(16),
		g = (225 - parseInt(hex.slice(2,4),16)).toString(16),
		b = (225 - parseInt(hex.slice(4,6),16)).toString(16);

	return '#' + padZero(r) + padZero(g) + padZero(b);
}
function calculateRGB(rgb) {
	var x = rgb.slice(rgb.indexOf('(')+1,rgb.lastIndexOf(')'));
	x = x+",";
	var R = [];
	console.log(x);
	for(var i = 0 ; i < 3 ; i++){
			R.push((x.slice(0,x.indexOf(','))).trim());
			console.log(x);

			x = x.slice(x.indexOf(',')+1,x.length);
			console.log(x);
	}
	console.log(R);
	return '#' + RGBconvertor(R[0]) + RGBconvertor(R[1]) + RGBconvertor(R[2]);
}
function RGBconvertor(rgb){
	var hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		hex = "0" + hex ;
	}
	return hex;
}
function padZero(str,len) {
	// body...
	len = len || 2;
	var zeros = new Array(len).join('0');
	return (zeros + str).slice(-len);
}
function remove_field(id) {
	// body...
	var parent = id.parentElement;
	parent.removeChild(id);

}

function cancelA() {
	document.getElementById('alert-body').style.display="none";
	document.getElementById('a-title-f').innerHTML="";
	document.getElementById('a-body-f').innerHTML="";
	document.getElementById('a-ok-f').removeAttribute("onclick");
}
function previewer(){
	showC(true);
	document.getElementById('preview').style.display='block';
	var ob = document.getElementById("obj");
	var panel = document.getElementById('panel');
	var sty="";
	if (panel.style.backgroundImage) {
		sty += "background-image:"+panel.style.getPropertyValue('background-image');
	}else if(panel.style.backgroundColor){
		sty += "background-color:"+panel.style.getPropertyValue('background-color');
	}
	ob.setAttribute('style',sty);

//current we editor object
	var countCurrentEditor = 0,newCCE = 0;
	var weEditorObj = document.getElementsByClassName('we-editor-obj');
	countCurrentEditor = weEditorObj.length;

//current x editor object
	var countXed = 0,newXed = 0;
	var xeditor = document.getElementsByClassName('x-editor');
	countXed = xeditor.length;

//pick text Editor
	var ort = 0, newt=0;
	var teo = document.getElementsByClassName('text-editor-obj');
	ort = teo.length;

	ob.innerHTML = panel.innerHTML;

//new we editor object
	var newWEO = document.getElementsByClassName("we-editor-obj");
	newCCE = newWEO.length;
	for(var i = countCurrentEditor ; i < newCCE ; i++){
		var c = newWEO[i];
		c.style.display="none";
	}

//new x editor object
	var newXeditor = document.getElementsByClassName('x-editor');
	newXed = newXeditor.length;
	var xnode = document.getElementsByClassName('editor-obj');
	var z = countXed;
	for(var i = countXed ; i < newXed ; i++){
		newXeditor[i].style.backgroundColor="transparent";
		var y = xnode[z];
		var parentOfY = y.parentElement;
		parentOfY.removeChild(y);

	}
//analysis text
	var newteo = document.getElementsByClassName('text-editor-obj');
	newt = newteo.length;
	for(var i = ort ; i < newt ; i++){
		newteo[i].removeAttribute('contenteditable');
	}
}
function closePre() {
	document.getElementById('preview').style.display="none";
	document.getElementById('obj').innerHTML='';
}

//step f
function interview() {
	showC(true);
	var xmp = document.createElement("input");
	var elements = customElement(xmp,"Title*text","Writter*text","Description*text","Cover*file");
	Dialog('information','File Detail',elements,'checkT()');
}
function checkT() {
	// body...
/*	var inp = $_create('input');
	inp.type='file';
	inp.setAttribute("webkitdirectory","true");
	inp.click();
	inp.addEventListener('change',(e)=>{
		console.log(e.target.value);
	});*/
	if(magazine_title[0] != null && magazine_title[1] != null){
		uploadMagazine();
	
	}else{
		alert("Please filled all requirement !");
	}
}
var AJ;
//upload
function uploadMagazine() {
	// body...
	previewer();
	var magazine = document.getElementById("obj");
	var tit = magazine_title[0];
	var Writter = magazine_title[1];
	var Comment = magazine_title[2];
	var mag_cover = magazine_title[3][0];
	var orbgs = document.getElementById('panel').style.backgroundColor;
	var sty="";
	if (panel.style.backgroundImage) {
		sty += "background-image:"+panel.style.getPropertyValue('background-image');
	}else if(panel.style.backgroundColor){
		sty += "background-color:"+panel.style.getPropertyValue('background-color');
	}
	var reader = new FileReader();
	reader.onload=function(e){
	
		var data = "<!DOCTYPE html>"+
					"<head>"+
						"<title>"+tit+"</title>"+
						"<link rel='icon' type='image/*' href='"+e.target.result+"'>"+
						"<link rel='stylesheet' type='text/css' href='/Rabbit/css/style.css'>"+
						"<link rel='stylesheet' type='text/css' href='/Rabbit/css/editor.css'>"+
						""+
					"</head>"+
					"<body>"+
					"<div id='obj' style='"+sty+"'>"+magazine.innerHTML+"</div>"+
					"</body>"+
				"</html>";
	var form = new FormData();
	form.append("magazine",data);
	form.append("title",tit);
	form.append("Writter",Writter);
	form.append("Comment",Comment);
	form.append("file1",mag_cover);
	var ajax = new XMLHttpRequest();
	AJ = ajax;
	var prog = document.createElement("progress");
	prog.setAttribute("value","0");
	prog.setAttribute("max","100");
	prog.setAttribute("id","prog_bar");
	prog.style.width="80%";
	prog.style.float="left";
	prog.style.marginLeft="10%";
	prog.value=50;

	var lab = document.createElement("label");
	lab.setAttribute("id","loadingLab");
	lab.innerHTML="Loading";
	lab.style.textAlign="center";
	lab.style.width="100%";
	cancelA();

	var alert = document.getElementById('alert-body').style.display="block";
	var title = document.getElementById('a-title-f');
	title.innerHTML="Uploading file";
	var body = document.getElementById('a-body-f');
	document.getElementById('a-ok-f').innerHTML="Cancel";
	document.getElementById('b-c').style.display="none";
	document.getElementById('a-ok-f').setAttribute("onclick","AbortUpload()");
	body.appendChild(lab);
	body.appendChild(prog);

	ajax.upload.addEventListener("progress", progressHandler, false);
	ajax.addEventListener("load", loadHandler, false);
	ajax.addEventListener("error", errorHandler, false);
	ajax.addEventListener("abort", abortHandler, false);
	ajax.open("POST","/Medicare/xml/UploadMagazine.php");
//	ajax.open("POST","xml/test.php");
	ajax.send(form);
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status == 200){
			document.getElementById("a-ok-f").removeAttribute("onclick");
			prog.style.display="none";
			lab.innerHTML=ajax.responseText;
			document.getElementById('a-ok-f').innerHTML="OK";
			
			document.getElementById('a-ok-f').setAttribute("onclick","cancelA()");
		}
	}
	};
	reader.readAsDataURL(magazine_title[3][0]);

	
}
function AbortUpload(){
	var ajax = AJ;
	ajax.abort();
	document.getElementById('a-ok-f').innerHTML="OK";
	document.getElementById('b-c').style.display="block";
	magazine_title[0]=null;
	magazine_title[1]=null;
	magazine_title[2]=null;
	magazine_title[3]=null;
	cancelA();
}
//calculate file size
function calculateFileSize(bytes){
	const sizes = ['Bytes','KB','MB','GB','TB'];
	const i = parseInt(Math.floor(Math.log(bytes)/Math.log(1024)),10);
	return`${(bytes/(1024 ** i)).toFixed(1)} ${sizes[i]}`;
}
function progressHandler(event){
	var percent=(event.loaded/event.total)*100;
	document.getElementById('loadingLab').innerHTML=Math.round(percent)+"% of "+calculateFileSize(event.total);
	document.getElementById('prog_bar').value = Math.round(percent);
}
function loadHandler(event){
	var res =event.target.responseText;
}
function errorHandler(event){
	var res="Failed to upload.";
	document.getElementById('loadingLab').innerHTML=res;
}
function abortHandler(event){
	var res ="Upload canceled.";
	document.getElementById('loadingLab').innerHTML=res;
}

function Dialog(type,title,eles,action) {
	var alert = _('alert-body');
	var tit = _('a-title-f');
	var body = _('a-body-f');
	var btn = _('a-ok-f');
	var close_btn=_('b-c');
	var icon = _('a-icon');
	
	if (type == "Editor") {
		if (icon.classList.length > 1) {
			icon.classList.replace(icon.classList[1],'bg-col-icon');
		}else{
			icon.classList.add('bg-col-icon');
		}
		
	}

	if (type == "Warning") {
		if (icon.classList.length > 1) {
			icon.classList.replace(icon.classList[1],'warning-icon');
		}else{
			icon.classList.add('warning-icon');
		}
	}

	if (type == "information") {
		if (icon.classList.length > 1) {
			icon.classList.replace(icon.classList[1],'information-icon');
		}else{
			icon.classList.add('information-icon');
		}
	}

	if (type == "error") {
		if (icon.classList.length > 1) {
			icon.classList.replace(icon.classList[1],'error-icon');
		}else{
			icon.classList.add('error-icon');
		}
	}

	if (type == 'loader') {
		if (icon.classList.length > 1) {
			icon.classList.replace(icon.classList[1],'load-icon');
		}else{
			icon.classList.add('error-icon');
		}
		close_btn.style.display="none";
	}

	alert.style.display='block';
	tit.innerHTML = title;
	body.appendChild(eles);
	
	btn.setAttribute('onclick',action);
}
