//solo enviar un archivo con las tareas , el js a partir de la cuarta tarea 

let nombres = [];
// funcion para agregar nombres 

function agregarNombre() {
    let nombre = prompt("Ingresa un nombre");
    if (nombre) { // si tiene algo lo marca como verdadero
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