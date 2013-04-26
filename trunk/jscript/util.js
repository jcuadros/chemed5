
var JmolInfo = {
  color: "black",
  height: 320,
  width: 320,
  j2sPath: "Jmol/j2s",
  jarPath: "Jmol/java",
  isSigned: true,
  jarFile: "JmolAppletSigned0.jar",
  use: "Java"
};

var path = document.location.href;
var k1 = path.lastIndexOf('/');
path = path.substring(0,k1);
var scr0 = 'zap; set defaultDirectory "'+ path + '"; '+
  'set echo warn 50% 50%; set echo warn center; echo "cargando..."; refresh;';

function cargaMol(x) {
	Jmol.script(myJmol, scr0 + 'load '+x);
}
function cargaScript(x) {
	if (x.length==0) {
		Jmol.script(myJmol, 'zap;');
	} else {
		//alert(scr0 + 'script '+x);
		Jmol.script(myJmol, scr0 + 'script "' + x + '";');
	}
}
