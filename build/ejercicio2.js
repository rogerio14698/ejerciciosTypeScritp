//Definimos un enum para los niveles de acceso
var NivelAcceso;
(function (NivelAcceso) {
    NivelAcceso["ADMIN"] = "admin";
    NivelAcceso["EDITOR"] = "editor_contenidos";
    NivelAcceso["LECTOR"] = "solo_lectura";
})(NivelAcceso || (NivelAcceso = {}));
//Una variale de tipo tokenSesion
let token = [1, "Rogerio", NivelAcceso.LECTOR];
//Generamos la sesion real:
const sesionActual = [2, "Maria", NivelAcceso.ADMIN];
console.log(`_____Sesion actual_____`);
console.log(`ID del usuario: ${sesionActual[0]}`);
console.log(`Nombre del usuario: ${sesionActual[1]}`);
console.log(`Nivel de acceso: ${sesionActual[2]}`);
export {};
//# sourceMappingURL=ejercicio2.js.map