function newAppletWindow() 
{	var sm = "" + Math.random()
	sm = sm.substring(2,10)
	var newwin = window.open("../JmolPopup.htm","jmol_"+sm,"resizable,width=600,height=600")
}
