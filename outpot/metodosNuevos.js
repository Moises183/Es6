"use strict";

var texto = 'Hola mundo';
console.log(texto, 'empieza con h:', texto.toLowerCase().startsWith('h'));
console.log(texto, 'empieza con o:', texto.toLowerCase().startsWith('o'));
console.log(texto, 'incluye la palabra Moises:', texto.includes('Moises'));
var amigos = ['Moises', 'Carlos', 'Alan'];
console.log(amigos.includes('Moises'));
console.log(amigos.find(function (amigo) {
  return amigo.length > 5;
}));
console.log(amigos.findIndex(function (amigo) {
  return amigo === 'Alan';
}));