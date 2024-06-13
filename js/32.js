// Async / await

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes... espere');    
        
        setTimeout(()=>{
            resolve('los clientes fueron descargados');
        }, 5000);
    });
}

async function app(){
    try{
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
        console.log('Este código SI se bloquea')

        
    }catch(error){
        console.log(error);
    }
}
app();

console.log('Este código NO se bloquea')