/*
    Funciones en JavaScript
*/

var nombre = 'Joel'
var apellido = 'Dominguez'
var edad = 21

/*
    Al declarar una función esta puede recibir ciertos parametros.
    Los parametros pueden tener el mismo nombre que las variables declaradas afuera pero eso no es una buena practica.
    
*/

function mostrarDatos(nombre, apellido, edad){
    var datos = `El nombre es: ${nombre} ${apellido} con ${edad} años.`
    console.log(datos)
}

mostrarDatos(nombre, apellido, edad)
mostrarDatos('Julieta', 'Soza', 34)

/*
    La manera correcta seria la siguiente:
    Al declarar variables o recibir valores como argumentos en una función...
    Esos valores solo seran accedidos en la misma función y no podemos acceder a ellos desde afuera de la función.
    Pero la función si puede usar los valores de las variables globales.
*/

function mostrarDatos2(name, last_name, age){
    var data = `El nombre es: ${name} ${last_name} con ${age} años`
    console.log(data)
}

mostrarDatos2('Josue', "Perez", 35)