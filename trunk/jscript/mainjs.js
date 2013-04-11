function overlay() {
	el = document.getElementById("ayuda");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

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
