var num1;
var op;
var num2;


$("button").click

function set(){	
	var element = document.getElementById(id);
	changer("res","1");
};


function limpiar(){
	
	changer("res","");
};

function suma(){
	var element = document.getElementById("res");
	if(element == "")
	return;
	num1 = element.innerHTML;
	changer("res","");
};

function calc(){
	var element = document.getElementById("res");
	if(element == "")
	return;
	 num2= element.innerHTML;

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
