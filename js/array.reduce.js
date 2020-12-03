/*
    Al utilizar los arrays tambien podemos hacer uso de una función que nos permite reducir 
    todo el array a un valor que deseemos.
    Por ejemplo podemos usarla para saber cual es el total de algo.
    Ene ste ejemplo se usara para determinar cuanl es el total de libros que tienen las
    personas, es decir el total entre tod@s.
*/


// Creación de Objetos
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

// Creación de array de objetos
var personas = [sacha, alan, martin, dario, vicky, paula]

const contarLibros = (acumulador, persona) => acumulador = acumulador + persona.cantidadDeLibros 


var totalLibros = personas.reduce(contarLibros,0)

console.log(`El total de libros es: ${totalLibros} libros`)