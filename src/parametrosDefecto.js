function registrar_usuario(nombre, pais=`No especificado`, correo, telefono=`00000000`){
    return`Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`;
}

console.log(registrar_usuario(`Moises`, undefined, `correo@correo.com`));
