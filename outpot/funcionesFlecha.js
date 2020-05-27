"use strict";

var nombres = ["Moises", "Oscar", "Alan"];
var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(numero_caracteres); //     const numero_caracteres= nombres.map(function(nombre){
//     return `${nombre} tiene ${nombre.length} letras`
//     });
// (parametro) =>{
//     return
// }