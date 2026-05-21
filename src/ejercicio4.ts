

interface Producto {
    id: number;
    nombre: string;
    sku: string;
    precio: number;
    enStock: boolean;
}

//Crear un tipo ProductoActualizable donde todas las propiedades sean opcionales (Partial).
type ProductoActualizable = Partial<Producto>;
    //CAso de uso:
    const cambiosProducto: ProductoActualizable = {
        precio: 19.99,
        enStock: false
    }

//Crear un tipo ProductoResumido que únicamente contenga las propiedades id y precio (Pick).
type ProductoResumido = Pick<Producto, "id" | "precio">;
    //Caso de uso:
    const productoResumido: ProductoResumido = {
        id: 1,
        precio: 29.99
    }

//Crear un tipo ProductoSinStock que elimine la propiedad stock (Omit).
type ProductoSinStock = Omit<Producto, "enStock">;
    //Caso de uso:
    const productoSinStock: ProductoSinStock = {
        id: 1,
        nombre: "Producto 1",
        sku: "SKU001",
        precio: 29.99
    }

//Console.log para verificar los tipos creados
console.log("ProductoActualizable:", cambiosProducto);
console.log("ProductoResumido:", productoResumido);
console.log("ProductoSinStock:", productoSinStock);
