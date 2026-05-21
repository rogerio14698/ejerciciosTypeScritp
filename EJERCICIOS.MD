# 📘 Ejercicios TypeScript — Tipos Avanzados, POO y DOM

---

# 🧩 Bloque 1: Tipos Avanzados en TypeScript

## 1. Gestión de Errores con Tipo unknown y Aserciones

Enunciado: Crea una función llamada procesarDatoInseguro(valor: unknown): void. La función debe verificar el tipo de dato recibido usando type guards (typeof).

Si es un string, imprime su longitud en consola haciendo un casting con as string.

Si es un number, imprime su cuadrado.

Si es cualquier otro tipo, muestra un mensaje de error simulando que no se puede procesar.

Objetivo: Practicar la seguridad del tipo unknown frente a any y el uso de aserciones de tipo.

---

## 2. Modelado de Configuración con Tuplas Inmutables y Enums

Enunciado: Define un enum de cadenas llamado NivelAcceso con los valores ADMIN, EDITOR y LECTOR. A continuación, define una Tupla con Nombre (Named Tuple) para representar un token de sesión que contenga: [id: number, usuario: string, rol: NivelAcceso]. Asegúrate de que la tupla sea inmutable (readonly) para evitar que se puedan alterar sus valores con métodos como push().

Objetivo: Aprender el uso de enums de tipo string y restricciones estrictas en colecciones fijas.

---

## 3. Tipos Avanzados de Composición y Claves Dinámicas

Enunciado: Define una interfaz Usuario con las propiedades id (number), nombre (string) y una propiedad opcional email? (string). Luego, utiliza una Index Signature para crear un alias de tipo (type) llamado DiccionarioUsuarios que permita almacenar un mapa dinámico donde la clave sea un string (el ID del usuario) y el valor sea un objeto de tipo Usuario.

Objetivo: Dominar el operador ? para campos opcionales y las firmas de índice dinámicas.

---

## 4. Transformación de Tipos con Utility Types

Enunciado: Partiendo de una interfaz robusta llamada Producto (con propiedades obligatorias como id, sku, precio, stock, descripcion), utiliza los tipos de utilidad de TypeScript para:

Crear un tipo ProductoActualizable donde todas las propiedades sean opcionales (Partial).

Crear un tipo ProductoResumido que únicamente contenga las propiedades id y precio (Pick).

Crear un tipo ProductoSinStock que elimine la propiedad stock (Omit).

Objetivo: Reutilizar y transformar interfaces sin duplicar código en el entorno cliente.

---

# 🧱 Bloque 2: Clases, Objetos y Manipulación del DOM

## 5. Jerarquía de Clases y Atajo de Constructor (POO)

Enunciado: Crea una clase abstracta ElementoTienda que declare un método abstracto calcularImpuesto(): number. Desarrolla una clase hija Articulo que herede de ella utilizando la sintaxis de atajo de constructor (Constructor Assignment) para declarar directamente propiedades con visibilidad protected (id, nombre, precio Base). Implementa el método abstracto en la clase hija e instancia un objeto para comprobar su funcionamiento.

Objetivo: Estructurar el código cliente bajo patrones POO tradicionales en TypeScript.

---

## 6. Contratos de Interfaz e Implementación Concreta

Enunciado: Define una interfaz TypeScript llamada Validable que exija un método validar(): boolean y una propiedad errores: string[]. Diseña una clase FormularioRegistro que implemente dicha interfaz (implements). El método validar debe comprobar reglas básicas (por ejemplo, que los campos de contraseña no estén vacíos) y añadir mensajes al array de errores si no se cumplen.

Objetivo: Forzar estructuras de objetos homogéneas mediante contratos de interfaces.

---

## 7. Iteración Eficiente sobre el Objeto Form

Enunciado: Escribe un script en TypeScript que capture un formulario del DOM mediante document.forms['miFormulario']. Utiliza la propiedad elements para realizar un bucle (iteración) sobre toda la colección de controles del formulario. Si el elemento de entrada (INPUT) detectado es de tipo text o textarea, limpia su valor asignando una cadena vacía, pero respeta aquellos campos que estén marcados como readOnly.

Objetivo: Manipular colecciones nativas de formularios controlando el estado de sus propiedades individuales.

---

## 8. Gestión Dinámica de Inputs de Selección Múltiple (Select / Checkbox)

Enunciado: Desarrolla un componente encargado de procesar un formulario de encuestas. Al lanzar el evento de envío, el código debe leer un elemento HTMLSelectElement de selección múltiple. Utiliza la propiedad selectedOptions para recuperar de forma dinámica la colección de opciones seleccionadas por el usuario, almacenando sus propiedades value y text en un array de objetos. Paralelamente, valida que al menos un Checkbox de un grupo específico esté checked.

Objetivo: Acceder y procesar estructuras y colecciones dinámicas complejas del DOM.

---

## 9. Factoría Genérica de Componentes del DOM (Generics)

Enunciado: Crea una función genérica llamada crearComponenteContenedor<T extends HTMLElement>(etiqueta: string): T. La función debe usar document.createElement(etiqueta) y retornar el elemento tipado correctamente gracias al genérico (restringido a subtipos de HTMLElement). Añade un método dentro de la función para inyectar texto seguro mediante document.createTextNode().

Objetivo: Combinar la potencia de los tipos genéricos de TypeScript con los métodos de creación nativos del DOM.

---

## 10. Captura Avanzada de Coordenadas y Teclado con el Objeto Event

Enunciado: Registra un listener de eventos avanzado (addEventListener) sobre el objeto window para el evento mousemove, y otro para keydown. En las funciones controladoras, utiliza el objeto Event contextual para:

Extraer las coordenadas exactas de la posición del ratón en la pantalla.

Identificar mediante el evento de teclado la tecla exacta presionada, imprimiendo en un nodo de texto del DOM el mensaje: "Tecla [X] presionada en coordenadas [Y, Z]".

Objetivo: Manejar modelos de registro avanzados y explotar las propiedades analíticas del objeto Event.