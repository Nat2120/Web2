var dia = parseInt( prompt(`
    Elige un día de la semana 
    1. LUNES
    2. MARTES
    3. MIERCOLES
    4. JUEVES
    5. VIERNES
    6. SABADO
    7. DOMINGO
    `));

    switch (dia){
        case 1: 
            console.log("ir a la escuela");
            break;
        case 2: 
            console.log("ir a la biblioteca");
            break;    
        case 3: 
            console.log("ir por un cafe");
            break;
        case 4: 
            console.log("ir a comer");
            break; 
        case 5: 
            console.log("ir a caminar");
            break;
        case 6: 
            console.log("ir a trabajar");
            break;    
        case 7: 
            console.log("ir al centro");
            break;
        default:
            console.log("aburrido :(");
            break;
    }