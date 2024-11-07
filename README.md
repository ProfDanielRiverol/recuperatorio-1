# Parcial Recuperatorio Programación III - Tienda de Frutas

Este proyecto consiste en el desarrollo de un frontend para una tienda de frutas, como parte del examen parcial de la materia Programación III.

## Instrucciones Generales

- Desarrolla los puntos en el orden indicado.
- Se valorará un código limpio, bien comentado y estructurado.
- Recuerda utilizar comentarios para separar bloques de código.

## Descripción del Proyecto

En este parcial, deberás construir el frontend de una tienda de frutas.

### Pasos a seguir:

1. Almacenar tus datos personales en un objeto e imprimir tu nombre en el `<nav>` del HTML y en la consola.
2. Utiliza `fetch` para traer el listado de frutas
3. Imprimir los productos en pantalla mediante una función, que deberá ser invocada en `init()`.
4. Implementar una función de filtro, que se dispare al escribir en un campo input, filtrando los productos que coincidan.
5. **EXTRA:** Implementar la funcionalidad de carrito.

## Puntos Detallados

### Punto 1: Array de Frutas

Utiliza fetch para traer el listado de frutas desde esta url
```
https://my-json-server.typicode.com/ProfDanielRiverol/api-frutas/db
```

### Punto 2: Datos del Alumno

Modifica la función inicializadora `init()` para que imprima tu nombre y apellido en el `<nav>` y en la consola, usando un objeto con tus datos personales (DNI, nombre, apellido).

### Punto 3: Mostrar Productos

Implementa una función que recorra el array de frutas y muestre cada producto en pantalla siguiendo el esquema HTML:

```html
<div class="product-card">
    <img src="" alt="">
    <h3></h3>
    <p>$</p>
    <button class="add-to-cart">Agregar al carrito</button>
</div>
```

**EXTRA:** Se valorará el uso de destructuring.

### Punto 4: Filtro de Productos

Escribe una función de filtro que capture los valores de un campo input (por ejemplo, mediante un evento `keyup`), y filtre los productos que coincidan con los valores introducidos.
Escribe una función que filtre los productos por precio por ejemplo: Si ingreso el precio `5.5` el DOM debe mostrar todas frutas cuyo precio sea menor a `5.5`

### Punto 5: Carrito de Compras

**Si has completado los puntos anteriores**

Implementa la funcionalidad de carrito de compras. **EXTRA:** Se valorará si los productos agregados al carrito se almacenan en `localStorage`.

## Ejecución del Proyecto

1. Clona el repositorio o descarga el código fuente.
2. Abre el archivo `index.html` en tu navegador para ejecutar la aplicación.
