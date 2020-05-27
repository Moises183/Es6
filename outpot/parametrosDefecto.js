"use strict";

function registrar_usuario(nombre) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "No especificado";
  var correo = arguments.length > 2 ? arguments[2] : undefined;
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "00000000";
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Correo: ").concat(correo, ", Telefono: ").concat(telefono);
}

console.log(registrar_usuario("Moises", undefined, "correo@correo.com"));