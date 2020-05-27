"use strict";

var usuario = {
  nombre: "Moises",
  correo: "correo@corre.com",
  edad: 18,
  pais: "Mexico"
};
var nombre = usuario.nombre,
    correo = usuario.correo,
    edad = usuario.edad,
    pais = usuario.pais,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? "No especificado" : _usuario$profesion;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      edad = _ref.edad,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? "Estudiante" : _ref$profesion;
  return console.log("".concat(nombre, ", es ").concat(profesion));
};

mostrarInfo(usuario);