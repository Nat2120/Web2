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
    let nombreTarea = prompt("Ingresa nombre de tarea"); // let vive en su casita , var vive en el universo (global)
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