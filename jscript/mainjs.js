/* Modal de l'ajuda */

function overlay() {
	el = document.getElementById("ayuda");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

/* text botó ajuda*/

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

document.getElementById("r1").onclick= function(){
	var nodes = document.getElementById("resp").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
	
	document.getElementById("fb1").style.display="inline";
};

document.getElementById("r2").onclick= function(){
	var nodes = document.getElementById("resp").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
	
	document.getElementById("fb2").style.display="inline";
};

document.getElementById("r3").onclick= function(){
	var nodes = document.getElementById("resp").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
	
	document.getElementById("fb3").style.display="inline";
};

document.getElementById("r4").onclick= function(){
	var nodes = document.getElementById("resp").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
	
	document.getElementById("fb4").style.display="inline";
};

/*dehabilitar botons. Pantalla gran*/
document.getElementById("ir1").onclick= function(){
	var nodes = document.getElementById("resp2").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
	
	document.getElementById("fb1").style.display="inline";
};

document.getElementById("ir2").onclick= function(){
	var nodes = document.getElementById("resp2").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
	
	document.getElementById("fb2").style.display="inline";
};

document.getElementById("ir3").onclick= function(){
	var nodes = document.getElementById("resp2").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
	
	document.getElementById("fb3").style.display="inline";
};

document.getElementById("ir4").onclick= function(){
	var nodes = document.getElementById("resp2").getElementsByTagName('*');
	for(var i = 0; i < nodes.length; i++)
	{
	     nodes[i].disabled = true;
	}
	
	document.getElementById("fb4").style.display="inline";
};

/*Color vermell en clicar opció error*/
function roig(){
	document.getElementById("e1").style.background="#c71c1c";
}
function roig2(){
	document.getElementById("e2").style.background="#c71c1c";
}
function roig3(){
	document.getElementById("e3").style.background="#c71c1c";
}
function roig4(){
	document.getElementById("e4").style.background="#c71c1c";
}
/* Pantalles >979px */
function roigi(){
	document.getElementById("ie1").style.background="#c71c1c";
}
function roigi2(){
	document.getElementById("ie2").style.background="#c71c1c";
}
function roigi3(){
	document.getElementById("ie3").style.background="#c71c1c";
}
function roigi4(){
	document.getElementById("ie4").style.background="#c71c1c";
}
