var sumando1;
var sumando2;

function set1(){	
	changer("res","1");
};

function set0(){
	
	changer("res","0");
};

function limpiar(){
	
	changer("res","");
};

function suma(){
	var element = document.getElementById("res");
	if(element == "")
	return;
	sumando1 = element.innerHTML;
	changer("res","");
};

function calc(){
	var element = document.getElementById("res");
	if(element == "")
	return;
	 sumando2= element.innerHTML;

	var a = parseInt(sumando1);
	var b = parseInt(sumando2);
	var c = (a+b)%2;
	var result = c.toString();

	changer("res",result);
};

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
};
