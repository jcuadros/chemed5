/* Modal de l'ajuda */

function overlay() {
	el = document.getElementById("ayuda");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

/* text botons*/

document.getElementById("op1").innerHTML="Ver Opción A";
document.getElementById("op2").innerHTML="Ver Opción B";
document.getElementById("op3").innerHTML="Ver Opción C";
document.getElementById("op4").innerHTML="Ver Opción D";
document.getElementById("r1").innerHTML="Marcar";
document.getElementById("r2").innerHTML="Marcar";
document.getElementById("r3").innerHTML="Marcar";
document.getElementById("r4").innerHTML="Marcar";
document.getElementById("hint").innerHTML='<i class="icon-question-sign"></i> Ayuda';
/* Deshabilitació dels botons de marcar per les opcions no visualitzades */

document.getElementById("op1").onclick= function(){
	document.getElementById("r1").disabled=false;
	document.getElementById("r2").disabled=true;
	document.getElementById("r3").disabled=true;
	document.getElementById("r4").disabled=true;
};

document.getElementById("op2").onclick= function(){
	document.getElementById("r1").disabled=true;
	document.getElementById("r2").disabled=false;
	document.getElementById("r3").disabled=true;
	document.getElementById("r4").disabled=true;
};

document.getElementById("op3").onclick= function(){
	document.getElementById("r1").disabled=true;
	document.getElementById("r2").disabled=true;
	document.getElementById("r3").disabled=false;
	document.getElementById("r4").disabled=true;
};

document.getElementById("op4").onclick= function(){
	document.getElementById("r1").disabled=true;
	document.getElementById("r2").disabled=true;
	document.getElementById("r3").disabled=true;
	document.getElementById("r4").disabled=false;
};

/* Deshabilitar tots els botons en escollir una resposta */

document.getElementById("r1").onclick= function(){
	var nodes = document.getElementById("resp").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
};

document.getElementById("r1").onclick= function(){
	var nodes = document.getElementById("resp").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
};

document.getElementById("r2").onclick= function(){
	var nodes = document.getElementById("resp").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
};

document.getElementById("r3").onclick= function(){
	var nodes = document.getElementById("resp").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
};

document.getElementById("r4").onclick= function(){
	var nodes = document.getElementById("resp").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
};


