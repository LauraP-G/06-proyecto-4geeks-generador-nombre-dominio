/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Genera bucle para mostrar todas las opciones disponibles de dominios, se muestra en el HTML, esta función se llama automaticamente al cargar la página
function generatorAllDomains() {
  let pronoun = ["you", "he", "the", "me", "our"];
  let adj = ["happy", "sad", "big", "small", "hot"];
  let noum = ["apple", "dog", "house", "bird", "cat"];
  let extension = [".com", ".net", ".org", ".info", ".es"];
  let dominio = "";
  for (let pronombre of pronoun) {
    for (let adjetivo of adj) {
      for (let nombre of noum) {
        for (let extensiones of extension) {
          console.log(pronombre + adjetivo + nombre + extensiones); // muestra en consola todos los dominios posibles
          dominio += pronombre + adjetivo + nombre + extensiones + "<br>"; // muestra en pantalla todos los dominios posibles
        }
      }
    }
  }
  return dominio;
}
generatorAllDomains();
document.getElementById("dominio").innerHTML = generatorAllDomains();

//otra opción donde la funcion se carga automaticamente al abrir al cargar la página

/*window.onload = function() {
  let pronoun = ["you", "he", "the", "me", "our"];
  let adj = ["happy", "sad", "big", "small", "hot"];
  let noum = ["apple", "dog", "house", "bird", "cat"];
  let extension = [".com", ".net", ".org", ".info", ".es"];
  let dominio = "";
  for (let pronombre of pronoun) {
    for (let adjetivo of adj) {
      for (let nombre of noum) {
        for (let extensiones of extension) {
          console.log(pronombre + adjetivo + nombre + extensiones); // muestra en consola todos los dominios posibles
          dominio += pronombre + adjetivo + nombre + extensiones + "<br>"; // muestra en pantalla todos los dominios posibles
        }
      }
    }
  }

  document.getElementById("dominio").innerHTML = dominio;
};
*/
