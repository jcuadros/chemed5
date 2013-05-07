/* Modal de l'ajuda */

function overlay() {
	el = document.getElementById("ayuda");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

$(function(){
	$("#ayuda").draggable();
});

/* alerta en pantalla <979px*/

$(function(){
	var cnt=0;
	
	if(cnt<1){
		if($(document).width() < 979){
		window.alert("En esta pantalla se muestra s\u00f3lo una de las im\u00e1genes de las respuestas." +
				"Selecciona los botones de visualizaci\u00f3n para ver las diferentes opciones.");
		cnt=2;
		}
	}
});

/* deshabilitar botó check si s'ha marcat l'opció com a descartada*/
$(function(){
	$("#ie1").click(function(){
		$("#ir1").toggle(function(){
			$(this).attr("disabled");
		});
		return false;
	});
	
	$("#ie2").click(function(){
		$("#ir2").toggle(function(){
			$(this).attr("disabled");
		});
		return false;
	});
	
	$("#ie3").click(function(){
		$("#ir3").toggle(function(){
			$(this).attr("disabled");
		});
		return false;
	});
	
	$("#ie4").click(function(){
		$("#ir4").toggle(function(){
			$(this).attr("disabled");
		});
		return false;
	});
	
	$("#e1").click(function(){
		$("#r1").toggle(function(){
			$(this).attr("disabled");
		});
		return false;
	});
	
	$("#e2").click(function(){
		$("#r2").toggle(function(){
			$(this).attr("disabled");
		});
		return false;
	});
	
	$("#e3").click(function(){
		$("#r3").toggle(function(){
			$(this).attr("disabled");
		});
		return false;
	});
	
	$("#e4").click(function(){
		$("#r4").toggle(function(){
			$(this).attr("disabled");
		});
		return false;
	});
});

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
	$(".check").attr("disabled","disabled");
	$(".error").attr("disabled","disabled");
	$(this).css("box-shadow","inset 0px 0px 0px 4px #25bb20");
	
});

/* Toggle Color vermell/verd en clicar opció error/check */
$(function(){
	$(".error").click(function(){
		$(this).toggleClass("eclick");
		return false;
	});
});

/*Feedbacks. Pantalla petita*/
document.getElementById("r1").onclick= function(){
	
	document.getElementById("fb1").style.display="inline";
};

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


