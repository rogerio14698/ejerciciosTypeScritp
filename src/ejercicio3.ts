

interface Usuario {
    id: number;
    nombre: string;
    email?: string; // el signo de ? indica que el campo es opcional
    esActivo: boolean;

}

type DiccionarioUsuarios = {
    [idKey:string]: Usuario; // idKey es solo descriptivo, puede ser cualquier nombre

}

//GEneramos la base de datos de usuarios:
const usuarios: DiccionarioUsuarios = {
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
console.log(`Usuario encontrado: ${usuarioEncontrado.nombre}, Activo: ${usuarioEncontrado?.esActivo ? "Sí" : "No"}`);

if (usuarioEncontrado.email) {
  console.log(`Email en mayúsculas: ${usuarioEncontrado.email.toUpperCase()}`);
} else {
  console.log("El usuario no tiene email registrado.");
}

//no hay fallos, el tsconfig.json tiene la opcion "strict": true, activa la opcion "noUncheckedIndexedAccess": true, lo que hace que el acceso a propiedades de objetos con claves dinamicas sea mas seguro,
//  ya que el tipo del valor devuelto es una union del tipo original y undefined. 
// Esto obliga a manejar el caso en el que la clave no exista en el objeto, evitando errores en tiempo de ejecucion.