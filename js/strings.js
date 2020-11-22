/*
    Trabajando con Strings.
*/

var nombre = 'Joel'
var apellido = 'Dominguez'

var nombreMayusculas = nombre.toUpperCase();
var nombreMinusculas = nombre.toLowerCase();

var primeraLetra =  nombre.charAt(0);

var tamañoNombre = nombre.length

var str = apellido.substring(3, 6);

var nombreCompleto = `${nombre} ${apellido}`

var ultimaLetra = nombre.charAt(nombre.length-1)