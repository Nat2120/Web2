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
        CP: 8763,
        
        
    },
    universidadAcciones: function(){
            console.log("Ir a clase");
        }
}

estudiante.universidadAcciones();
