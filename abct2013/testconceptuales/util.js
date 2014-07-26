window.onload = function () {
  gid('panelJmol').innerHTML = ''+
	'<div id="divJmol"></div>'+
	'<div id="altJmol"></div>'+
	'<div id="animCtrls"></div>';
	var myJmol = 'myJmol';
  var JmolInfo = {  
		width: 320,
		height: 320,
		color: "black",
		jarPath: "../../jsmol/java", 
		isSigned:true,
		jarFile: "JmolAppletSigned0.jar", 
		j2sPath: "../../jsmol/j2s", 
		serverURL: "../../jsmol/php/jsmol.php",
		disableJ2SLoadMonitor: false,
		disableInitialConsole: true,
		use: "HTML5" // could be JAVA or HTML5
	}

  
  $('#divJmol').html(Jmol.getAppletHtml(myJmol,JmolInfo));
  if (startJmol.length) { 
    Jmol.script(myJmol, scr0 + startJmol);
    showJmol(true);
  } else {
    showJmol(startJmol);
  }
  insertAnimCtrls();
  gid('panelComent').innerHTML = '<iframe name="coment" id="coment" frameborder="0" src="../enblanco.htm"></iframe>';
  /*
  var cmF = document.createElement('iframe');
  cmF.name = 'coment';
  cmF.id = 'coment';
  cmF.frameborder = '0';
  cmF.src = '../enblanco.htm';
  gid('panelComent').appendChild(cmF);
  */
}

var path = document.location.href;
var k1 = path.lastIndexOf('/');
path = path.substring(0,k1);
var scr0 = 'zap; set defaultDirectory "'+ path + '"; '+
  'set echo warn 50% 50%; set echo warn center; echo "cargando..."; refresh;';

function insertAnimCtrls() {
  var i,t,d;
  d = [
   ['animation pause', 'pausa', 'mano-stop.gif'],
   ['animation fps 3;animation play', 'lento', 'tortuga.gif'],
   ['animation fps 15;animation play', 'rápido', 'liebre.gif'],
   ['animation rewind;animation play', 'repetir', 'repetir.gif']
  ];
  t = '<table><tr>'+
  '<td>Animación:</td>'+
  '<td>';
  for (i=0;i<4;i++) {
	t += '<button onclick="Jmol.script(myJmol, \'' + d[i][0] + '\')" title="' + d[i][1] + '"><img src="../' +  d[i][2] + '" alt="' + d[i][1] + '"></button> ';
  }
  t += '</td></tr></table>';
  gid('animCtrls').innerHTML = t;
}

function cargaScript(x) {
	if (x.length==0) {
		Jmol.script(myJmol, 'zap;');
	} else {
		Jmol.script(myJmol, scr0 + 'script '+x);
	}
}

function gid(x) { return document.getElementById(x); }

function multi(tipo, arch) {
	tipo = tipo.toLowerCase();
	if (tipo == 'jmol' && arch.length!=0) {
		showJmol(true);
		showAnimCtrls(false);
		cargaScript(arch);
	} else if (tipo == 'anima' && arch.length!=0) {
		showJmol(true);
		showAnimCtrls(true);
		cargaScript(arch);
	} else if (tipo == 'imagen') {
		showJmol(false);
		showAnimCtrls(false);
		gid('altJmol').innerHTML = '<img src="' + arch + '">';
	} else {
		showJmol(false);
		showAnimCtrls(false);		
	}
}

function showAnimCtrls(tf) {
	gid('animCtrls').getElementsByTagName('table')[0].style.display = tf ? 'table' : 'none';
}
function showJmol(tf) {
	// gid('divJmol').style.display = tf ? 'block' : 'none';
	Jmol.resizeApplet(myJmol, tf ? 320 : 2);
	if (gid('altJmol')) { gid('altJmol').style.display = tf ? 'none' : 'block'; }
}
//_jmol.allowedJmolSize = 1;

function showFeedback(op,nt,tipo,sc) {
  var i; if (!nt) { nt=4; }
  for (i=1;i<=nt;i++) {
    if (gid('respu'+i)) { gid('respu'+i).style.visibility='hidden'; }
  }
  gid('respu'+op).style.visibility='visible';
  if (sc) { multi(tipo,sc); }
}
