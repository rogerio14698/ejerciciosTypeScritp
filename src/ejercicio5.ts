

/*Enunciado: Crea una clase abstracta ElementoTienda que declare un método abstracto calcularImpuesto(): number. Desarrolla una clase hija Articulo que herede de ella utilizando la sintaxis de atajo de constructor (Constructor Assignment) para declarar directamente propiedades con visibilidad protected (id, nombre, precio Base). Implementa el método abstracto en la clase hija e instancia un objeto para comprobar su funcionamiento.

Objetivo: Estructurar el código cliente bajo patrones POO tradicionales en TypeScript. */

abstract class ElementoTienda {
    // Declaramos un método abstracto. No lleva llaves {} porque no tiene código.
    // Obliga a cualquier clase hija a programar su propia versión de este método.
    abstract calcularImpuesto(): number;
}

class Articulo extends ElementoTienda {
    constructor(
        protected id: number, 
        protected nombre: string, 
        protected precioBase: number
    ){
        super(); // Llamamos al constructor de la clase padre (ElementoTienda) aunque no tenga parámetros, es obligatorio para inicializar la parte heredada de la clase.
    }

    // Implementamos el método abstracto declarado en la clase padre.
    calcularImpuesto(): number {
        const impuesto = this.precioBase * 0.21; // Ejemplo de cálculo de impuesto (21%)
        return impuesto;
    }

    mostrarFicha(): void {
    const total = this.precioBase + this.calcularImpuesto();
    console.log(`Artículo: ${this.nombre}`);
    console.log(`Precio Base: ${this.precioBase.toFixed(2)}€`);
    console.log(`Impuesto: ${this.calcularImpuesto().toFixed(2)}€`);
    console.log(`Precio Total: ${total.toFixed(2)}€`);
}
}

//Metodo para mostrar la informacion en la consola
const miCamiseta = new Articulo(1, "Camiseta Vintage TypeScript", 25);
miCamiseta.mostrarFicha(); // Llamamos al método para mostrar la información del artículo en la consola.