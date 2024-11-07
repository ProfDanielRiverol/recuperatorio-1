/*
    Instrucciones del parcial:
    - Desarrolla los puntos en el orden indicado.
    - Se valorará un código limpio, bien comentado y estructurado.
    - Recuerda utilizar comentarios para separar bloques de código.
*/

/* PARCIAL PROGRAMACIÓN III _____________

   Pasos a seguir:
   1. Almacenar tus datos personales en un objeto e imprimir tu nombre en el <nav> y en la consola.
   2. Utiliza fetch para consumir los datos de una API externa
   3. Imprimir los productos en pantalla mediante una función, que deberá ser invocada en `init()`.
   4. Implementar una función de filtro, que se dispare al escribir en un campo input, filtrando los productos que coincidan.
   5. EXTRA (opcional): Implementar la funcionalidad de carrito.
*/

/* PUNTO 1 _____________
  Utiliza fetch para traer el listado de frutas desde esta url: https://my-json-server.typicode.com/ProfDanielRiverol/api-frutas/db
*/

/* PUNTO 2 _____________
   Modifica la función inicializadora `init()` para incluir una función que imprima tu nombre 
   y apellido en el <nav> del HTML y también en la consola.

   Pasos:
   - Crea un objeto alumno con tus datos (dni, nombre, apellido).
   - Usa backticks (``) para mostrar en consola un mensaje que incluya estos datos desde el objeto.
*/

/* PUNTO 3 _____________
   Implementa una función que imprima en pantalla los productos (frutas) del array de objetos.
   Agrega esta función dentro de `init()`.

   El HTML generado debe seguir esta estructura:

        <div class="product-card">
            <img src="" alt="">
            <h3></h3>
            <p>$</p>
            <button class="add-to-cart">Agregar al carrito</button>
        </div>

   EXTRA: Se valorará el uso de destructuring para extraer los datos del objeto.
*/

/* PUNTO 4 _____________
   Escribe una función de filtro que capture los valores de un campo input, por ejemplo, 
   mediante un evento `keyup`, y filtre los productos con cada cambio en el input.
*/

/* PUNTO 5 _____________

   Implementa la funcionalidad de un carrito de compras.

   EXTRA: Se valorará si los productos agregados al carrito se almacenan en `localStorage`.
*/

// Función inicializadora
function init() {
  // Acá irán las funciones de arranque de la aplicación.
}
