const crearObjetos = (nombre, edad) =>{
    return{
        nombre,
        edad,
        mostrarInfo(){
            return `${nombre} tiene ${edad} años`;
        }
    }
}

console.log(crearObjetos(`Moises`, 18).mostrarInfo());
