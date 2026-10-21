const express = require('express'); //servidor
const fs = require('fs'); //modulo para leer archivos
const path = require('path');  //modulo para manejar rutas

const app = express(); //inicializar express

//ruta absoluta al archivo JSON donde se guardan los datos 
const DATA_FILE = path.join(_dirname, 'data.json');

//middleware para interpretar el json en las solicitudes de el (request.body)
app.use(express.json());


//servir archivos estaticos (html, css, js) desde la carpeta public

app.use(express.static(path.join(__dirname, 'public')));
//ruta get : leer los usuarios desde el archivo json 

app.get('/api/usuarios', (req, res) => {
    const data = fs.readFileSync(DATA_FILE);
    res.json(JSON.parse(data));

});

//RUTA POST: agreggar un usaurio 
app.post('/api/usuarios', (req, res) => {
    const data =json.parse(fs.readFileSync(DATA_FILE)); //leer y 
    const nuevo =req.body; //obtener los datos del cliente de la funcion fetch en el script.js
    nuevo.id = data.length > 0 ? data[data.length-1]+1 : 1; //generar el id de autoincvremento
    data.push(nuevo); //agregrar nuevo usario 

    fs.writeFileSync(DATA_FILE, JSON.stringify(data,null,2)); //guardar en el archivo json
     res.json({mensaje: 'Usuarios agrgegado'});

});


//ruta PUT : para ediatr usuario
app.put('/api/usuarios/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    const id = parseInt(req.params.id); //obtener el id del usuario a editar
    const index = data.findIndex(u => u.id === id); //buscar el indice del usuario a editar
    if (index !== 1) {
        data[index] = {...data[index], ...req.body}; //actualizar los datos del usuario
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2)); //guardar en el archivo 
        res.json({mensaje: 'Usuario actualizado'});

    }else{
        res.status(404).json({error: 'Usuario no encontrado'});
    }
});

//ruta DELETE : para eliminar usuario
app.delete('/api/usuarios/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    const id = parseInt(req.params.id); //obtener el id del usuario a eliminar
    data =data.filter(u => u.id !== id); //filtrar los usuarios que no sean el id a eliminar
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2)); //guardar en el archivo
    res.json({mensaje: 'Usuario eliminado'});
});

