/*
    Trabajando con Objetos en JavaScript
    Los objetos son como colecciones de una clave : valor
    ejemplo:
    var joel = {
        nombre: 'Joel',
        apellido: 'Dominguez',
        edad: '21',
        colorFav: 'Morado',
    }
*/

var joel = {
    nombre: 'Joel',
    apellido: 'Dominguez',
    edad: 21,
    colorFav: 'Morado'
}

var julieta = {
    nombre: 'Julieta',
    apellido: 'Soza',
    edad: 23,
    colorFav: 'Amarillo'
}

function mostrarDatos(persona){ // Recibimos el objeto como parametro
    console.log(`El nombre es: ${persona.nombre} ${persona.apellido}`)
}

mostrarDatos(joel) // Le pasamos el objeto como argumento
// Obteniendo: Joel Dominguez

/* 
    Otra forma de pasar un objeto como argumento es pasar la clave exacta.
*/

/* 
    Necesitaremos tener la clave "NOMBRE", "APELLIDO", "EDAD"
    dentro del objeto que nos pasaran como argumento.
*/
function mostrarDatos2({nombre, apellido, edad}){ 
    console.log(`El nombre es: ${nombre} ${apellido} con ${edad} años`)
}

mostrarDatos2(joel);

/*
    Al pasar un objeto como argumento dentro de una función... este modificara los valores.
    Es decir, podemos alterar los valores de las claves del objeto.
    Por ejmplo la edad de joel era 21 pero usando la función 'cumpleaños' su edad aumentara a 22.
*/

function cumpleaños(persona){
    persona.edad += 1;
}

cumpleaños(joel);
console.log(`Joel tiene ${joel.edad} años`); // Joel tiene 22 años