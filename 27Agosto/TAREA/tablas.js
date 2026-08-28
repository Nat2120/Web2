var numero = parseInt (prompt("Escribe un numero para hacer tu tabla de multiplicar"));
var control = 1;
while(control <= 10){
    console.log(numero + " * "+ control + " = " + (control*numero));
    control++;
}