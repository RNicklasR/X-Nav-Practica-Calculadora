var num1=0;
var op;
var num2=0;
var numsaved=false;

function equal() {
	var res;

	num2 = $("#inp").text();

   	if (op=="+"){
		res=parseInt(num1) + parseInt(num2);
		$("#res").text(res.toString());
	}else if(op=="-"){
		res=parseInt(num1) - parseInt(num2);
		$("#res").text(res.toString());
	}else if(op=="/"){
		res=parseInt(num1) / parseInt(num2);
		$("#res").text(res.toString());
	}else if(op=="x"){
		res=parseInt(num1) * parseInt(num2);
		$("#res").text(res.toString());
	}else{	
		alert("no has seleccionado una operacion");
	}
	$("#inp").text("");
    };

function setnum(x) {
	if(numsaved==false){
		$("#inp").text($("#inp").text()+$(x).text());
	}else{
		$("#inp").text($("#inp").text()+$(x).text());
	}

    };

function setop(x) {

	num1 = $("#inp").text();
        op = $(x).text();
	numsaved=true;
	$("#inp").text(op);
	$("#inp").text("");
    };


$(document).ready(function() {

    $(".num").click(function() {setnum(this) });  

    $(".op").click(function() {setop(this) }); 

    $("#eq").click(function (){equal()}); 

    $(".clear").click(function() {
	
        op = "~";
	numsaved=false;
	$("#res").text("");
	$("#inp").text("");

    }); 

/*---------------------------------------------------------------------------------------------------------*/


     $(".submit").click(function() {
	var input=$("#disp").val();
	$("#inp").text(input);

		if(typeof input== number){
			if(numsaved=false){
				num1 = input;	
				numsaved=true;
			}else{
				num2 = input;				
			}
		}else if(input=="="){
			equals();		
		}else{
			op = input;
		}
		
     }); 



});

