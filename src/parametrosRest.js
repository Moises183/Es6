const mostrarDatos = (...datos) => {
    console.log(datos);
}

const arregloDatos = [`Moises`, 18, `correo@correo.com`, `Mexico`];
mostrarDatos(...arregloDatos);