//referencia del formulario y salida JSON y boton de descarga 

const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');
const descargarBtn = document.getElementById('descargarBtn');

//iniciar el arreglo de usaurios desde el localstorage o crear uno nuevo si no existe 
// json parse convierte la cadana JSON rn un objeto JavaScript
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; //es recursivo este elemnto 

mostrarUsuarios(); 

// Evento al enviar el formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // obtener los datos del formulario
    const nombre = document.getElementById('name').value; 
    const correo = document.getElementById('email').value; 

    // crear un objeto usuario
    const usuario = {
        nombre: nombre,
        correo: correo
    };

    // agregar el usuario a la lista
    usuarios.push(usuario);

    // guardar la lista de usuarios en el localstorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); //stringfy les da formato para que se vaya guardando

    // mostrar los usuarios en formato JSON
    mostrarUsuarios();

    // Limpiar el formulario
    form.reset();

});

//funcuon para mostrar usuarios en formato JSON en etiqueta pre
function mostrarUsuarios() {
    salida.textContent = JSON.stringify(usuarios, null, 2); //null,2 es para que se vea bonito el formato de salida
}

//evento de click para descargar el archivo JSON
descargarBtn.addEventListener('click', function() {
    const contenidoJSON = JSON.stringify(usuarios, null, 2); //ya esta convetido a JSON
    //crear un objeto Blob con el contenido JSON 
    //blob es un contenedor de datos binarios , almacena informacion 
    const blob = new Blob([contenidoJSON], { type: 'application/json' });

    //creamos un enlcae (url) temporal para descargar el archivo
    const url = URL.createObjectURL(blob); //es a partitr del aplication/json que se va a descargar

    //generamos un ancla
    const a = document.createElement('a');
    a.href = url;
    a.download = 'usuarios.json'; //nombre por default
    //ejecutar de manera forzosa
    a.click();//simular un click en el enlace para iniciar la descarga

    //buena practica : liberar el objeto URL creado para evitar fugas de memoria
    URL.revokeObjectURL(url);

});
