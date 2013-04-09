var path = document.location.href;
var k1 = path.lastIndexOf('/');
path = path.substring(0,k1);
var scr0 = 'zap; set defaultDirectory "'+ path + '"; '+
  'set echo warn 50% 50%; set echo warn center; echo "loading..."; refresh;';

function cargaMol(x) {
	jmolScript(scr0 + 'load '+x);
}
function cargaScript(x) {
	if (x.length==0) {
		jmolScript('zap;');
	} else {
		//alert(scr0 + 'script '+x);
		jmolScript(scr0 + 'script '+x);
	}
}

function gid(x) { return document.getElementById(x); }
