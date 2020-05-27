const promesa = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        const exito = false;
        if(exito){
            resolve(`La operacion fue un exito`)
        }
        else{
            reject(`La operacion no tuvo exito`)
        }
    }, 4000);
});

promesa.then ((mensaje) =>{
    alert(mensaje);
})

promesa.catch ((mensaje) =>{
    alert(mensaje);
})