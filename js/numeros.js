/*
    Trabajando con Numeros en JavaScript
*/

var n1 = 700.45
var n2 = 200.10

var suma = n1 + n2 // = 900.5500000000001

var sumaReal = ((n1 + n2 ) * 100) / 100 // = 900.55

var resta = n1 - n2
var mult = n1 * n2
var div = n1 / n2 // = 3.5004997501249377

var divReal = (n1/n2).toFixed(2); // = 3.50

// Redondear un numero 

var redondearN1 = Math.round(n1); // = 700