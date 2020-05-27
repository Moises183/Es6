class usuario{
    constructor(nombre, edad, correo){
        this.nombre=nombre,
        this.edad=edad,
        this.correo=correo
    }

    mostrarSaludo(mensaje){
        return mensaje;
    }

    mostrarInfo(){
        return`
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Edad:</b> ${this.edad} <br />
            <b>Correo</b> ${this.correo} <br />
            <hr />
            ` ;
    }
}

const Moises=new usuario(`Oscar Moises`, 18, `correo@correo.com`);
document.write(Moises.mostrarInfo());



class estudiante extends usuario{
    constructor(nombre, edad, correo, carrera){
        super(nombre, edad, correo);
        this.carrera=carrera;
    }

    mostrarInfo(){
        return`
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Edad:</b> ${this.edad} <br />
            <b>Correo</b> ${this.correo} <br />
            <b>Carrera</b> ${this.carrera} <br />
            <hr />
            ` ;
    }
}

const Oscar=new estudiante(`Oscar Moises`, 18, `correo@correo.com`, 'Estudiante');
document.write(Oscar.mostrarInfo());