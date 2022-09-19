const inputTexto = document.querySelector(".input-texto");

const mensaje = document.querySelector(".mensaje");

var encriptacionExitosa = "TEXTO ENCRIPTADO:";
var desencriptacionExitosa = "TEXTO DESENCRIPTADO:";

let codigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
  ["é", "énter"],
  ["í", "ímes"],
  ["á", "ái"],
  ["ó", "óber"],
  ["ú", "úfat"],
];

/* REGLAS DE ENCRIPTADO

La letra "a" es convertida en "ai"
La letra "e" es convertida en "enter"
La letra "i" es convertida en "imes"
La letra "o" es convertida en "ober"
La letra "u" es convertida en "ufat"

MEJORA PAR TILDES
La letra "á" es convertida en "ái"
La letra "é" es convertida en "énter"
La letra "í" es convertida en "ímes"
La letra "ó" es convertida en "óber"
La letra "ú" es convertida en "úfat"
*/

var si = "";
var no = "none";

//resultado permite mostrar u ocultar los elementos en su interior
function resultado(ver){
  document.getElementById("titulo-resultado").style.display = ver;  
  document.getElementById("btn-copy").style.display = ver;
  document.getElementById("resultado").style.display = ver;
}

resultado(no);

//ENCRIPTAR MENSAJE

function btnEncriptar() {
  if (inputTexto.value != "") {
    document.getElementById("toy").style.display = "none";
    const encriptado = encriptar(inputTexto.value);
    mensaje.value = encriptado;
    inputTexto.value = ""; /*borramos el texto*/
    document.getElementById("titulo-resultado").innerHTML=encriptacionExitosa;
    document.getElementById("resultado").innerHTML=mensaje;
    resultado(si);
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Ingrese el texto a Encriptar",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

function encriptar(textoEncriptado) {
  textoEncriptado = textoEncriptado.toLowerCase(); // transforma el texto a minúscula 

  for (let i = 0; i < codigo.length; i++) { //recorremos el texto reemplazando las letras por sus palabras correspondientes
    if (textoEncriptado.includes(codigo[i][0])) {
      textoEncriptado = textoEncriptado.replaceAll(codigo[i][0], codigo[i][1]);
      //.replaceAll es para que reemplace todas las coincidencias
    }
  }
  return textoEncriptado;
}

/* REGLAS DE DESENCRIPTADO 

La palabra "ai" es convertida en "a"
La palabra "enter" es convertida en "e"
La palabra "imes" es convertida en "i"
La palabra "ober" es convertida en "o"
La palabra "ufat" es convertida en "u"

MEJORA PAR TILDES
La letra "ái" es convertida en "á"
La letra "énter" es convertida en "é"
La letra "ímes" es convertida en "í"
La letra "óber" es convertida en "ó"
La letra "úfat" es convertida en "ú"

*/

//DESENCRIPTAR MENSAJE

function btnDesencriptar() {
  if (inputTexto.value != "") {
    document.getElementById("toy").style.display = "none";
    const textoEncriptado = desencriptar(
      inputTexto.value
    ); //guardamos el contenido de la función desencriptar
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
    document.getElementById("titulo-resultado").innerHTML =
      desencriptacionExitosa;
    document.getElementById("resultado").innerHTML=mensaje;
    resultado(si);
  } else {//Si el input está vacío entonces aparece un pop up de error
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Ingrese el texto a Desencriptar",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

function desencriptar(textoDesencriptado) {
  textoDesencriptado = textoDesencriptado.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
    if (textoDesencriptado.includes(codigo[i][1])) {
      textoDesencriptado = textoDesencriptado.replaceAll(
        codigo[i][1],
        codigo[i][0]
      );
    }
  }
  return textoDesencriptado;
}

// COPIAR TEXTO

function btnCopiar() {
    mensaje.select(); //selecciona el texto
    navigator.clipboard.writeText(mensaje.value); //guarda en el porta papeles el texto seleccionado
    mensaje.value = "";
    mensaje.style.backgroundImage = "";
    document.getElementById("titulo-resultado").innerHTML = "";
    document.getElementById("toy").style.display = "";
    resultado(no);
    Swal.fire({ //luego de copiar aparece un pop up de exito
      position: "center",
      icon: "success",
      title: "Copiado Exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
}
