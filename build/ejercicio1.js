const formulario = document.getElementById("formulario");
const datoInput = document.getElementById("inputValor");
//Se escucha el evento submit del formulario
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); //Evita que se recargue la página al enviar el formulario
    const valor = datoInput.value; //Obtiene el valor del input como unknown
    procesarDatosInseguros(valor); //Llama a la función para procesar el valor
});
function procesarDatosInseguros(valor) {
    if (typeof valor === "string") {
        //Su longitud si es string
        var longitudString = valor.length;
        alert(`La longitud del string es: ${longitudString}`);
    }
    else if (typeof valor === "number") {
        //El cuadrado si es number
        var cuadrado = Math.pow(valor, 2);
        alert(`El cuadrado del número es: ${cuadrado}`);
    }
    else {
        //Error si no es string ni number
        alert("Error: El valor ingresado no es ni un string ni un número.");
    }
}
export {};
//# sourceMappingURL=ejercicio1.js.map