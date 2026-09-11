//nombres

let nombres = [];
// funcion para agregar nombres 

function agregarNombre() {
    let nombre = prompt("Ingresa un nombre");
    if (nombre) { 
        nombres.push(nombre);
        alert(`Nombre ${nombre} se agrego de manera correcta`);
    }
    else {
        alert("El nombre no puede estar vacio");
    }
}

function mostrarNombres() {
    if (nombres.length === 0) {
    alert("No tenemos nombres cargados")
    }
    else {
        let mensaje ="Nombres almacenados\n";
        nombres.forEach((nombre,index)=> {
            mensaje+= `${index+1}.-${nombre}\n`
        });
        alert(mensaje);
    }
}

function mostrarMenu(){
        let opcion;
        do{
            opcion =prompt`
            Opciones disponibles
            1.Agregar nombre
            2. Mostrar nombres 
            3. Salir
            Elige una opcion 
            `;
            switch(opcion){
                case '1':
                    agregarNombre();
                    break;
                case '2':
                    mostrarNombres();
                    break;
                case'3':
                alert("Saliendo del programa");
                break;
                default:
                    alert("Opcion invalida");
            }
        }while(opcion!=3);

}
mostrarMenu();

// tareas 
let tareas = [];

// funcion para menu 
function mostarrMenu() {
   let opcion = parseInt(prompt(`
        Opciones Disponibles
        1.Agregar tarea
        2. Ver todas las tareas s
        3.Marcar tarea como completada
        4.Salir 
        Elige una opcion: 
        `))
        return opcion;
}
function agregarTarea() {
    let nombreTarea = prompt("Ingresa nombre de tarea"); 
    if (nombreTarea) {
        //creamos un nuevo objeto 
        let tarea = {
            nombre: nombreTarea,
            completada: false
        };
        tareas.push(tarea);
    }
    else {
        alert("El nombre de la tarea no puede estar vacio");

    }
}

function verTareas() {
    if(tareas.length === 0){
        alert("No tenemos tareas")

    }
    else{
        let mensaje ="Lista de tareas: \n";
        tareas.forEach((tarea,index)=>{
            mensaje += `${index+1} .-${tarea.nombre}[${tarea.completada ?"Completada":"Pendiente"}]\n`
        });
        alert(mensaje);
    }
}
function marcarTareaCompletada (){
    let numero = parseInt(prompt("Que tarea quieres marcar como completada?"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero-1].completada =true;
        alert (`La tarea ${tareas[numero-1].nombre} se marco como completada `)
    }
    else{
        alert ("Numero de tarea invalido");
    }
}
function iniciarPrograma(){
    let continuar = true; 
    while(continuar){
        let option = mostarrMenu();
        switch(option){
            case 1: 
                agregarTarea();
                break; 
            case 2 :
                verTareas();
                break;
            case 3 : 
                marcarTareaCompletada();
                break;
            case 4 : 
            continuar = false;
            break;
            default: 
            alert ("Opcion invalida");
            break; 

        }
    }
}
iniciarPrograma();