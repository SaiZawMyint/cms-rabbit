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

var serialID = 0.01;

class Editor{

	constructor(ele){
		this.element = ele;
		this.specE,this.additionalTool;
		this.childElements=[];
		this.show=true;
		this.ver = serialID;
		serialID+=0.01;
	}

	applyEditor(type){
		var editor = $_create('div');
		editor.classList.add('editor-obj');
		if (type == 'textEditor') {
			var ted = $_create('div');
			ted.style.width="100%";
			
			ted.classList.add('text-editor-obj');
			
			ted.innerHTML = this.element.innerHTML;
			ted.style=this.element.style;
			if (!ted.style.height) {
				ted.style.height="40px";
			}
			this.element.innerHTML='';
			if (ted.firstElementChild) {
			if(ted.firstElementChild.classList[0]=='text-editor-obj'){
					var x = ted.firstElementChild;
					ted = x;
				}
			}
			this.specE=ted;
			this.createEditor(editor,"Text","styleSheet","copy","Script","close","hide");

			this.element.appendChild(ted);
			var texte = new TextEditor(ted);
			texte.createEditor();
			this.additionalTool=texte.toolGenerator;
		}
		if (type == 'imageEditor') {
			this.createEditor(editor,"Image","styleSheet","copy","Script","close","hide");
		}
		if (type == 'videoEditor') {
			editor.style.width="100%";
			editor.style.height="auto";
			editor.style.backgroundColor="#c5c6c7";
			editor.style.marginBottom = "0px";
			this.createEditor(editor,"Video","styleSheet","copy","Script","close","hide");
		}
	}

	//version
	get version(){
		return this.ver;
	}

	//createEditor
	createEditor(AP,tag,...args){

		let xtitle;

		if (tag=="Text") {
			xtitle = "text";
		}
		if (tag=="Image") {
			xtitle = "image";
		}
		if (tag=="Video") {
			xtitle = "video";
		}
		if (tag=="hide") {
			xtitle="hide";
		}

		args.forEach(arg=>{
			var type = arg;
			if (type == "hide"){
				var x = $_create('div');
				x.classList.add('icon');
				x.classList.add('hide-editor');
				x.title="hide editor";
				this.Event(x,xtitle,arg);
				AP.appendChild(x);
				this.childElements.push(x);
			}
			if (type == "close") {
				var x = $_create('div');
				x.classList.add('icon');
				x.classList.add('close');
				x.title="delete "+xtitle;
				this.Event(x,xtitle,arg);
				AP.appendChild(x);
				this.childElements.push(x);
			}
			if (type == "Script") {
				var x = $_create('div');
				x.classList.add('icon');
				x.classList.add('Script');
				x.title="Script";
				this.Event(x,xtitle,arg);
				AP.appendChild(x);
				this.childElements.push(x);
			}
			if (type == "copy") {
				var x = $_create('div');
				x.classList.add('icon');
				x.classList.add('copy');
				x.title="Copy";
				this.Event(x,xtitle,arg);
				AP.appendChild(x);
				this.childElements.push(x);
			}
			if (type == "styleSheet") {
				var x = $_create('div');
				x.classList.add('icon');
				x.classList.add('styleSheet');
				x.title="Open "+xtitle+" editor";
				this.Event(x,xtitle,arg);
				AP.appendChild(x);
				this.childElements.push(x);
			}
		});
		this.element.appendChild(AP);
	}

	Event(ele,tag,behavior){

		if (behavior == 'styleSheet') {
			ele.addEventListener('click',(e)=>{
				if (tag != 'text') {
					OpenStyleSheetPanel(this.element,tag);
				}else{
					OpenStyleSheetPanel(this.specE,tag);
				}
				
			});
		}

		if (behavior == 'copy') {
			ele.addEventListener('click',(e)=>{
				cpy_item={
					element : this.element,
					type : tag,
					version : this.ver
				};
			notification(tag+" has been copied.");
			});
				
			
		}

		if (behavior == 'close') {
			ele.addEventListener('click',(e)=>{
				
				var parent = this.element.parentElement;
				parent.removeChild(this.element);
				if (tag == 'text') {
					console.log(com.item);
					DoCache(parent,this.element,this.additionalTool,tag);
				}
				
			});
		}
		if (behavior == 'hide') {
			ele.addEventListener('click',(e)=>{
				ele.classList.toggle('hide');
				if (this.show) {
					for(var i = 0 ; i < this.childElements.length-1 ; i++){
						this.childElements[i].style.display="none";
					}
					this.show=false;
					ele.title='Show editor';
				}else{
					for(var i = 0 ; i < this.childElements.length-1 ; i++){
						this.childElements[i].style.display="block";
					}
					this.show=true;
					ele.title='Hide editor';
				}
					
			});
		}
		if (behavior == 'Script') {

		}
	}

}

//shape
class Shape{
	constructor(shape){
		this.avaliableShape = ["Circle","Triangle","Oval","Heart","8 Point Bursts","3D Cube","Pyramid"];
		this.checkShape(shape);
		var x = this.generateShape(shape);
	}

	checkShape(shape){
		var x = 0;
		var avr = "";
		for (var i = 0; i < this.avaliableShape.length; i++) {
			if(shape == this.avaliableShape[i]){
				x ++;
			}
		avr += this.avaliableShape[i]+"\n";
		}
		if (x === 0) {
			throw new Error("'"+shape+"' is not avaliable. The avaliable shapes for this editor version are : \n"+
				avr
				);
		}
	}

	generateShape(shape){
		var x = $_create('div');
		if (shape == 'Circle') {
			Circle(x);
		}
	}
	Circle(x){
		x.style.borderRadius="50%";
	}
}

function DoCache(parentP,elementE,cache,tag) {
	var o = [parentP,elementE];
	var y = com.item;
	var g = null;
	for (var i = 0; i < y.length; i++) {
		var z = y[i];
		var w = z.object;
		if (w[0]==o[0] && w[1]==o[1]) {

			g=i;

		}
	}
	if (g!=null) {
		y[g].behaviour="remove";
		y[g].cache = {parent:cache.parentElement,child:cache,comment:"remove"};
		cache.parentElement.removeChild(cache);
		com.removeAll();
		
		notification(tag+" has been remove.");
		var x = 0;
		for(var i = 0; i < y.length; i++ ){
			if (i == g) {
				continue;
			}else{
				com.item[x] = y[i];
				x++;
			}
		}
		com.item[com.item.length]=y[g];
		console.log(com.item);
		cud=1;
		
	}else{
		throw new Error('System.Exec.exception : No same element found to do this action.');
	}
}

function OpenStyleSheetPanel(ele,tag){
	
	var elements = $_create('nav');

	var t = "";
	if (tag=="text") {
		t="Customize Text Editor";
		elements = customElement(ele,"Background*color","Color*color","Font-Family*text","Width*size","Height*size","Margin*text","Padding*text",
		"Text-Align*text","Border*text","Border-radius*size","Box-Shadow*text","CustomElement*text");

	}
	if (tag=="video") {
		t="Customize Video";
		elements = customElement(ele,"Width*size","Height*size","Margin*text","Padding*text"
			,"Border*text","Border-radius*size","Box-Shadow*text","CustomElement*text");

	}
	if (tag=="image") {
		
		t="Customize Image";
		elements = customElement(ele,"Width*size","Height*size","Margin*text","Padding*text",
		"Border*text","Border-radius*size","Box-Shadow*text","CustomElement*text");
	}
	
	Dialog('Editor',t,elements,'cancelA()');
}
