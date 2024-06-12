//Class

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`
    }
    precioProducto(){
        return `El precio del producto es $${this.precio}`
    }
}

const producto = new Producto("Monitor Curvo de 49'", 420);
console.log(producto);
console.log(producto.precioProducto());
console.log(producto.formatearProducto());