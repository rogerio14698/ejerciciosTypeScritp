//GEneramos la base de datos de usuarios:
const usuarios = {
    "user_1": { id: 1, nombre: "Rogerio", email: "rogerio@example.com", esActivo: true },
    "user_2": { id: 2, nombre: "Maria", esActivo: false },
    "user_3": { id: 3, nombre: "Juan", email: "juan@example.com", esActivo: true }
};
//Añadimos un usaurio nuevo dinamicamente:
usuarios["user_4"] = { id: 4, nombre: "Ana", email: "ana@example.com", esActivo: true };
console.log(usuarios);
//Buscamos un usaurio por su clave. 
const idBuscar = "user_2";
const usuarioEncontrado = usuarios[idBuscar];
console.log(`Usuario encontrado: ${usuarioEncontrado.nombre}, Activo: ${(usuarioEncontrado === null || usuarioEncontrado === void 0 ? void 0 : usuarioEncontrado.esActivo) ? "Sí" : "No"}`);
if (usuarioEncontrado.email) {
    console.log(`Email en mayúsculas: ${usuarioEncontrado.email.toUpperCase()}`);
}
else {
    console.log("El usuario no tiene email registrado.");
}
export {};
//no hay fallos, el tsconfig.json tiene la opcion "strict": true, activa la opcion "noUncheckedIndexedAccess": true, lo que hace que el acceso a propiedades de objetos con claves dinamicas sea mas seguro,
//  ya que el tipo del valor devuelto es una union del tipo original y undefined. 
// Esto obliga a manejar el caso en el que la clave no exista en el objeto, evitando errores en tiempo de ejecucion.
//# sourceMappingURL=ejercicio3.js.map