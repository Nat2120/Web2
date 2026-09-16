const estudiante = { 
    nombre: 'Natalia', 
    primerApellido: 'Reyes', 
    segundoApellido: 'Sanchez', 
    RFC: 'RGGE677HFRT', 
    numeroCuenta: '275766453', 

    caractericaCarrera: ["1279", "9", "SS", "Idioma", "100%Creditos", "horas"], 
    
    direccion: { 
        calle: "Av Fresnos", 
        mz: 56, 
        lt: 290, 
        colonia: "Tolantongo", 
        alcaldia: "Iztapalapa", 
        CP: 9876,
        
        colindantes: {
            norte: "Tlapaleria",
            sur: "Mercado Iztlacihuac",
            este: "Panaderia la milagritos", 
            oeste: "Consultorio medico"
        }
    },

    universidadAcciones: function () {
        console.log("Ir a clase");
    },

    universidadAciones2() {
        console.log("Tomar cafe");
    },

    irClase(nombreDeClase) {
        return `Tomando clase de ${nombreDeClase}`;
    },

    irLaboratorio(nombreLaboratorio) {
        return `${this.nombre} va a el laboratorio de ${nombreLaboratorio}`;
    }
}

console.log(estudiante); 
console.log(estudiante.RFC); 
console.log(estudiante.caractericaCarrera[2]); 
console.log(estudiante['RFC']); 
console.log(estudiante['caractericaCarrera'][3]); 
console.log(estudiante.direccion.alcaldia); 
console.log(estudiante.hasOwnProperty('RFC')); 
console.log(estudiante.hasOwnProperty('CURP'));

estudiante.universidadAcciones(); 
estudiante.universidadAciones2(); 

var accion = estudiante.irClase("Programacion Web 2"); 
console.log(accion); 

var accion = estudiante.irLaboratorio("Micros"); 
console.log(accion);

