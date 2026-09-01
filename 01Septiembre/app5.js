//funciones 
//conjunto de instrucciones que realiza una tarea, debe tener una enyrada y tener una salida 
saludar();  //las mandas a llamar donde se te antoje de todas maneras al hacer la compilacion va a acomodarlo como guste 
function saludar (){ //function es con parametros 
    console.log("Hola mundo")
}
//funcion con argumento
function despedirse(nombre){
    console.log ("Adios "+ nombre);
}

let nombre = prompt("Ingresa tu nombre ");
despedirse(nombre);

//funciones con retorno , return 

function sumar (a,b){
    return a+b;
}

sumar(4,5);

