$(document).ready(function(){
	$("#Ayuda").modal(function(){
		$("#Ayuda").click("toggle");
	});
});

function showHideA(){
	var ImageDiv=document.getElementById('img1div');
	ImageDiv.style.display=(ImageDiv.style.display=='none')?'inline':'none';}

function showHideB(){
	var ImageDiv=document.getElementById('img2div');
	ImageDiv.style.display=(ImageDiv.style.display=='none')?'inline':'none';}

function showHideC(){
	var ImageDiv=document.getElementById('img3div');
	ImageDiv.style.display=(ImageDiv.style.display=='none')?'inline':'none';}

function showHideD(){
	var ImageDiv=document.getElementById('img4div');
	ImageDiv.style.display=(ImageDiv.style.display=='none')?'inline':'none';}

