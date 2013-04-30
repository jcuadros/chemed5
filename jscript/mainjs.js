/* Modal de l'ajuda */

function overlay() {
	el = document.getElementById("ayuda");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

/* text botó ajuda */

document.getElementById("hint").innerHTML='<i class="icon-question-sign"></i> Ayuda';

/* Deshabilitació dels botons de marcar per les opcions no visualitzades */

document.getElementById("op1").onclick= function(){
	document.getElementById("r1").disabled=false;
	document.getElementById("r2").disabled=true;
	document.getElementById("r3").disabled=true;
	document.getElementById("r4").disabled=true;
	document.getElementById("im1").style.display="inline";
	document.getElementById("im2").style.display="none";
	document.getElementById("im3").style.display="none";
	document.getElementById("im4").style.display="none";
};

document.getElementById("op2").onclick= function(){
	document.getElementById("r1").disabled=true;
	document.getElementById("r2").disabled=false;
	document.getElementById("r3").disabled=true;
	document.getElementById("r4").disabled=true;
	document.getElementById("im1").style.display="none";
	document.getElementById("im2").style.display="inline";
	document.getElementById("im3").style.display="none";
	document.getElementById("im4").style.display="none";
	
};

document.getElementById("op3").onclick= function(){
	document.getElementById("r1").disabled=true;
	document.getElementById("r2").disabled=true;
	document.getElementById("r3").disabled=false;
	document.getElementById("r4").disabled=true;
	document.getElementById("im1").style.display="none";
	document.getElementById("im2").style.display="none";
	document.getElementById("im3").style.display="inline";
	document.getElementById("im4").style.display="none";
};

document.getElementById("op4").onclick= function(){
	document.getElementById("r1").disabled=true;
	document.getElementById("r2").disabled=true;
	document.getElementById("r3").disabled=true;
	document.getElementById("r4").disabled=false;
	document.getElementById("im1").style.display="none";
	document.getElementById("im2").style.display="none";
	document.getElementById("im3").style.display="none";
	document.getElementById("im4").style.display="inline";
};

/* Deshabilitar tots els botons en escollir una resposta */

$(".check").click(function(){
	$(this).css("background","#1cad21");
	$("#resp .btn").attr("disabled","disabled");
	$("#resp2 .btn").attr("disabled","disabled");
});

/* Color vermell en clicar opció error */

$(".error").click(function(){
	$(this).css("background","#c71c1c");
});

/*Feedbacks. Pantalla petita*/
document.getElementById("r2").onclick= function(){
	
	document.getElementById("fb2").style.display="inline";
};

document.getElementById("r3").onclick= function(){
	
	document.getElementById("fb3").style.display="inline";
};

document.getElementById("r4").onclick= function(){

	document.getElementById("fb4").style.display="inline";
};

/*Feedback. Pantalla gran*/

document.getElementById("ir1").onclick= function(){

	document.getElementById("fb1").style.display="inline";
};

document.getElementById("ir2").onclick= function(){
	
	document.getElementById("fb2").style.display="inline";
};

document.getElementById("ir3").onclick= function(){
	
	document.getElementById("fb3").style.display="inline";
};

document.getElementById("ir4").onclick= function(){
	
	document.getElementById("fb4").style.display="inline";
};


