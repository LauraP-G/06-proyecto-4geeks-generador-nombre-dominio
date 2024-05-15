/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Arrays para formar combinaciones de nombres de domino
let pronoun = ["you", "he", "the", "me", "our"];
let adj = ["happy", "sad", "big", "small", "hot"];
let noum = ["apple", "dog", "house", "bird", "cat"];
let extension = [".com", ".net", ".org", ".info", ".es"];

//Función que realiza todos las combinaciones posibles de nombre de dominio
const generateAllDomainCombinations = () => {
  for (let pronombre of pronoun) {
    for (let adjetivo of adj) {
      for (let nombre of noum) {
        for (let extensiones of extension) {
          console.log(pronombre + adjetivo + nombre + extensiones);
        }
      }
    }
  }
};

//Llama a la función que genera todos los nombres de dominio, se muestran en consola
generateAllDomainCombinations();

//Genera bucle para mostrar todas las opciones disponibles de dominios, se muestra en el HTML
window.onload = function() {
  let dominio = "";
  for (let pronombre of pronoun) {
    for (let adjetivo of adj) {
      for (let nombre of noum) {
        for (let extensiones of extension) {
          dominio += pronombre + adjetivo + nombre + extensiones + "<br>";
        }
      }
    }
  }

  document.getElementById("dominio").innerHTML = dominio;
};
