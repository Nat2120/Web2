let usuarios = [];

const form = document.getElementById('formUser');
const tabla = document.getElementById('tablaUsuarios');
const inputArchivo = document.getElementById('importarJSON');
const btnDescargar = document.getElementById('descargar');

function generarID(){
//. condiciion ? verdadero : falso;
return usuarios.length > 0 ? Math.max(...usuarios.map(u=>u.id))+1 : 1;
}

form.addEventListener('submit',(e)=>{
e.preventDefault();
// Obtener valores del Form
const nombre = document.getElementById('nombre').value;
const correo = document.getElementById('correo').value;

const usuario={
id: generarID(),
nombre: nombre,
correo: correo
};
usuarios.push(usuario);
mostrarUsuarios();
form.reset();
});

function mostrarUsuarios(){
tabla.innerHTML='';
usuarios.forEach((user,index)=>{
const row = document.createElement('tr');
row.innerHTML=`
<td>${user.id}</td>
<td contenteditable onblur="editarCampo(${index},'nombre',this.textContent)" >${user.nombre}</td>
<td contenteditable onblur="editarCampo(${index},'correo',this.textContent)">${user.correo}</td>
<td><button onclick="eliminarUsuario(${index})" >Eliminar</button></td>
`;
tabla.appendChild(row);

});
}

// Funcion para editar Arreglo
function editarCampo(index,campo,valor){
usuarios[index][campo] = valor.trim();
}

function eliminarUsuario(index){
if(confirm("Seguro que quires eliminar el campo ?")){
usuarios.splice(index,1);
mostrarUsuarios();
}
}
btnDescargar.addEventListener('click',function(){
    const blob = new Blob([JSON.stringify(usuarios,null,2)],{type: "aplication/json"});
    // genear URL temporal
    const url = URL.createObjectURL(blob);

    // crear el elemento de ancla invisible para simular la descarga
    const a = document.createElement('a');
    a.href=url;
    a.download='usuarios_actualizados.json';
    a.click();
    // liberar la URL temporal
    URL.revokeObjectURL(url);

});

// evenyo para cargar JSON 
inputArchivo.addEventListener('change',(e)=>{
    //obtener el archivo seleccionado 
    const  archivo = e.target.files[0]; // archivo seleccionado

    //crear un objeto para leer el archivo 
    const lector = new FileReader(); // crear lector para leer el archivo

    // cuando el archivo se ha cargado 
    lector.onload = (e) =>{
        try{
            //parsear el contendio JSON
            const datos = JSON.parse(e.target.result);
            //validar que sea un array 
            if(Array.isArray(datos)){
                usuarios = datos;
                mostrarUsuarios();
            }else{
                alert ("El archivo no contiene un arreglo JSON válido");
            }
        }catch(error){
            alert("Error al leer el archivo JSON" + error.message);
        }
    };
    // leer el archivo 
    lector.readAsText(archivo); 
});