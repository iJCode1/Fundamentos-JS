/*
    Arrow Functions en JavaScript
*/

var joel = {
    nombre: 'Joel',
    apellido: 'Dominguez',
    edad: 21,
    colorFav: 'Morado'
}

var julieta = {
    nombre: 'Julieta',
    apellido: 'Gil',
    edad: 16,
    colorFav: 'Amarillo'
}

const MATORIA_DE_EDAD = 18

/*
    Utilizando un Arrow Function para determinar si es mayor de edad.
    Recibimos una edad y a partit de esta retornamos si es true or false la condición.
    
    ø En un arrow function si solo tenemos un argumento (edad) se pueden quitar los parentesis.
    ø Ademas podemos quitar las llaves y el return si dentro en el cuerpo de la arrow functión es todo
    lo que se realiza
*/

const mayorDeEdad = ({edad}) => edad >= MATORIA_DE_EDAD



/*
    Utilizando Arrow Function:
    ({edad}): Lo que hace es desestructurar un objeto que se le pasara como argumento.
    Lo que hara es encontrar la clave edad y obtener su valor. 'Persona.edad'.
*/
const imprimirMayoriaDeEdad = (persona) => {
    if(mayorDeEdad(persona)){
        console.log(`${persona.nombre} es Mayor de edad`)
    }else{
        console.log(`${persona.nombre} es Menor de edad`)
    }
}

const permitirAccesso = ({edad}) => 
        !mayorDeEdad({edad}) ? console.log('Acceso Denegado') : console.log('Acceso Valido')



