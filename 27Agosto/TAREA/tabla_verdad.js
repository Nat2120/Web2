// DEMOSTRAR CON CODIGO LA TABLA DE VERDAD DEL OR Y DEL AND 

// OR 

var a = 0;
var b = 0;

resultado = a || b;
console.log("a'+ b' = " + resultado);

var a = 1;
var b = 0;

resultado = a || b;
console.log("a + b' = " + resultado);

var a = 0;
var b = 1;

resultado = a || b;
console.log("a' + b = " + resultado);

var a = 1;
var b = 1;

resultado = a || b;
console.log("a + b = " + resultado);

// AND 

var a = 0;
var b = 0;

resultado = a && b;
console.log("a' * b' = " + resultado);

var a = 1;
var b = 0;

resultado = a && b;
console.log("a * b' = " + resultado);

var a = 0;
var b = 1;

resultado = a && b;
console.log("a' * b = " + resultado);

var a = 1;
var b = 1;

resultado = a && b;
console.log("a * b = " + resultado);
