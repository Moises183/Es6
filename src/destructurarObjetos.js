const usuario={
    nombre: `Moises`,
    correo: `correo@corre.com`,
    edad: 18,
    pais: `Mexico`
}

const {nombre, correo, edad, pais, profesion=`No especificado`}=usuario;

const mostrarInfo=({nombre, edad, profesion=`Estudiante`})=>console.log(`${nombre}, es ${profesion}`);
mostrarInfo(usuario);

