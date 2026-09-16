const estudiante ={
    nombre: 'Natalia',
    primerApellido: 'Reyes',
    segundoApellido:'Sanchez',
    RFC: 'RGGE677HFRT',
    numeroCuenta:'275766453',

    caractericaCarrera:["1279","9","SS","Idioma","100%Creditos","horas"],
    direccion:{
        calle: "gloria",
        mz:56,
        lt:290,
        colonia:"Tolantongo",
        alcaldia:"Miguel Hidalgo",
        CP: 8763
    }
}

console.log(estudiante);
console.log(estudiante.RFC)
console.log(estudiante.caractericaCarrera[2])
console.log(estudiante['RFC']);
console.log(estudiante['caractericaCarrera'][3]);
console.log(estudiante.direccion.alcaldia);
console.log(estudiante.hasOwnProperty('RFC'));
console.log(estudiante.hasOwnProperty('CURP'));