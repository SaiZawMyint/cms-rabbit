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
//layout
class Layout{
	constructor(){
		this.ary=[];
	}
	generateLayout(row,col,childT){
		this.check(row,col);
		var x = $_create('nav');
		x.style.width="100%";
		x.style.float="left";
		for(var i = 0 ; i < row ; i ++){
			var rx = $_create('nav');
			rx.style.display = "grid";
			rx.style.gridTemplateColumns=" repeat(auto-fit, minmax(50%,1fr))";

			var nc = col[i];
			for(var j = 0 ; j < nc ; j++){
				var cx = $_create('nav');
				cx.style.gridRow = i+1;
				cx.style.gridColumn = j+1;

				cx.setAttribute("id","vour"+countEle);
				cx.classList.add('c-vour');
				var ele = hoverElement("vour"+countEle,childT);
				countEle++;

				cx.appendChild(ele);

				rx.appendChild(cx);
				this.ary.push(cx);
			/*	var item = [rx,cx];
				com.action('add',item,'panel',null);
				console.log(com.item);*/
			}
			x.appendChild(rx);
		}
		return x;
	}
	check(row,col){
		if (row != col.length) {
			throw new Error("Missing column for each row !");
		}
	}
	getChild(index){
		return this.ary[index-1];
	}
}

//executions
class Command{
	constructor(){
		this.actions=[];
	}
	action(type,items,com,cac){
		var act = {
			behaviour : type,
			object : items,
			comment : com,
			cache : cac
		};
		this.actions.push(act);
		notification(com+" has been "+ type + "ed . ");
		cud=1;
	}

	get item(){
		return this.actions;
	}

	removeAll(){
		this.actions=[];
	}
	
}

//notification

function notification(information) {
	// body...
	var noti = $_create("div");
	noti.classList.add('noti');
	var ic = $_create('span');
	ic.classList.add('icon');
	ic.classList.add('information-icon');
	var info = $_create('span');
	info.classList.add('info');

	info.innerHTML = information;
	noti.appendChild(ic);
	noti.appendChild(info);
	document.body.appendChild(noti);
	var currentW = noti.offsetWidth;
	var currentH = noti.offsetHeight;
	var currentSW = window.outerWidth;
	var currentSH = window.outerHeight;

	var x = 0.00;
	x=parseInt((currentW*100)/currentSW);
	console.log(currentSW,currentW,x);
	x = (100 - x)-2;
	noti.style.left = x+"%";
	noti.style.top="90%";
	
	
	setTimeout(function() {
		noti.style.top="100%";
		setTimeout(function () {
			document.body.removeChild(noti);
		},1000);
	},3000);

}

//Gradient class
class Gradient{
	constructor(ele){
		this.e = ele;
		this.element;
		this.typ = '';
		this.direction = '';
		this.colors=[];
		this.colorRanges = [];
		this.updates=[false,false,false];
	}
	updateElement(){
		this.element = _(this.e);
	}
	updateTyp(type){
		this.updates[0] = true;
		this.typ = type;
		this.analysis();
	}
	updateDirection(d){
		this.updates[1] = true;
		this.direction = d;
		this.analysis();
	}
	updateColors(col){
		this.updates[2]=true;
		for (var i = 0; i < col.length; i++) {
			this.colors[i] = col[i];
		}
		this.analysis();
	}
	updateColorsAt(index,col){
		this.updates[2]=true;
		console.log(index);
		this.colors[index] = col;
		this.analysis();
	}
	updateColorRangeAt(index,value){
		this.updates[3]=true;
		this.colorRanges[index] = value;
		this.analysis();
	}
	defaultColors(){
		this.updateElement();
		if (!this.updates[2]) {
			var rgb = "rgb(0, 188, 212)";;
			this.colors[1]=rgb;
			this.colors[0]="#ffffff";
			this.updates[2]=true;
		}
			
	}
	defaultDirection(){
		this.updateElement();
		if (this.direction == '') {
			if (this.typ == 'linear-gradient') {
				this.direction = "0deg";
			}
			if (this.typ == 'radial-gradient') {
				this.direction = "circle at center";
			}
		}
	}
	defaultColorRanges(){
		if (!this.updates[3]) {
			this.colorRanges[0] = 0;
			this.colorRanges[1]=100;
		}
	}
	deleteColorAt(index){
		
	}
	deleteColorRangeAt(index){
		
	}
	analysis(){
		this.updateElement();
		this.defaultColors();
		this.defaultDirection();
		this.defaultColorRanges();
		var v = "";
		console.log(this.colors);
		for (var i = 0; i < this.colors.length; i++) {
			v+=this.colors[i]+" "+this.colorRanges[i]+"%,";
		}
		v = v.slice(0,v.lastIndexOf(','));
		console.log(v);
		console.log(this.typ+"("+this.direction+","+v+")");
		this.element.style.setProperty('background-image',this.typ+"("+this.direction+","+v+")");
	}
	get getAllColor(){
		return this.colors;
	}
}