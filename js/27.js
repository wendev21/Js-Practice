//POO

// Obcject Literal
const producto = {
    nombre : 'Tablet',
    precio: 500
}
// Object Contructor
 function Producto(nombre, precio, disponible)
 {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
 }

 const producto1 = new Producto('celular', 200, true);
 const producto2 = new Producto('Laptop', 800, false );
 const producto3 = new Producto('Mouse', 50, true);
 
 console.log(producto1);
 console.log(producto2);
 console.log(producto3);

