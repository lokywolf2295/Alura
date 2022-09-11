
/*creamos una función que convierte un div a enlace*/
document.addEventListener("DOMContentLoaded", function () {
  const divAlura = document.getElementById("alura");
  const divCesar = document.getElementById("cesar");
  const divAfin = document.getElementById("afin");
  const divTransposicion = document.getElementById("transposicion");

  divAlura.addEventListener("click", function(event) {
    //enlace de la pagina que quieras
    window.location.href = "encriptadorAlura.html";
  });
  divCesar.addEventListener("click", function(event) {
    //enlace de la pagina que quieras
    window.location.href = "encriptadorCesar.html";
  });
  divAfin.addEventListener("click", function(event) {
    //enlace de la pagina que quieras
    window.location.href = "encriptadorAFin.html";
  });
  divTransposicion.addEventListener("click", function(event) {
    //enlace de la pagina que quieras
    window.location.href = "encriptadorTransposicion.html";
  });
});
