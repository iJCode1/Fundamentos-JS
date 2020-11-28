/*
    Comparaciones en JavaScript

    == : Compara solo el valor
    === : Compara el valor y el tipo.
*/

var n1 = 7 //  Tipo : Number , Valor : 7
var n2 = "7" //  Tipo : String, Valor : 7

console.log(`${n1} == ${n2}`, n1 == n2) // True;
console.log(`${n1} === ${n2}`, n1 === n2) // False

var joel = {
    nombre: 'Joel',
    edad: 21,
    nacionalidad: 'mx'
}

var julieta = {
    nombre: 'Julieta',
    edad: 22,
    nacionalidad: 'sp'
}

console.log(joel == julieta) // False
console.log(joel === julieta) // False
/*
    Aunque los 2 son objetos ambas comparaciones daran false debido a que 
    hacen referencia a registros en memoria disitintos.
    Para que sean iguales el objeto 2 deberia hacer match con el espacio en memoria
    asignado a el objeto 1 o viceversa.
    Por ejemplo:
*/

var julieta = joel

/*
    Ambos daran True ya que los 2 objetos hacen referencia al mismo registro en
    la memoria.
*/

console.log(joel == julieta) // True
console.log(joel === julieta) // True