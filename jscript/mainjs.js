/* Modal de les ajudes */

function overlay() {
	el = document.getElementById("ayuda");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function cerrarmodal(){	
	et = document.getElementById("ayudaNav");
	et.style.visibility = (et.style.visibility == "visible") ? "hidden" : "visible";
}


/* Modal del feedback*/

function fback() {
	fb = document.getElementById("feedback");
	fb.style.visibility ="visible";
}

/* Draggables de l'ajuda i el feedback*/

$(function(){
	$("#ayuda").draggable({containment:"window", handle:".modal-header, .modal-footer", cursor:"move"});
	
	$("#ayudaNav").draggable({containment:"window", handle:".modal-header, .modal-footer", cursor:"move"});
	
	if($(document).width() < 540){
		$("#feedback").draggable({axis:"y", handle:".modal-footer", cursor:"move"});
	}else{
		$("#feedback").draggable({containment:"window", handle:".modal-footer", cursor:"move"});
	}
	
});

/* Alerta en pantalla <979px*/

$(function(){
	var cnt=0;
	
	if(cnt<1){
		if($(document).width() < 979){
			var userLang = $("html").attr("lang");
			
			if(userLang=="en"){
				window.alert("This screen displays only one of the images of the answers." +
						"Select the display buttons to see the different options.");
			}
			else{
				window.alert("En esta pantalla se muestra s\u00f3lo una de las im\u00e1genes de las respuestas. " +
				"Selecciona los botones de visualizaci\u00f3n para ver las diferentes opciones.");
			}
			cnt=2;
		}
	}
});

/* Deshabilitar botó check si s'ha marcat l'opció com a descartada
 * Color vermell en descartar */
$(function(){
	$(".x1").click(function(){
		$(".x1").toggleClass("eclick");
		$(".c1").toggle(function(){
			$(".c1").attr("disabled");		
		});
		return false;
	});
	
	$(".x2").click(function(){
		$(".x2").toggleClass("eclick");
		$(".c2").toggle(function(){
			$(".c2").attr("disabled");		
		});
		return false;
	});
	
	$(".x3").click(function(){
		$(".x3").toggleClass("eclick");
		$(".c3").toggle(function(){
			$(".c3").attr("disabled");		
		});
		return false;
	});
	
	$(".x4").click(function(){
		$(".x4").toggleClass("eclick");
		$(".c4").toggle(function(){
			$(".c4").attr("disabled");		
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


/* Deshabilitar tots els botons en escollir una resposta, exepte els de visualitzar opcions
 * Visualització del feedback*/

$(".c1").click(function(){
    $(".check").attr("disabled","disabled");
    $(".error").attr("disabled","disabled");
    $(".c1").css("box-shadow","inset 0px 0px 0px 4px #25bb20");
    $("#fb1").css("display","inline");
});

$(".c2").click(function(){
    $(".check").attr("disabled","disabled");
    $(".error").attr("disabled","disabled");
    $(".c2").css("box-shadow","inset 0px 0px 0px 4px #25bb20");
    $("#fb2").css("display","inline");
});

$(".c3").click(function(){
    $(".check").attr("disabled","disabled");
    $(".error").attr("disabled","disabled");
    $(".c3").css("box-shadow","inset 0px 0px 0px 4px #25bb20");
    $("#fb3").css("display","inline");
});

$(".c4").click(function(){
    $(".check").attr("disabled","disabled");
    $(".error").attr("disabled","disabled");
    $(".c4").css("box-shadow","inset 0px 0px 0px 4px #25bb20");
    $("#fb4").css("display","inline");    
});

