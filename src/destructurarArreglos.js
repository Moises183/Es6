const persona = ["Moises", "18", "mexico", "Sistemas"];

const [mnombre, edad, pais, profesion="No especificado"]=persona;

const mostrarInfo=([nombre, edad, pais, profesion="No especificado"] = persona) => console.log(nombre, profesion);
mostrarInfo(persona);