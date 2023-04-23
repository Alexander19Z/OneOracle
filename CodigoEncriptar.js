

function encriptar() {
	var frase = document.getElementById("txtEncriptar").value.toLowerCase();
	var textoEncripatado=frase.replace(/e/img,"enter");
	var textoEncripatado=textoEncripatado.replace(/i/img,"imes");
	var textoEncripatado=textoEncripatado.replace(/a/img,"ai");
	var textoEncripatado=textoEncripatado.replace(/o/img,"ober");
	var textoEncripatado=textoEncripatado.replace(/u/img,"ufat");

	document.getElementById("mostrar").innerHTML=textoEncripatado;
}

function desencriptar() {
	var frase = document.getElementById("txtEncriptar").value.toLowerCase();
	var textoEncripatado=frase.replace(/enter/img,"e");
	var textoEncripatado=textoEncripatado.replace(/imes/img,"i");
	var textoEncripatado=textoEncripatado.replace(/ai/img,"a");
	var textoEncripatado=textoEncripatado.replace(/ober/img,"o");
	var textoEncripatado=textoEncripatado.replace(/ufat/img,"u");

	document.getElementById("mostrar").innerHTML=textoEncripatado;
}

function Portapapeles(){

var copia = document.getElementById("mostrar");
copia.select();
copia.setSelectionRange(0,99999);
document.execCommand( "copy");

}


