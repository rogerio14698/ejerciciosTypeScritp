
const formulario = document.getElementById("formulario") as HTMLFormElement;
const datoInput = document.getElementById("inputValor") as HTMLInputElement;


//Se escucha el evento submit del formulario
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); //Evita que se recargue la página al enviar el formulario
    const valor: unknown = datoInput.value; //Obtiene el valor del input como unknown
    procesarDatosInseguros(valor); //Llama a la función para procesar el valor
});


function procesarDatosInseguros(valor: unknown): void {
    if(typeof valor === "string") {
        //Su longitud si es string
        var longitudString: number = valor.length;
        alert(`La longitud del string es: ${longitudString}`);
    } else if (typeof valor === "number") {
        //El cuadrado si es number
        var cuadrado: number = valor ** 2;
        alert(`El cuadrado del número es: ${cuadrado}`);
    }else {
        //Error si no es string ni number
        alert("Error: El valor ingresado no es ni un string ni un número.");
    }
}