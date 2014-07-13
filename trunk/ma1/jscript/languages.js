 $(document).ready(function(){
	 
	 var userLang = $("html").attr("lang");
	 
	 if(userLang == "en"){
		 $(".backward").attr("title","Backward");
		 $(".forward").attr("title","Forward");
		 $(".icon-arrow-up").attr("title","Upper level");
		 $(".navhelp").attr("title","Navigation Help");
		 $("#helptitle").html("Navigation Help");
		 $("#helpclose").html("Close");
		 $("#close").html("Close");
		 $("#closefb").html("Close");
		 $("#hint").html('<i class="icon-question-sign"></i> Help');
		 $("#htitle").html("Help");
		 $(".error").attr("title","Dismiss option");
		 $(".check").attr("title","Select option");
		 $(".option").attr("title","See option"); 
		 $("#controls").html("Controls: ");
	 }
	 else if(userLang=="ca"){
		 $(".backward").attr("title","Anterior");
		 $(".forward").attr("title","Seg\u00fcent");
		 $(".icon-arrow-up").attr("title","Nivell superior");
		 $(".navhelp").attr("title","Ajuda de Navegaci\u00f3");
		 $("#helptitle").html("Ajuda de Navegaci\u00f3");
		 $("#helpclose").html("Tancar");
		 $("#close").html("Tancar");
		 $("#closefb").html("Tancar");
		 $("#hint").html('<i class="icon-question-sign"></i> Ajuda');
		 $("#htitle").html("Ajuda"); 
		 $(".error").attr("title","Descartar");
		 $(".check").attr("title","Seleccionar");
		 $(".option").attr("title","Veure opci\u00f3");
		 $("#controls").html("Controls: ");
	 }
	 else{
		 $(".backward").attr("title","Atr\u00e1s");
		 $(".forward").attr("title","Siguiente");
		 $(".icon-arrow-up").attr("title","Nivel superior");
		 $(".navhelp").attr("title","Ayuda de Navegaci\u00f3n");
		 $("#helptitle").html("Ayuda de Navegaci\u00f3n");
		 $("#helpclose").html("Cerrar");
		 $("#close").html("Cerrar");
		 $("#closefb").html("Cerrar");
		 $("#hint").html('<i class="icon-question-sign"></i> Ayuda');
		 $("#htitle").html("Ayuda");
		 $(".error").attr("title","Descartar");
		 $(".check").attr("title","Seleccionar");
		 $(".option").attr("title","Ver opci\u00f3n");
		 $("#controls").html("Controles: ");
	 }
 });
 
