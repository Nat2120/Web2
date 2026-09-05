let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;

var vidas = 5; 

while(vidas >= 1){
    var numusuario = parseInt(prompt("Adivina el numero del 1 - 10"));

    if(numusuario == numeroMaquina){
        console.log("GANASTE");
        break;
    }
    else {
        console.log("Nop, prueba otra vez ");
        vidas--;
        console.log("Te quedan " + vidas + " vidas");
    }
}

if(vidas == 0){
    console.log("PERDISTE");
    console.log("El número era " + numeroMaquina);
}