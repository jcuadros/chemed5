 $(document).ready(function(){
	 
	 var userLang = (navigator.language) ? navigator.language : navigator.userLanguage;
	 
	 if(userLang == "en"){
		 $(".backward").attr("title","backward");
		 $(".forward").attr("title","forward");
		 $(".icon-arrow-up").attr("title","upper level");
		 $("#close").html("Close");
		 $("#hint").html('<i class="icon-question-sign"></i> Help');
		 $("#htitle").html("Help");
		 $(".error").attr("title","dismiss option");
		 $(".check").attr("title","select option");
		 $(".option").attr("title","see option"); 
	 }
	 else if(userLang=="ca"){
		 $(".backward").attr("title","anterior");
		 $(".forward").attr("title","seg\u00fcent");
		 $(".icon-arrow-up").attr("title","nivell superior");
		 $("#close").html("Tancar");
		 $("#hint").html('<i class="icon-question-sign"></i> Ajuda');
		 $("#htitle").html("Ajuda");
		 $(".error").attr("title","descartar");
		 $(".check").attr("title","seleccionar");
		 $(".option").attr("title","veure opci\u00f3");
	 }
	 else{
		 $(".backward").attr("title","atr\u00e1s");
		 $(".forward").attr("title","siguiente");
		 $(".icon-arrow-up").attr("title","nivel superior");
		 $("#close").html("Cerrar");
		 $("#hint").html('<i class="icon-question-sign"></i> Ayuda');
		 $("#htitle").html("Ayuda");
		 $(".error").attr("title","descartar");
		 $(".check").attr("title","seleccionar");
		 $(".option").attr("title","ver opci\u00f3n");
	 }
 });
 
