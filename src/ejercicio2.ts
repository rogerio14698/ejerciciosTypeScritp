

//Definimos un enum para los niveles de acceso
enum NivelAcceso {
    ADMIN = "admin",
    EDITOR = "editor_contenidos",
    LECTOR = "solo_lectura"
}

//definimos el tipo de la tupla 
type TokenSesion = [id: number, usuario: string, nivel: NivelAcceso];


//Una variale de tipo tokenSesion
let token: TokenSesion = [1, "Rogerio", NivelAcceso.LECTOR];

//Generamos la sesion real:
const sesionActual: TokenSesion = [2, "Maria", NivelAcceso.ADMIN];

console.log(`_____Sesion actual_____`);
console.log(`ID del usuario: ${sesionActual[0]}`);
console.log(`Nombre del usuario: ${sesionActual[1]}`);
console.log(`Nivel de acceso: ${sesionActual[2]}`);




